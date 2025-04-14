document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const heroBanner = document.querySelector('.hero-banner');
    
    function adjustHeaderSpacing() {
        const headerHeight = header.offsetHeight;
        
        // Ajuste para todos los dispositivos
        document.body.style.paddingTop = headerHeight + 'px';
        
        // Ajuste específico para el hero banner
        if (heroBanner) {
            heroBanner.style.marginTop = -headerHeight + 'px';
            heroBanner.style.paddingTop = headerHeight + 'px';
        }
        
        // Ajuste adicional para móviles
        if (window.innerWidth <= 768) {
            document.body.style.paddingTop = '60px';
            if (heroBanner) {
                heroBanner.style.marginTop = '-60px';
                heroBanner.style.paddingTop = '60px';
            }
        }
    }
    
    // Ejecutar al cargar
    adjustHeaderSpacing();
    
    // Reajustar cuando cambia el tamaño de la ventana
    window.addEventListener('resize', adjustHeaderSpacing);
    
    // Reajustar cuando cambia la orientación del dispositivo
    window.addEventListener('orientationchange', adjustHeaderSpacing);
});

document.querySelectorAll('.product-card').forEach(card => {
    const hoverImage = card.querySelector('.product-image-hover');
    
    card.addEventListener('mousemove', (e) => {
        // Efecto de parallax ligero (opcional)
        const x = e.clientX - card.getBoundingClientRect().left;
        const y = e.clientY - card.getBoundingClientRect().top;
        hoverImage.style.transform = `scale(1.05) translate(${x * 0.01}px, ${y * 0.01}px)`;
    });

    card.addEventListener('mouseleave', () => {
        hoverImage.style.transform = 'scale(1)';
    });
});