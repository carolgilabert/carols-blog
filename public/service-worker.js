self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((allCaches) => {
        return Promise.all(
          allCaches.map((cacheToDelete) => {
            return caches.delete(cacheToDelete);
          })
        );
      })
      .then(() => self.clients.claim())
  );
});
