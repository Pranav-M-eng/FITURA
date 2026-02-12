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

<script>
async function sendToAI() {
  const text = document.getElementById("arg").value;

  const res = await fetch("http://127.0.0.1:5000/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });

  const data = await res.json();
  document.getElementById("output").textContent = data.result;
}
</script>

