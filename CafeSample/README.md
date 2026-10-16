# Cafe Sample

架空カフェ向けの **1ページレイアウト習作**（ポートフォリオ用デモ）です。実在の店舗ではありません。

## ページ

- `index.html` — トップ（スライダー / Introduction / Cafe Menu / Gallery / News）

## 構成上の注意

- **Access** は偽住所を置かない方針のため、ナビから外しています。
- **Legal / Privacy** はデモのため未掲載です。
- **SNS アイコン** はレイアウト確認用で、外部リンクはありません。
- **Sweets / Foods の写真** はドリンク画像の使い回し（ダミー）です。`alt` にその旨を含めています。
- **Gallery** は写真未掲載のダミー構成です。
- ビルド用の SCSS ソースは同梱していません。成果物は `dist/` です。実行 JS は `dist/js/main.min.js` を参照します（`script.js` は可読用のソース相当）。

## 技術メモ

- HTML / CSS（コンパイル済み） / Flipsnap + lodash（`main.min.js` に同梱）
- ブレークポイント目安: 640px
