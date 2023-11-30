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

#コンテナに入るコマンド
docker compose exec front bash
docker compose exec api bash
docker compose exec db bash
