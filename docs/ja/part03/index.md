---
title: "Agent を組み立てる"
---

# PART 03 · Agent を組み立てる

<div class="lead">
  Agent に能力を裝備する:ツールサンドボックス、MCP、サブエージェント、Skill、スケジューリング、ローカルデプロイ。6 章で、基本 Agent を完全な作業アシスタントへとアップグレードする。
</div>

<div class="start-grid">
  <a class="start-card" href="/ja/part03/ch11">
    <span class="sc-no">CH 11</span>
    <span class="sc-title">ツールとサンドボックス</span>
    <span class="sc-desc">安全な実行 · 約 15 分</span>
    <span class="sc-go">読み始める →</span>
  </a>
  <a class="start-card" href="/ja/part03/ch12">
    <span class="sc-no">CH 12</span>
    <span class="sc-title">MCP エコシステムへの接続</span>
    <span class="sc-desc">Firecrawl 実操作 · 約 20 分</span>
    <span class="sc-go">読み始める →</span>
  </a>
  <a class="start-card" href="/ja/part03/ch13">
    <span class="sc-no">CH 13</span>
    <span class="sc-title">サブエージェントとマルチ Agent 编排</span>
    <span class="sc-desc">spawn / fork · 約 12 分</span>
    <span class="sc-go">読み始める →</span>
  </a>
  <a class="start-card" href="/ja/part03/ch14">
    <span class="sc-no">CH 14</span>
    <span class="sc-title">Skill とワークフロー</span>
    <span class="sc-desc">再利用可能な能力 · 約 15 分</span>
    <span class="sc-go">読み始める →</span>
  </a>
  <a class="start-card" href="/ja/part03/ch15">
    <span class="sc-no">CH 15</span>
    <span class="sc-title">定时任务とバックグラウンド実行</span>
    <span class="sc-desc">每日热点自動プッシュ · 約 15 分</span>
    <span class="sc-go">読み始める →</span>
  </a>
  <a class="start-card" href="/ja/part03/ch16">
    <span class="sc-no">CH 16</span>
    <span class="sc-title">ローカルデプロイと Token 自由</span>
    <span class="sc-desc">LM Studio ローカルモデル · 約 18 分</span>
    <span class="sc-go">読み始める →</span>
  </a>
</div>

<style scoped>
.lead {
  margin: 18px 0 22px;
  font-size: 15px;
  color: var(--vp-c-text-2);
  line-height: 1.85;
}
.lead b { color: var(--vp-c-text-1); }
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
