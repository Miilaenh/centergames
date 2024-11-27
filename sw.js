const OFFLINE_HTML = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VideoGames Store - Modo Offline</title>
    <style>
        /* Estilos generales */
        body {
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #1e3c72, #2a5298);
            color: black;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        /* Encabezado */
        header {
            background-color: #222;
            color: #f4f4f4;
            text-align: center;
            padding: 1.5em;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
            width: 100%;
        }

        header h1 {
            margin: 0;
            font-size: 2.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }

        header svg {
            width: 40px;
            height: 40px;
            fill: #4CAF50;
        }

        /* Contenedor de productos */
        .product-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            padding: 40px 20px;
            max-width: 1200px;
            margin: 20px auto;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
        }

        /* Producto */
        .product {
            width: 250px;
            text-align: center;
        }

        .skeleton {
            background: linear-gradient(90deg, #e0e0e0 25%, #f4f4f4 50%, #e0e0e0 75%);
            background-size: 200% 100%;
            animation: skeleton-loading 1.5s infinite;
            border-radius: 10px;
            margin-bottom: 15px;
        }

        .skeleton.img {
            height: 200px;
            width: 100%;
        }

        .skeleton.title {
            height: 20px;
            width: 80%;
            margin: 10px auto;
        }

        .add-btn {
            padding: 10px 15px;
            font-size: 1rem;
            color: white;
            background-color: #4CAF50;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            text-transform: uppercase;
        }

        .add-btn:disabled {
            background-color: #999;
            cursor: not-allowed;
        }

        @keyframes skeleton-loading {
            0% {
                background-position: 200% 0;
            }
            100% {
                background-position: -200% 0;
            }
        }

        /* Pie de página */
        footer {
            background-color: #222;
            color: #aaa;
            text-align: center;
            padding: 1em;
            width: 100%;
            position: fixed;
            bottom: 0;
        }

        /* Diseño responsive */
        @media (max-width: 768px) {
            .product-container {
                padding: 20px;
                gap: 10px;
            }

            .product {
                width: 100%;
                max-width: 220px;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5V14H9v2H7v-2H5v-2h2v-1c0-2.21 1.79-4 4-4s4 1.79 4 4v1h2v2h-2v2h-2v-2h-2zm3-5h-2v1h2v-1z"/>
            </svg>
            VideoGames Store
        </h1>
    </header>

    <main>
        <section class="product-container">
        <div class="product">
                <img src="images/1.jpg" alt="Roblox">
                <h2>Roblox</h2>
                <p>Un universo de posibilidades donde puedes crear, jugar y explorar con amigos.</p>
            </div>
            <div class="product">
                <img src="images/2.jpeg" alt="Minecraft">
                <h2>Minecraft</h2>
                <p>Un juego de construcción en mundo abierto donde la creatividad es el límite.</p>            </div>
            <div class="product">
                <img src="images/3.jpeg" alt="Fortnite">
                <h2>Fortnite</h2>
                <p>Juego de batalla real lleno de acción y desafíos en línea.</p>
            </div>
            <div class="product">
                <img src="images/4.jpg" alt="Kirby and the Forgotten Land">
                <h2>Kirby and the Forgotten Land</h2>
                <p>Acompaña a Kirby en una aventura en un misterioso mundo nuevo.</p>
            </div>
            <div class="product">
                <div class="skeleton img"></div>
                <div class="skeleton title"></div>
                <button class="add-btn" disabled>Modo Offline</button>
            </div>
            <div class="product">
                <div class="skeleton img"></div>
                <div class="skeleton title"></div>
                <button class="add-btn" disabled>Modo Offline</button>
            </div>
            <div class="product">
                <div class="skeleton img"></div>
                <div class="skeleton title"></div>
                <button class="add-btn" disabled>Modo Offline</button>
            </div>
                        <div class="product">
                <div class="skeleton img"></div>
                <div class="skeleton title"></div>
                <button class="add-btn" disabled>Modo Offline</button>
            </div>
                        <div class="product">
                <div class="skeleton img"></div>
                <div class="skeleton title"></div>
                <button class="add-btn" disabled>Modo Offline</button>
            </div>
                        <div class="product">
                <div class="skeleton img"></div>
                <div class="skeleton title"></div>
                <button class="add-btn" disabled>Modo Offline</button>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 VideoGames Store. Todos los derechos reservados.</p>
    </footer>

    <script>
        // No se reemplazarán los elementos skeleton, animación permanente.
        document.addEventListener("DOMContentLoaded", () => {
            console.log("Modo offline activo. Animación permanente.");
        });
    </script>
</body>
</html>
`;

self.addEventListener('install', event => {
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
