---
title: "本番運用とエコシステム"
---

# PART 06 · 本番運用とエコシステム

<div class="lead">
  「動く」から「エコシステムの一部」へ。3 章、デプロイ選択、セキュリティ & コンプライアンス、可観測性とコンテキスト管理 —— dsh を玩具から本番ツールへ。
</div>

<div class="start-grid">
  <a class="start-card" href="/ja/part06/ch28">
    <span class="sc-no">CH 28</span>
    <span class="sc-title">デプロイ選択肢</span>
    <span class="sc-desc">ローカル / サーバー / Docker · 約 15 分</span>
    <span class="sc-go">読み始める →</span>
  </a>
  <a class="start-card" href="/ja/part06/ch29">
    <span class="sc-no">CH 29</span>
    <span class="sc-title">セキュリティとコンプライアンス</span>
    <span class="sc-desc">権限 / キー / データ · 約 12 分</span>
    <span class="sc-go">読み始める →</span>
  </a>
  <a class="start-card" href="/ja/part06/ch30">
    <span class="sc-no">CH 30</span>
    <span class="sc-title">可観測性とコンテキスト管理</span>
    <span class="sc-desc">軌跡 / Token / 圧縮 · 約 15 分</span>
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
