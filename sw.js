self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("fitura-cache").then(cache =>
      cache.addAll([
        "/FITURA/",
        "/FITURA/index.html",
        "/FITURA/style.css"
      ])
    )
  );
});


