---
title: 开篇
---

# PART 00 · 开篇

<div class="lead">
  先回答一个最朴素的问题：<b>为什么 2026 年要学 dsh，以及这本书怎么读。</b>
  两篇短文，先建立「这本书讲什么、你怎么读」的坐标系。
</div>

<div class="start-grid">
  <a class="start-card" href="/part00/ch00">
    <span class="sc-no">CH 00</span>
    <span class="sc-title">为什么是 Agent 的乐高时代</span>
    <span class="sc-desc">dsh 站在哪、为什么值得学 · 约 10 分钟</span>
    <span class="sc-go">开始读 →</span>
  </a>
  <a class="start-card" href="/part00/ch01">
    <span class="sc-no">CH 01</span>
    <span class="sc-title">读法：三条阅读路径</span>
    <span class="sc-desc">新手 / 进阶 / 开发者怎么读 · 约 5 分钟</span>
    <span class="sc-go">开始读 →</span>
  </a>
</div>

## 然后，选择你的路径

读完 PART 00，按 CH 01 选好的路径进入下面任意一段——每一章都独立可点。

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
