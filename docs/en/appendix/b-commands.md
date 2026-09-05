---
title: Appendix B · Command Cheatsheet
description: Install / launch / plugin / config / slash commands
---

# Appendix B · Command Cheatsheet

<div class="chapter-meta">
  <span class="cm-item"><span class="cm-k">Word count</span><span class="cm-v">~540 words</span></span>
  <span class="cm-item"><span class="cm-k">Time</span><span class="cm-v">~8 min</span></span>
  <span class="cm-item"><span class="cm-k">Level</span><span class="cm-v hl">Reference</span></span>
</div>

Commands you use daily with dsh, grouped by scenario. For depth, flip to the corresponding chapter.

## Install & Update

```bash
# Global install dsh (recommended for beginners)
npm install -g @deepseek-ai/dsh

# Check version
dsh --version

# Update to the latest version
npm install -g @deepseek-ai/dsh@latest

# Run without installing (always use the latest package)
npx @deepseek-ai/dsh web
```

> `npx` pulls the latest package every time, global install doesn't auto-update. To pin a version use global install, to always have the latest use npx.

## Launch

```bash
# Launch the Web UI (most common, default port 3080)
dsh web

# Specify port to launch
dsh web --port 8080

# Launch headless, run a task and exit
dsh --profile headless "Run the current directory's tests and summarize the failures"

# Launch a specified profile
dsh --profile <profile-name>

# Launch with extra config (patch method)
dsh web --patch ./my-plugin/cordis.yml
```

## Plugin Management

```bash
# List plugins installed in the web profile
dsh plugin --profile web list

# Install a plugin (npm package)
dsh plugin --profile web add <package-name>

# Install a plugin (GitHub source)
dsh plugin --profile web add github:<username>/<repo-name>

# Install a plugin (local path)
dsh plugin --profile web add ./my-plugin

# Install a plugin (tgz package)
dsh plugin --profile web add https://example.com/plugin.tgz

# Remove a plugin
dsh plugin --profile web remove <package-name>
```

> After installing a plugin, you need to restart the corresponding profile to take effect (bundle changes don't hot-reload).

## Config & Debug

```bash
# Print the full config tree of the web profile (for "where does this behavior come from")
dsh --profile web --dump-config

# Print the config tree of the headless profile
dsh --profile headless --dump-config

# Launch with a patch and view config
dsh web --patch ./my-config.yml --dump-config
```

> `--dump-config` output is plain text, you can throw it to the AI during troubleshooting and have it scan the config tree for issues.

## Environment Variables

```bash
# dsh config root directory (default ~/.dsh)
$DSH_HOME

# API Key (highest priority, overrides .credentials.yaml)
$DEEPSEEK_API_KEY

# Local model API Key (LM Studio etc., set any value)
$LM_STUDIO_API_KEY
```

## Web UI Slash Commands

Type `/` in the input box to open a pop-up list of currently available commands.

| Command | Effect |
|---|---|
| `/compact` | Manually compress the current dialogue context, summarize early history into a digest |
| `/permission` | View or switch the current session's permission mode (read-only / workspace-write / danger-full-access), with no argument pops a selection box |
| `/model` | Switch model, grouped by provider, applies the selected model's default reasoning effort |
| `/goal` | Goal management: create / view / edit / pause / resume / clear long-term goals (e.g. `/goal pause`, `/goal clear`) |

> Different versions, with different plugins installed, the command list may differ. Type `/` to see what's available.

## Common Combos

```bash
# First day as a beginner: install and run
npm install -g @deepseek-ai/dsh
dsh web

# Troubleshooting four-pack: check version → check config → check plugins → restart
dsh --version
dsh --profile web --dump-config
dsh plugin --profile web list
dsh web

# headless run a one-shot task
dsh --profile headless "Summarize this repo's architecture, write it as markdown"
```
