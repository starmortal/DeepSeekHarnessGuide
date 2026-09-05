---
layout: home

hero:
  name: DeepSeek Harness 청사진
  text: 실전 과제를 주축으로 한 dsh 가이드
  tagline: dsh를 제대로 써보자. 실전 과제로 0에서 1을 만들고, 1에서 100으로——모든 성공적인 작업을 재사용 가능한 워크 시스템으로 쌓아 올린다. 모든 것은 플러그인이며, 모든 실행은 추적 가능하다.
  image:
    src: /logo.jpg
    alt: DeepSeek Harness 청사진
  actions:
    - theme: brand
      text: 읽기 시작
      link: /ko/part00/
    - theme: alt
      text: 전체 목차 보기
      link: /ko/part00/
---

<div style="text-align:center;margin-top:8px;">
  <span class="hlm" style="font-family:var(--vp-font-family-mono);font-size:15px;letter-spacing:.05em;">everything is a plugin · Agent = Model + Harness</span>
</div>

<StatsBar />

<PathCards />

<div class="contrib-wrap">
  <div class="contrib-label">COMMUNITY <b>/ 공헌</b></div>
  <h2 class="contrib-title">이 책은 커뮤니티가 함께 만든 결과물입니다</h2>
  <p class="contrib-desc">방금 시작하신 초심자든, 이미 프로덕션에서 dsh를 굴리고 있는 개발자든 모두 환영합니다.</p>

  <div class="contrib-cards">
    <a class="c-card" href="https://github.com/super-mortal/DeepSeekHarnessGuide/issues" target="_blank">
      <span class="c-no">01</span>
      <span class="c-title">Issue 제출</span>
      <span class="c-desc">오류 신고, 제안, 보완할 내용 요청</span>
    </a>
    <a class="c-card" href="https://github.com/super-mortal/DeepSeekHarnessGuide/pulls" target="_blank">
      <span class="c-no">02</span>
      <span class="c-title">PR 보내기</span>
      <span class="c-desc">오타 수정, 챕터 추가, 코드 예제 개선</span>
    </a>
    <a class="c-card" href="https://github.com/super-mortal/DeepSeekHarnessGuide/discussions" target="_blank">
      <span class="c-no">03</span>
      <span class="c-title">경험 공유</span>
      <span class="c-desc">실전에서 부딪힌 시행착오, 추천 플러그인, 사용 팁</span>
    </a>
  </div>

  <div class="contrib-foot">
    <span class="hlm">Open Source · MIT · Community Driven</span>
  </div>
</div>

<style scoped>
.contrib-wrap {
  margin-top: 48px;
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 28px;
}
.contrib-label {
  font-family: var(--vp-font-family-mono);
  font-size: 12.5px;
  letter-spacing: 0.18em;
  color: var(--vp-c-text-3);
}
.contrib-label b { color: var(--vp-c-text-1); }
.contrib-title {
  font-size: 24px;
  font-weight: 900;
  color: var(--vp-c-text-1);
  margin-top: 10px;
  letter-spacing: 0.01em;
}
.contrib-desc {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin-top: 8px;
  line-height: 1.8;
}
.contrib-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 14px;
  margin-top: 22px;
}
.c-card {
  display: block;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  padding: 18px 18px 16px;
  background: var(--vp-c-bg);
  text-decoration: none;
}
.c-card:hover { background: var(--hl); }
.c-no {
  display: inline-block;
  font-family: var(--vp-font-family-mono);
  font-size: 11.5px;
  font-weight: 700;
  background: var(--vp-c-text-1);
  color: var(--hl);
  padding: 2px 8px;
  border-radius: 2px;
  letter-spacing: 0.05em;
}
.c-title {
  display: block;
  font-size: 17px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-top: 11px;
}
.c-desc {
  display: block;
  font-size: 12.5px;
  color: var(--vp-c-text-3);
  margin-top: 6px;
  line-height: 1.7;
}
.contrib-foot {
  margin-top: 24px;
  text-align: center;
}
.contrib-foot .hlm {
  font-family: var(--vp-font-family-mono);
  font-size: 13px;
  letter-spacing: 0.05em;
}
</style>
