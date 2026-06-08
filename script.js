document.addEventListener('DOMContentLoaded', () => {

    // 1. WhatsApp Float
    const waButton = document.getElementById('wa-floating-btn');
    const waPhoneNumber = '56912345678';
    const waDefaultMessage = '¡Hola MaPet\'s! Me gustaría consultar por el catálogo de snacks y galletas para mascotas.';

    waButton.addEventListener('click', () => {
        window.open(`https://wa.me/${waPhoneNumber}?text=${encodeURIComponent(waDefaultMessage)}`, '_blank');
    });

    const orderButtons = document.querySelectorAll('.btn-wa-order');
    orderButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productName = e.target.getAttribute('data-product');
            window.open(`https://wa.me/${waPhoneNumber}?text=${encodeURIComponent(`¡Hola MaPet's! Me gustaría encargar: ${productName}.`)}`, '_blank');
        });
    });

    // 2. Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetElement = document.getElementById(this.getAttribute('href').substring(1));
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Mobile Menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinksList = document.getElementById('nav-links');
    const menuIcon = mobileMenuBtn.querySelector('i');

    const toggleMenu = () => {
        navLinksList.classList.toggle('active');
        menuIcon.className = navLinksList.classList.contains('active') ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    };

    mobileMenuBtn.addEventListener('click', toggleMenu);
    navLinksList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinksList.classList.contains('active')) toggleMenu();
        });
    });

    // 4. Dynamic Navbar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // 5. Scroll Reveal Premium
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));





    // ==========================================
    // LÓGICA DE LA BROMA PARA LA CUÑADA
    // ==========================================
    const prankOverlay = document.getElementById('prank-overlay');
    const clickHereBtn = document.getElementById('click-here-btn');
    const closePrankBtn = document.getElementById('close-prank-btn');
    const popupBox = document.getElementById('popup-box');
    const baitSection = document.getElementById('phase-bait');
    const jokeSection = document.getElementById('phase-joke');

    // Hacer que el anuncio aparezca a los 3 segundos de entrar a la página
    setTimeout(() => {
        prankOverlay.style.display = 'flex';
    }, 3000);

    // Cuando hace clic en el botón verde de "CLICK AQUÍ"
    clickHereBtn.addEventListener('click', () => {
        // 1. Añade el efecto de sacudida
        popupBox.classList.add('shake');

        // 2. Oculta el engaño
        baitSection.style.display = 'none';

        // 3. Muestra el dedo y el texto
        jokeSection.style.display = 'block';
        
        // 4. Sonido de error del sistema (Solo si el navegador lo permite)
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioCtx.createOscillator();
            oscillator.type = 'sawtooth';
            oscillator.frequency.setValueAtTime(120, audioCtx.currentTime); // Sonido grave y molesto
            oscillator.connect(audioCtx.destination);
            oscillator.start();
            oscillator.stop(audioCtx.currentTime + 0.3);
        } catch(e) {
            console.log("Audio no soportado");
        }
    });

    // Para que pueda cerrar la broma y ver el resto de la página
    closePrankBtn.addEventListener('click', () => {
        prankOverlay.style.display = 'none';
    });

});