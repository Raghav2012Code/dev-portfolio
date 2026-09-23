# Issue tracker: GitHub

Issues and specs for this repo live in the upstream GitHub repository
`Raghav2012Code/dev-portfolio`. Use the `gh` CLI and pass
`--repo Raghav2012Code/dev-portfolio` so commands target upstream, not the fork.

## Conventions

- Create: `gh issue create --repo Raghav2012Code/dev-portfolio --title "..." --body "..."`
- Read: `gh issue view <number> --repo Raghav2012Code/dev-portfolio --comments`
- List: `gh issue list --repo Raghav2012Code/dev-portfolio --state open`
- Comment: `gh issue comment <number> --repo Raghav2012Code/dev-portfolio --body "..."`
- Apply or remove labels with `gh issue edit <number> --repo Raghav2012Code/dev-portfolio --add-label "..."` or `--remove-label "..."`
- Close: `gh issue close <number> --repo Raghav2012Code/dev-portfolio --comment "..."`

When a skill says to publish to the issue tracker, create an issue in the upstream
repository. When it says to fetch a ticket, read it with `gh issue view`.

## Pull requests as a triage surface

**PRs as a request surface: no.** External PRs are not included in the triage
queue by default.

GitHub shares one number space across issues and PRs. Resolve ambiguous references
with `gh pr view <number> --repo Raghav2012Code/dev-portfolio`, then fall back to
`gh issue view <number> --repo Raghav2012Code/dev-portfolio`.