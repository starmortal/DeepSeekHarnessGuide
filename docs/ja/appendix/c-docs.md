---
title: "付録 C · 公式ドキュメント索引"
description: "アーキテクチャ / サブシステム / cookbook / CLI リファレンス / 各パッケージ README"
---

# 付録 C · 公式ドキュメント索引

<div class="chapter-meta">
  <span class="cm-item"><span class="cm-k">全文字数</span><span class="cm-v">約 1,710 字</span></span>
  <span class="cm-item"><span class="cm-k">所要時間</span><span class="cm-v">約 5 分</span></span>
  <span class="cm-item"><span class="cm-k">難易度</span><span class="cm-v hl">参照用</span></span>
</div>

dsh 公式リポジトリのドキュメントは、すべて [GitHub リポジトリ](https://github.com/deepseek-ai/deepseek-harness)の `docs/` ディレクトリと各パッケージの README にあります。用途別に分類してあり、トピックを深入りしたいときは直接ジャンプしてください。

## コアドキュメント

| ドキュメント | 内容 | 読むタイミング |
|---|---|---|
| [README](https://github.com/deepseek-ai/deepseek-harness) | プロジェクト概要、設計理念、クイックスタート、四つのランタイムモード | 初めて触れて、全体像を素早く把握したいとき |
| [architecture.md](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/architecture.md) | 全体アーキテクチャ設計：Cordis プラグインフレームワーク、プラグインネットワーク、Profile、Bundle、階層化された設定ロード順 | 「Everything is a plugin」がどう実現されているかを理解したいとき |
| [ルート AGENTS.md](https://github.com/deepseek-ai/deepseek-harness/blob/master/AGENTS.md) | リポジトリ構造、各パッケージのディレクトリ構成、開発環境のセットアップ | ソースコードを読んだり、公式リポジトリに PR を投げたいとき |
| [docs/AGENTS.md](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/AGENTS.md) | ドキュメント開発マニュアル：各種ドキュメントに何を書くべきか／書いてはいけないか、階層化の基準 | 公式ドキュメントに PR を投げたい、またはドキュメント構成の規約を学びたいとき |

## サブシステムドキュメント（subsystems/）

公式チームでは各コアサブシステムごとにドキュメントを書いており、合計 40 本以上あります。各ドキュメントはそのサブシステムが何か、どんなデータ構造を流すか、どんな ctx サービスとイベントを提供するかを説明します。すべて [docs/subsystems/](https://github.com/deepseek-ai/deepseek-harness/tree/master/docs/subsystems) ディレクトリにあります。

| サブシステム | 解説内容 |
|---|---|
| **session** | セッション管理：作成、復元、Fork、永続化、イベントストリーム |
| **agent-loop** | Agent Loop：考える → ツールを呼ぶ → 結果をみる反復メカニズム |
| **tools** | ツール登録、Schema、実行パイプライン、承認、サンドボックス |
| **llm** | モデルアダプタ、Provider、リクエスト／レスポンス、キャッシュ |
| **skills** | Skill 発見、ロード、呼び出しメカニズム |
| **subagent** | サブエージェントのスケジューリング、二つのモード（spawn / fork）、結果マージ |
| **workflow** | ワークフローオーケストレーション、複数ステップの連鎖 |
| **sandbox** | ファイルサンドボックス、三段階の権限、承認フロー |
| **trajectory** | 軌跡の記録、再生、エクスポート |
| **credentials** | 認証情報管理、書き込み専用ストレージ、マスク処理 |
| **mcp** | MCP クライアント、サーバー接続、ツールブリッジ |
| **compaction** | コンテキスト圧縮、トリガータイミング、要約生成 |

> サブシステムドキュメントはアルファベット順で並んでいるため、メカニズムを深入りしたいときは対応するファイルを直接探してください。

## Cookbook（ハンズオンチュートリアル）

公式のステップバイステップのハンズオンチュートリアルは [docs/cookbook/](https://github.com/deepseek-ai/deepseek-harness/tree/master/docs/cookbook) ディレクトリにあります。

| チュートリアル | 教える内容 |
|---|---|
| **Add a package** | dsh に新しい npm 依存を追加する方法 |
| **Add a tool** | カスタムツールを書いて Agent に登録する方法 |
| **Add an LLM adapter** | 新しいモデルプロバイダーを接続する方法 |
| **Extend plugin forms** | クライアントプラグイン、UI プラグイン、Bundle の書き方 |
| **Custom Profile** | 全く新しいプロファイル構成を作成する方法 |

> Cookbook は「手順どおりにやれば動く」チュートリアルで、サブシステムドキュメントよりも実作業寄りです。

## CLI リファレンス

[apps/cli/reference/README.md](https://github.com/deepseek-ai/deepseek-harness/blob/master/apps/cli/reference/README.md) — dsh コマンドラインの完全な挙動リファレンスで、引数解析、プロファイル起動フロー、各サブコマンドの正確な挙動を含みます。スクリプト作成や切り分けのときに参照してください。

## 各パッケージ README

リポジトリは monorepo 構成で、`packages/` 配下に 49 のグループがあり、それぞれに README があります。よく使うもの：

| パッケージ | 役割 |
|---|---|
| `@deepseek-ai/dsh` | メインエントリ、CLI バイナリ |
| `@deepseek-ai/cordis` | ベース層プラグインフレームワーク |
| `@deepseek-ai/dsh-web-app` | Web UI フロントエンド |
| `@deepseek-ai/dsh-headless` | Headless ランタイム |
| `@deepseek-ai/dsh-mcp-client` | MCP クライアントプラグイン |
| `@deepseek-ai/dsh-tool-skill` | Skill ツールプラグイン |

## この索引の使い方

1. **概念を理解したい** → まず README と architecture.md を読む
2. **あるメカニズムを理解したい** → subsystems/ 配下の対応するサブシステムを参照
3. **手順どおりに何かを作りたい** → cookbook/ 配下の対応するチュートリアルを参照
4. **コマンドの挙動が不明** → CLI リファレンスを確認
5. **あるパッケージの実装を見たい** → packages/ 配下の対応するパッケージの README を参照
