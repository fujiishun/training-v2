#コンテナイメージをビルド
docker compose build

#コンテナ立ち上げ
docker compose up

#モデル・マイグレーションファイル作成
docker compose exec api rails generate model "モデル名" "カラム内容"

#マイグレーション適用
docker compose exec api rails db:migrate

#シードデータ適用
docker compose exec api rails db:seed

#テストユーザーデータ
ID　yamada@example.com
PW　Password123!

#コンテナに入るコマンド
docker compose exec front bash
docker compose exec api bash
docker compose exec db bash

#メール設定方法(管理者に問い合わせいただけるとサンプルアカウントの情報をお渡しします)
1. gmailアカウントを用意
2. gmailでアプリパスワードを発行（https://support.google.com/mail/answer/185833?hl=ja）
3. envファイルにメールアドレスとパスワードを設定