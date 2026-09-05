---
title: "骨格を理解する:すべてはプラグイン"
---

# PART 02 · 骨格を理解する

<div class="lead">
  アーキテクチャ編。dsh のプラグインツリーのメンタルモデルと中核サブシステムを把握する。3 章でマクロからミクロまで、「すべてはプラグイン」の一文を完全にほどく。
</div>

<div class="start-grid">
  <a class="start-card" href="/ja/part02/ch08">
    <span class="sc-no">CH 08</span>
    <span class="sc-title">プラグインツリーのメンタルモデル</span>
    <span class="sc-desc">すべてはプラグイン · 約 15 分</span>
    <span class="sc-go">読み始める →</span>
  </a>
  <a class="start-card" href="/ja/part02/ch09">
    <span class="sc-no">CH 09</span>
    <span class="sc-title">中核サブシステムとメッセージの流れ</span>
    <span class="sc-desc">Enter キーから返答まで · 約 12 分</span>
    <span class="sc-go">読み始める →</span>
  </a>
  <a class="start-card" href="/ja/part02/ch10">
    <span class="sc-no">CH 10</span>
    <span class="sc-title">セッションログ=真実の源</span>
    <span class="sc-desc">すべての実行が追跡可能 · 約 10 分</span>
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
