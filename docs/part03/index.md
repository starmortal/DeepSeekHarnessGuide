---
title: 组装你的 Agent
---

# PART 03 · 组装你的 Agent

<div class="lead">
  给 Agent 配齐装备：工具沙箱、MCP、子代理、Skill、定时、本地部署。六章，把一个基础 Agent 升级成能干活的全能助手。
</div>

<div class="start-grid">
  <a class="start-card" href="/part03/ch11">
    <span class="sc-no">CH 11</span>
    <span class="sc-title">工具与沙箱</span>
    <span class="sc-desc">安全执行 · 约 15 分钟</span>
    <span class="sc-go">开始读 →</span>
  </a>
  <a class="start-card" href="/part03/ch12">
    <span class="sc-no">CH 12</span>
    <span class="sc-title">接入 MCP 生态</span>
    <span class="sc-desc">Firecrawl 实战 · 约 20 分钟</span>
    <span class="sc-go">开始读 →</span>
  </a>
  <a class="start-card" href="/part03/ch13">
    <span class="sc-no">CH 13</span>
    <span class="sc-title">子代理与多 Agent 编排</span>
    <span class="sc-desc">spawn / fork · 约 12 分钟</span>
    <span class="sc-go">开始读 →</span>
  </a>
  <a class="start-card" href="/part03/ch14">
    <span class="sc-no">CH 14</span>
    <span class="sc-title">Skill 与工作流</span>
    <span class="sc-desc">可复用能力 · 约 15 分钟</span>
    <span class="sc-go">开始读 →</span>
  </a>
  <a class="start-card" href="/part03/ch15">
    <span class="sc-no">CH 15</span>
    <span class="sc-title">定时任务与后台运行</span>
    <span class="sc-desc">每日热点自动推送 · 约 15 分钟</span>
    <span class="sc-go">开始读 →</span>
  </a>
  <a class="start-card" href="/part03/ch16">
    <span class="sc-no">CH 16</span>
    <span class="sc-title">本地部署与 Token 自由</span>
    <span class="sc-desc">LM Studio 本地模型 · 约 18 分钟</span>
    <span class="sc-go">开始读 →</span>
  </a>
</div>

<style scoped>
.lead {
  margin: 18px 0 22px;
  font-size: 15px;
  color: var(--vp-c-text-2);
  line-height: 1.85;
}
.start-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 14px;
  margin: 0 0 6px;
}
.start-card {
  display: block;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  padding: 18px 18px 15px;
  background: var(--vp-c-bg);
  text-decoration: none;
}
.start-card:hover { background: var(--hl); }
.sc-no {
  display: inline-block;
  font-family: var(--vp-font-family-mono);
  font-size: 11.5px; font-weight: 700;
  background: var(--vp-c-text-1); color: var(--hl);
  padding: 2px 8px; border-radius: 2px; letter-spacing: 0.05em;
}
.sc-title {
  display: block;
  font-size: 17px; font-weight: 700;
  color: var(--vp-c-text-1);
  margin-top: 11px;
}
.sc-desc {
  display: block;
  font-size: 12.5px;
  color: var(--vp-c-text-3);
  margin-top: 6px;
  font-family: var(--vp-font-family-mono);
  letter-spacing: 0.02em;
}
.sc-go {
  display: inline-block;
  margin-top: 13px;
  font-size: 12.5px; font-weight: 700;
  color: var(--vp-c-brand-1);
  font-family: var(--vp-font-family-mono);
}
.start-card:hover .sc-go { color: var(--vp-c-text-1); }
</style>
