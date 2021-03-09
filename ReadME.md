# TypeScript 導入

- まず TypeScirpt をインストールする(npm 経由)

  `$ npm install -g typescript`

- インストールできたかは以下のコマンドで確認

  `$ tsc -v`

- コンパイルのための設定ファイルを作成

  開発をするディレクトリに移動して

  `$ tsc –-init`

  実行すると tsconfig.json が生成される

- TypeScirpt ファイルに記述し開発を進める(拡張子は.ts)

  ...

- .ts を.js に変換する

  `$ tsc sample.ts`

  成功すると sample.js が生成される

  単に

  `$ tsc`

  と実行するとディレクトリ内全ての ts ファイルがコンパイルされる

## tsconfig.json のオプション

```json
`"compilerOptions": {}`
```

コンパイル時のオプション、基本的にここにオプションを書いていく

`"checkJs": true`

これを true にすると.js もコンパイル対象になる

→ 一部.js ファイルで書いているときに true にする
