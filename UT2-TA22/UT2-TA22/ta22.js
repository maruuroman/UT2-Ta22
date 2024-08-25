const parrafo = document.getElementById("tamañoVentana");

function actualizarTamaño() {
    const ancho = window.innerWidth;
    const alto = window.innerHeight;
    parrafo.textContent = `Tamaño actual: ${ancho}px x ${alto}px`;
}

window.addEventListener("resize", actualizarTamaño);

// Mostrar el tamaño inicial de la ventana
actualizarTamaño();