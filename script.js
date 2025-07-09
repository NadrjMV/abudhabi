// Aguarda o carregamento completo do DOM para executar o script
document.addEventListener("DOMContentLoaded", function() {

    // --- CONTROLE DO MENU HAMBURGER PARA MOBILE ---
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));


    // --- EFEITO DO HEADER AO ROLAR A PÁGINA ---
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


    // --- ANIMAÇÃO DE ENTRADA DAS SEÇÕES AO ROLAR (SCROLL REVEAL) ---
    const sections = document.querySelectorAll('.section-container');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
    
    const smokeVideo = document.querySelector('.hero-video');

    if (smokeVideo) { 
        
        let minOpacity = 0.15; 
        let maxOpacity = 0.35; 
        let pulseSpeed = 0.001; 
        
        let currentOpacity = minOpacity;
        let direction = 1;

        function animateSmokeOpacity() {
            currentOpacity += pulseSpeed * direction;

            if (currentOpacity <= minOpacity || currentOpacity >= maxOpacity) {
                currentOpacity = Math.max(minOpacity, Math.min(maxOpacity, currentOpacity));
                direction *= -1; 
            }

            smokeVideo.style.opacity = currentOpacity;

            requestAnimationFrame(animateSmokeOpacity);
        }

        animateSmokeOpacity();
    }

});
