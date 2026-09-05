---
title: 부록 C · 공식 문서 인덱스
description: "아키텍처 / 서브시스템 / cookbook / CLI 레퍼런스 / 패키지별 README"
---

# 부록 C · 공식 문서 인덱스

<div class="chapter-meta">
  <span class="cm-item"><span class="cm-k">전체 글자 수</span><span class="cm-v">약 1,710 자</span></span>
  <span class="cm-item"><span class="cm-k">소요 시간</span><span class="cm-v">약 5 분</span></span>
  <span class="cm-item"><span class="cm-k">난이도</span><span class="cm-v hl">참고용</span></span>
</div>

dsh 공식 저장소의 문서는 모두 [GitHub repo](https://github.com/deepseek-ai/deepseek-harness)의 `docs/` 디렉터리와 각 패키지의 README에 있습니다. 용도별로 분류해 두었으니, 주제를 깊이 들여다보고 싶을 때 바로 이동하세요.

## 핵심 문서

| 문서 | 내용 | 언제 읽는가 |
|---|---|---|
| [README](https://github.com/deepseek-ai/deepseek-harness) | 프로젝트 개요, 설계 철학, 빠른 시작, 네 가지 런타임 모드 | 처음 접할 때, 전체 그림을 빠르게 파악하고 싶을 때 |
| [architecture.md](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/architecture.md) | 전체 아키텍처 설계: Cordis plugin framework, plugin tree, Profile, Bundle, 계층화된 config 로딩 순서 | "everything is a plugin"이 어떻게 구현되는지 정확히 알고 싶을 때 |
| [Root AGENTS.md](https://github.com/deepseek-ai/deepseek-harness/blob/master/AGENTS.md) | 저장소 구조, 패키지별 디렉터리 구성, 개발 환경 셋업 | 소스를 읽거나 공식 저장소에 PR을 올리고 싶을 때 |
| [docs/AGENTS.md](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/AGENTS.md) | 문서 개발 매뉴얼: 각 종류별 문서에 무엇을 쓰고 무엇을 쓰지 말아야 하는지, 문서 계층화 표준을 규정 | 공식 문서에 PR을 올리거나 문서 구성 규칙을 알고 싶을 때 |

## 서브시스템 문서 (subsystems/)

공식 팀은 각 핵심 서브시스템에 대한 별도 문서를 작성했으며, 총 40여 편입니다. 각 문서는 이 서브시스템이 무엇인지, 어떤 데이터 구조를 흐르게 하는지, 어떤 ctx 서비스와 이벤트를 제공하는지 설명합니다. 모두 [docs/subsystems/](https://github.com/deepseek-ai/deepseek-harness/tree/master/docs/subsystems) 디렉터리에 있습니다.

| 서브시스템 | 다루는 내용 |
|---|---|
| **session** | Session 관리: 생성, 재개, fork, 영속화, event stream |
| **agent-loop** | Agent loop: think → call tool → see result 반복 메커니즘 |
| **tools** | Tool 등록, Schema, 실행 파이프라인, approval, sandbox |
| **llm** | Model 적응, Provider, 요청/응답, cache |
| **skills** | Skill 발견, 로드, 호출 메커니즘 |
| **subagent** | Subagent 스케줄링, 두 가지 모드(spawn / fork), 결과 통합 |
| **workflow** | Workflow orchestration, 다단계 연결 |
| **sandbox** | 파일 sandbox, 세 가지 permission 레벨, approval 흐름 |
| **trajectory** | Trajectory 기록, replay, 내보내기 |
| **credentials** | Credential 관리, write-only 저장, 마스킹 |
| **mcp** | MCP 클라이언트, 서버 통합, 도구 브릿징 |
| **compaction** | Context 압축, 트리거 타이밍, 요약 생성 |

> 서브시스템 문서는 알파벳 순서로 정렬되어 있습니다. 메커니즘을 깊이 들여다보고 싶을 때는 해당 파일을 바로 찾아보세요.

## Cookbook

공식 단계별 hands-on 튜토리얼은 [docs/cookbook/](https://github.com/deepseek-ai/deepseek-harness/tree/master/docs/cookbook) 디렉터리에 있습니다.

| 튜토리얼 | 무엇을 가르치는가 |
|---|---|
| **Add a package** | dsh에 새로운 npm dependency를 추가하는 방법 |
| **Add a tool** | 커스텀 도구를 작성해 Agent에 등록하는 방법 |
| **Add an LLM adapter** | 새로운 모델 provider를 연결하는 방법 |
| **Extend plugin forms** | client plugin, UI plugin, bundle 작성 방법 |
| **Custom Profile** | 새로운 profile 조합을 만드는 방법 |

> Cookbook는 "따라 하면 바로 동작하는" 튜토리얼로, 서브시스템 문서보다 hands-on에 가깝습니다.

## CLI Reference

[apps/cli/reference/README.md](https://github.com/deepseek-ai/deepseek-harness/blob/master/apps/cli/reference/README.md) — dsh command line의 완전한 동작 레퍼런스로, 인자 파싱, profile 실행 흐름, 각 서브명령어의 정확한 동작을 포함합니다. 스크립트 작성이나 troubleshooting 시 참고하세요.

## 패키지별 README

이 저장소는 monorepo이며, `packages/` 아래에 49개 그룹이 있고 각 패키지는 자체 README를 가집니다. 자주 쓰는 것은 다음과 같습니다.

| 패키지 | 역할 |
|---|---|
| `@deepseek-ai/dsh` | 메인 엔트리, CLI 바이너리 |
| `@deepseek-ai/cordis` | 하위 plugin framework |
| `@deepseek-ai/dsh-web-app` | Web UI 프론트엔드 |
| `@deepseek-ai/dsh-headless` | Headless 런타임 |
| `@deepseek-ai/dsh-mcp-client` | MCP client plugin |
| `@deepseek-ai/dsh-tool-skill` | Skill 도구 plugin |

## 이 인덱스를 어떻게 활용하는가

1. **개념을 이해하고 싶다** → README와 architecture.md를 먼저 읽으세요
2. **메커니즘을 이해하고 싶다** → subsystems/ 아래의 해당 서브시스템을 찾으세요
3. **따라가며 만들어 보고 싶다** → cookbook/ 아래의 해당 튜토리얼을 찾으세요
4. **명령어 동작이 불확실하다** → CLI reference를 확인하세요
5. **특정 패키지의 구현을 보고 싶다** → packages/ 아래의 해당 패키지 README를 찾으세요
