---
title: 附录
---

# 附录 · 查起来方便的一册

<div class="lead">
  术语、命令、文档索引、面试题。四篇附录，用到的时候翻一翻，比翻聊天记录快。
</div>

<div class="start-grid">
  <a class="start-card" href="/appendix/a-terms">
    <span class="sc-no">附录 A</span>
    <span class="sc-title">术语表</span>
    <span class="sc-desc">架构 / 运行 / 工具 / 安全 / 模型 · 约 5 分钟</span>
    <span class="sc-go">开始读 →</span>
  </a>
  <a class="start-card" href="/appendix/b-commands">
    <span class="sc-no">附录 B</span>
    <span class="sc-title">命令速查</span>
    <span class="sc-desc">dsh 常用命令 + 斜杠命令 · 约 3 分钟</span>
    <span class="sc-go">开始读 →</span>
  </a>
  <a class="start-card" href="/appendix/c-docs">
    <span class="sc-no">附录 C</span>
    <span class="sc-title">官方文档索引</span>
    <span class="sc-desc">dsh 官方仓库各包目录直达 · 约 3 分钟</span>
    <span class="sc-go">开始读 →</span>
  </a>
  <a class="start-card" href="/appendix/d-interview">
    <span class="sc-no">附录 D</span>
    <span class="sc-title">面试题速答</span>
    <span class="sc-desc">基于蓝皮书整理的 8 道高频题 · 约 5 分钟</span>
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
