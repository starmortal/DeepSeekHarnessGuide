<script setup>
import { useData } from 'vitepress'

const { lang } = useData()

const langPrefix = {
  'zh-CN': '',
  'en': '/en',
  'ja': '/ja',
  'ko': '/ko',
  'es': '/es',
  'pt-BR': '/pt',
}

const prefix = langPrefix[lang.value] || ''

const partsI18n = {
  'zh-CN': {
    label: 'READING PATH <b>/ 01—06</b>',
    hint: '六段路径，按你的目标进入。点击卡片直接跳转到对应 PART 的完整目录。',
    parts: [
      { no: 'PART 01', title: '从 0 到 1', range: 'CH 02–07', tag: '新手推荐', link: '/part01/', desc: '先把 dsh 跑起来：认识、安装、第一次对话、命令行、配置模型、排障。' },
      { no: 'PART 02', title: '理解骨架', range: 'CH 08–10', tag: '架构篇', link: '/part02/', desc: '万物皆插件：插件树心智模型、核心子系统与消息流转、会话日志真相源。' },
      { no: 'PART 03', title: '组装你的 Agent', range: 'CH 11–16', tag: '组装', link: '/part03/', desc: '给 Agent 配齐装备：工具沙箱、MCP、子代理、Skill、定时、本地部署。' },
      { no: 'PART 04', title: '会装、会写、会发插件', range: 'CH 17–23', tag: '插件', link: '/part04/', desc: '系统学安装，写第一个 hello-plugin，到工具 / 钩子 / UI，最后发布让大家一键装。' },
      { no: 'PART 05', title: '场景实操', range: 'CH 24–26', tag: '会做事', link: '/part05/', desc: '把能力组合成能交付的结果：个人网站、PPT、视频。' },
      { no: 'PART 06', title: '生产与生态', range: 'CH 27–29', tag: '进阶', link: '/part06/', desc: '从能用到融入生态：部署选型、安全合规、可观测与上下文管理。' },
    ],
  },
  'en': {
    label: 'READING PATH <b>/ 01—06</b>',
    hint: 'Six paths, pick one by your goal. Click a card to jump to that PART\'s full table of contents.',
    parts: [
      { no: 'PART 01', title: 'From 0 to 1', range: 'CH 02–07', tag: 'Beginner', link: '/en/part01/', desc: 'Get dsh running: meet it, install it, first conversation, CLI, model config, troubleshooting.' },
      { no: 'PART 02', title: 'Understand the Skeleton', range: 'CH 08–10', tag: 'Architecture', link: '/en/part02/', desc: 'Everything is a plugin: plugin tree mental model, core subsystems & message flow, session log as source of truth.' },
      { no: 'PART 03', title: 'Assemble Your Agent', range: 'CH 11–16', tag: 'Assemble', link: '/en/part03/', desc: 'Equip your Agent: tool sandbox, MCP, subagents, Skills, scheduling, local deployment.' },
      { no: 'PART 04', title: 'Install, Write, Publish Plugins', range: 'CH 17–23', tag: 'Plugins', link: '/en/part04/', desc: 'Learn installation systematically, write your first hello-plugin, then tools / hooks / UI, finally publish for one-click install.' },
      { no: 'PART 05', title: 'Hands-on Scenarios', range: 'CH 24–26', tag: 'Build things', link: '/en/part05/', desc: 'Combine capabilities into deliverable results: personal site, PPT, video.' },
      { no: 'PART 06', title: 'Production & Ecosystem', range: 'CH 27–29', tag: 'Advanced', link: '/en/part06/', desc: 'From usable to ecosystem-ready: deployment options, security & compliance, observability & context management.' },
    ],
  },
  'ja': {
    label: 'READING PATH <b>/ 01—06</b>',
    hint: '6つのパスから、目標に合わせて選んでください。カードをクリックすると、その PART の完全な目次にジャンプします。',
    parts: [
      { no: 'PART 01', title: '0から1へ', range: 'CH 02–07', tag: '初心者向け', link: '/ja/part01/', desc: 'dshを動かす：知る、インストール、初対話、CLI、モデル設定、トラブルシューティング。' },
      { no: 'PART 02', title: '骨格を理解する', range: 'CH 08–10', tag: 'アーキテクチャ', link: '/ja/part02/', desc: 'すべてはプラグイン：プラグインツリーのメンタルモデル、コアサブシステムとメッセージフロー、セッションログが真実の源。' },
      { no: 'PART 03', title: 'Agentを組み立てる', range: 'CH 11–16', tag: '組立', link: '/ja/part03/', desc: 'Agentに装備を揃える：ツールサンドボックス、MCP、サブエージェント、Skill、スケジュール、ローカルデプロイ。' },
      { no: 'PART 04', title: 'プラグインを装い・書き・公開', range: 'CH 17–23', tag: 'プラグイン', link: '/ja/part04/', desc: 'インストールを体系的に学び、最初のhello-pluginを書き、ツール／フック／UIへ、最後に公開してワンクリックインストール。' },
      { no: 'PART 05', title: '実践シナリオ', range: 'CH 24–26', tag: '作る', link: '/ja/part05/', desc: '機能を組み合わせて成果物に：個人サイト、PPT、動画。' },
      { no: 'PART 06', title: '本番とエコシステム', range: 'CH 27–29', tag: '上級', link: '/ja/part06/', desc: '使えるからエコシステムへ：デプロイ選択、セキュリティとコンプライアンス、オブザーバビリティとコンテキスト管理。' },
    ],
  },
  'ko': {
    label: 'READING PATH <b>/ 01—06</b>',
    hint: '6개의 경로 중 목표에 맞게 선택하세요. 카드를 클릭하면 해당 PART의 전체 목차로 이동합니다.',
    parts: [
      { no: 'PART 01', title: '0에서 1로', range: 'CH 02–07', tag: '초보자', link: '/ko/part01/', desc: 'dsh 실행하기: 알아보기, 설치, 첫 대화, CLI, 모델 설정, 트러블슈팅.' },
      { no: 'PART 02', title: '뼈대 이해하기', range: 'CH 08–10', tag: '아키텍처', link: '/ko/part02/', desc: '모든 것은 플러그인: 플러그인 트리 멘탈 모델, 코어 서브시스템과 메시지 흐름, 세션 로그가 진실의 원천.' },
      { no: 'PART 03', title: 'Agent 조립하기', range: 'CH 11–16', tag: '조립', link: '/ko/part03/', desc: 'Agent에 장비 갖추기: 도구 샌드박스, MCP, 서브에이전트, Skill, 스케줄링, 로컬 배포.' },
      { no: 'PART 04', title: '플러그인 설치·작성·배포', range: 'CH 17–23', tag: '플러그인', link: '/ko/part04/', desc: '설치를 체계적으로 배우고, 첫 hello-plugin 작성, 도구/훅/UI, 마지막으로 배포하여 원클릭 설치.' },
      { no: 'PART 05', title: '실전 시나리오', range: 'CH 24–26', tag: '만들기', link: '/ko/part05/', desc: '기능을 조합하여 결과물로: 개인 사이트, PPT, 영상.' },
      { no: 'PART 06', title: '프로덕션과 생태계', range: 'CH 27–29', tag: '고급', link: '/ko/part06/', desc: '사용 가능에서 생태계로: 배포 옵션, 보안과 컴플라이언스, 관측 가능성과 컨텍스트 관리.' },
    ],
  },
  'es': {
    label: 'READING PATH <b>/ 01—06</b>',
    hint: 'Seis rutas, elige una según tu objetivo. Haz clic en una tarjeta para ir al índice completo de ese PART.',
    parts: [
      { no: 'PART 01', title: 'De 0 a 1', range: 'CH 02–07', tag: 'Principiante', link: '/es/part01/', desc: 'Pon dsh en marcha: conócelo, instálalo, primera conversación, CLI, configuración de modelo, resolución de problemas.' },
      { no: 'PART 02', title: 'Entender el Esqueleto', range: 'CH 08–10', tag: 'Arquitectura', link: '/es/part02/', desc: 'Todo es un plugin: modelo mental del árbol de plugins, subsistemas core y flujo de mensajes, log de sesión como fuente de verdad.' },
      { no: 'PART 03', title: 'Armar tu Agent', range: 'CH 11–16', tag: 'Armar', link: '/es/part03/', desc: 'Equipa a tu Agent: sandbox de herramientas, MCP, subagentes, Skills, programación, despliegue local.' },
      { no: 'PART 04', title: 'Instalar, Escribir, Publicar Plugins', range: 'CH 17–23', tag: 'Plugins', link: '/es/part04/', desc: 'Aprende instalación sistemáticamente, escribe tu primer hello-plugin, luego herramientas / hooks / UI, finalmente publica para instalación con un clic.' },
      { no: 'PART 05', title: 'Escenarios Prácticos', range: 'CH 24–26', tag: 'Construir', link: '/es/part05/', desc: 'Combina capacidades en resultados entregables: sitio personal, PPT, video.' },
      { no: 'PART 06', title: 'Producción y Ecosistema', range: 'CH 27–29', tag: 'Avanzado', link: '/es/part06/', desc: 'De usable a listo para el ecosistema: opciones de despliegue, seguridad y cumplimiento, observabilidad y gestión de contexto.' },
    ],
  },
  'pt-BR': {
    label: 'READING PATH <b>/ 01—06</b>',
    hint: 'Seis caminhos, escolha um pelo seu objetivo. Clique em um card para ir ao índice completo daquele PART.',
    parts: [
      { no: 'PART 01', title: 'De 0 a 1', range: 'CH 02–07', tag: 'Iniciante', link: '/pt/part01/', desc: 'Coloque o dsh para rodar: conheça, instale, primeira conversa, CLI, configuração de modelo, solução de problemas.' },
      { no: 'PART 02', title: 'Entender o Esqueleto', range: 'CH 08–10', tag: 'Arquitetura', link: '/pt/part02/', desc: 'Tudo é um plugin: modelo mental da árvore de plugins, subsistemas core e fluxo de mensagens, log de sessão como fonte da verdade.' },
      { no: 'PART 03', title: 'Montar seu Agent', range: 'CH 11–16', tag: 'Montar', link: '/pt/part03/', desc: 'Equipe seu Agent: sandbox de ferramentas, MCP, subagentes, Skills, agendamento, deploy local.' },
      { no: 'PART 04', title: 'Instalar, Escrever, Publicar Plugins', range: 'CH 17–23', tag: 'Plugins', link: '/pt/part04/', desc: 'Aprenda instalação sistematicamente, escreva seu primeiro hello-plugin, depois ferramentas / hooks / UI, finalmente publique para instalação com um clique.' },
      { no: 'PART 05', title: 'Cenários Práticos', range: 'CH 24–26', tag: 'Construir', link: '/pt/part05/', desc: 'Combine capacidades em resultados entregáveis: site pessoal, PPT, vídeo.' },
      { no: 'PART 06', title: 'Produção e Ecossistema', range: 'CH 27–29', tag: 'Avançado', link: '/pt/part06/', desc: 'De usável para pronto para o ecossistema: opções de deploy, segurança e conformidade, observabilidade e gestão de contexto.' },
    ],
  },
}

const i18n = partsI18n[lang.value] || partsI18n['zh-CN']
</script>

<template>
  <div class="path-wrap">
    <div class="sec-label" v-html="i18n.label"></div>
    <p class="hint">{{ i18n.hint }}</p>

    <div class="cards">
      <a
        v-for="p in i18n.parts" :key="p.no"
        class="card" :href="p.link"
      >
        <span class="pn">{{ p.no }}</span>
        <h3>{{ p.title }}</h3>
        <div class="ch">{{ p.range }}</div>
        <div class="desc">{{ p.desc }}</div>
        <span class="tag">{{ p.tag }}</span><span class="arrow">→</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.path-wrap { margin-top: 26px; }
.sec-label {
  font-family: var(--vp-font-family-mono);
  font-size: 12.5px; letter-spacing: 0.18em; color: var(--vp-c-text-3);
}
.sec-label b { color: var(--vp-c-text-1); }
.hint { font-size: 13px; color: var(--vp-c-text-3); margin-top: 4px; }
.cards {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 14px; margin-top: 16px;
}
.card {
  display: block;
  border: 1px solid var(--vp-c-divider); border-radius: 4px;
  padding: 18px 18px 16px; background: var(--vp-c-bg);
  text-decoration: none;
}
.card:hover { background: var(--hl); }
.card:hover h3, .card:hover .pn { color: var(--vp-c-text-1); }
.card:hover .desc, .card:hover .ch { color: var(--vp-c-text-2); }
.card:hover .tag { border-color: var(--vp-c-text-1); color: var(--vp-c-text-1); }
.card:hover .arrow { color: var(--vp-c-text-1); }
.pn {
  display: inline-block; font-family: var(--vp-font-family-mono); font-size: 11.5px; font-weight: 700;
  background: var(--vp-c-text-1); color: var(--hl); padding: 2px 8px; border-radius: 2px; letter-spacing: 0.05em;
}
.card h3 { font-size: 18px; font-weight: 700; margin-top: 11px; color: var(--vp-c-text-1); }
.ch { font-family: var(--vp-font-family-mono); font-size: 12px; color: var(--vp-c-text-3); margin-top: 3px; }
.desc { font-size: 13.5px; color: var(--vp-c-text-3); margin-top: 9px; line-height: 1.75; }
.tag {
  display: inline-block; font-size: 11.5px; border: 1px solid var(--vp-c-divider);
  border-radius: 20px; padding: 1px 10px; margin-top: 13px; color: var(--vp-c-text-2);
  font-family: var(--vp-font-family-mono); letter-spacing: 0.03em;
}
.arrow { font-family: var(--vp-font-family-mono); color: var(--vp-c-brand-1); margin-left: 7px; font-weight: 700; }
</style>
