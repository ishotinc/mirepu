# Vercelデプロイガイド

## 前提条件
- Vercelアカウント（無料）
- GitHubアカウント
- ローカルでアプリが正常に動作していること

## デプロイ手順

### 1. GitHubリポジトリの作成

```bash
# プロジェクトディレクトリで実行
git init
git add .
git commit -m "Initial commit"

# GitHubで新しいリポジトリを作成後
git remote add origin https://github.com/YOUR_USERNAME/beauty-review-app.git
git branch -M main
git push -u origin main
```

### 2. Vercelにサインアップ/ログイン

1. https://vercel.com にアクセス
2. GitHubアカウントでサインアップ/ログイン

### 3. プロジェクトのインポート

1. Vercelダッシュボードで「New Project」をクリック
2. GitHubリポジトリを選択
3. 「Import」をクリック

### 4. 環境変数の設定

Vercelのプロジェクト設定で以下の環境変数を追加：

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
NEXT_PUBLIC_GOOGLE_AI_API_KEY=your_google_ai_api_key
NEXT_PUBLIC_APP_URL=https://your-app-name.vercel.app
```

**重要**: デプロイ後、実際のURLで`NEXT_PUBLIC_APP_URL`を更新してください。

### 5. ビルド設定

以下の設定が自動的に適用されます（変更不要）：

- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### 6. デプロイ

「Deploy」ボタンをクリックしてデプロイを開始。

### 7. Supabaseの設定更新

デプロイ完了後：

1. Supabase Dashboard → Authentication → URL Configuration
2. 以下を更新：
   - **Site URL**: `https://your-app-name.vercel.app`
   - **Redirect URLs**: 
     ```
     https://your-app-name.vercel.app/auth/callback
     https://your-app-name.vercel.app
     ```

### 8. カスタムドメイン（オプション）

1. Vercel Dashboard → Settings → Domains
2. カスタムドメインを追加
3. DNSレコードを設定

## トラブルシューティング

### ビルドエラーが発生した場合

1. **環境変数の確認**
   - すべての必須環境変数が設定されているか確認
   - `NEXT_PUBLIC_`プレフィックスが正しいか確認

2. **依存関係の問題**
   ```bash
   # ローカルで確認
   npm run build
   ```

3. **TypeScriptエラー**
   ```bash
   # 型エラーをチェック
   npm run build
   ```

### 認証が機能しない場合

1. Supabaseの**Redirect URLs**が正しく設定されているか確認
2. 環境変数の値が正しいか確認（スペースや改行が含まれていないか）

### Google Gemini APIエラー

1. APIキーが有効か確認
2. APIの使用制限に達していないか確認

## 自動デプロイの設定

GitHubのmainブランチにプッシュすると自動的にデプロイされます：

```bash
git add .
git commit -m "Update features"
git push origin main
```

## 推奨事項

1. **プレビューデプロイ**: Pull Requestを作成すると自動的にプレビュー環境が作成されます
2. **環境変数の管理**: 本番環境とステージング環境で異なる値を使用できます
3. **Analytics**: Vercel Analyticsを有効にしてパフォーマンスを監視

## セキュリティ注意事項

- `SUPABASE_SERVICE_ROLE_KEY`は絶対にクライアントサイドで使用しない
- APIキーは定期的に更新する
- 環境変数はGitHubにコミットしない（`.env.local`は`.gitignore`に含まれています）