const OFFLINE_HTML = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>VideoGames Store - Modo Offline</title>
</head>
<body style="background-color: blue; color: white; text-align: center; padding: 2em;">
    <h1>Modo Offline</h1>
    <p>Lo sentimos, pero parece que no tienes conexión a internet en este momento.</p>
</body>
</html>
`;

self.addEventListener('install', event => {
    // No es necesario cachear nada en esta versión
    console.log("Service Worker instalado");
});

self.addEventListener('activate', event => {
    console.log("Service Worker activado");
});

self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return new Response(OFFLINE_HTML, {
                headers: { 'Content-Type': 'text/html' }
            });
        })
    );
});
