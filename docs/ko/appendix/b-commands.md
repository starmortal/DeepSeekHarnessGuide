---
title: 부록 B · 명령어 치트시트
description: "설치 / 실행 / plugin / 설정 / slash 명령어"
---

# 부록 B · 명령어 치트시트

<div class="chapter-meta">
  <span class="cm-item"><span class="cm-k">전체 글자 수</span><span class="cm-v">약 540 자</span></span>
  <span class="cm-item"><span class="cm-k">소요 시간</span><span class="cm-v">약 8 분</span></span>
  <span class="cm-item"><span class="cm-k">난이도</span><span class="cm-v hl">참고용</span></span>
</div>

dsh를 일상적으로 사용할 때 필요한 명령어를 시나리오별로 정리했습니다. 깊이 있는 내용은 해당 장으로 넘어가시기 바랍니다.

## 설치 & 업데이트

```bash
# Global install dsh (recommended for beginners)
npm install -g @deepseek-ai/dsh

# Check version
dsh --version

# Update to the latest version
npm install -g @deepseek-ai/dsh@latest

# Run without installing (always use the latest package)
npx @deepseek-ai/dsh web
```

> `npx`는 매번 최신 패키지를 가져오며, global install은 자동으로 업데이트되지 않습니다. 버전을 고정하려면 global install을, 항상 최신을 원하면 npx를 사용하세요.

## 실행

```bash
# Launch the Web UI (most common, default port 3080)
dsh web

# Specify port to launch
dsh web --port 8080

# Launch headless, run a task and exit
dsh --profile headless "Run the current directory's tests and summarize the failures"

# Launch a specified profile
dsh --profile <profile-name>

# Launch with extra config (patch method)
dsh web --patch ./my-plugin/cordis.yml
```

## Plugin 관리

```bash
# List plugins installed in the web profile
dsh plugin --profile web list

# Install a plugin (npm package)
dsh plugin --profile web add <package-name>

# Install a plugin (GitHub source)
dsh plugin --profile web add github:<username>/<repo-name>

# Install a plugin (local path)
dsh plugin --profile web add ./my-plugin

# Install a plugin (tgz package)
dsh plugin --profile web add https://example.com/plugin.tgz

# Remove a plugin
dsh plugin --profile web remove <package-name>
```

> plugin 설치 후 해당 profile을 재시작해야 적용됩니다(bundle 변경은 hot reload되지 않습니다).

## 설정 & 디버그

```bash
# Print the full config tree of the web profile (for "where does this behavior come from")
dsh --profile web --dump-config

# Print the config tree of the headless profile
dsh --profile headless --dump-config

# Launch with a patch and view config
dsh web --patch ./my-config.yml --dump-config
```

> `--dump-config` 출력은 plain text이며, troubleshooting 시 AI에게 전달해 config tree의 문제를 스캔하도록 할 수 있습니다.

## 환경 변수

```bash
# dsh config root directory (default ~/.dsh)
$DSH_HOME

# API Key (highest priority, overrides .credentials.yaml)
$DEEPSEEK_API_KEY

# Local model API Key (LM Studio etc., set any value)
$LM_STUDIO_API_KEY
```

## Web UI Slash 명령어

입력창에서 `/`를 입력하면 현재 사용 가능한 명령어 목록이 팝업으로 표시됩니다.

| 명령어 | 효과 |
|---|---|
| `/compact` | 현재 대화 context를 수동으로 압축하여 초반 history를 요약본으로 만듭니다 |
| `/permission` | 현재 session의 permission mode 확인 또는 전환(read-only / workspace-write / danger-full-access). 인자 없이 입력하면 선택 상자가 표시됩니다 |
| `/model` | 모델을 전환하며 provider별로 그룹화되어 있고, 선택한 모델의 기본 reasoning effort를 적용합니다 |
| `/goal` | 목표 관리: 장기 목표를 생성 / 확인 / 편집 / 일시정지 / 재개 / 삭제합니다 (예: `/goal pause`, `/goal clear`) |

> 버전과 설치된 plugin에 따라 명령어 목록이 달라질 수 있습니다. `/`를 입력해 현재 사용 가능한 항목을 확인하세요.

## 자주 쓰는 조합

```bash
# First day as a beginner: install and run
npm install -g @deepseek-ai/dsh
dsh web

# Troubleshooting four-pack: check version → check config → check plugins → restart
dsh --version
dsh --profile web --dump-config
dsh plugin --profile web list
dsh web

# headless run a one-shot task
dsh --profile headless "Summarize this repo's architecture, write it as markdown"
```
