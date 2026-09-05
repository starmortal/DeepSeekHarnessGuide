---
title: "시작하기"
---

# PART 00 · 시작하기

<div class="lead">
  가장 소박한 질문에서 시작합니다: <b>왜 2026년에 dsh를 배워야 하는가, 그리고 이 책은 어떻게 읽는가.</b>
  짧은 글 두 편으로 "이 책이 무엇을 다루고, 어떻게 읽을지"의 좌표축을 세웁니다.
</div>

<div class="start-grid">
  <a class="start-card" href="/ko/part00/ch00">
    <span class="sc-no">CH 00</span>
    <span class="sc-title">왜 Agent의 레고 시대인가</span>
    <span class="sc-desc">dsh의 위치, 배울 가치 · 약 10분</span>
    <span class="sc-go">읽기 시작 →</span>
  </a>
  <a class="start-card" href="/ko/part00/ch01">
    <span class="sc-no">CH 01</span>
    <span class="sc-title">읽는 법: 세 가지 경로</span>
    <span class="sc-desc">초심자 / 중급자 / 개발자용 읽기법 · 약 8분</span>
    <span class="sc-go">읽기 시작 →</span>
  </a>
</div>

## 그리고, 자신의 경로를 고른다

PART 00을 다 읽은 뒤, CH 01에서 고른 경로에 따라 아래 어느 섹션으로든 들어가세요——모든 장은 클릭 한 번으로 열 수 있습니다.

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
