---
layout: home

hero:
  name: DeepSeek Harness Bluebook
  text: リアルなタスクを主軸にした dsh 実践ガイド
  tagline: dsh を実際に使い、リアルなタスクを主軸に、0 から 1 へまず動かす。次に 1 から 100 へ、毎回成功した結果を再利用可能なワークシステムへと積み上げる。すべてはプラグインで、毎回すべてが追跡可能。
  image:
    src: /logo.jpg
    alt: DeepSeek Harness Bluebook
  actions:
    - theme: brand
      text: 読み始める
      link: /ja/part00/
    - theme: alt
      text: 全目次を見る
      link: /ja/part00/
---

<div style="text-align:center;margin-top:8px;">
  <span class="hlm" style="font-family:var(--vp-font-family-mono);font-size:15px;letter-spacing:.05em;">everything is a plugin · Agent = Model + Harness</span>
</div>

<StatsBar />

<PathCards />

<div class="contrib-wrap">
  <div class="contrib-label">COMMUNITY <b>/ 共創</b></div>
  <h2 class="contrib-title">この本はコミュニティによる共創の成果です</h2>
  <p class="contrib-desc">始めたばかりの初心者の方も、すでに本番環境で dsh を動かしている開発者の方も、どなたでも参加できます。</p>

  <div class="contrib-cards">
    <a class="c-card" href="https://github.com/super-mortal/DeepSeekHarnessGuide/issues" target="_blank">
      <span class="c-no">01</span>
      <span class="c-title">Issue を投稿</span>
      <span class="c-desc">誤りの報告、提案、内容の補完要望</span>
    </a>
    <a class="c-card" href="https://github.com/super-mortal/DeepSeekHarnessGuide/pulls" target="_blank">
      <span class="c-no">02</span>
      <span class="c-title">PR を送る</span>
      <span class="c-desc">誤字修正、章の追加、コード例の最適化</span>
    </a>
    <a class="c-card" href="https://github.com/super-mortal/DeepSeekHarnessGuide/discussions" target="_blank">
      <span class="c-no">03</span>
      <span class="c-title">経験を共有</span>
      <span class="c-desc">あなたの実作業でのつまずき、おすすめプラグイン、使用Tips</span>
    </a>
  </div>

  <div class="contrib-foot">
    <span class="hlm">Open Source · MIT · Community Driven</span>
  </div>
</div>

<style scoped>
.contrib-wrap {
  margin-top: 48px;
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 28px;
}
.contrib-label {
  font-family: var(--vp-font-family-mono);
  font-size: 12.5px;
  letter-spacing: 0.18em;
  color: var(--vp-c-text-3);
}
.contrib-label b { color: var(--vp-c-text-1); }
.contrib-title {
  font-size: 24px;
  font-weight: 900;
  color: var(--vp-c-text-1);
  margin-top: 10px;
  letter-spacing: 0.01em;
}
.contrib-desc {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin-top: 8px;
  line-height: 1.8;
}
.contrib-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 14px;
  margin-top: 22px;
}
.c-card {
  display: block;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  padding: 18px 18px 16px;
  background: var(--vp-c-bg);
  text-decoration: none;
}
.c-card:hover { background: var(--hl); }
.c-no {
  display: inline-block;
  font-family: var(--vp-font-family-mono);
  font-size: 11.5px;
  font-weight: 700;
  background: var(--vp-c-text-1);
  color: var(--hl);
  padding: 2px 8px;
  border-radius: 2px;
  letter-spacing: 0.05em;
}
.c-title {
  display: block;
  font-size: 17px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-top: 11px;
}
.c-desc {
  display: block;
  font-size: 12.5px;
  color: var(--vp-c-text-3);
  margin-top: 6px;
  line-height: 1.7;
}
.contrib-foot {
  margin-top: 24px;
  text-align: center;
}
.contrib-foot .hlm {
  font-family: var(--vp-font-family-mono);
  font-size: 13px;
  letter-spacing: 0.05em;
}
</style>
