---
author: Abdul Hanan
pubDatetime: 2026-06-01T10:00:00Z
title: "Khadim — Building an Open-Source, Local-First AI Coding Agent"
postSlug: khadim-local-first-ai-coding-agent
featured: true
tags:
- Rust
- TypeScript
- AI Agents
- CLI
description: Khadim is an open-source, local-first agentic automation platform, starting with a CLI coding agent that reads your codebase, writes and executes code, and retries until things work — all on your own machine.
---

Khadim is one of the projects I'm most excited about right now. It's an **open-source, local-first agentic automation platform**, and the first working piece of it is a CLI coding agent that runs entirely in your terminal.

## What does it do?

You open a terminal in your project, type `khadim`, and start talking to it like a teammate: *"summarize this repo"*, *"fix the failing tests"*, *"add unit tests for the auth service"*. The agent reads your codebase, writes and executes code, understands what broke, rewrites, and retries — all locally on your machine.

```bash
# Install globally via npm
npm install -g @unravelai/khadim

# Start an interactive session in the current project
khadim
```

Inside the interactive TUI you can type `/` to browse built-in commands like `/help`, `/provider`, `/model`, `/sessions`, and `/theme`.

## Bring your own model

A core idea behind Khadim is that you shouldn't be locked into a single AI vendor. It supports a long list of providers — OpenAI, Anthropic, GitHub Copilot, xAI Grok, Groq, Mistral, Cerebras, HuggingFace, OpenRouter, Google Gemini and Vertex AI — and auto-detects API keys from your environment variables. Several of the providers even have free tiers, so you can try the agent without spending anything.

## Why local-first?

Most agentic tools today live in someone else's cloud. Khadim flips that: your code stays on your machine, the agent loop runs on your machine, and you decide which model provider (if any) gets to see your context. I've also been experimenting with microVM-based sandboxing so the agent can execute code in stronger isolation.

## Where it's going

The CLI is the proof of the core agent loop, the tool system, and the multi-provider integration. The bigger vision is a full agentic automation platform: a desktop app built with Tauri, a web control plane, and a domain-agnostic agent engine that can automate more than just coding.

Khadim is AGPL-3.0 licensed and PRs are welcome — building it has taught me an enormous amount about agent loops, terminal UIs, and shipping Rust and TypeScript side by side in one codebase.
