---
title: "序章"
---

# PART 00 · 序章

<div class="lead">
  まずいちばん素朴な問いに答えます:<b>なぜ 2026 年に dsh を学ぶのか、そしてこの本をどのように読むか。</b>
  短い 2 本で、「この本が何を語り、あなたがどう読むか」の座標軸を立てます。
</div>

<div class="start-grid">
  <a class="start-card" href="/ja/part00/ch00">
    <span class="sc-no">CH 00</span>
    <span class="sc-title">なぜ Agent は「レゴの時代」なのか</span>
    <span class="sc-desc">dsh の立ち位置、なぜ学ぶ価値があるか · 約 10 分</span>
    <span class="sc-go">読み始める →</span>
  </a>
  <a class="start-card" href="/ja/part00/ch01">
    <span class="sc-no">CH 01</span>
    <span class="sc-title">読み方:3 つの学習パス</span>
    <span class="sc-desc">初心者 / 中級者 / 開発者向けの読み分け · 約 5 分</span>
    <span class="sc-go">読み始める →</span>
  </a>
</div>

## そして、自分のパスを選ぼう

PART 00 を読み終えたら、CH 01 で選んだパスに従って、以下のいずれかに進んでください——どの章もクリックひとつで開けます。

<PathCards />

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
