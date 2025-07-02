# アンチコメント返信生成AI

Google Gemini AIを使用して、アンチコメントに対する適切な返信を自動生成するシンプルなツールです。

## 機能

- **シンプルな返信生成**: アンチコメントを貼り付けるだけでAIが適切な返信を生成
- **ワンクリックコピー**: 生成された返信をクリップボードに簡単コピー
- **セキュアな認証**: Supabase Authによる安全なユーザー管理

## セットアップ

### 1. 環境変数の設定

`.env.local`ファイルを作成し、以下の環境変数を設定してください：

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Google Gemini API
GOOGLE_AI_API_KEY=your_google_ai_api_key

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 2. Supabaseのセットアップ

1. [Supabase](https://supabase.com)でプロジェクトを作成
2. SQLエディタで`supabase/schema-simplified.sql`の内容を実行
3. Authentication設定でメール認証を有効化

### 3. Google Gemini APIキーの取得

1. [Google AI Studio](https://makersuite.google.com/app/apikey)にアクセス
2. APIキーを作成
3. `.env.local`の`GOOGLE_AI_API_KEY`に設定

## 起動方法

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ブラウザで開く
# http://localhost:3000
```

## 使い方

1. **アカウント作成**: トップページから「無料で始める」をクリック
2. **ログイン**: メールアドレスとパスワードでログイン
3. **返信生成**: アンチコメントを貼り付けて「返信を生成」ボタンをクリック
4. **コピー**: 生成された返信を「コピー」ボタンでクリップボードへ

## 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **データベース**: Supabase
- **認証**: Supabase Auth
- **AI**: Google Gemini API