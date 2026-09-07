# DeepSeek Harness 蓝皮书

> [English](./README.md) | 中文版本

一份以真实任务为主线的 **DeepSeek Harness (dsh)** 实战指南。从第一个能验收的 Agent 开始，到可复用的工作系统——一切皆插件，每次运行都可追溯。

基于 **VitePress** 构建，采用 **E-INK 纸感 × DeepSeek 墨蓝** 视觉风格，支持 6 种语言。

![首页截图](./docs/public/assets/readme-homepage.png)

## 特性

- **真实任务驱动**：每章内容来自真实实操——命令、截图、报错全部真实，可照做复现
- **6 种语言**：中文（默认）、English、日本語、한국어、Español、Português
- **插件优先**：围绕 dsh"一切皆插件"架构展开——从会装、会写到会发
- **E-INK 风格**：米白纸底、墨字、荧光黄标注，零干扰动效
- **图片查看器**：点击放大、Ctrl+滚轮缩放、左右键切换、拖拽平移、ESC 退出

## 快速开始

```bash
# 安装依赖（pnpm >= 10）
pnpm install

# 本地开发
pnpm docs:dev        # http://localhost:5173

# 构建 & 预览
pnpm docs:build
pnpm docs:preview    # http://localhost:4173
```

## 项目结构

```
DeepSeekHarnessGuide/
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts              # 6 语言配置（导航/侧边栏/搜索）
│   │   └── theme/
│   │       ├── index.ts             # 主题入口 + 自研图片灯箱
│   │       ├── style.css            # E-INK × DeepSeek 墨蓝样式
│   │       └── components/
│   │           ├── StatsBar.vue     # 首页数据统计栏（已国际化）
│   │           └── PathCards.vue    # 首页阅读路径卡（已国际化）
│   ├── public/
│   │   ├── logo.jpg
│   │   ├── robots.txt
│   │   └── assets/                  # 章节配图，按 PART 子目录分类
│   ├── index.md                     # 中文首页（root / 源语言）
│   ├── part00/ ~ part06/           # 中文正文
│   ├── appendix/                    # 中文附录
│   └── en/ ja/ ko/ es/ pt/         # 其他 5 种语言（结构与中文完全一致）
├── AGENTS.md                        # 写作规范 + 多语言协作流程
├── CLAUDE.md                        # AGENTS.md 的同步副本
├── README.md                        # 英文 README
├── README_ZH.md                     # 中文 README（本文件）
├── package.json
├── pnpm-lock.yaml
└── pnpm-workspace.yaml
```

## 全书结构

| PART | 主题 |
|---|---|
| PART 00 | 开篇：为什么是 Agent 的乐高时代、读法与学习路径 |
| PART 01 | 从 0 到 1：认识 dsh、安装与启动、认识 Web UI、headless、配置模型、排障 |
| PART 02 | 理解骨架：插件树心智模型、核心子系统与消息流转、会话日志即真相源 |
| PART 03 | 组装你的 Agent：工具与沙箱、MCP、子代理、Skill、定时任务、本地部署 |
| PART 04 | 会装、会写、会发插件：插件安装、hello-plugin、三形态、造工具、钩子、UI、发布 |
| PART 05 | 场景实操：个人网站、PPT、视频 |
| PART 06 | 生产与生态：部署选型、安全合规、可观测与上下文管理 |
| 附录 | 术语表、命令速查、学习路径、面试题 |

## 开发指南

### 新增章节

1. **创建 markdown 文件**：在对应 PART 目录下为每种语言创建文件：
   ```
   docs/part0X/chXX.md          # 中文（源语言）
   docs/en/part0X/chXX.md       # 英文
   docs/ja/part0X/chXX.md       # 日文
   docs/ko/part0X/chXX.md       # 韩文
   docs/es/part0X/chXX.md       # 西班牙文
   docs/pt/part0X/chXX.md       # 葡萄牙文
   ```

2. **注册侧边栏**：打开 `docs/.vitepress/config.mts`，在**全部 6 种语言**的侧边栏配置中（`sidebarZh`、`sidebarEn`、`sidebarJa`、`sidebarKo`、`sidebarEs`、`sidebarPt`）添加章节链接。

3. **遵循写作模板**：每章统一结构：
   ```markdown
   # CH XX · 章节标题

   > 全文字数：X 字 · 预估耗时：约 Y 分钟 · 前置：...

   ## 本章目标
   ## 动手
   ## （按图片内容命名的小节，如"Web UI 首屏"）
   ## 这一章你学到了什么
   ```

4. **添加配图**：放入 `docs/public/assets/<partXX>/`，用 `![](/assets/partXX/filename.png)` 引用。

5. **记录改动**：所有中文改动写入项目根目录的 `changes.txt`（固定文件名，追加写入）。准备好后触发翻译（中文 → 英文 → 其他语言），完成后删除 `changes.txt`。

### 写作规范

详见 [AGENTS.md](./AGENTS.md)，核心要点：
- 内容必须可核验（真实命令、真实截图，禁止编造）
- 去 AI 化（第一人称实操口吻，保留真实踩坑，短句为主）
- 第三方链接不裸露 URL（一律文字 + 可点击链接）
- 核心概念必须配架构图（SVG 自绘，E-INK 风格）
- 所有演示统一使用 `deepseek-v4-flash-vision-exp`
- 动手章必须补"让 dsh 自己搭：一条提示词搞定"环节

### 多语言协作流程

1. **日常改写只改中文**，禁止直接修改其他语言文件
2. **改动记录写入 `changes.txt`**（固定文件，所有改动追加到这同一个文件）
3. **用户发翻译指令后才翻译**：先中文 → 英文，再以英文为基准 → 其他 4 种语言
4. **翻译完成后删除 `changes.txt`**

### 主题定制

- 颜色与样式：`docs/.vitepress/theme/style.css`
- 首页组件：`docs/.vitepress/theme/components/`
- 图片灯箱：`docs/.vitepress/theme/index.ts`（支持缩放、平移、切换、ESC 退出）

## 部署

静态站点，产物在 `docs/.vitepress/dist/`，可部署到任意静态托管平台：
- EdgeOne Pages
- Vercel / Netlify
- GitHub Pages
- Cloudflare Pages

## 贡献

欢迎贡献！提交 PR 前请先阅读 [AGENTS.md](./AGENTS.md)。

- 报告问题或提出内容需求：[Issues](https://github.com/super-mortal/DeepSeekHarnessGuide/issues)
- 提交修正或新增章节：[Pull Requests](https://github.com/super-mortal/DeepSeekHarnessGuide/pulls)
- 讨论交流：[Discussions](https://github.com/super-mortal/DeepSeekHarnessGuide/discussions)

## 许可证

MIT License

---

GitHub：<https://github.com/super-mortal/DeepSeekHarnessGuide>
作者：[super-mortal](https://supermortal.cn)

## 学AI，上L站

https://linux.do