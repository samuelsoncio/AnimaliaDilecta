/* ==========================================================================
   Animalia Dilecta - Script Principal
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Inicializar iconos de Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Efecto de cambio de opacidad en la barra de navegación al hacer scroll
    const header = document.querySelector('.site-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.boxShadow = 'none';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        }
    });

    // 3. Generador dinámico de enlaces de WhatsApp con mensajes personalizados
    const numeroWhatsApp = "50688888888"; // Reemplaza con tu número real en Costa Rica
    
    const botonesReserva = document.querySelectorAll('.pricing-card .btn, .hero-actions .btn-primary');
    
    botonesReserva.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const textoBoton = boton.textContent.trim().toLowerCase();
            let mensajeServicio = "Hola, quisiera consultar por sus servicios en Animalia Dilecta.";

            if (textoBoton.includes('paseo')) {
                mensajeServicio = "Hola, me interesa el servicio de Paseo Guiado para mi mascota en Animalia Dilecta.";
            } else if (textoBoton.includes('sit') || textoBoton.includes('visita')) {
                mensajeServicio = "Hola, me interesa el servicio de Pet-Sitting a domicilio en Animalia Dilecta.";
            } else if (textoBoton.includes('hospedaje') || textoBoton.includes('noche')) {
                mensajeServicio = "Hola, me interesa el servicio de Hospedaje Boutique en Animalia Dilecta.";
            } else if (textoBoton.includes('ver servicios')) {
                return; 
            }

            e.preventDefault();
            const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeServicio)}`;
            window.open(urlWhatsApp, '_blank');
        });
    });

    // 4. Mensaje de consola para control de desarrollo
    console.log("🐾 Animalia Dilecta Pet Care - Script cargado exitosamente en Costa Rica.");
});