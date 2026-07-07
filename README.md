# テキスト解答ページ

GitHub経由でVercelにデプロイできる静的ウェブページです。

## 構成

- `index.html`: ページ本体
- `styles.css`: 画面デザイン
- `app.js`: PDF一覧の設定
- `vercel.json`: Vercel用のキャッシュ設定
- `pdfs/`: 掲載するPDFファイル

## 掲載PDF

- `Lektion1.pdf`
- `Lektion2.pdf`
- `Lektion3.pdf`
- `Lektion4.pdf`
- `Lektion5.pdf`
- `Lektion6.pdf`
- `Lektion7.pdf`
- `2025前期期末試験問題.pdf`
- `2025前期期末試験解答.pdf`
- `前期まとめ2025.pdf`

表示名またはファイル名を変更する場合は、`app.js` の `pdfFiles` を編集してください。

「アップデート」ボタンは、ブラウザーの古いキャッシュを避けて最新版のPDFを開きます。

## GitHubからVercelへデプロイ

1. `Lektion` フォルダー内のファイルをGitHubリポジトリにアップロードします。
2. Vercelで `Add New Project` を選び、そのGitHubリポジトリを指定します。
3. Framework Presetは `Other` のままにします。
4. Build CommandとOutput Directoryは空欄のままデプロイします。

PDFを更新するときは、GitHub上の `pdfs` フォルダー内のファイルを差し替えてコミットします。Vercelが自動的に再デプロイします。
