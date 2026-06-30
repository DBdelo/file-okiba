# テキスト解答ページ

GitHub経由でVercelにデプロイできる静的ウェブページです。

## ファイルの差し替え

`pdfs` フォルダー内のPDFを、同じファイル名のまま差し替えてください。

- `text-answer-01.pdf`
- `text-answer-02.pdf`
- `text-answer-03.pdf`
- `text-answer-04.pdf`
- `text-answer-05.pdf`
- `text-answer-06.pdf`
- `text-answer-07.pdf`

表示名またはファイル名を変更する場合は、`app.js` の `pdfFiles` を編集します。

「アップデート」ボタンは、ブラウザーの古いキャッシュを避けて最新版のPDFを開きます。

## GitHubからVercelへデプロイ

1. このフォルダー内のファイルをGitHubリポジトリにアップロードします。
2. Vercelで `Add New Project` を選び、そのGitHubリポジトリを指定します。
3. Framework Presetは `Other` のままにします。
4. Build CommandとOutput Directoryは空欄のままデプロイします。

PDFを更新するときは、GitHub上の `pdfs` フォルダー内のファイルを差し替えてコミットします。Vercelが自動的に再デプロイします。
