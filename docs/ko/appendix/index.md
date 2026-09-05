---
title: "부록"
---

# 부록 · 빠른 참조

<div class="lead">
  용어집, 명령어 참조, 공식 문서 색인, 면접 Q&A. 바로 꺼내 쓸 수 있는 네 개의 부록입니다.
</div>

<div class="start-grid">
  <a class="start-card" href="/ko/appendix/a-terms">
    <span class="sc-no">부록 A</span>
    <span class="sc-title">용어집</span>
    <span class="sc-desc">아키텍처 / 런타임 / 도구 / 보안 / 모델</span>
    <span class="sc-go">읽기 →</span>
  </a>
  <a class="start-card" href="/ko/appendix/b-commands">
    <span class="sc-no">부록 B</span>
    <span class="sc-title">명령어 참조</span>
    <span class="sc-desc">dsh 명령어 + 슬래시 명령어</span>
    <span class="sc-go">읽기 →</span>
  </a>
  <a class="start-card" href="/ko/appendix/c-docs">
    <span class="sc-no">부록 C</span>
    <span class="sc-title">공식 문서 색인</span>
    <span class="sc-desc">dsh 공식 레포지토리 패키지 링크</span>
    <span class="sc-go">읽기 →</span>
  </a>
  <a class="start-card" href="/ko/appendix/d-interview">
    <span class="sc-no">부록 D</span>
    <span class="sc-title">면접 Q&A</span>
    <span class="sc-desc">이 책을 바탕으로 한 8개의 핵심 질문</span>
    <span class="sc-go">읽기 →</span>
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
