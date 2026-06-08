document.addEventListener('DOMContentLoaded', () => {

    // 1. Lógica del Botón Flotante de WhatsApp
    const waButton = document.getElementById('wa-floating-btn');
    const waPhoneNumber = '56912345678'; // Reemplazar con tu número real
    const waDefaultMessage = '¡Hola MaPet\'s! Me gustaría consultar por el catálogo de snacks y galletas para mascotas.';

    waButton.addEventListener('click', () => {
        const encodedMessage = encodeURIComponent(waDefaultMessage);
        const waUrl = `https://wa.me/${waPhoneNumber}?text=${encodedMessage}`;
        window.open(waUrl, '_blank');
    });

    // Lógica para botones individuales de productos
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

    // 3. Lógica del Menú Hamburguesa para Móviles
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinksList = document.getElementById('nav-links');
    const menuIcon = mobileMenuBtn.querySelector('i');

    mobileMenuBtn.addEventListener('click', () => {
        navLinksList.classList.toggle('active');

        if (navLinksList.classList.contains('active')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-xmark');
        } else {
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        }
    });

    // Cierra el menú móvil al hacer clic en un enlace
    const mobileLinks = navLinksList.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinksList.classList.remove('active');
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        });
    });

});