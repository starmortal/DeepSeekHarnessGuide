---
title: "플러그인의 설치, 작성, 그리고 발행"
---

# PART 04 · 플러그인의 설치, 작성, 그리고 발행

<div class="lead">
  설치부터 개발, 그리고 발행까지. 7개 장으로 구성됩니다: 먼저 커뮤니티 플러그인의 설치를 익히고, 그다음 첫 hello-plugin을 직접 작성하고, 도구/훅/UI 플러그인을 거쳐, 마지막에 누구나 한 줄 명령으로 설치할 수 있도록 발행합니다.
</div>

<div class="start-grid">
  <a class="start-card" href="/ko/part04/ch18">
    <span class="sc-no">CH 18</span>
    <span class="sc-title">플러그인 설치</span>
    <span class="sc-desc">dsh plugin + 플러그인 마켓 · 약 12분</span>
    <span class="sc-go">읽기 시작 →</span>
  </a>
  <a class="start-card" href="/ko/part04/ch19">
    <span class="sc-no">CH 19</span>
    <span class="sc-title">첫 플러그인: hello-plugin</span>
    <span class="sc-desc">최소한으로 실행 가능한 플러그인 · 약 15분</span>
    <span class="sc-go">읽기 시작 →</span>
  </a>
  <a class="start-card" href="/ko/part04/ch20">
    <span class="sc-no">CH 20</span>
    <span class="sc-title">플러그인의 세 가지 형태</span>
    <span class="sc-desc">service / loader / patch · 약 12분</span>
    <span class="sc-go">읽기 시작 →</span>
  </a>
  <a class="start-card" href="/ko/part04/ch21">
    <span class="sc-no">CH 21</span>
    <span class="sc-title">도구 플러그인: defineTool</span>
    <span class="sc-desc">Agent에 새로운 능력 추가 · 약 12분</span>
    <span class="sc-go">읽기 시작 →</span>
  </a>
  <a class="start-card" href="/ko/part04/ch22">
    <span class="sc-no">CH 22</span>
    <span class="sc-title">훅 플러그인과 가로채기</span>
    <span class="sc-desc">tools/pre-execute · 약 10분</span>
    <span class="sc-go">읽기 시작 →</span>
  </a>
  <a class="start-card" href="/ko/part04/ch23">
    <span class="sc-no">CH 23</span>
    <span class="sc-title">UI 플러그인</span>
    <span class="sc-desc">설정 페이지 + 이벤트 리스너 · 약 15분</span>
    <span class="sc-go">읽기 시작 →</span>
  </a>
  <a class="start-card" href="/ko/part04/ch24">
    <span class="sc-no">CH 24</span>
    <span class="sc-title">발행과 배포</span>
    <span class="sc-desc">npm + GitHub Release · 약 12분</span>
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