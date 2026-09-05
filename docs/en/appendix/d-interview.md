---
title: Appendix D · Interview Q&A Cheatsheet
description: 8 high-frequency interview questions organized from the blue book
---

# Appendix D · Interview Q&A Cheatsheet

<div class="chapter-meta">
  <span class="cm-item"><span class="cm-k">Word count</span><span class="cm-v">~2,470 words</span></span>
  <span class="cm-item"><span class="cm-k">Time</span><span class="cm-v">~15 min</span></span>
  <span class="cm-item"><span class="cm-k">Level</span><span class="cm-v hl">Self-test after study</span></span>
</div>

After finishing the entire blue book, use these 8 questions to self-test. Each question gives the test point and answer direction, not a standard answer — explaining your own understanding is more important than reciting in an interview.

## Concept Questions

### Q1: Introduce DeepSeek Harness in one minute?

**Test point**: Technical sensitivity, whether you've actually used it rather than just read the news.

**Answer direction**: DeepSeek's official open-sourced Agent runtime framework, MIT license, the core idea is "everything is a plugin" — model adaptation, tool registration, session management, sandbox execution, even the Agent loop itself is pluggable, running on the Cordis plugin system. Unlike "give you a bunch of parts to assemble" libraries like LangChain, dsh is a complete runtime, with main loop, session, sandbox, tool scheduling all built in, developers only need to pick plugins and write config. Currently in developer preview, iterating fast.

### Q2: What does dsh's "everything is a plugin" really mean? How is it different from ordinary modularity?

**Test point**: Depth of architectural understanding, whether you can articulate the essential difference between pluginnization and modularity.

**Answer direction**: It's not as simple as "split the code into modules". dsh's pluginnization has three characteristics: first, no privileged core — even something as fundamental as the Agent Loop is a plugin, theoretically swappable entirely; second, dynamic loading at runtime — which plugins to load is decided by Profile config at startup, not hardcoded at compile time; third, reversible side effects — every plugin's modification to the system can be rolled back in reverse order, the system is clean after uninstall. Underlying is Cordis's three primitives: Service (service registration), Event (typed events), Effect (reversible side effects).

### Q3: What's the relationship between Profile and Bundle?

**Test point**: Whether you can explain dsh's config layering.

**Answer direction**: Bundle is the unit of distribution — an npm package, declares what plugins and config it contributes to the runtime. Profile is the running combination — stored under `$DSH_HOME/profiles/<name>/`, is a set of Bundles, decides "what this plugin tree looks like". web, headless are both Profiles, their difference is just stacking different Bundles. You can think of Bundle as "a dish", Profile as "an ordered table of dishes" — the same dish can appear at different tables, each table's combination is different.

### Q4: What scenarios are dsh's four runtime modes each suited for?

**Test point**: Whether you've actually used different modes, not just run the Web UI.

**Answer direction**: Web mode is interactive dialogue, for daily development, debugging, watching the Agent work; Headless mode is one-shot tasks, run and exit, suited for automation scripts, CI/CD, scheduled tasks; SDK mode is calling from within your own program, suited for integrating Agent capabilities into existing systems; there's also Minimal mode, keeping only the most core Agent loop, suited for studying the underlying mechanism or doing heavy customization. The four modes share the same plugin layer, the difference is just which Bundle is stacked — this is also a direct embodiment of "everything is a plugin".

## Practice Questions

### Q5: How does dsh's tool call pipeline work? Why design it as a pipeline rather than direct execution?

**Test point**: Understanding of the core mechanism, whether you can state the design intent.

**Answer direction**: After the model says to call a tool, it doesn't execute directly, but goes through a multi-stage pipeline: first through pre-execute policy (can intercept, modify, deny), then through approval (pop-up asks user when beyond permissions), then into the sandbox to execute (OS kernel-level isolation, limits which files can be touched), the result then goes through post-execute (can record, transform, audit), finally returned to the model. The reason for designing it as a pipeline is that every stage can be intercepted and enhanced by plugins — want to add audit logs, want to add a tool whitelist, want to change execution parameters, no need to modify core code, just hang a plugin. This is also "everything is a plugin" embodied at the execution layer.

### Q6: What's the difference between MCP and Skill? When to use which?

**Test point**: Whether you can distinguish the two types of capability extension.

**Answer direction**: MCP is a standard protocol for connecting external tools — e.g. letting the Agent operate GitHub, scrape web, query databases, these are "action capabilities", exposed through the MCP server as a set of tool functions, the Agent calls the tool and gets the result. Skill is instructions written for the model — tells it "when you encounter this kind of task, follow this set of steps", e.g. code review checklist, weekly report template, it doesn't add new tools, but changes the model's behavior. Simply: MCP gives the Agent one more pair of hands, Skill gives the Agent one more instruction manual. Need to connect external systems use MCP, need to solidify workflows use Skill.

### Q7: How is dsh's security model designed?

**Test point**: Whether you pay attention to security, can state the multi-layer protection approach.

**Answer direction**: Three layers of protection. The first layer is the file sandbox — OS kernel-level isolation, not JS check, three permission levels: read-only (read only), workspace-write (default, can only write the current workspace), danger-full-access (no restrictions). The second layer is operation approval — when the Agent wants to do something beyond permissions, a pop-up asks you, allow once means once, not permanent. The third layer is write-only keys — after saving the API Key, the interface doesn't echo back plaintext, only shows a redacted descriptor, plaintext is only in the local `.credentials.yaml`. The core idea is "restricted by default, allow on demand", not "give all permissions and rely on user caution".

## Open-ended Question

### Q8: If you were choosing technology for your team, what are the pros and cons of dsh vs Claude Code vs Codex?

**Test point**: Technology selection ability, whether you can analyze objectively rather than fanboy.

**Answer direction**: dsh's advantages: first, fully open source, MIT license, no vendor lock-in, models can be plugged in freely — DeepSeek, OpenAI, local models all work; second, highest degree of pluginnization, even the Agent loop can be swapped, large customization space; third, Headless and SDK modes are suited for automation and integration scenarios, not just a chat tool. Disadvantages: first, too new, in developer preview, API unstable, docs incomplete, community ecosystem still growing; second, default Web UI experience still has a gap compared to Claude Code, Codex, many capabilities need to be supplemented by installing plugins; third, if no one in the team is willing to tinker with config and plugins, the out-of-the-box experience is not as good as commercial products. Selection suggestion: team has customization needs, wants to build its own Agent infrastructure, doesn't mind hitting some bumps, choose dsh; individual daily coding for peace of mind, commercial products are more mature.
