---
title: 附录 B · 命令速查
description: 安装 / 启动 / 插件 / 配置 / 斜杠命令
---

# 附录 B · 命令速查

<div class="chapter-meta">
  <span class="cm-item"><span class="cm-k">全文字数</span><span class="cm-v">541 字</span></span>
  <span class="cm-item"><span class="cm-k">预估耗时</span><span class="cm-v">约 8 分钟</span></span>
  <span class="cm-item"><span class="cm-k">难度</span><span class="cm-v hl">查阅用</span></span>
</div>

日常用 dsh 会用到的命令，按场景分组。需要深入的翻对应章节。

## 安装与更新

```bash
# 全局安装 dsh（推荐新手）
npm install -g @deepseek-ai/dsh

# 查看版本
dsh --version

# 更新到最新版
npm install -g @deepseek-ai/dsh@latest

# 不安装直接跑（每次都用最新包）
npx @deepseek-ai/dsh web
```

> `npx` 每次都会拉最新包，全局安装则不会自动更新。想固定版本用全局安装，想永远最新用 npx。

## 启动

```bash
# 启动 Web UI（最常用，默认端口 3080）
dsh web

# 指定端口启动
dsh web --port 8080

# 启动 headless，跑一个任务就退出
dsh --profile headless "把当前目录的测试跑一遍并汇总失败"

# 启动指定 profile
dsh --profile <profile名称>

# 带额外配置启动（patch 方式）
dsh web --patch ./my-plugin/cordis.yml
```

## 插件管理

```bash
# 列出 web profile 已装的插件
dsh plugin --profile web list

# 安装插件（npm 包）
dsh plugin --profile web add <包名>

# 安装插件（GitHub 源码）
dsh plugin --profile web add github:<用户名>/<仓库名>

# 安装插件（本地路径）
dsh plugin --profile web add ./my-plugin

# 安装插件（tgz 包）
dsh plugin --profile web add https://example.com/plugin.tgz

# 卸载插件
dsh plugin --profile web remove <包名>
```

> 装完插件后需要重启对应 profile 才生效（bundle 变更不热加载）。

## 配置与调试

```bash
# 打印 web profile 的完整配置树（排查"某个行为是哪来的"）
dsh --profile web --dump-config

# 打印 headless profile 的配置树
dsh --profile headless --dump-config

# 带 patch 启动并看配置
dsh web --patch ./my-config.yml --dump-config
```

> `--dump-config` 输出是纯文本，排障时可以直接丢给 AI 看，让它帮你扫配置树找问题。

## 环境变量

```bash
# dsh 配置根目录（默认 ~/.dsh）
$DSH_HOME

# API Key（优先级最高，覆盖 .credentials.yaml）
$DEEPSEEK_API_KEY

# 本地模型 API Key（LM Studio 等，随便设个值就行）
$LM_STUDIO_API_KEY
```

## Web UI 斜杠命令

在输入框里以 `/` 开头输入，会弹出当前可用命令列表。

| 命令 | 作用 |
|---|---|
| `/compact` | 手动压缩当前对话上下文，把早期历史总结成摘要 |
| `/permission` | 查看或切换当前会话的权限模式（read-only / workspace-write / danger-full-access），不带参数弹出选择框 |
| `/model` | 切换模型，按提供方分组选择，并应用所选模型的默认推理档位 |
| `/goal` | 目标管理：创建 / 查看 / 编辑 / 暂停 / 恢复 / 清除长期目标（如 `/goal pause`、`/goal clear`） |

> 不同版本、装了不同插件，命令列表可能不一样。输入 `/` 看当前有哪些。

## 常用组合

```bash
# 新手第一天：装完直接跑
npm install -g @deepseek-ai/dsh
dsh web

# 排障四连：看版本→看配置→看插件→重启
dsh --version
dsh --profile web --dump-config
dsh plugin --profile web list
dsh web

# headless 跑一次性任务
dsh --profile headless "总结这个仓库的架构，写成 markdown"
```
