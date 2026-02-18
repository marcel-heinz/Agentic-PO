---
name: issue-tracking
description: Create, list, update, and manage Linear issues and projects via the GraphQL API. Use when the user wants to create issues, check project status, update tickets, or manage their Linear board — even when MCP is not connected.
argument-hint: [action: create|list|update|close] [details]
---

# Linear Issue Tracking (without MCP)

When the Linear MCP server is not connected, interact with Linear directly via its GraphQL API.

## Connection Details

- **API endpoint:** `https://api.linear.app/graphql`
- **Auth:** Read the API key from `~/.claude/mcp.json` under `mcpServers.linear.env.LINEAR_API_KEY`
- **Method:** POST with `Content-Type: application/json` and `Authorization: <key>` header

## Setup

Before any operation, read the API key:

```bash
API_KEY=$(python3 -c "import json; print(json.load(open('$HOME/.claude/mcp.json'))['mcpServers']['linear']['env']['LINEAR_API_KEY'])")
```

Then fetch the team ID (cache this for the session):

```graphql
{ teams { nodes { id name } } }
```

**Known team:** `mrclhnz-ventures` — ID: `fee97675-6303-423f-ba78-07fe0c5c0ef8`

## Supported Operations

### 1. List Issues

```graphql
{
  issues(filter: { team: { id: { eq: "TEAM_ID" } } }, first: 25, orderBy: updatedAt) {
    nodes { id identifier title state { name } priority assignee { name } project { name } }
  }
}
```

To filter by project:
```graphql
{
  issues(filter: { project: { id: { eq: "PROJECT_ID" } } }, first: 25) {
    nodes { id identifier title state { name } priority }
  }
}
```

### 2. Create an Issue

```graphql
mutation {
  issueCreate(input: {
    title: "Issue title"
    description: "Markdown description with acceptance criteria"
    teamId: "TEAM_ID"
    projectId: "PROJECT_ID"  # optional
    priority: 2               # 0=none, 1=urgent, 2=high, 3=medium, 4=low
  }) {
    success
    issue { id identifier title }
  }
}
```

### 3. Update an Issue

```graphql
mutation {
  issueUpdate(id: "ISSUE_ID", input: {
    title: "Updated title"          # optional
    description: "Updated desc"     # optional
    priority: 1                     # optional
    stateId: "STATE_ID"             # optional — use workflow states query below
  }) {
    success
    issue { id identifier title state { name } }
  }
}
```

### 4. Close / Change State

First, fetch available workflow states:
```graphql
{
  workflowStates(filter: { team: { id: { eq: "TEAM_ID" } } }) {
    nodes { id name type }
  }
}
```

Then update the issue's `stateId` to the desired state (e.g., "Done", "Cancelled").

### 5. Create a Project

```graphql
mutation {
  projectCreate(input: {
    name: "Project name"
    description: "Project description"
    teamIds: ["TEAM_ID"]
  }) {
    success
    project { id name }
  }
}
```

### 6. List Projects

```graphql
{
  projects(first: 20, orderBy: updatedAt) {
    nodes { id name state startDate targetDate }
  }
}
```

## How to Execute

Use `curl` via Bash:

```bash
curl -s -X POST "https://api.linear.app/graphql" \
  -H "Content-Type: application/json" \
  -H "Authorization: $API_KEY" \
  -d '{"query":"YOUR_GRAPHQL_QUERY"}' | python3 -m json.tool
```

**Important:** Escape double quotes inside the JSON query string with `\"`. For multiline descriptions use `\\n`.

## Rules

- Always read the API key from `~/.claude/mcp.json` — never hardcode it in output or commits
- Present results as clean markdown tables when listing issues
- When creating issues, include a description with acceptance criteria
- Use priority values consistently: 1=urgent, 2=high, 3=medium, 4=low
- After creating/updating, confirm the action by showing the issue identifier (e.g., MHV-85)
- If an API call fails, show the error and suggest checking the API key or network
- When the user says "create an issue" without specifying a project, ask which project (or list available ones)
