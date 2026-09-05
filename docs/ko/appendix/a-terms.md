---
title: 부록 A · 용어집
description: "다섯 가지 핵심 용어 분류: 아키텍처 / 런타임 / 도구 / 보안 / 모델"
---

# 부록 A · 용어집

<div class="chapter-meta">
  <span class="cm-item"><span class="cm-k">전체 글자 수</span><span class="cm-v">약 2,570 자</span></span>
  <span class="cm-item"><span class="cm-k">소요 시간</span><span class="cm-v">약 10 분</span></span>
  <span class="cm-item"><span class="cm-k">난이도</span><span class="cm-v hl">참고용</span></span>
</div>

블루북이나 공식 문서를 읽으며 만나는 용어를 분류별로 정리했습니다. 각 용어는 한 줄 설명만 제공하며, 깊이 있는 내용은 해당 장으로 넘어가시기 바랍니다.

## 아키텍처

| 용어 | 한 줄 설명 |
|---|---|
| **Cordis** | dsh의 기반 계층에 있는 plugin framework. 서비스 등록, 타입화된 이벤트, 가역적 side effect라는 세 가지 primitive를 제공합니다. dsh의 모든 기능은 이 위에서 동작합니다 |
| **Plugin** | dsh의 최소 기능 단위로, `apply(ctx)` 함수를 export하는 모듈. 시작 시 로드되어, 도구를 등록하고 이벤트를 수신하며, ctx를 통해 서비스를 제공합니다 |
| **Bundle** | plugin의 배포 형식으로, npm 패키지이며 런타임에 어떤 plugin과 config를 기여할지 선언합니다. plugin 설치는 사실상 bundle을 설치하는 것과 같습니다 |
| **Profile** | 일련의 plugin 조합 레시피로, "이 plugin 트리가 어떻게 구성되는지"를 결정합니다. web, headless는 모두 profile이며, `$DSH_HOME/profiles/` 아래에 저장됩니다 |
| **Context (ctx)** | plugin이 로드될 때 받는 context 객체로, 만능입니다 — 도구 등록, 서비스 호출, 이벤트 수신, config 읽기/쓰기가 모두 ctx에 의존합니다 |
| **Service** | plugin이 ctx를 통해 제공하는 재사용 가능한 기능으로, 다른 plugin이 호출할 수 있습니다. 예: session service, tool registry service |
| **Event** | plugin 간 통신 방식으로, pub/sub 패턴입니다. 예: 도구 실행 전 `tools/pre-execute` 이벤트가 발생하며, 다른 plugin이 구독하여 가로챌 수 있습니다 |
| **Effect** | plugin이 런타임에 가하는 변경(도구 등록, config 추가 등). plugin이 unload될 때 역순으로 롤백되어 깨끗하게 복원됩니다 |
| **Seam** | plugin 간의 인터페이스 계약으로, 한 plugin이 "이런 능력이 필요하다"고 선언하면 다른 plugin이 "이 능력을 가지고 있다"고 제공하며, 시스템이 자동으로 매칭합니다 |

## 런타임

| 용어 | 한 줄 설명 |
|---|---|
| **Agent Loop** | "생각 → 도구 호출 → 결과 확인 → 다시 생각"의 반복 루프로, 작업 완료 또는 종료 조건 충족까지 계속됩니다. Agent와 chatbot의 본질적 차이는 바로 여기에 있습니다 |
| **Turn** | 사용자가 메시지를 보내고 Agent가 최종 응답을 줄 때까지가 한 turn입니다. 내부적으로 한 turn에 여러 번의 도구 호출이 포함될 수 있습니다 |
| **Step** | Agent loop의 한 번의 반복으로, 모델 호출이거나 도구 호출일 수 있습니다. 한 turn = 여러 step |
| **Session** | 하나의 완전한 대화 context로, workspace에 바인딩되어 저장소에 영속화됩니다. dsh를 종료했다 다시 열어도 이어서 진행할 수 있습니다 |
| **Trajectory** | session의 완전한 실행 기록 — system prompt, 모델 요청, 도구 호출, subagent 스케줄링이 모두 timeline에 기록됩니다 |
| **Headless** | 인터페이스가 필요 없는 실행 방식으로, 한 명령으로 작업을 실행하고 종료합니다. 자동화, CI/CD, scheduled task에 적합합니다 |
| **Web UI** | 브라우저 인터페이스로, 대화형으로 대화를 나눕니다. `dsh web`으로 시작하며 기본 주소는 `http://127.0.0.1:3080`입니다 |
| **Fork** | session의 특정 historical node에서 새로운 경로를 열며, 원래 session은 유지됩니다. "다른 방식으로 시도해 보자"에 적합합니다 |
| **Compaction** | 초반 대화를 요약본으로 압축해 원본 history를 대체하여 context 공간을 확보합니다. `/compact` 명령으로 수동 실행합니다 |

## 도구 & 기능

| 용어 | 한 줄 설명 |
|---|---|
| **Tool** | Agent가 호출할 수 있는 함수로, 예: 파일 읽기, 명령 실행, 웹 검색. 각 도구는 Schema(파라미터 정의)를 가집니다 |
| **Tool Schema** | 도구의 파라미터 정의로, 모델에게 이 도구가 어떤 파라미터를 어떤 타입으로 받는지 알려줍니다. 모델은 Schema에 따라 호출을 구성합니다 |
| **MCP (Model Context Protocol)** | Model Context Protocol. Agent가 외부 도구 서버에 연결할 수 있도록 하는 표준 인터페이스입니다. dsh는 `dsh-mcp-client` plugin을 통해 지원합니다 |
| **MCP Server** | 일련의 도구를 제공하는 외부 서비스로, 예: Firecrawl(웹 스크래핑), GitHub(레포지토리 조작). dsh가 연결하면 Agent가 이 도구들을 사용할 수 있습니다 |
| **Skill** | 모델을 위해 작성된 instruction으로, "이런 종류의 작업을 만나면 이 단계들을 따르라"고 알려줍니다. workspace 또는 사용자 디렉터리에 저장되며, 모델이 필요할 때 로드합니다 |
| **Subagent** | 메인 agent가 하위 작업을 맡기기 위해 파견한 독립적인 agent로, 완료되면 결과를 반환합니다. 두 가지 모드: subagent(history 없음), subagent_fork(history 포함) |
| **Workflow** | 다단계 orchestration으로, 여러 작업을 순서대로 또는 분기하여 연결합니다. 단일 단계의 고정 루틴은 Skill을, 다단계 연결은 Workflow를 사용합니다 |
| **Provider** | 모델 API 제공자로, 예: DeepSeek, OpenAI, Anthropic. dsh는 Model Adapter를 통해 서로 다른 provider에 연결합니다 |

## 보안

| 용어 | 한 줄 설명 |
|---|---|
| **Sandbox** | Agent가 어떤 파일과 리소스에 접근할 수 있는지 제한하는 격리 메커니즘. OS kernel 레벨이며 JS 검사가 아니므로 모델이 우회할 수 없습니다 |
| **Permission** | 세 단계: read-only(읽기 전용), workspace-write(기본값, workspace에만 쓰기 가능), danger-full-access(제한 없음) |
| **Approval** | Agent가 권한을 벗어나는 일을 하려고 할 때 팝업으로 동의를 묻습니다. 한 번 허용은 한 번만 허용이며 영구적이 아닙니다 |
| **Write-only** | API Key 저장 방식으로, 저장 후 인터페이스는 평문을 다시 보여주지 않고 마스킹된 descriptor만 표시합니다. 평문은 로컬 `.credentials.yaml`에만 존재합니다 |

## 모델

| 용어 | 한 줄 설명 |
|---|---|
| **Model Adapter** | 서로 다른 모델 provider의 API를 dsh 내부 표준 인터페이스로 통합하는 plugin. 모델을 바꾼다 = adapter를 바꾸는 것이며, 다른 코드를 수정할 필요가 없습니다 |
| **LLM (Large Language Model)** | 사고와 텍스트 생성을 담당하는 핵심. dsh 자체는 모델을 포함하지 않고 orchestration만 담당합니다 |
| **KV Cache** | 모델이 추론 중 이미 계산한 prefix를 캐시하여, 동일 prefix의 후속 요청은 재계산 없이 그대로 재사용합니다. hit된 부분은 정상 가격보다 훨씬 저렴하게 청구됩니다 |
| **Context Window** | 모델이 한 번에 처리할 수 있는 최대 token 수. 이 한도를 초과하면 모델에 전송되지 않으며, 사실상 "잊음"이 됩니다 |
| **Token** | 모델이 텍스트를 처리하는 기본 단위로, 중국어 약 1자 = 1.5 tokens, 영어 약 4자 = 1 token. 과금과 context 한도 모두 token을 기준으로 합니다
