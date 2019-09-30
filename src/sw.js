if (workbox) {
  workbox.routing.registerRoute(
    'https://cdn.jsdelivr.net/gh/mailtoharshit/San-Francisco-Font-/sanfrancisco.css',
    new workbox.strategies.StaleWhileRevalidate(),
  );
  workbox.routing.registerRoute(
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
    new workbox.strategies.StaleWhileRevalidate(),
  );

  // Cacheado general de los recursos con una estrategia de carga en caché mientras se revisa que no ha cambiado
  workbox.routing.registerRoute(
    /\.html$/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'html-cache',
    }),
  );
  workbox.routing.registerRoute(
    /\.css$/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'css-cache',
    }),
  );
  workbox.routing.registerRoute(
    /\.js$/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'js-cache',
    }),
  );
} else {
  console.log('Workbox no está presente en la web');
}
