---
title: 会装、会写、会发插件
---

# PART 04 · 会装、会写、会发插件

<div class="lead">
  从安装到开发到发布。七章，先学会装社区插件，再亲手写第一个 hello-plugin，到工具、钩子、UI 插件，最后发布让大家一键装。
</div>

<div class="start-grid">
  <a class="start-card" href="/part04/ch18">
    <span class="sc-no">CH 18</span>
    <span class="sc-title">插件安装</span>
    <span class="sc-desc">dsh plugin + 插件市场 · 约 12 分钟</span>
    <span class="sc-go">开始读 →</span>
  </a>
  <a class="start-card" href="/part04/ch19">
    <span class="sc-no">CH 19</span>
    <span class="sc-title">第一个插件 hello-plugin</span>
    <span class="sc-desc">最小可运行插件 · 约 15 分钟</span>
    <span class="sc-go">开始读 →</span>
  </a>
  <a class="start-card" href="/part04/ch20">
    <span class="sc-no">CH 20</span>
    <span class="sc-title">插件三形态</span>
    <span class="sc-desc">service / loader / patch · 约 12 分钟</span>
    <span class="sc-go">开始读 →</span>
  </a>
  <a class="start-card" href="/part04/ch21">
    <span class="sc-no">CH 21</span>
    <span class="sc-title">工具插件 defineTool</span>
    <span class="sc-desc">给 Agent 加新能力 · 约 12 分钟</span>
    <span class="sc-go">开始读 →</span>
  </a>
  <a class="start-card" href="/part04/ch22">
    <span class="sc-no">CH 22</span>
    <span class="sc-title">钩子插件与拦截</span>
    <span class="sc-desc">tools/pre-execute · 约 10 分钟</span>
    <span class="sc-go">开始读 →</span>
  </a>
  <a class="start-card" href="/part04/ch23">
    <span class="sc-no">CH 23</span>
    <span class="sc-title">UI 插件</span>
    <span class="sc-desc">设置页 + 事件监听 · 约 15 分钟</span>
    <span class="sc-go">开始读 →</span>
  </a>
  <a class="start-card" href="/part04/ch24">
    <span class="sc-no">CH 24</span>
    <span class="sc-title">发布与分发</span>
    <span class="sc-desc">npm + GitHub Release · 约 12 分钟</span>
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
