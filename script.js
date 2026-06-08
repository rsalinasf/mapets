document.addEventListener('DOMContentLoaded', () => {

    // 1. Lógica del Botón Flotante de WhatsApp
    const waButton = document.getElementById('wa-floating-btn');
    const waPhoneNumber = '56912345678'; // Reemplazar con el número real de la veterinaria
    const waDefaultMessage = '¡Hola MaPet\'s! Me gustaría consultar por los servicios o las galletas.';

    waButton.addEventListener('click', () => {
        // Codifica el mensaje para que sea válido en una URL
        const encodedMessage = encodeURIComponent(waDefaultMessage);
        const waUrl = `https://wa.me/${waPhoneNumber}?text=${encodedMessage}`;
        
        // Abre WhatsApp en una nueva pestaña
        window.open(waUrl, '_blank');
    });

    // Opcional: Lógica para los botones de "Pedir por WhatsApp" en cada tarjeta de producto
    const orderButtons = document.querySelectorAll('.btn-wa-order');
    orderButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productName = e.target.getAttribute('data-product');
            const specificMessage = `¡Hola MaPet's! Me gustaría encargar: ${productName}.`;
            const waUrlSpecific = `https://wa.me/${waPhoneNumber}?text=${encodeURIComponent(specificMessage)}`;
            window.open(waUrlSpecific, '_blank');
        });
    });

    // 2. Scroll Suave (Smooth Scroll) para enlaces del Navbar
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Obtenemos la altura del navbar para no tapar los títulos (aprox 80px)
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

});