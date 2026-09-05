---
title: Appendix A · Glossary
description: "Five categories of core terms: architecture / runtime / tools / security / model"
---

# Appendix A · Glossary

<div class="chapter-meta">
  <span class="cm-item"><span class="cm-k">Word count</span><span class="cm-v">~2,570 words</span></span>
  <span class="cm-item"><span class="cm-k">Time</span><span class="cm-v">~10 min</span></span>
  <span class="cm-item"><span class="cm-k">Level</span><span class="cm-v hl">Reference</span></span>
</div>

Terms you encounter reading the blue book or official docs are organized by category here. Each term gets a one-line explanation without elaboration; for depth, flip to the corresponding chapter.

## Architecture

| Term | One-line explanation |
|---|---|
| **Cordis** | The plugin framework at dsh's base layer, providing three primitives: service registration, typed events, and reversible side effects. All of dsh's capabilities run on top of it |
| **Plugin** | dsh's minimum capability unit, a module that exports an `apply(ctx)` function. Loaded at startup, registers tools, listens to events, provides services via ctx |
| **Bundle** | A plugin's distribution format, an npm package, declares what plugins and config it contributes to the runtime. Installing a plugin is essentially installing a bundle |
| **Profile** | A combination recipe for a set of plugins, decides "what this plugin tree looks like". web, headless are both profiles, stored under `$DSH_HOME/profiles/` |
| **Context (ctx)** | The context object a plugin gets when loaded, all-powerful — register tools, call services, listen to events, read/write config, all depends on it |
| **Service** | Reusable capability a plugin provides via ctx, callable by other plugins. E.g. session service, tool registry service |
| **Event** | The way plugins communicate, pub/sub pattern. E.g. before tool execution the `tools/pre-execute` event fires, other plugins can subscribe to intercept |
| **Effect** | A plugin's modification to the runtime (register tools, add config etc.). When the plugin is unloaded, it's rolled back in reverse order, guaranteeing clean restoration |
| **Seam** | The interface contract between plugins, one plugin declares "I need this capability", another provides "I have this capability", the system auto-matches |

## Runtime

| Term | One-line explanation |
|---|---|
| **Agent Loop** | The "think → call tool → see result → think again" iteration loop, until the task completes or termination conditions are met. The essential difference between an Agent and a chatbot is right here |
| **Turn** | From a user sending one message to the Agent giving the final reply, that's one turn. Internally a turn may contain multiple tool calls |
| **Step** | One iteration in the Agent loop, may be a model call or a tool call. A turn = multiple steps |
| **Session** | One complete dialogue context, bound to a workspace, persisted to storage. Close dsh and reopen, can still continue |
| **Trajectory** | The complete execution record of a session — system prompts, model requests, tool calls, subagent scheduling, all recorded on a timeline |
| **Headless** | A run mode that doesn't need an interface, a single command runs a task and exits. Suited for automation, CI/CD, scheduled tasks |
| **Web UI** | The browser interface, interactive dialogue. Started with `dsh web`, default address `http://127.0.0.1:3080` |
| **Fork** | Open a new path at some historical node of a session, the original session is preserved. Suited for "let me try another approach" |
| **Compaction** | Summarize early dialogue into a digest, replace original history, free up context space. Triggered manually with the `/compact` command |

## Tools & Capabilities

| Term | One-line explanation |
|---|---|
| **Tool** | A function the Agent can call, e.g. read file, execute command, search web. Each tool has a Schema (parameter definition) |
| **Tool Schema** | The tool's parameter definition, tells the model what parameters this tool accepts, what types. The model constructs calls according to the Schema |
| **MCP (Model Context Protocol)** | Model Context Protocol, a set of standard interfaces, lets the Agent connect to external tool servers. dsh supports it through the `dsh-mcp-client` plugin |
| **MCP Server** | An external service that provides a set of tools, e.g. Firecrawl (scrape web), GitHub (operate repos). Once dsh connects, the Agent can use these tools |
| **Skill** | A piece of instructions written for the model, tells it "when you encounter this kind of task, follow this set of steps". Stored in workspace or user directory, the model loads on demand |
| **Subagent** | An independent Agent dispatched by the main agent to do subtasks, returns the result when done. Two modes: subagent (no history) and subagent_fork (with history) |
| **Workflow** | Multi-step orchestration, chains multiple tasks in order or branches. Single-step fixed routines use Skill, multi-step chains use Workflow |
| **Provider** | A model API provider, e.g. DeepSeek, OpenAI, Anthropic. dsh connects different providers through Model Adapter |

## Security

| Term | One-line explanation |
|---|---|
| **Sandbox** | An isolation mechanism that limits which files and resources the Agent can access. OS kernel-level, not JS check, the model can't get around it |
| **Permission** | Three levels: read-only (read only), workspace-write (default, can only write the workspace), danger-full-access (no restrictions) |
| **Approval** | When the Agent wants to do something beyond its permissions, a pop-up asks you. Allow once means once, not permanent |
| **Write-only** | The way API Keys are stored — after saving the interface doesn't echo back plaintext, only shows a redacted descriptor. Plaintext is only in the local `.credentials.yaml` |

## Model

| Term | One-line explanation |
|---|---|
| **Model Adapter** | A plugin that unifies different model providers' APIs into dsh's internal standard interface. Switch model = switch adapter, no need to change other code |
| **LLM (Large Language Model)** | The core responsible for thinking and generating text. dsh itself doesn't include a model, only orchestrates |
| **KV Cache** | The model caches already-computed prefixes during inference, subsequent requests with the same prefix reuse directly, no need to recompute. Hit portions are billed at far below normal price |
| **Context Window** | The maximum number of tokens the model can process at once. Anything beyond won't be sent to the model, equivalent to "forgetting" |
| **Token** | The model's basic unit of text processing, Chinese ~1 char = 1.5 tokens, English ~4 chars = 1 token. Both billing and context limits are based on tokens |
