if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add("dark");
}

document.querySelectorAll("a").forEach(function (link) {
  var label = (link.textContent || "").trim().toLowerCase();
  var href = (link.getAttribute("href") || "").toLowerCase();

  if (label === "cv" || href.endsWith(".pdf")) {
    link.remove();
  }
});
