<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="テキスト解答PDFを一覧で確認できるページです。">
  <title>テキスト解答ページ</title>
  <link rel="stylesheet" href="./styles.css">
</head>
<body>
  <main class="page-shell">
    <section class="document-panel" aria-labelledby="page-title">
      <header class="page-header">
        <p class="eyebrow">PDF DOCUMENTS</p>
        <h1 id="page-title">テキスト解答ページ</h1>
      </header>

      <ul id="pdf-list" class="pdf-list" aria-label="PDFファイル一覧"></ul>

      <noscript>
        <p class="noscript-message">このページを表示するにはJavaScriptを有効にしてください。</p>
      </noscript>
    </section>
  </main>

  <script src="./app.js"></script>
</body>
</html>
