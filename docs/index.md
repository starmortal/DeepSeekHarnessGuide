---
layout: home

hero:
  name: DeepSeek Harness 蓝皮书
  text: 以真实任务为主线的 dsh 实战指南
  tagline: 把 dsh 用起来，以真实任务为主线，从 0 到 1 先跑通，再从 1 到 100 把每次成功沉淀为可复用的工作系统。一切皆插件，每次运行都可追溯。
  image:
    src: /logo.jpg
    alt: DeepSeek Harness 蓝皮书
  actions:
    - theme: brand
      text: 开始阅读
      link: /part00/
    - theme: alt
      text: 查看完整目录
      link: /part00/
---

<div style="text-align:center;margin-top:8px;">
  <span class="hlm" style="font-family:var(--vp-font-family-mono);font-size:15px;letter-spacing:.05em;">everything is a plugin · Agent = Model + Harness</span>
</div>

<StatsBar />

<PathCards />

<div class="contrib-wrap">
  <div class="contrib-label">COMMUNITY <b>/ 共创</b></div>
  <h2 class="contrib-title">这本书是社区共创的产物</h2>
  <p class="contrib-desc">无论你是刚入门的新手，还是已经在生产环境跑 dsh 的开发者，都欢迎加入。</p>

  <div class="contrib-cards">
    <a class="c-card" href="https://github.com/super-mortal/DeepSeekHarnessGuide/issues" target="_blank">
      <span class="c-no">01</span>
      <span class="c-title">提交 Issue</span>
      <span class="c-desc">发现错误、提出建议、补充内容需求</span>
    </a>
    <a class="c-card" href="https://github.com/super-mortal/DeepSeekHarnessGuide/pulls" target="_blank">
      <span class="c-no">02</span>
      <span class="c-title">发起 PR</span>
      <span class="c-desc">修正错别字、补充章节、优化代码示例</span>
    </a>
    <a class="c-card" href="https://github.com/super-mortal/DeepSeekHarnessGuide/discussions" target="_blank">
      <span class="c-no">03</span>
      <span class="c-title">分享经验</span>
      <span class="c-desc">你的实操踩坑、插件推荐、使用技巧</span>
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
