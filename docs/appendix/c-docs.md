---
title: 附录 C · 官方文档索引
description: 架构 / 子系统 / cookbook / CLI 参考 / 各包 README
---

# 附录 C · 官方文档索引

<div class="chapter-meta">
  <span class="cm-item"><span class="cm-k">全文字数</span><span class="cm-v">1714 字</span></span>
  <span class="cm-item"><span class="cm-k">预估耗时</span><span class="cm-v">约 5 分钟</span></span>
  <span class="cm-item"><span class="cm-k">难度</span><span class="cm-v hl">查阅用</span></span>
</div>

dsh 官方仓库的文档都在 [GitHub 仓库](https://github.com/deepseek-ai/deepseek-harness)的 `docs/` 目录和各包的 README 里。这里按用途分类，需要深入某个主题时直接跳过去看。

## 核心文档

| 文档 | 内容 | 什么时候看 |
|---|---|---|
| [README](https://github.com/deepseek-ai/deepseek-harness) | 项目总览、设计理念、快速开始、四种运行模式 | 第一次接触，想快速了解全貌 |
| [architecture.md](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/architecture.md) | 整体架构设计：Cordis 插件框架、插件树、Profile、Bundle、分层配置加载顺序 | 想搞懂"一切皆插件"到底怎么实现的 |
| [根目录 AGENTS.md](https://github.com/deepseek-ai/deepseek-harness/blob/master/AGENTS.md) | 仓库结构说明、各包目录组织、开发环境搭建 | 想读源码或给官方仓库提 PR |
| [docs/AGENTS.md](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/AGENTS.md) | 文档开发手册：规定各类文档该写什么、不该写什么、文档分层标准 | 想给官方文档提 PR 或了解文档组织规范 |

## 子系统文档（subsystems/）

官方为每个核心子系统写了单独的文档，共 40+ 篇。每篇讲清楚：这个子系统是什么、流转什么数据结构、提供哪些 ctx 服务和事件。全部在 [docs/subsystems/](https://github.com/deepseek-ai/deepseek-harness/tree/master/docs/subsystems) 目录下。

| 子系统 | 讲什么 |
|---|---|
| **session** | 会话管理：创建、恢复、分叉、持久化、事件流 |
| **agent-loop** | Agent 循环：思考→调工具→看结果的迭代机制 |
| **tools** | 工具注册、Schema、执行流水线、审批、沙箱 |
| **llm** | 模型适配、Provider、请求/响应、缓存 |
| **skills** | Skill 发现、加载、调用机制 |
| **subagent** | 子代理调度、两种模式（spawn / fork）、结果合并 |
| **workflow** | 工作流编排、多步骤串联 |
| **sandbox** | 文件沙箱、权限三档、审批流程 |
| **trajectory** | 轨迹记录、回放、导出 |
| **credentials** | 密钥管理、只写存储、脱敏 |
| **mcp** | MCP 客户端、服务器接入、工具桥接 |
| **compaction** | 上下文压缩、触发时机、摘要生成 |

> 子系统文档按字母排序，需要深入某个机制时直接找对应文件。

## Cookbook（实操手册）

官方写的一步步实操教程，在 [docs/cookbook/](https://github.com/deepseek-ai/deepseek-harness/tree/master/docs/cookbook) 目录下。

| 教程 | 教什么 |
|---|---|
| **加一个包** | 怎么往 dsh 里加一个新的 npm 依赖 |
| **加一个工具** | 怎么写一个自定义工具并注册给 Agent |
| **加一个 LLM 适配器** | 怎么接一个新的模型提供商 |
| **扩展插件形态** | 怎么写客户端插件、UI 插件、bundle |
| **自定义 Profile** | 怎么创建一个全新的 profile 组合 |

> Cookbook 是"照着做就能跑通"的教程，比子系统文档更偏实操。

## CLI 参考

[apps/cli/reference/README.md](https://github.com/deepseek-ai/deepseek-harness/blob/master/apps/cli/reference/README.md)——dsh 命令行的完整行为参考，包括参数解析、Profile 启动流程、各子命令的精确行为。写脚本或排障时查这个。

## 各包 README

仓库是 monorepo，`packages/` 下有 49 个分组，每个包有自己的 README。常用的几个：

| 包 | 作用 |
|---|---|
| `@deepseek-ai/dsh` | 主入口，CLI 二进制 |
| `@deepseek-ai/cordis` | 底层插件框架 |
| `@deepseek-ai/dsh-web-app` | Web UI 前端 |
| `@deepseek-ai/dsh-headless` | Headless 运行时 |
| `@deepseek-ai/dsh-mcp-client` | MCP 客户端插件 |
| `@deepseek-ai/dsh-tool-skill` | Skill 工具插件 |

## 怎么用这份索引

1. **想了解概念** → 先看 README 和 architecture.md
2. **想搞懂某个机制** → 找 subsystems/ 下对应子系统
3. **想照着做一个东西** → 找 cookbook/ 下对应教程
4. **命令行为不确定** → 查 CLI reference
5. **想看某个包具体实现** → 找 packages/ 下对应包的 README
