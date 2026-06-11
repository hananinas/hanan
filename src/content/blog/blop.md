---
author: Abdul Hanan
pubDatetime: 2026-05-21T10:00:00Z
title: "Blop — Intent-Based Agentic Browser Testing"
postSlug: blop-intent-based-agentic-browser-testing
featured: true
tags:
- TypeScript
- Playwright
- AI Agents
- Testing
description: Blop lets you write end-to-end browser tests in plain language. You describe what to verify, and an AI agent drives a real browser through controlled Playwright-backed tools to figure out how.
---

End-to-end browser tests are famously brittle: a designer renames a button, a `data-testid` changes, and half the suite goes red even though the product still works. **Blop** is my answer to that — an intent-based agentic browser testing framework.

## Write what to verify, not how

With Blop you describe the *intent* of a test in plain language, and an AI agent drives a real browser through controlled Playwright-backed tools to figure out the *how*:

```ts
import { agentTest, describe } from "blop";

describe("onboarding", () => {
  agentTest("user can create a project", async ({ agent }) => {
    await agent.goto("/");
    await agent.goal(`
      Sign in as the test user.
      Create a project called "Checkout QA".
      Verify the project appears in the dashboard.
    `);
  });
});
```

Because the test expresses the goal instead of a sequence of selectors, it survives the kind of UI churn that kills traditional scripts. The agent operates a real browser, but only through a controlled set of tools — it's not free-roaming.

## How it's built

Blop lives in a pnpm + turbo monorepo. The flagship is the `blop` package itself: the testing framework with its DSL, CLI, browser tools, and reporters, published on npm. Around it sit a Next.js web app, a Hono-based platform API, and a public docs site built with Nextra — the foundation for the future Blop Platform with run history, triage, and synthetic checks.

Getting started is three commands:

```bash
bun add blop          # or pnpm / npm
bunx blop init        # scaffolds tests/homepage.blop.ts
bunx blop test --base-url http://localhost:3000
```

You bring your own model credentials (for example `BLOP_AGENT_PROVIDER=openai`), and the framework handles the agent loop, the browser session, and the reporting.

## What I've learned

Building Blop has been a crash course in designing tools *for* AI agents rather than for humans: every browser capability has to be safe, observable, and deterministic enough that a test run means something. It sits right at the intersection of two things I love — developer tooling and agentic systems — and it's already changing how I test my own projects.
