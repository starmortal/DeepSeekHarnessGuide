import { defineConfig } from 'vitepress'

// —— 公共配置 ——
const shared = {
  cleanUrls: true,
  appearance: false,
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }],
    ['meta', { name: 'theme-color', content: '#FDFBF7' }],
    ['meta', { name: 'author', content: 'super-mortal' }],
    ['meta', { name: 'keywords', content: 'DeepSeek Harness, dsh, Agent, 插件, AI 编程, 大模型, MCP, Skill, headless' }],
    // GEO 优化：AI 搜索引擎友好
    ['meta', { name: 'ai-summary', content: 'DeepSeek Harness (dsh) 实战蓝皮书，以真实任务为主线，从安装到插件开发到场景实操，一切皆插件，每次运行都可追溯。' }],
    // 统计代码：51.la + umami 共存，均支持 SPA 路由自动追踪
    ['script', { charset: 'UTF-8', id: 'LA_COLLECT', src: '//sdk.51.la/js-sdk-pro.min.js?id=3R6d72BIocg2uutt&ck=3R6d72BIocg2uutt' }],
    ['script', { defer: '', src: 'https://umami.vd2a59.top/script.js', 'data-website-id': '69959020-133f-4f4a-8835-6ab49985d0ad' }],
  ],
  sitemap: {
    hostname: 'https://dsh.supermortal.top',
  },
}

// —— 公共 themeConfig ——
const sharedTheme = {
  logo: '/logo.jpg',
  editLink: {
    pattern: 'https://github.com/super-mortal/DeepSeekHarnessGuide/edit/main/docs/:path',
  },
  socialLinks: [
    { icon: 'github', link: 'https://github.com/super-mortal/DeepSeekHarnessGuide' },
  ],
  search: { provider: 'local' },
  outline: { level: [2, 3] },
}

// —— 侧边栏（中文） ——
const sidebarZh = [
  { text: '开篇', collapsed: false, items: [
    { text: 'CH 00 · 为什么是 Agent 的乐高时代', link: '/part00/ch00' },
    { text: 'CH 01 · 读法：三条阅读路径', link: '/part00/ch01' },
  ]},
  { text: 'PART 01 · 从 0 到 1（新手推荐）', collapsed: false, items: [
    { text: 'CH 02 · 认识 dsh', link: '/part01/ch02' },
    { text: 'CH 03 · 安装与启动', link: '/part01/ch03' },
    { text: 'CH 04 · 官方桌面端应用', link: '/part01/ch04' },
    { text: 'CH 05 · 认识 Web UI', link: '/part01/ch05' },
    { text: 'CH 06 · 命令行跑通：headless', link: '/part01/ch06' },
    { text: 'CH 07 · 配置模型与推理档位', link: '/part01/ch07' },
    { text: 'CH 08 · 排障速查', link: '/part01/ch08' },
  ]},
  { text: 'PART 02 · 理解骨架：万物皆插件', collapsed: false, items: [
    { text: 'CH 09 · 插件树心智模型', link: '/part02/ch09' },
    { text: 'CH 10 · 核心子系统与消息流转', link: '/part02/ch10' },
    { text: 'CH 11 · 会话日志即真相源', link: '/part02/ch11' },
  ]},
  { text: 'PART 03 · 组装你的 Agent', collapsed: false, items: [
    { text: 'CH 12 · 工具与沙箱', link: '/part03/ch12' },
    { text: 'CH 13 · 接入 MCP 生态', link: '/part03/ch13' },
    { text: 'CH 14 · 子代理与多 Agent 编排', link: '/part03/ch14' },
    { text: 'CH 15 · Skill 与工作流', link: '/part03/ch15' },
    { text: 'CH 16 · 定时任务与后台运行', link: '/part03/ch16' },
    { text: 'CH 17 · 本地部署与 Token 自由', link: '/part03/ch17' },
  ]},
  { text: 'PART 04 · 会装、会写、会发插件', collapsed: false, items: [
    { text: 'CH 18 · 插件安装', link: '/part04/ch18' },
    { text: 'CH 19 · 第一个插件 hello-plugin', link: '/part04/ch19' },
    { text: 'CH 20 · 插件三形态', link: '/part04/ch20' },
    { text: 'CH 21 · 工具插件 defineTool', link: '/part04/ch21' },
    { text: 'CH 22 · 钩子插件与拦截', link: '/part04/ch22' },
    { text: 'CH 23 · UI 插件', link: '/part04/ch23' },
    { text: 'CH 24 · 发布与分发', link: '/part04/ch24' },
  ]},
  { text: 'PART 05 · 场景实操', collapsed: false, items: [
    { text: 'CH 25 · 个人网站 / 落地页', link: '/part05/ch25' },
    { text: 'CH 26 · 一份材料，让 dsh 做成 PPT', link: '/part05/ch26' },
    { text: 'CH 27 · dsh + Remotion 视频', link: '/part05/ch27' },
  ]},
  { text: 'PART 06 · 生产与生态', collapsed: false, items: [
    { text: 'CH 28 · 部署形态选型', link: '/part06/ch28' },
    { text: 'CH 29 · 安全与合规', link: '/part06/ch29' },
    { text: 'CH 30 · 可观测性与上下文管理', link: '/part06/ch30' },
  ]},
  { text: '附录', collapsed: false, items: [
    { text: '附录 A · 术语表', link: '/appendix/a-terms' },
    { text: '附录 B · 命令速查', link: '/appendix/b-commands' },
    { text: '附录 C · 官方文档索引', link: '/appendix/c-docs' },
    { text: '附录 D · 面试题速答', link: '/appendix/d-interview' },
  ]},
]

// —— 侧边栏（英文） ——
const sidebarEn = [
  { text: 'Getting Started', collapsed: false, items: [
    { text: "CH 00 · Why Agent's Lego Era", link: '/en/part00/ch00' },
    { text: 'CH 01 · Three Reading Paths', link: '/en/part00/ch01' },
  ]},
  { text: 'PART 01 · From 0 to 1', collapsed: false, items: [
    { text: 'CH 02 · Meet dsh', link: '/en/part01/ch02' },
    { text: 'CH 03 · Install & Launch', link: '/en/part01/ch03' },
    { text: 'CH 04 · Official Desktop App', link: '/en/part01/ch04' },
    { text: 'CH 05 · Web UI Walkthrough', link: '/en/part01/ch05' },
    { text: 'CH 06 · Headless & CLI', link: '/en/part01/ch06' },
    { text: 'CH 07 · Model & Reasoning Config', link: '/en/part01/ch07' },
    { text: 'CH 08 · Troubleshooting', link: '/en/part01/ch08' },
  ]},
  { text: 'PART 02 · Architecture', collapsed: false, items: [
    { text: 'CH 09 · Plugin Tree Mental Model', link: '/en/part02/ch09' },
    { text: 'CH 10 · Core Subsystems & Message Flow', link: '/en/part02/ch10' },
    { text: 'CH 11 · Session Log as Source of Truth', link: '/en/part02/ch11' },
  ]},
  { text: 'PART 03 · Assemble Your Agent', collapsed: false, items: [
    { text: 'CH 12 · Tools & Sandbox', link: '/en/part03/ch12' },
    { text: 'CH 13 · MCP Ecosystem', link: '/en/part03/ch13' },
    { text: 'CH 14 · Subagents & Multi-Agent', link: '/en/part03/ch14' },
    { text: 'CH 15 · Skills & Workflows', link: '/en/part03/ch15' },
    { text: 'CH 16 · Scheduled & Background Tasks', link: '/en/part03/ch16' },
    { text: 'CH 17 · Local Models & Token Freedom', link: '/en/part03/ch17' },
  ]},
  { text: 'PART 04 · Plugin Development', collapsed: false, items: [
    { text: 'CH 18 · Install Plugins', link: '/en/part04/ch18' },
    { text: 'CH 19 · Your First Plugin', link: '/en/part04/ch19' },
    { text: 'CH 20 · Three Plugin Forms', link: '/en/part04/ch20' },
    { text: 'CH 21 · Tool Plugin defineTool', link: '/en/part04/ch21' },
    { text: 'CH 22 · Hooks & Interception', link: '/en/part04/ch22' },
    { text: 'CH 23 · UI Plugins', link: '/en/part04/ch23' },
    { text: 'CH 24 · Publish & Distribute', link: '/en/part04/ch24' },
  ]},
  { text: 'PART 05 · Real-World Projects', collapsed: false, items: [
    { text: 'CH 25 · Personal Website / Landing Page', link: '/en/part05/ch25' },
    { text: 'CH 26 · Make a PPT from Material', link: '/en/part05/ch26' },
    { text: 'CH 27 · dsh + Remotion Video', link: '/en/part05/ch27' },
  ]},
  { text: 'PART 06 · Production & Ecosystem', collapsed: false, items: [
    { text: 'CH 28 · Deployment Options', link: '/en/part06/ch28' },
    { text: 'CH 29 · Security & Compliance', link: '/en/part06/ch29' },
    { text: 'CH 30 · Observability & Context', link: '/en/part06/ch30' },
  ]},
  { text: 'Appendix', collapsed: false, items: [
    { text: 'A · Glossary', link: '/en/appendix/a-terms' },
    { text: 'B · Command Reference', link: '/en/appendix/b-commands' },
    { text: 'C · Official Docs Index', link: '/en/appendix/c-docs' },
    { text: 'D · Interview Q&A', link: '/en/appendix/d-interview' },
  ]},
]

// —— 侧边栏（日文） ——
const sidebarJa = [
  { text: 'はじめに', collapsed: false, items: [
    { text: 'CH 00 · なぜ Agent のレゴ時代か', link: '/ja/part00/ch00' },
    { text: 'CH 01 · 3つの読み方', link: '/ja/part00/ch01' },
  ]},
  { text: 'PART 01 · 0から1へ', collapsed: false, items: [
    { text: 'CH 02 · dshを知る', link: '/ja/part01/ch02' },
    { text: 'CH 03 · インストールと起動', link: '/ja/part01/ch03' },
    { text: 'CH 04 · 公式デスクトップアプリ', link: '/ja/part01/ch04' },
    { text: 'CH 05 · Web UIの理解', link: '/ja/part01/ch05' },
    { text: 'CH 06 · headlessとCLI', link: '/ja/part01/ch06' },
    { text: 'CH 07 · モデルと推論設定', link: '/ja/part01/ch07' },
    { text: 'CH 08 · トラブルシューティング', link: '/ja/part01/ch08' },
  ]},
  { text: 'PART 02 · アーキテクチャ', collapsed: false, items: [
    { text: 'CH 09 · プラグインツリー', link: '/ja/part02/ch09' },
    { text: 'CH 10 · コアサブシステムとメッセージフロー', link: '/ja/part02/ch10' },
    { text: 'CH 11 · セッションログ', link: '/ja/part02/ch11' },
  ]},
  { text: 'PART 03 · Agentを組み立てる', collapsed: false, items: [
    { text: 'CH 12 · ツールとサンドボックス', link: '/ja/part03/ch12' },
    { text: 'CH 13 · MCPエコシステム', link: '/ja/part03/ch13' },
    { text: 'CH 14 · サブエージェント', link: '/ja/part03/ch14' },
    { text: 'CH 15 · スキルとワークフロー', link: '/ja/part03/ch15' },
    { text: 'CH 16 · 定期タスクとバックグラウンド', link: '/ja/part03/ch16' },
    { text: 'CH 17 · ローカルモデル', link: '/ja/part03/ch17' },
  ]},
  { text: 'PART 04 · プラグイン開発', collapsed: false, items: [
    { text: 'CH 18 · プラグインのインストール', link: '/ja/part04/ch18' },
    { text: 'CH 19 · 初めてのプラグイン', link: '/ja/part04/ch19' },
    { text: 'CH 20 · 3つのプラグイン形態', link: '/ja/part04/ch20' },
    { text: 'CH 21 · ツールプラグイン', link: '/ja/part04/ch21' },
    { text: 'CH 22 · フックとインターセプト', link: '/ja/part04/ch22' },
    { text: 'CH 23 · UIプラグイン', link: '/ja/part04/ch23' },
    { text: 'CH 24 · 公開と配布', link: '/ja/part04/ch24' },
  ]},
  { text: 'PART 05 · 実践プロジェクト', collapsed: false, items: [
    { text: 'CH 25 · 個人サイト / ランディングページ', link: '/ja/part05/ch25' },
    { text: 'CH 26 · 資料からPPT作成', link: '/ja/part05/ch26' },
    { text: 'CH 27 · dsh + Remotion動画', link: '/ja/part05/ch27' },
  ]},
  { text: 'PART 06 · 本番運用とエコシステム', collapsed: false, items: [
    { text: 'CH 28 · デプロイ選択', link: '/ja/part06/ch28' },
    { text: 'CH 29 · セキュリティとコンプライアンス', link: '/ja/part06/ch29' },
    { text: 'CH 30 · オブザーバビリティ', link: '/ja/part06/ch30' },
  ]},
  { text: '付録', collapsed: false, items: [
    { text: 'A · 用語集', link: '/ja/appendix/a-terms' },
    { text: 'B · コマンドリファレンス', link: '/ja/appendix/b-commands' },
    { text: 'C · 公式ドキュメント', link: '/ja/appendix/c-docs' },
    { text: 'D · 面接Q&A', link: '/ja/appendix/d-interview' },
  ]},
]

// —— 侧边栏（韩文） ——
const sidebarKo = [
  { text: '시작하기', collapsed: false, items: [
    { text: 'CH 00 · 왜 Agent의 레고 시대인가', link: '/ko/part00/ch00' },
    { text: 'CH 01 · 세 가지 읽기 경로', link: '/ko/part00/ch01' },
  ]},
  { text: 'PART 01 · 0에서 1로', collapsed: false, items: [
    { text: 'CH 02 · dsh 알아보기', link: '/ko/part01/ch02' },
    { text: 'CH 03 · 설치와 실행', link: '/ko/part01/ch03' },
    { text: 'CH 04 · 공식 데스크톱 앱', link: '/ko/part01/ch04' },
    { text: 'CH 05 · Web UI 둘러보기', link: '/ko/part01/ch05' },
    { text: 'CH 06 · headless와 CLI', link: '/ko/part01/ch06' },
    { text: 'CH 07 · 모델과 추론 설정', link: '/ko/part01/ch07' },
    { text: 'CH 08 · 트러블슈팅', link: '/ko/part01/ch08' },
  ]},
  { text: 'PART 02 · 아키텍처', collapsed: false, items: [
    { text: 'CH 09 · 플러그인 트리', link: '/ko/part02/ch09' },
    { text: 'CH 10 · 코어 서브시스템과 메시지 흐름', link: '/ko/part02/ch10' },
    { text: 'CH 11 · 세션 로그', link: '/ko/part02/ch11' },
  ]},
  { text: 'PART 03 · Agent 조립하기', collapsed: false, items: [
    { text: 'CH 12 · 도구와 샌드박스', link: '/ko/part03/ch12' },
    { text: 'CH 13 · MCP 생태계', link: '/ko/part03/ch13' },
    { text: 'CH 14 · 서브에이전트', link: '/ko/part03/ch14' },
    { text: 'CH 15 · 스킬과 워크플로우', link: '/ko/part03/ch15' },
    { text: 'CH 16 · 예약 작업과 백그라운드', link: '/ko/part03/ch16' },
    { text: 'CH 17 · 로컬 모델', link: '/ko/part03/ch17' },
  ]},
  { text: 'PART 04 · 플러그인 개발', collapsed: false, items: [
    { text: 'CH 18 · 플러그인 설치', link: '/ko/part04/ch18' },
    { text: 'CH 19 · 첫 플러그인', link: '/ko/part04/ch19' },
    { text: 'CH 20 · 세 가지 플러그인 형태', link: '/ko/part04/ch20' },
    { text: 'CH 21 · 도구 플러그인', link: '/ko/part04/ch21' },
    { text: 'CH 22 · 훅과 인터셉트', link: '/ko/part04/ch22' },
    { text: 'CH 23 · UI 플러그인', link: '/ko/part04/ch23' },
    { text: 'CH 24 · 배포와 배포', link: '/ko/part04/ch24' },
  ]},
  { text: 'PART 05 · 실전 프로젝트', collapsed: false, items: [
    { text: 'CH 25 · 개인 사이트 / 랜딩 페이지', link: '/ko/part05/ch25' },
    { text: 'CH 26 · 자료로 PPT 만들기', link: '/ko/part05/ch26' },
    { text: 'CH 27 · dsh + Remotion 영상', link: '/ko/part05/ch27' },
  ]},
  { text: 'PART 06 · 운영과 생태계', collapsed: false, items: [
    { text: 'CH 28 · 배포 옵션', link: '/ko/part06/ch28' },
    { text: 'CH 29 · 보안과 컴플라이언스', link: '/ko/part06/ch29' },
    { text: 'CH 30 · 옵저버빌리티', link: '/ko/part06/ch30' },
  ]},
  { text: '부록', collapsed: false, items: [
    { text: 'A · 용어집', link: '/ko/appendix/a-terms' },
    { text: 'B · 명령어 참조', link: '/ko/appendix/b-commands' },
    { text: 'C · 공식 문서', link: '/ko/appendix/c-docs' },
    { text: 'D · 면접 Q&A', link: '/ko/appendix/d-interview' },
  ]},
]

// —— 侧边栏（西班牙语） ——
const sidebarEs = [
  { text: 'Comenzar', collapsed: false, items: [
    { text: 'CH 00 · Por qué la era Lego de los Agentes', link: '/es/part00/ch00' },
    { text: 'CH 01 · Tres rutas de lectura', link: '/es/part00/ch01' },
  ]},
  { text: 'PARTE 01 · De 0 a 1', collapsed: false, items: [
    { text: 'CH 02 · Conocer dsh', link: '/es/part01/ch02' },
    { text: 'CH 03 · Instalación y ejecución', link: '/es/part01/ch03' },
    { text: 'CH 04 · App de escritorio oficial', link: '/es/part01/ch04' },
    { text: 'CH 05 · Explorar la Web UI', link: '/es/part01/ch05' },
    { text: 'CH 06 · headless y CLI', link: '/es/part01/ch06' },
    { text: 'CH 07 · Modelos e inferencia', link: '/es/part01/ch07' },
    { text: 'CH 08 · Solución de problemas', link: '/es/part01/ch08' },
  ]},
  { text: 'PARTE 02 · Arquitectura', collapsed: false, items: [
    { text: 'CH 09 · El árbol de plugins', link: '/es/part02/ch09' },
    { text: 'CH 10 · Subsistemas core y flujo de mensajes', link: '/es/part02/ch10' },
    { text: 'CH 11 · Logs de sesión', link: '/es/part02/ch11' },
  ]},
  { text: 'PARTE 03 · Armar tu Agent', collapsed: false, items: [
    { text: 'CH 12 · Herramientas y sandbox', link: '/es/part03/ch12' },
    { text: 'CH 13 · Ecosistema MCP', link: '/es/part03/ch13' },
    { text: 'CH 14 · Subagentes', link: '/es/part03/ch14' },
    { text: 'CH 15 · Skills y workflows', link: '/es/part03/ch15' },
    { text: 'CH 16 · Tareas programadas y background', link: '/es/part03/ch16' },
    { text: 'CH 17 · Modelos locales', link: '/es/part03/ch17' },
  ]},
  { text: 'PARTE 04 · Desarrollo de plugins', collapsed: false, items: [
    { text: 'CH 18 · Instalar plugins', link: '/es/part04/ch18' },
    { text: 'CH 19 · Tu primer plugin', link: '/es/part04/ch19' },
    { text: 'CH 20 · Tres formas de plugin', link: '/es/part04/ch20' },
    { text: 'CH 21 · Plugin de herramientas', link: '/es/part04/ch21' },
    { text: 'CH 22 · Hooks e interceptores', link: '/es/part04/ch22' },
    { text: 'CH 23 · Plugin de UI', link: '/es/part04/ch23' },
    { text: 'CH 24 · Publicación y distribución', link: '/es/part04/ch24' },
  ]},
  { text: 'PARTE 05 · Proyectos prácticos', collapsed: false, items: [
    { text: 'CH 25 · Sitio personal / landing', link: '/es/part05/ch25' },
    { text: 'CH 26 · Hacer PPT desde material', link: '/es/part05/ch26' },
    { text: 'CH 27 · dsh + Remotion video', link: '/es/part05/ch27' },
  ]},
  { text: 'PARTE 06 · Producción y ecosistema', collapsed: false, items: [
    { text: 'CH 28 · Opciones de despliegue', link: '/es/part06/ch28' },
    { text: 'CH 29 · Seguridad y cumplimiento', link: '/es/part06/ch29' },
    { text: 'CH 30 · Observabilidad', link: '/es/part06/ch30' },
  ]},
  { text: 'Apéndices', collapsed: false, items: [
    { text: 'A · Glosario', link: '/es/appendix/a-terms' },
    { text: 'B · Referencia de comandos', link: '/es/appendix/b-commands' },
    { text: 'C · Documentación oficial', link: '/es/appendix/c-docs' },
    { text: 'D · Preguntas de entrevista', link: '/es/appendix/d-interview' },
  ]},
]

// —— 侧边栏（葡萄牙语） ——
const sidebarPt = [
  { text: 'Começar', collapsed: false, items: [
    { text: 'CH 00 · Por que a era Lego dos Agentes', link: '/pt/part00/ch00' },
    { text: 'CH 01 · Três rotas de leitura', link: '/pt/part00/ch01' },
  ]},
  { text: 'PARTE 01 · De 0 a 1', collapsed: false, items: [
    { text: 'CH 02 · Conhecer o dsh', link: '/pt/part01/ch02' },
    { text: 'CH 03 · Instalação e execução', link: '/pt/part01/ch03' },
    { text: 'CH 04 · App de desktop oficial', link: '/pt/part01/ch04' },
    { text: 'CH 05 · Explorar a Web UI', link: '/pt/part01/ch05' },
    { text: 'CH 06 · headless e CLI', link: '/pt/part01/ch06' },
    { text: 'CH 07 · Modelos e inferência', link: '/pt/part01/ch07' },
    { text: 'CH 08 · Solução de problemas', link: '/pt/part01/ch08' },
  ]},
  { text: 'PARTE 02 · Arquitetura', collapsed: false, items: [
    { text: 'CH 09 · A árvore de plugins', link: '/pt/part02/ch09' },
    { text: 'CH 10 · Subsistemas core e fluxo de mensagens', link: '/pt/part02/ch10' },
    { text: 'CH 11 · Logs de sessão', link: '/pt/part02/ch11' },
  ]},
  { text: 'PARTE 03 · Montar seu Agent', collapsed: false, items: [
    { text: 'CH 12 · Ferramentas e sandbox', link: '/pt/part03/ch12' },
    { text: 'CH 13 · Ecossistema MCP', link: '/pt/part03/ch13' },
    { text: 'CH 14 · Subagentes', link: '/pt/part03/ch14' },
    { text: 'CH 15 · Skills e workflows', link: '/pt/part03/ch15' },
    { text: 'CH 16 · Tarefas agendadas e background', link: '/pt/part03/ch16' },
    { text: 'CH 17 · Modelos locais', link: '/pt/part03/ch17' },
  ]},
  { text: 'PARTE 04 · Desenvolvimento de plugins', collapsed: false, items: [
    { text: 'CH 18 · Instalar plugins', link: '/pt/part04/ch18' },
    { text: 'CH 19 · Seu primeiro plugin', link: '/pt/part04/ch19' },
    { text: 'CH 20 · Três formas de plugin', link: '/pt/part04/ch20' },
    { text: 'CH 21 · Plugin de ferramentas', link: '/pt/part04/ch21' },
    { text: 'CH 22 · Hooks e interceptores', link: '/pt/part04/ch22' },
    { text: 'CH 23 · Plugin de UI', link: '/pt/part04/ch23' },
    { text: 'CH 24 · Publicação e distribuição', link: '/pt/part04/ch24' },
  ]},
  { text: 'PARTE 05 · Projetos práticos', collapsed: false, items: [
    { text: 'CH 25 · Site pessoal / landing', link: '/pt/part05/ch25' },
    { text: 'CH 26 · Fazer PPT a partir de material', link: '/pt/part05/ch26' },
    { text: 'CH 27 · dsh + Remotion vídeo', link: '/pt/part05/ch27' },
  ]},
  { text: 'PARTE 06 · Produção e ecossistema', collapsed: false, items: [
    { text: 'CH 28 · Opções de deploy', link: '/pt/part06/ch28' },
    { text: 'CH 29 · Segurança e conformidade', link: '/pt/part06/ch29' },
    { text: 'CH 30 · Observabilidade', link: '/pt/part06/ch30' },
  ]},
  { text: 'Apêndices', collapsed: false, items: [
    { text: 'A · Glossário', link: '/pt/appendix/a-terms' },
    { text: 'B · Referência de comandos', link: '/pt/appendix/b-commands' },
    { text: 'C · Documentação oficial', link: '/pt/appendix/c-docs' },
    { text: 'D · Perguntas de entrevista', link: '/pt/appendix/d-interview' },
  ]},
]

export default defineConfig({
  ...shared,

  // hreflang 多语言标签 + WebSite 结构化数据：根据当前页面路径动态生成
  transformHead({ pageData }) {
    const site = 'https://dsh.supermortal.top'
    const langs: Record<string, string> = {
      root: 'zh-CN',
      en: 'en',
      ja: 'ja',
      ko: 'ko',
      es: 'es',
      pt: 'pt-BR',
    }
    // 各语言的站点名称
    const siteNames: Record<string, string> = {
      root: 'DeepSeek Harness 蓝皮书',
      en: 'DeepSeek Harness Guide',
      ja: 'DeepSeek Harness ガイド',
      ko: 'DeepSeek Harness 가이드',
      es: 'Guía DeepSeek Harness',
      pt: 'Guia DeepSeek Harness',
    }
    const path = pageData.relativePath.replace(/\.md$/, '')
    let currentLang = 'root'
    let pagePath = path
    for (const key of Object.keys(langs)) {
      if (key === 'root') continue
      if (path.startsWith(key + '/')) {
        currentLang = key
        pagePath = path.slice(key.length + 1)
        break
      }
    }
    const head: Array<[string, Record<string, string>, string?]> = []
    // 当前页面完整 URL
    const urlPath = currentLang === 'root' ? '/' + pagePath : '/' + currentLang + '/' + pagePath
    const cleanUrl = urlPath.replace(/\/index$/, '/')
    const fullUrl = site + (cleanUrl === '/' ? '/' : cleanUrl)
    // 判断页面类型：首页/目录页 = website，文章页 = article
    const isHomeOrIndex = pagePath === 'index' || pagePath.endsWith('/index') || pagePath.endsWith('/')
    const ogType = isHomeOrIndex ? 'website' : 'article'
    const ogImage = site + '/assets/readme-homepage.png'
    const siteName = siteNames[currentLang] || siteNames.root

    // Open Graph 完整协议
    head.push(['meta', { property: 'og:type', content: ogType }])
    head.push(['meta', { property: 'og:url', content: fullUrl }])
    head.push(['meta', { property: 'og:site_name', content: siteName }])
    head.push(['meta', { property: 'og:image', content: ogImage }])
    head.push(['meta', { property: 'og:image:width', content: '1883' }])
    head.push(['meta', { property: 'og:image:height', content: '918' }])
    head.push(['meta', { property: 'og:image:alt', content: siteName }])

    // Twitter Card
    head.push(['meta', { name: 'twitter:card', content: 'summary_large_image' }])
    head.push(['meta', { name: 'twitter:title', content: pageData.title || siteName }])
    head.push(['meta', { name: 'twitter:description', content: pageData.description || '' }])
    head.push(['meta', { name: 'twitter:image', content: ogImage }])

    // canonical URL
    head.push(['link', { rel: 'canonical', href: fullUrl }])

    // hreflang
    for (const [key, hreflang] of Object.entries(langs)) {
      const urlPath = key === 'root' ? '/' + pagePath : '/' + key + '/' + pagePath
      const cleanUrl = urlPath.replace(/\/index$/, '/')
      head.push(['link', {
        rel: 'alternate',
        hreflang,
        href: site + (cleanUrl === '/' ? '/' : cleanUrl),
      }])
    }
    const defaultPath = ('/' + pagePath).replace(/\/index$/, '/')
    head.push(['link', {
      rel: 'alternate',
      hreflang: 'x-default',
      href: site + (defaultPath === '/' ? '/' : defaultPath),
    }])
    // WebSite 结构化数据（JSON-LD）：全站级，根据当前语言设置站点名称
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteNames[currentLang] || siteNames.root,
      url: site + '/',
      potentialAction: {
        '@type': 'SearchAction',
        target: site + '/?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    }
    head.push(['script',
      { type: 'application/ld+json' },
      JSON.stringify(websiteSchema),
    ])
    return head
  },

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'DeepSeek Harness 蓝皮书',
      description: '以真实任务为主线的 dsh 实战指南。',
      head: [
        ['meta', { property: 'og:title', content: 'DeepSeek Harness 蓝皮书' }],
        ['meta', { property: 'og:description', content: '以真实任务为主线的 dsh 实战指南。' }],
        ['meta', { property: 'og:locale', content: 'zh_CN' }],
      ],
      themeConfig: {
        ...sharedTheme,
        siteTitle: 'DSH 蓝皮书',
        nav: [
          { text: '阅读路径', link: '/' },
          { text: '完整目录', link: '/part00/' },
          { text: '附录', link: '/appendix/' },
        ],
        sidebar: sidebarZh,
        editLink: { ...sharedTheme.editLink, text: '在 GitHub 上编辑此页' },
        search: {
          provider: 'local',
          options: {
            translations: {
              button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
              modal: { noResultsText: '没有找到相关内容', resetButtonTitle: '清除', footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' } },
            },
          },
        },
        outline: { label: '本页导航', level: [2, 3] },
        docFooter: { prev: '上一篇', next: '下一篇' },
        footer: {
          message: 'Open Source · MIT · Community Driven',
          copyright: '© 2026 DeepSeek Harness 蓝皮书 · by <a href="https://supermortal.cn" target="_blank" style="color:var(--vp-c-brand-1);text-decoration:none;">super-mortal</a>',
        },
      },
    },

    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      title: 'DeepSeek Harness Guide',
      description: 'A practical dsh guide with real-world tasks.',
      head: [
        ['meta', { property: 'og:title', content: 'DeepSeek Harness Guide' }],
        ['meta', { property: 'og:description', content: 'A practical dsh guide with real-world tasks.' }],
        ['meta', { property: 'og:locale', content: 'en_US' }],
      ],
      themeConfig: {
        ...sharedTheme,
        siteTitle: 'DSH Guide',
        nav: [
          { text: 'Reading Path', link: '/en/' },
          { text: 'Full TOC', link: '/en/part00/' },
          { text: 'Appendix', link: '/en/appendix/' },
        ],
        sidebar: sidebarEn,
        editLink: { ...sharedTheme.editLink, text: 'Edit this page on GitHub' },
        search: {
          provider: 'local',
          options: {
            translations: {
              button: { buttonText: 'Search', buttonAriaLabel: 'Search' },
              modal: { noResultsText: 'No results found', resetButtonTitle: 'Clear', footer: { selectText: 'Select', navigateText: 'Navigate', closeText: 'Close' } },
            },
          },
        },
        outline: { label: 'On this page', level: [2, 3] },
        docFooter: { prev: 'Previous', next: 'Next' },
        footer: {
          message: 'Open Source · MIT · Community Driven',
          copyright: '© 2026 DeepSeek Harness Guide · by <a href="https://supermortal.cn" target="_blank" style="color:var(--vp-c-brand-1);text-decoration:none;">super-mortal</a>',
        },
      },
    },

    ja: {
      label: '日本語',
      lang: 'ja',
      link: '/ja/',
      title: 'DeepSeek Harness ガイド',
      description: '実践的なタスクで学ぶ dsh ガイド。',
      head: [
        ['meta', { property: 'og:title', content: 'DeepSeek Harness ガイド' }],
        ['meta', { property: 'og:description', content: '実践的なタスクで学ぶ dsh ガイド。' }],
        ['meta', { property: 'og:locale', content: 'ja_JP' }],
      ],
      themeConfig: {
        ...sharedTheme,
        siteTitle: 'DSH ガイド',
        nav: [
          { text: '読み方', link: '/ja/' },
          { text: '目次', link: '/ja/part00/' },
          { text: '付録', link: '/ja/appendix/' },
        ],
        sidebar: sidebarJa,
        editLink: { ...sharedTheme.editLink, text: 'GitHubで編集' },
        search: {
          provider: 'local',
          options: {
            translations: {
              button: { buttonText: '検索', buttonAriaLabel: '検索' },
              modal: { noResultsText: '結果が見つかりません', resetButtonTitle: 'クリア', footer: { selectText: '選択', navigateText: 'ナビゲート', closeText: '閉じる' } },
            },
          },
        },
        outline: { label: 'このページの内容', level: [2, 3] },
        docFooter: { prev: '前のページ', next: '次のページ' },
        footer: {
          message: 'Open Source · MIT · Community Driven',
          copyright: '© 2026 DeepSeek Harness ガイド · by <a href="https://supermortal.cn" target="_blank" style="color:var(--vp-c-brand-1);text-decoration:none;">super-mortal</a>',
        },
      },
    },

    ko: {
      label: '한국어',
      lang: 'ko',
      link: '/ko/',
      title: 'DeepSeek Harness 가이드',
      description: '실전 과제로 배우는 dsh 가이드.',
      head: [
        ['meta', { property: 'og:title', content: 'DeepSeek Harness 가이드' }],
        ['meta', { property: 'og:description', content: '실전 과제로 배우는 dsh 가이드.' }],
        ['meta', { property: 'og:locale', content: 'ko_KR' }],
      ],
      themeConfig: {
        ...sharedTheme,
        siteTitle: 'DSH 가이드',
        nav: [
          { text: '읽기 경로', link: '/ko/' },
          { text: '전체 목차', link: '/ko/part00/' },
          { text: '부록', link: '/ko/appendix/' },
        ],
        sidebar: sidebarKo,
        editLink: { ...sharedTheme.editLink, text: 'GitHub에서 편집' },
        search: {
          provider: 'local',
          options: {
            translations: {
              button: { buttonText: '검색', buttonAriaLabel: '검색' },
              modal: { noResultsText: '결과를 찾을 수 없습니다', resetButtonTitle: '지우기', footer: { selectText: '선택', navigateText: '탐색', closeText: '닫기' } },
            },
          },
        },
        outline: { label: '이 페이지의 내용', level: [2, 3] },
        docFooter: { prev: '이전 페이지', next: '다음 페이지' },
        footer: {
          message: 'Open Source · MIT · Community Driven',
          copyright: '© 2026 DeepSeek Harness 가이드 · by <a href="https://supermortal.cn" target="_blank" style="color:var(--vp-c-brand-1);text-decoration:none;">super-mortal</a>',
        },
      },
    },

    es: {
      label: 'Español',
      lang: 'es',
      link: '/es/',
      title: 'Guía DeepSeek Harness',
      description: 'Guía práctica de dsh con tareas reales.',
      head: [
        ['meta', { property: 'og:title', content: 'Guía DeepSeek Harness' }],
        ['meta', { property: 'og:description', content: 'Guía práctica de dsh con tareas reales.' }],
        ['meta', { property: 'og:locale', content: 'es_ES' }],
      ],
      themeConfig: {
        ...sharedTheme,
        siteTitle: 'Guía DSH',
        nav: [
          { text: 'Rutas de lectura', link: '/es/' },
          { text: 'Índice completo', link: '/es/part00/' },
          { text: 'Apéndices', link: '/es/appendix/' },
        ],
        sidebar: sidebarEs,
        editLink: { ...sharedTheme.editLink, text: 'Editar esta página en GitHub' },
        search: {
          provider: 'local',
          options: {
            translations: {
              button: { buttonText: 'Buscar', buttonAriaLabel: 'Buscar' },
              modal: { noResultsText: 'No se encontraron resultados', resetButtonTitle: 'Limpiar', footer: { selectText: 'Seleccionar', navigateText: 'Navegar', closeText: 'Cerrar' } },
            },
          },
        },
        outline: { label: 'En esta página', level: [2, 3] },
        docFooter: { prev: 'Página anterior', next: 'Página siguiente' },
        footer: {
          message: 'Open Source · MIT · Community Driven',
          copyright: '© 2026 Guía DeepSeek Harness · by <a href="https://supermortal.cn" target="_blank" style="color:var(--vp-c-brand-1);text-decoration:none;">super-mortal</a>',
        },
      },
    },

    pt: {
      label: 'Português',
      lang: 'pt-BR',
      link: '/pt/',
      title: 'Guia DeepSeek Harness',
      description: 'Guia prático de dsh com tarefas reais.',
      head: [
        ['meta', { property: 'og:title', content: 'Guia DeepSeek Harness' }],
        ['meta', { property: 'og:description', content: 'Guia prático de dsh com tarefas reais.' }],
        ['meta', { property: 'og:locale', content: 'pt_BR' }],
      ],
      themeConfig: {
        ...sharedTheme,
        siteTitle: 'Guia DSH',
        nav: [
          { text: 'Rotas de leitura', link: '/pt/' },
          { text: 'Índice completo', link: '/pt/part00/' },
          { text: 'Apêndices', link: '/pt/appendix/' },
        ],
        sidebar: sidebarPt,
        editLink: { ...sharedTheme.editLink, text: 'Editar esta página no GitHub' },
        search: {
          provider: 'local',
          options: {
            translations: {
              button: { buttonText: 'Buscar', buttonAriaLabel: 'Buscar' },
              modal: { noResultsText: 'Nenhum resultado encontrado', resetButtonTitle: 'Limpar', footer: { selectText: 'Selecionar', navigateText: 'Navegar', closeText: 'Fechar' } },
            },
          },
        },
        outline: { label: 'Nesta página', level: [2, 3] },
        docFooter: { prev: 'Página anterior', next: 'Próxima página' },
        footer: {
          message: 'Open Source · MIT · Community Driven',
          copyright: '© 2026 Guia DeepSeek Harness · by <a href="https://supermortal.cn" target="_blank" style="color:var(--vp-c-brand-1);text-decoration:none;">super-mortal</a>',
        },
      },
    },
  },
})
