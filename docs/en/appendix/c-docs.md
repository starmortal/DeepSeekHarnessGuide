---
title: Appendix C · Official Docs Index
description: Architecture / subsystems / cookbook / CLI reference / per-package READMEs
---

# Appendix C · Official Docs Index

<div class="chapter-meta">
  <span class="cm-item"><span class="cm-k">Word count</span><span class="cm-v">~1,710 words</span></span>
  <span class="cm-item"><span class="cm-k">Time</span><span class="cm-v">~5 min</span></span>
  <span class="cm-item"><span class="cm-k">Level</span><span class="cm-v hl">Reference</span></span>
</div>

The dsh official repo's documentation is all in the [GitHub repo](https://github.com/deepseek-ai/deepseek-harness)'s `docs/` directory and each package's README. Categorized by use, jump directly when you need to dive into a topic.

## Core Docs

| Doc | Content | When to read |
|---|---|---|
| [README](https://github.com/deepseek-ai/deepseek-harness) | Project overview, design philosophy, quick start, four runtime modes | First encounter, want to quickly understand the whole picture |
| [architecture.md](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/architecture.md) | Overall architecture design: Cordis plugin framework, plugin tree, Profile, Bundle, layered config loading order | Want to understand exactly how "everything is a plugin" is implemented |
| [Root AGENTS.md](https://github.com/deepseek-ai/deepseek-harness/blob/master/AGENTS.md) | Repo structure, per-package directory organization, dev environment setup | Want to read source or submit a PR to the official repo |
| [docs/AGENTS.md](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/AGENTS.md) | Doc dev manual: specifies what each kind of doc should and shouldn't contain, doc layering standard | Want to submit a PR to the official docs, or learn the doc organization conventions |

## Subsystem Docs (subsystems/)

The official team wrote a separate doc for each core subsystem, 40+ in total. Each explains: what this subsystem is, what data structures it flows, what ctx services and events it provides. All in the [docs/subsystems/](https://github.com/deepseek-ai/deepseek-harness/tree/master/docs/subsystems) directory.

| Subsystem | What it covers |
|---|---|
| **session** | Session management: create, resume, fork, persistence, event stream |
| **agent-loop** | Agent loop: think → call tool → see result iteration mechanism |
| **tools** | Tool registration, Schema, execution pipeline, approval, sandbox |
| **llm** | Model adaptation, Provider, request/response, cache |
| **skills** | Skill discovery, loading, invocation mechanism |
| **subagent** | Subagent scheduling, two modes (spawn / fork), result aggregation |
| **workflow** | Workflow orchestration, multi-step chains |
| **sandbox** | File sandbox, three permission levels, approval flow |
| **trajectory** | Trajectory recording, replay, export |
| **credentials** | Credential management, write-only storage, redaction |
| **mcp** | MCP client, server integration, tool bridging |
| **compaction** | Context compression, trigger timing, summary generation |

> Subsystem docs are in alphabetical order; when you need to dive into a mechanism, find the corresponding file directly.

## Cookbook

The official step-by-step hands-on tutorials are in the [docs/cookbook/](https://github.com/deepseek-ai/deepseek-harness/tree/master/docs/cookbook) directory.

| Tutorial | What it teaches |
|---|---|
| **Add a package** | How to add a new npm dependency to dsh |
| **Add a tool** | How to write a custom tool and register it with the Agent |
| **Add an LLM adapter** | How to connect a new model provider |
| **Extend plugin forms** | How to write client plugins, UI plugins, bundles |
| **Custom Profile** | How to create a brand new profile combination |

> Cookbook is "follow along and it runs" tutorials, more hands-on than the subsystem docs.

## CLI Reference

[apps/cli/reference/README.md](https://github.com/deepseek-ai/deepseek-harness/blob/master/apps/cli/reference/README.md) — the complete behavior reference for the dsh command line, including argument parsing, profile launch flow, exact behavior of each subcommand. Look this up when writing scripts or troubleshooting.

## Per-package READMEs

The repo is a monorepo, with 49 groups under `packages/`, each with its own README. Commonly used ones:

| Package | Role |
|---|---|
| `@deepseek-ai/dsh` | Main entry, CLI binary |
| `@deepseek-ai/cordis` | Underlying plugin framework |
| `@deepseek-ai/dsh-web-app` | Web UI front-end |
| `@deepseek-ai/dsh-headless` | Headless runtime |
| `@deepseek-ai/dsh-mcp-client` | MCP client plugin |
| `@deepseek-ai/dsh-tool-skill` | Skill tool plugin |

## How to use this index

1. **Want to understand a concept** → read README and architecture.md first
2. **Want to understand a mechanism** → find the corresponding subsystem under subsystems/
3. **Want to make something by following along** → find the corresponding tutorial under cookbook/
4. **Unsure about command behavior** → check CLI reference
5. **Want to see a specific package's implementation** → find the corresponding package's README under packages/
