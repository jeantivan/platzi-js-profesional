const CACHE_VERSION = "v1";

self.addEventListener("install", (event) => {
  event.waitUntil(precache());
});

self.addEventListener("fetch", (event) => {
  const req = event.request;

  // Solo capturamos las peticiones GET
  if (req.method !== "GET") {
    return;
  }

  // Buscamos en caché si existe el contenido
  // de la petición
  event.respondWith(cacheResponse(req));

  // Actualizar caché
  event.waitUntil(updateCache(req));
});

async function precache() {
  // Creamos un nuevo Caché
  const cache = await caches.open(CACHE_VERSION);

  // Añadimos los recursos mas importantes
  // de la primera carga
  return cache.addAll([
    "/",
    "/index.html",
    "/assets/index.js",
    "/assets/MediaPlayer.js",
    "/assets/plugins/AutoPause.js",
    "/assets/plugins/Autoplay.js",
    "/assets/index.css",
    "/assets/BigBuckBunny.mp4",
  ]);
}

async function cacheResponse(req) {
  const cache = await caches.open(CACHE_VERSION);

  // Verificamos si existe una copia del request
  // en nuestro caché
  const response = await cache.match(req);

  return response || fetch(req);
}

async function updateCache(req) {
  const cache = await caches.open(CACHE_VERSION);

  // Buscamos una copia actualizada del request
  const response = await fetch(req);

  return cache.put(req, response);
}
