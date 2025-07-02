-- 既存のテーブルを削除するSQL
-- 依存関係の順序を考慮して削除

-- まずトリガーを削除
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP TRIGGER IF EXISTS update_profiles_updated_at ON profiles;
DROP TRIGGER IF EXISTS update_replies_updated_at ON replies;
DROP TRIGGER IF EXISTS update_templates_updated_at ON templates;

-- 関数を削除
DROP FUNCTION IF EXISTS handle_new_user();
DROP FUNCTION IF EXISTS update_updated_at_column();

-- テーブルを削除（依存関係の逆順）
DROP TABLE IF EXISTS templates CASCADE;
DROP TABLE IF EXISTS replies CASCADE;
DROP TABLE IF EXISTS reviews CASCADE;
DROP TABLE IF EXISTS profiles CASCADE;