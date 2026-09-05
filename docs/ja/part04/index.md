---
title: "プラグインのインストール・作成・公開"
---

# PART 04 · プラグインのインストール・作成・公開

<div class="lead">
  インストールから開発、公開まで。7 章で、まずコミュニティプラグインのインストールを学び、それから最初の hello-plugin、ツール / フック / UI プラグインを書き、最後に公開して誰でも 1 コマンドでインストールできるようにする。
</div>

<div class="start-grid">
  <a class="start-card" href="/ja/part04/ch17">
    <span class="sc-no">CH 17</span>
    <span class="sc-title">プラグインインストール</span>
    <span class="sc-desc">dsh plugin + プラグインマーケット · 約 12 分</span>
    <span class="sc-go">読み始める →</span>
  </a>
  <a class="start-card" href="/ja/part04/ch18">
    <span class="sc-no">CH 18</span>
    <span class="sc-title">最初のプラグイン:hello-plugin</span>
    <span class="sc-desc">最小限の実行可能プラグイン · 約 15 分</span>
    <span class="sc-go">読み始める →</span>
  </a>
  <a class="start-card" href="/ja/part04/ch19">
    <span class="sc-no">CH 19</span>
    <span class="sc-title">プラグインの 3 形態</span>
    <span class="sc-desc">service / loader / patch · 約 12 分</span>
    <span class="sc-go">読み始める →</span>
  </a>
  <a class="start-card" href="/ja/part04/ch20">
    <span class="sc-no">CH 20</span>
    <span class="sc-title">ツールプラグイン:defineTool</span>
    <span class="sc-desc">Agent に新能力を · 約 12 分</span>
    <span class="sc-go">読み始める →</span>
  </a>
  <a class="start-card" href="/ja/part04/ch21">
    <span class="sc-no">CH 21</span>
    <span class="sc-title">フックプラグインと介入</span>
    <span class="sc-desc">tools/pre-execute · 約 10 分</span>
    <span class="sc-go">読み始める →</span>
  </a>
  <a class="start-card" href="/ja/part04/ch22">
    <span class="sc-no">CH 22</span>
    <span class="sc-title">UI プラグイン</span>
    <span class="sc-desc">設定ページ + イベントリスナー · 約 15 分</span>
    <span class="sc-go">読み始める →</span>
  </a>
  <a class="start-card" href="/ja/part04/ch23">
    <span class="sc-no">CH 23</span>
    <span class="sc-title">公開と配布</span>
    <span class="sc-desc">npm + GitHub Release · 約 12 分</span>
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
