const OFFLINE_HTML = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VideoGames Store - Modo Offline</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #1e3c72, #2a5298);
            color: white;
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            text-align: center;
        }
        h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        p {
            font-size: 1.2rem;
            margin: 0.5rem 0;
            line-height: 1.5;
        }
        .button {
            margin-top: 2rem;
            padding: 0.8rem 1.5rem;
            font-size: 1rem;
            color: #1e3c72;
            background-color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            text-transform: uppercase;
            font-weight: bold;
            box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
        }
        .button:hover {
            background-color: #f1f1f1;
        }
        .icon {
            font-size: 4rem;
            margin-bottom: 1rem;
            animation: bounce 1.5s infinite;
        }
        @keyframes bounce {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-10px);
            }
        }
    </style>
</head>
<body>
    <div class="icon">🎮</div>
    <h1>¡Estás sin conexión!</h1>
    <p>Parece que no tienes acceso a internet en este momento.</p>
    <p>Conéctate para continuar explorando la tienda de videojuegos.</p>
    <button class="button" onclick="location.reload();">Reintentar</button>
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
