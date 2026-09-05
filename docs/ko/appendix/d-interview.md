---
title: 부록 D · 면접 Q&A 치트시트
description: "블루북에서 정리한 8개의 빈출 면접 질문"
---

# 부록 D · 면접 Q&A 치트시트

<div class="chapter-meta">
  <span class="cm-item"><span class="cm-k">전체 글자 수</span><span class="cm-v">약 2,470 자</span></span>
  <span class="cm-item"><span class="cm-k">소요 시간</span><span class="cm-v">약 15 분</span></span>
  <span class="cm-item"><span class="cm-k">난이도</span><span class="cm-v hl">학습 후 자가 점검</span></span>
</div>

블루북 전체를 마친 후 이 8개의 질문으로 자가 점검하세요. 각 문항은 시험 포인트와 답변 방향을 제공할 뿐, 표준 답안은 아닙니다 — 면접에서는 외운 대답보다 본인만의 이해를 설명하는 것이 더 중요합니다.

## 개념 문항

### Q1: 1분 안에 DeepSeek Harness를 소개해 주세요?

**시험 포인트**: 기술적 감수성, 단순히 뉴스를 본 것이 아니라 실제로 사용해 봤는지.

**답변 방향**: DeepSeek이 공식 오픈소스로 공개한 Agent 런타임 프레임워크로, MIT 라이선스이며 핵심 사상은 "everything is a plugin"입니다 — 모델 적응, 도구 등록, session 관리, sandbox 실행, 심지어 Agent loop 자체까지 모두 pluggable하며, Cordis plugin 시스템 위에서 동작합니다. LangChain처럼 "부품을 줘서 직접 조립하라"는 라이브러리와 달리, dsh는 완전한 런타임이며 메인 루프, session, sandbox, 도구 스케줄링이 모두 내장되어 있어 개발자는 plugin을 고르고 config를 작성하기만 하면 됩니다. 현재 developer preview 단계이며 빠르게 발전하고 있습니다.

### Q2: dsh의 "everything is a plugin"은 정확히 무엇을 의미하나요? 일반적인 modularity와 어떻게 다른가요?

**시험 포인트**: 아키텍처 이해의 깊이, pluginnization과 modularity의 본질적 차이를 설명할 수 있는지.

**답변 방향**: "코드를 모듈로 나눈다" 정도로 단순하지 않습니다. dsh의 pluginnization에는 세 가지 특징이 있습니다. 첫째, 특권 코어가 없습니다 — Agent Loop 같은 가장 근본적인 것조차 plugin이라 이론적으로 통째로 교체할 수 있습니다. 둘째, 런타임 동적 로딩 — 어떤 plugin을 로드할지는 시작 시 Profile config로 결정되며, 컴파일 타임에 하드코딩되지 않습니다. 셋째, 가역적 side effect — 모든 plugin의 시스템 변경은 역순으로 롤백할 수 있어, uninstall 후 시스템이 깨끗하게 복원됩니다. 기반에는 Cordis의 세 가지 primitive가 있습니다: Service(서비스 등록), Event(타입화된 이벤트), Effect(가역적 side effect).

### Q3: Profile과 Bundle은 어떤 관계인가요?

**시험 포인트**: dsh의 config 계층화를 설명할 수 있는지.

**답변 방향**: Bundle은 배포 단위 — npm 패키지이며 런타임에 어떤 plugin과 config를 기여할지 선언합니다. Profile은 실행 조합 — `$DSH_HOME/profiles/<name>/` 아래에 저장되며 Bundle의 집합으로, "이 plugin tree가 어떻게 생겼는지"를 결정합니다. web, headless는 모두 Profile이며, 차이는 단지 다른 Bundle을 쌓았다는 점뿐입니다. Bundle을 "요리"라 하면 Profile은 "주문된 한 테이블의 코스"라고 이해하면 됩니다 — 같은 요리도 다른 테이블에 등장할 수 있으며, 각 테이블의 조합은 서로 다릅니다.

### Q4: dsh의 네 가지 런타임 모드는 각각 어떤 시나리오에 적합한가요?

**시험 포인트**: 단순히 Web UI만 돌려본 게 아니라 실제로 여러 모드를 써봤는지.

**답변 방향**: Web 모드는 대화형 인터랙션으로, 일상 개발, 디버깅, Agent의 작업을 지켜볼 때 사용합니다. Headless 모드는 일회성 작업으로, 실행 후 종료되며 자동화 스크립트, CI/CD, scheduled task에 적합합니다. SDK 모드는 자신의 프로그램 안에서 호출하는 방식으로, 기존 시스템에 Agent 기능을 통합할 때 적합합니다. 그리고 Minimal 모드는 가장 핵심적인 Agent loop만 유지하는 형태로, 하위 메커니즘을 연구하거나 대규모 커스터마이즈를 할 때 적합합니다. 네 가지 모드는 동일한 plugin 레이어를 공유하며, 차이는 단지 어떤 Bundle을 쌓았느냐일 뿐입니다 — 이것이야말로 "everything is a plugin"의 직접적인 구현입니다.

## 실습 문항

### Q5: dsh의 도구 호출 파이프라인은 어떻게 작동하나요? 왜 직접 실행 대신 파이프라인으로 설계했나요?

**시험 포인트**: 핵심 메커니즘에 대한 이해, 설계 의도를 말할 수 있는지.

**답변 방향**: 모델이 도구 호출을 결정한 후 곧바로 실행하지 않고 여러 단계의 파이프라인을 거칩니다. 먼저 pre-execute 정책을 통과하고(가로채기, 수정, 거부 가능), 그다음 approval을 거쳐(권한을 벗어날 때 사용자에게 팝업으로 묻고), 다시 sandbox에서 실행되며(OS kernel 레벨 격리로 어떤 파일에 접근 가능한지 제한), 실행 결과는 post-execute를 통과해(기록, 변환, 감사 가능) 비로소 모델로 반환됩니다. 파이프라인으로 설계한 이유는 모든 단계를 plugin이 가로채고 확장할 수 있기 때문입니다 — 감사 로그를 추가하거나, 도구 화이트리스트를 더하거나, 실행 파라미터를 바꾸는 일이 모두 코어 코드를 수정하지 않고도 plugin 하나만 걸면 됩니다. 이것은 실행 계층에서의 "everything is a plugin" 구현이기도 합니다.

### Q6: MCP와 Skill의 차이는 무엇인가요? 각각 언제 사용하나요?

**시험 포인트**: 두 가지 기능 확장 방식을 구분할 수 있는지.

**답변 방향**: MCP는 외부 도구를 연결하기 위한 표준 프로토콜입니다 — 예를 들어 Agent가 GitHub을 조작하거나, 웹을 스크래핑하거나, 데이터베이스를 조회할 수 있게 하는 것은 "행동 능력"이며, MCP 서버가 도구 함수들의 묶음으로 노출하고 Agent가 도구를 호출해 결과를 받습니다. Skill은 모델을 위해 작성된 instruction으로, "이런 종류의 작업을 만나면 이 단계들을 따르라"고 알려주는 것입니다 — 예를 들어 코드 리뷰 체크리스트, 주간 보고 템플릿이며, 새로운 도구를 더하는 것이 아니라 모델의 행동 방식을 바꿉니다. 쉽게 말해 MCP는 Agent에게 손을 하나 더 쥐어주는 것이고, Skill은 Agent에게 매뉴얼을 하나 더 쥐어주는 것입니다. 외부 시스템 연결이 필요하면 MCP를, 작업 흐름을 굳히고 싶으면 Skill을 사용하세요.

### Q7: dsh의 보안 모델은 어떻게 설계되어 있나요?

**시험 포인트**: 보안에 대한 관심, 다층 보호 방식을 말할 수 있는지.

**답변 방향**: 세 겹의 보호가 있습니다. 첫 번째 층은 파일 sandbox — OS kernel 레벨 격리이며 JS 검사가 아닙니다. 세 단계의 권한이 있습니다: read-only(읽기 전용), workspace-write(기본값, 현재 workspace에만 쓰기 가능), danger-full-access(제한 없음). 두 번째 층은 작업 approval — Agent가 권한을 벗어나는 일을 하려고 할 때 팝업으로 묻습니다. 한 번 허용은 한 번뿐이며 영구적이지 않습니다. 세 번째 층은 write-only 키 — API Key를 저장한 후 인터페이스는 평문을 다시 보여주지 않고 마스킹된 descriptor만 표시하며, 평문은 로컬 `.credentials.yaml`에만 존재합니다. 핵심 사상은 "기본적으로 제한하고 필요할 때 허용"이지, "처음부터 모든 권한을 주고 사용자의 주의에 기대는 것"이 아닙니다.

## 개방형 문항

### Q8: 팀의 기술을 선택해야 한다면 dsh와 Claude Code, Codex를 비교해 장단점은 무엇인가요?

**시험 포인트**: 기술 선정 능력, 단순히 한쪽만 옹호하지 않고 객관적으로 분석할 수 있는지.

**답변 방향**: dsh의 장점: 첫째, 완전 오픈소스이며 MIT 라이선스로 특정 vendor에 종속되지 않고 모델을 자유롭게 연결할 수 있습니다 — DeepSeek, OpenAI, 로컬 모델 모두 가능합니다. 둘째, pluginnization 정도가 가장 높아 Agent loop조차 교체할 수 있으며 커스터마이즈 공간이 큽니다. 셋째, Headless와 SDK 모드는 자동화 및 통합 시나리오에 적합하여 단순한 채팅 도구를 넘어섭니다. 단점: 첫째, 너무 새롭고 developer preview 단계라 API가 불안정하고 문서가 완전하지 않으며 커뮤니티 생태계가 아직 성장 중입니다. 둘째, 기본 Web UI 경험이 Claude Code, Codex에 비해 아직 차이가 있으며 많은 기능을 plugin 추가로 보완해야 합니다. 셋째, 팀에서 config와 plugin을 만질 의향이 있는 사람이 없다면 상용 제품만큼의 out-of-the-box 경험은 나오지 않습니다. 선정 제안: 팀에 커스터마이즈 요구가 있고 자체 Agent 인프라를 구축하고 싶으며 약간의 시행착오를 감수할 수 있다면 dsh를 선택하세요. 개인이 일상적으로 안심하고 코딩하는 용도라면 상용 제품이 더 성숙합니다.
