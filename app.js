const pdfFiles = [
  { title: "Lektion 1", file: "Lektion1.pdf" },
  { title: "Lektion 2", file: "Lektion2.pdf" },
  { title: "Lektion 3", file: "Lektion3.pdf" },
  { title: "Lektion 4", file: "Lektion4.pdf" },
  { title: "Lektion 5", file: "Lektion5.pdf" },
  { title: "Lektion 6", file: "Lektion6.pdf" },
  { title: "Lektion 7", file: "Lektion7.pdf" },
  { title: "2025前期期末試験問題", file: "2025前期期末試験問題.pdf" },
  { title: "2025前期期末試験解答", file: "2025前期期末試験解答.pdf" },
  { title: "前期まとめ2025", file: "前期まとめ2025.pdf" }
];

const pdfIcon = `
  <svg class="pdf-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="M6.75 2.5h7.19c.4 0 .78.16 1.06.44l3.56 3.56c.28.28.44.66.44 1.06v12.19A1.75 1.75 0 0 1 17.25 21.5H6.75A1.75 1.75 0 0 1 5 19.75V4.25A1.75 1.75 0 0 1 6.75 2.5Zm6.5 1.7v3.55c0 .41.34.75.75.75h3.3L13.25 4.2ZM8 12.25c0-.41.34-.75.75-.75h2a2.25 2.25 0 0 1 0 4.5H9.5v1.25a.75.75 0 0 1-1.5 0v-5Zm1.5.75v1.5h1.25a.75.75 0 0 0 0-1.5H9.5Zm4-1.5h1.25a2.75 2.75 0 0 1 0 5.5H13.5v-5Zm1.5 1.55v2.4a1.25 1.25 0 0 0 0-2.4Zm2.75-.8c0-.41.34-.75.75-.75h2.25a.75.75 0 0 1 0 1.5h-1.5v.75h1.25a.75.75 0 0 1 0 1.5h-1.25v2a.75.75 0 0 1-1.5 0v-5Z"/>
  </svg>`;

const list = document.getElementById("pdf-list");

pdfFiles.forEach(({ title, file }) => {
  const pdfPath = `./pdfs/${file}`;
  const item = document.createElement("li");
  item.className = "pdf-item";

  const main = document.createElement("div");
  main.className = "pdf-main";

  const iconLink = document.createElement("a");
  iconLink.className = "pdf-icon-link";
  iconLink.href = pdfPath;
  iconLink.target = "_blank";
  iconLink.rel = "noopener";
  iconLink.setAttribute("aria-label", `${title}を開く`);
  iconLink.innerHTML = pdfIcon;

  const copy = document.createElement("div");
  copy.className = "pdf-copy";

  const titleLink = document.createElement("a");
  titleLink.className = "pdf-title-link";
  titleLink.href = pdfPath;
  titleLink.target = "_blank";
  titleLink.rel = "noopener";
  titleLink.textContent = title;

  const fileName = document.createElement("p");
  fileName.className = "pdf-file-name";
  fileName.textContent = file;

  copy.append(titleLink, fileName);
  main.append(iconLink, copy);

  const button = document.createElement("button");
  button.className = "update-button";
  button.type = "button";
  button.dataset.pdfPath = pdfPath;
  button.setAttribute("aria-label", `${title}の最新版を開く`);
  button.textContent = "アップデート";

  item.append(main, button);
  list.appendChild(item);
});

list.addEventListener("click", (event) => {
  const button = event.target.closest(".update-button");
  if (!button) return;

  const url = new URL(button.dataset.pdfPath, window.location.href);
  url.searchParams.set("updated", Date.now().toString());
  window.open(url.toString(), "_blank", "noopener");
});
