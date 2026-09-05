---
title: "0 から 1 へ:dsh を動かす"
---

# PART 01 · 0 から 1 へ

<div class="lead">
  初心者推奨。dsh をインストールし、起動し、初めての会話を完結させる。6 章で、理解からトラブルシュートまで順を追って地盤を築く。
</div>

<div class="start-grid">
  <a class="start-card" href="/ja/part01/ch02">
    <span class="sc-no">CH 02</span>
    <span class="sc-title">dsh を理解する</span>
    <span class="sc-desc">3 つの直感 + 能力マトリクス · 約 10 分</span>
    <span class="sc-go">読み始める →</span>
  </a>
  <a class="start-card" href="/ja/part01/ch03">
    <span class="sc-no">CH 03</span>
    <span class="sc-title">インストールと起動</span>
    <span class="sc-desc">Node.js + ワンコマンド · 約 15 分</span>
    <span class="sc-go">読み始める →</span>
  </a>
  <a class="start-card" href="/ja/part01/ch04">
    <span class="sc-no">CH 04</span>
    <span class="sc-title">Web UI を理解する</span>
    <span class="sc-desc">画面構成 + 初めての会話 · 約 12 分</span>
    <span class="sc-go">読み始める →</span>
  </a>
  <a class="start-card" href="/ja/part01/ch05">
    <span class="sc-no">CH 05</span>
    <span class="sc-title">コマンドライン:headless</span>
    <span class="sc-desc">UI なしの自動化 · 約 10 分</span>
    <span class="sc-go">読み始める →</span>
  </a>
  <a class="start-card" href="/ja/part01/ch06">
    <span class="sc-no">CH 06</span>
    <span class="sc-title">モデルと推論レベルの設定</span>
    <span class="sc-desc">DeepSeek + サードパーティモデル · 約 12 分</span>
    <span class="sc-go">読み始める →</span>
  </a>
  <a class="start-card" href="/ja/part01/ch07">
    <span class="sc-no">CH 07</span>
    <span class="sc-title">トラブルシューティング早見表</span>
    <span class="sc-desc">よくあるエラーと解決策 · 約 8 分</span>
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
