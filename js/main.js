document.getElementById("comprar-btn").addEventListener("click", () => {
    // Lógica para agregar el producto al carrito
    agregarAlCarrito();

    // Mostrar la notificación push
    mostrarNotificacion("Producto agregado al carrito");
});

// Función para agregar al carrito (puedes personalizarla según tu lógica)
function agregarAlCarrito() {
    // Aquí iría la lógica para agregar el producto al carrito
    console.log("Producto agregado al carrito");
}

// Función para mostrar la notificación
function mostrarNotificacion(mensaje) {
    if (Notification.permission === "granted") {
        // Muestra la notificación
        self.registration.showNotification("VideoGames Store", {
            body: mensaje,
            icon: "/images/carrito.png", // Asegúrate de tener un ícono para el carrito
            badge: "/images/carrito.png" // También puedes usar el mismo ícono
        });
    } else if (Notification.permission !== "denied") {
        // Solicita permiso para mostrar notificaciones
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                mostrarNotificacion(mensaje);
            }
        });
    }
}
