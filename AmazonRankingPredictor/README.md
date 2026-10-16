# Amazon Ranking Predictor（公開デモ）

全巻セット仕入れ向けに、Amazon の BSR 履歴から Prophet で推移を予測し Plotly で可視化する Python ツールの**公開用サンプル**です。

## 見方

1. [`index.html`](./index.html) … 紹介文（先に読む）
2. [`overview.html`](./overview.html) … 紹介概要
3. [`interactive_ranking_predictions.html`](./interactive_ranking_predictions.html) … インタラクティブグラフ

公開 URL:

- 紹介: https://huetter-works.github.io/portfolio/AmazonRankingPredictor/
- 概要: https://huetter-works.github.io/portfolio/AmazonRankingPredictor/overview.html
- デモ: https://huetter-works.github.io/portfolio/AmazonRankingPredictor/interactive_ranking_predictions.html

## デモ HTML の出所

`Amazon_ranking_predictor` のテスト出力  
`forecast_results_test/interactive_ranking_predictions.html` を配置しています（ASIN 数を絞った小規模・過去サンプル）。

## 注意

- 表示される ASIN は Amazon 上で公開されている商品識別子です。本番運用の全件や最新結果ではありません
- Plotly 埋め込みのためファイルが大きく、読み込みに時間がかかることがあります
- Amazon 公式・提携ではありません
