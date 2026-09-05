---
title: Getting Started
---

# PART 00 · Getting Started

<div class="lead">
  Start with the most basic question: <b>why learn dsh in 2026, and how to read this book.</b>
  Two short essays to establish the framework: what this book covers and how to read it.
</div>

<div class="start-grid">
  <a class="start-card" href="/en/part00/ch00">
    <span class="sc-no">CH 00</span>
    <span class="sc-title">Why Agent's Lego Era</span>
    <span class="sc-desc">Where dsh stands, why it's worth learning · ~10 min</span>
    <span class="sc-go">Start reading →</span>
  </a>
  <a class="start-card" href="/en/part00/ch01">
    <span class="sc-no">CH 01</span>
    <span class="sc-title">How to Read: Three Reading Paths</span>
    <span class="sc-desc">Beginner / Advanced / Developer reading paths · ~8 min</span>
    <span class="sc-go">Start reading →</span>
  </a>
</div>

## Then, Pick Your Path

After finishing PART 00, enter any section below based on the path you picked in CH 01 — every chapter is independently clickable.

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
