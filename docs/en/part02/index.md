---
title: "Understanding the Skeleton: Everything is a Plugin"
---

# PART 02 · Understanding the Skeleton

<div class="lead">
  Architecture. Understand dsh's plugin tree mental model and core subsystems. Three chapters, from macro to micro, fully unpack the phrase "everything is a plugin".
</div>

<div class="start-grid">
  <a class="start-card" href="/en/part02/ch08">
    <span class="sc-no">CH 08</span>
    <span class="sc-title">Plugin Tree Mental Model</span>
    <span class="sc-desc">Everything is a plugin · ~15 min</span>
    <span class="sc-go">Start reading →</span>
  </a>
  <a class="start-card" href="/en/part02/ch09">
    <span class="sc-no">CH 09</span>
    <span class="sc-title">Core Subsystems and Message Flow</span>
    <span class="sc-desc">From your Enter key to its reply · ~12 min</span>
    <span class="sc-go">Start reading →</span>
  </a>
  <a class="start-card" href="/en/part02/ch10">
    <span class="sc-no">CH 10</span>
    <span class="sc-title">Session Log as Source of Truth</span>
    <span class="sc-desc">Every run is traceable · ~10 min</span>
    <span class="sc-go">Start reading →</span>
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
