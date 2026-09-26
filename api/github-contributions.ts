import { GITHUB_USERNAME } from "../src/data/content.ts";

interface ContributionEnv {
  GITHUB_CONTRIBUTIONS_TOKEN?: string;
}

declare const process: { env: ContributionEnv };

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

// No from/to: GitHub defaults to the past year ending now, the same window
// as the public profile calendar (and never trips its one-year range limit).
const GRAPHQL_QUERY = `
  query ContributionCalendar($login: String!) {
    user(login: $login) {
      contributionsCollection {
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

const UPSTREAM_TIMEOUT_MS = 5000;

/** Upstream failure. Logs a short reason (never the token) and hides detail from the client. */
function errorResponse(response: FunctionResponse, statusCode: number, reason: string) {
  if (statusCode >= 500) console.error(`github-contributions: ${reason}`);
  response.setHeader("Cache-Control", "no-store");
  response.status(statusCode).json({ error: "Contribution data is unavailable." });
}

/**
 * A deliberate "no widget" answer, not a failure: the client hides the
 * section. Cached at the edge so each page view doesn't re-run the function.
 */
function unavailableResponse(response: FunctionResponse) {
  response.setHeader("Cache-Control", "public, max-age=0, s-maxage=3600");
  response.status(200).json({ available: false });
}

/**
 * `env` defaults to the deployment environment; the Vite dev server passes the
 * values it loaded from `.env*` files, which it never copies into process.env.
 */
export default async function handler(
  request: FunctionRequest,
  response: FunctionResponse,
  env: ContributionEnv = process.env,
) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    errorResponse(response, 405, "method not allowed");
    return;
  }

  const token = env.GITHUB_CONTRIBUTIONS_TOKEN;
  if (!token) {
    unavailableResponse(response);
    return;
  }

  try {
    const upstream = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/vnd.github+json",
      },
      body: JSON.stringify({ query: GRAPHQL_QUERY, variables: { login: GITHUB_USERNAME } }),
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
    });
    if (!upstream.ok) {
      errorResponse(response, 502, `upstream HTTP ${upstream.status}`);
      return;
    }

    const payload = (await upstream.json()) as GitHubGraphQLResponse;
    const collection = payload.data?.user?.contributionsCollection;
    if (payload.errors?.length || !collection) {
      errorResponse(response, 502, `GraphQL returned ${payload.errors?.length ?? 0} error(s) or no user`);
      return;
    }

    // Public-only widget: when the profile also counts private activity, the
    // calendar would mix it in, so show nothing rather than overstate it.
    if (collection.restrictedContributionsCount > 0) {
      console.warn("github-contributions: profile includes private contributions; widget hidden");
      unavailableResponse(response);
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
  } catch (error) {
    errorResponse(response, 502, `request failed (${error instanceof Error ? error.name : "unknown"})`);
  }
}
