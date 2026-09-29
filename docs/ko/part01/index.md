---
title: "From 0 to 1: dsh 실행하기"
---

# PART 01 · From 0 to 1

<div class="lead">
  초심자에게 권합니다. dsh를 설치하고, 실행하고, 첫 대화를 완료하세요. 일곱 장에 걸쳐 이해부터 문제 해결까지 차근차근 기초를 쌓습니다.
</div>

<div class="start-grid">
  <a class="start-card" href="/ko/part01/ch02">
    <span class="sc-no">CH 02</span>
    <span class="sc-title">dsh 알아보기</span>
    <span class="sc-desc">세 가지 직관 + 역량 매트릭스 · 약 10 분</span>
    <span class="sc-go">읽기 시작 →</span>
  </a>
  <a class="start-card" href="/ko/part01/ch03">
    <span class="sc-no">CH 03</span>
    <span class="sc-title">설치와 실행</span>
    <span class="sc-desc">Node.js + 한 줄 명령 · 약 15 분</span>
    <span class="sc-go">읽기 시작 →</span>
  </a>
    <a class="start-card" href="/ko/part01/ch04">
    <span class="sc-no">CH 04</span>
    <span class="sc-title">공식 데스크톱 앱</span>
    <span class="sc-desc">독립 앱, Node 불필요 · 약 13 분</span>
    <span class="sc-go">읽기 시작 →</span>
  </a>
<a class="start-card" href="/ko/part01/ch05">
    <span class="sc-no">CH 05</span>
    <span class="sc-title">Web UI 알아보기</span>
    <span class="sc-desc">레이아웃 + 첫 대화 · 약 12 분</span>
    <span class="sc-go">읽기 시작 →</span>
  </a>
  <a class="start-card" href="/ko/part01/ch06">
    <span class="sc-no">CH 06</span>
    <span class="sc-title">명령행: headless</span>
    <span class="sc-desc">UI 없는 자동화 · 약 10 분</span>
    <span class="sc-go">읽기 시작 →</span>
  </a>
  <a class="start-card" href="/ko/part01/ch07">
    <span class="sc-no">CH 07</span>
    <span class="sc-title">모델과 추론 강도 설정</span>
    <span class="sc-desc">DeepSeek + 서드파티 모델 · 약 12 분</span>
    <span class="sc-go">읽기 시작 →</span>
  </a>
  <a class="start-card" href="/ko/part01/ch08">
    <span class="sc-no">CH 08</span>
    <span class="sc-title">문제 해결 치트시트</span>
    <span class="sc-desc">흔한 오류 + 해결법 · 약 8 분</span>
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
