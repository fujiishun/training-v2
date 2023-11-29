FROM node:lts-slim

WORKDIR /front

# パッケージをコピー
COPY app/package*.json ./

# パッケージをインストール
RUN npm install

ENV CI=true

CMD ["npm", "start"]
