---
title: 理解骨架：万物皆插件
---

# PART 02 · 理解骨架

<div class="lead">
  架构篇。看懂 dsh 的插件树心智模型与核心子系统。三章，从宏观到微观，把"一切皆插件"这句话彻底讲透。
</div>

<div class="start-grid">
  <a class="start-card" href="/part02/ch08">
    <span class="sc-no">CH 08</span>
    <span class="sc-title">插件树心智模型</span>
    <span class="sc-desc">万物皆插件 · 约 15 分钟</span>
    <span class="sc-go">开始读 →</span>
  </a>
  <a class="start-card" href="/part02/ch09">
    <span class="sc-no">CH 09</span>
    <span class="sc-title">核心子系统与消息流转</span>
    <span class="sc-desc">从你回车到它回话 · 约 12 分钟</span>
    <span class="sc-go">开始读 →</span>
  </a>
  <a class="start-card" href="/part02/ch10">
    <span class="sc-no">CH 10</span>
    <span class="sc-title">会话日志即真相源</span>
    <span class="sc-desc">每次运行都可追溯 · 约 10 分钟</span>
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
