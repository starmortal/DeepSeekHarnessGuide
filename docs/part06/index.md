---
title: 生产与生态
---

# PART 06 · 生产与生态

<div class="lead">
  从能用到融入生态。三章，部署选型、安全合规、可观测与上下文管理，把 dsh 从玩具变成生产工具。
</div>

<div class="start-grid">
  <a class="start-card" href="/part06/ch27">
    <span class="sc-no">CH 27</span>
    <span class="sc-title">部署形态选型</span>
    <span class="sc-desc">本地 / 服务器 / Docker · 约 15 分钟</span>
    <span class="sc-go">开始读 →</span>
  </a>
  <a class="start-card" href="/part06/ch28">
    <span class="sc-no">CH 28</span>
    <span class="sc-title">安全与合规</span>
    <span class="sc-desc">权限 / 密钥 / 数据 · 约 12 分钟</span>
    <span class="sc-go">开始读 →</span>
  </a>
  <a class="start-card" href="/part06/ch29">
    <span class="sc-no">CH 29</span>
    <span class="sc-title">可观测性与上下文管理</span>
    <span class="sc-desc">轨迹 / Token / 压缩 · 约 15 分钟</span>
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
