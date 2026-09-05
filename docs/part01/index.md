---
title: 从 0 到 1：先把 dsh 跑起来
---

# PART 01 · 从 0 到 1

<div class="lead">
  新手推荐。把 dsh 装好、跑起来，完成第一次对话。六章，从认识到排障，一步步把基础打牢。
</div>

<div class="start-grid">
  <a class="start-card" href="/part01/ch02">
    <span class="sc-no">CH 02</span>
    <span class="sc-title">认识 dsh</span>
    <span class="sc-desc">三个直觉 + 能力矩阵 · 约 10 分钟</span>
    <span class="sc-go">开始读 →</span>
  </a>
  <a class="start-card" href="/part01/ch03">
    <span class="sc-no">CH 03</span>
    <span class="sc-title">安装与启动</span>
    <span class="sc-desc">Node.js + 一行命令 · 约 15 分钟</span>
    <span class="sc-go">开始读 →</span>
  </a>
  <a class="start-card" href="/part01/ch04">
    <span class="sc-no">CH 04</span>
    <span class="sc-title">认识 Web UI</span>
    <span class="sc-desc">界面分区 + 第一次对话 · 约 12 分钟</span>
    <span class="sc-go">开始读 →</span>
  </a>
  <a class="start-card" href="/part01/ch05">
    <span class="sc-no">CH 05</span>
    <span class="sc-title">命令行跑通：headless</span>
    <span class="sc-desc">无界面自动化 · 约 10 分钟</span>
    <span class="sc-go">开始读 →</span>
  </a>
  <a class="start-card" href="/part01/ch06">
    <span class="sc-no">CH 06</span>
    <span class="sc-title">配置模型与推理档位</span>
    <span class="sc-desc">DeepSeek + 第三方模型 · 约 12 分钟</span>
    <span class="sc-go">开始读 →</span>
  </a>
  <a class="start-card" href="/part01/ch07">
    <span class="sc-no">CH 07</span>
    <span class="sc-title">排障速查</span>
    <span class="sc-desc">常见报错 + 解决方案 · 约 8 分钟</span>
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
