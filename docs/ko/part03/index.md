---
title: "Agent를 조립하라"
---

# PART 03 · Agent를 조립하라

<div class="lead">
  Agent에 장비를 더하다: 도구 샌드박스, MCP, 서브에이전트, Skill, 스케줄링, 로컬 배포. 여섯 장으로, 기본 Agent를 제대로 일하는 어시스턴트로 업그레이드한다.
</div>

<div class="start-grid">
  <a class="start-card" href="/ko/part03/ch12">
    <span class="sc-no">CH 12</span>
    <span class="sc-title">도구와 샌드박스</span>
    <span class="sc-desc">안전한 실행 · 약 15 분</span>
    <span class="sc-go">읽기 시작 →</span>
  </a>
  <a class="start-card" href="/ko/part03/ch13">
    <span class="sc-no">CH 13</span>
    <span class="sc-title">MCP 생태계에 연결</span>
    <span class="sc-desc">Firecrawl 실습 · 약 20 분</span>
    <span class="sc-go">읽기 시작 →</span>
  </a>
  <a class="start-card" href="/ko/part03/ch14">
    <span class="sc-no">CH 14</span>
    <span class="sc-title">서브에이전트와 멀티 Agent 오케스트레이션</span>
    <span class="sc-desc">spawn / fork · 약 12 분</span>
    <span class="sc-go">읽기 시작 →</span>
  </a>
  <a class="start-card" href="/ko/part03/ch15">
    <span class="sc-no">CH 15</span>
    <span class="sc-title">Skill과 워크플로</span>
    <span class="sc-desc">재사용 가능한 능력 · 약 15 분</span>
    <span class="sc-go">읽기 시작 →</span>
  </a>
  <a class="start-card" href="/ko/part03/ch16">
    <span class="sc-no">CH 16</span>
    <span class="sc-title">예약 작업과 백그라운드 실행</span>
    <span class="sc-desc">매일 핫토픽 자동 푸시 · 약 15 분</span>
    <span class="sc-go">읽기 시작 →</span>
  </a>
  <a class="start-card" href="/ko/part03/ch17">
    <span class="sc-no">CH 17</span>
    <span class="sc-title">로컬 배포와 Token 자유</span>
    <span class="sc-desc">LM Studio 로컬 모델 · 약 18 분</span>
    <span class="sc-go">읽기 시작 →</span>
  </a>
</div>

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
