---
title: "付録 B · コマンド早見表"
description: "インストール / 起動 / プラグイン / 設定 / スラッシュコマンド"
---

# 付録 B · コマンド早見表

<div class="chapter-meta">
  <span class="cm-item"><span class="cm-k">全文字数</span><span class="cm-v">約 540 字</span></span>
  <span class="cm-item"><span class="cm-k">所要時間</span><span class="cm-v">約 8 分</span></span>
  <span class="cm-item"><span class="cm-k">難易度</span><span class="cm-v hl">参照用</span></span>
</div>

日常的に dsh で使うコマンドを、シナリオ別にグループ化しました。深入りしたい場合は対応する章へ進んでください。

## インストールとアップデート

```bash
# dsh をグローバルインストール（初心者向け）
npm install -g @deepseek-ai/dsh

# バージョン確認
dsh --version

# 最新版へアップデート
npm install -g @deepseek-ai/dsh@latest

# インストールせずに実行（毎回最新パッケージを利用）
npx @deepseek-ai/dsh web
```

> `npx` は毎回最新パッケージを取得し、グローバルインストールは自動更新されません。バージョンを固定したい場合はグローバルインストール、常に最新を使いたい場合は npx を使ってください。

## 起動

```bash
# Web UI を起動（最も一般的、デフォルトポート 3080）
dsh web

# ポートを指定して起動
dsh web --port 8080

# headless を起動してタスクを実行したら終了
dsh --profile headless "現在のディレクトリのテストを実行して失敗をまとめて"

# 指定したプロファイルで起動
dsh --profile <profile名>

# 追加設定を patch 形式で読み込んで起動
dsh web --patch ./my-plugin/cordis.yml
```

## プラグイン管理

```bash
# web プロファイルにインストール済みのプラグインを一覧表示
dsh plugin --profile web list

# プラグインをインストール（npm パッケージ）
dsh plugin --profile web add <パッケージ名>

# プラグインをインストール（GitHub ソース）
dsh plugin --profile web add github:<ユーザー名>/<リポジトリ名>

# プラグインをインストール（ローカルパス）
dsh plugin --profile web add ./my-plugin

# プラグインをインストール（tgz パッケージ）
dsh plugin --profile web add https://example.com/plugin.tgz

# プラグインをアンインストール
dsh plugin --profile web remove <パッケージ名>
```

> プラグインのインストール後は、対応するプロファイルを再起動しないと有効になりません（bundle の変更はホットリロードされません）。

## 設定とデバッグ

```bash
# web プロファイルの完全な設定ツリーを出力（「この挙動はどこから来ているか」の切り分け用）
dsh --profile web --dump-config

# headless プロファイルの設定ツリーを出力
dsh --profile headless --dump-config

# patch を読み込んで起動し、設定を確認
dsh web --patch ./my-config.yml --dump-config
```

> `--dump-config` の出力はプレーンテキストなので、切り分け時にそのまま AI に渡して設定ツリーをスキャンしてもらえます。

## 環境変数

```bash
# dsh 設定のルートディレクトリ（デフォルト ~/.dsh）
$DSH_HOME

# API Key（最優先、.credentials.yaml を上書き）
$DEEPSEEK_API_KEY

# ローカルモデルの API Key（LM Studio など、任意の値を設定）
$LM_STUDIO_API_KEY
```

## Web UI スラッシュコマンド

入力欄で `/` を入力すると、現在利用可能なコマンドのポップアップ一覧が表示されます。

| コマンド | 作用 |
|---|---|
| `/compact` | 現在の対話コンテキストを手動で圧縮し、過去の履歴を要約にまとめる |
| `/permission` | 現在のセッションの権限モード（read-only / workspace-write / danger-full-access）を確認・切替。引数なしで選択ボックスを表示 |
| `/model` | モデルを切り替える。プロバイダー別にグループ化されており、選択したモデルのデフォルト推論レベルが適用される |
| `/goal` | 目標管理：長期目標の作成 / 表示 / 編集 / 一時停止 / 再開 / クリア（例：`/goal pause`、`/goal clear`） |

> バージョンやインストール済みのプラグインにより、コマンド一覧は異なる場合があります。`/` を入力して現在の利用可能コマンドを確認してください。

## よく使う組み合わせ

```bash
# 初心者初日：インストールしてそのまま起動
npm install -g @deepseek-ai/dsh
dsh web

# 切り分け四連：バージョン確認 → 設定確認 → プラグイン確認 → 再起動
dsh --version
dsh --profile web --dump-config
dsh plugin --profile web list
dsh web

# headless でワンショットタスクを実行
dsh --profile headless "このリポジトリのアーキテクチャをまとめて markdown で書いて"
```
