import { GITHUB_USERNAME } from "../src/data/content.ts";

declare const process: {
  env: {
    GITHUB_CONTRIBUTIONS_TOKEN?: string;
  };
};

type ContributionLevel = "NONE" | "FIRST_QUARTILE" | "SECOND_QUARTILE" | "THIRD_QUARTILE" | "FOURTH_QUARTILE";

interface GitHubContributionDay {
  date: string;
  contributionCount: number;
  contributionLevel: ContributionLevel;
}

interface GitHubContributionWeek {
  contributionDays: GitHubContributionDay[];
}

interface GitHubGraphQLResponse {
  data?: {
    user?: {
      contributionsCollection?: {
        restrictedContributionsCount: number;
        contributionCalendar: {
          totalContributions: number;
          weeks: GitHubContributionWeek[];
        };
      };
    } | null;
  };
  errors?: unknown[];
}

interface FunctionRequest {
  method?: string;
}

interface FunctionResponse {
  setHeader(name: string, value: string): void;
  status(code: number): FunctionResponse;
  json(body: unknown): void;
}

const GRAPHQL_QUERY = `
  query ContributionCalendar($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
        restrictedContributionsCount
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

const LEVELS: Record<ContributionLevel, 0 | 1 | 2 | 3 | 4> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

function errorResponse(response: FunctionResponse, statusCode: number) {
  response.setHeader("Cache-Control", "no-store");
  response.status(statusCode).json({ error: "Contribution data is unavailable." });
}

function unavailableResponse(response: FunctionResponse) {
  response.setHeader("Cache-Control", "no-store");
  response.status(200).json({ available: false });
}

export default async function handler(request: FunctionRequest, response: FunctionResponse) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    errorResponse(response, 405);
    return;
  }

  const token = process.env.GITHUB_CONTRIBUTIONS_TOKEN;
  if (!token) {
    unavailableResponse(response);
    return;
  }

  const to = new Date();
  const from = new Date(to);
  from.setUTCFullYear(from.getUTCFullYear() - 1);

  try {
    const upstream = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/vnd.github+json",
      },
      body: JSON.stringify({
        query: GRAPHQL_QUERY,
        variables: { login: GITHUB_USERNAME, from: from.toISOString(), to: to.toISOString() },
      }),
    });
    if (!upstream.ok) {
      errorResponse(response, 502);
      return;
    }

    const payload = (await upstream.json()) as GitHubGraphQLResponse;
    const collection = payload.data?.user?.contributionsCollection;
    if (payload.errors?.length || !collection) {
      errorResponse(response, 502);
      return;
    }

    // Reject data that includes anonymized private activity; this widget is public-only.
    if (collection.restrictedContributionsCount > 0) {
      errorResponse(response, 502);
      return;
    }

    const weeks = collection.contributionCalendar.weeks.map((week) =>
      week.contributionDays.map((day) => ({
        date: day.date,
        count: day.contributionCount,
        level: LEVELS[day.contributionLevel],
      })),
    );

    response.setHeader(
      "Cache-Control",
      "public, max-age=0, s-maxage=43200, stale-while-revalidate=86400",
    );
    response.status(200).json({
      available: true,
      totalContributions: collection.contributionCalendar.totalContributions,
      weeks,
    });
  } catch {
    errorResponse(response, 502);
  }
}
