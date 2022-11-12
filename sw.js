const STATIC_CACHE = "static-v1";

const APP_SHELL = [
  "/",
  "index.html",
  "/css/style.css",
  "/css/styletwo.css",
  "/js/app.js",
  "/images/icons/icon-310x310.png",
];

self.addEventListener("install", (e) => {
  const cacheStatic = caches
    .open(STATIC_CACHE)
    .then((cache) => cache.addAll(APP_SHELL));

  e.waitUntil(cacheStatic);
});

self.addEventListener("fetch", (e) => {
  console.log("fetch! ", e.request);
  e.respondWith(
    caches
      .match(e.request)
      .then((res) => {
        return res || fetch(e.request);
      })
      .catch(console.log)
  );
  //   e.waitUntil(response);
});
