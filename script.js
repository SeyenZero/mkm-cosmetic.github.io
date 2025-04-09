const swiper = new Swiper('.swiper', {
  // Configuración básica
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: false,
  spaceBetween: 20,
  
  
  // Paginación
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
  },
  
  // Navegación
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  
  // Breakpoints responsivos
  breakpoints: {
      320: {
          slidesPerView: 1,
          spaceBetween: 7
      },
      640: {
          slidesPerView: 1,
          spaceBetween: 22,
      },
      1024: {
          slidesPerView: 3,
          spaceBetween: 20
      }
  },
  
  // Eventos
  on: {
      init: function() {
          setTimeout(() => this.update(), 100);
      }
  }
});

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const banner = document.querySelector('.banner-container');
    
    // Función para ajustar los espacios
    function adjustSpacing() {
        const headerHeight = header.offsetHeight;
        
        // Aplicamos los valores calculados
        document.body.style.paddingTop = headerHeight + 'px';
        banner.style.marginTop = -headerHeight + 'px';
        banner.style.paddingTop = headerHeight + 'px';
    }
    
    // Ajuste inicial
    adjustSpacing();
    
    // Reajustar al cambiar tamaño de ventana
    window.addEventListener('resize', adjustSpacing);
    
    // Efecto al hacer scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            faqItem.classList.toggle('active');
            
            // Cerrar otras preguntas
            faqQuestions.forEach(q => {
                if (q !== question) {
                    q.parentElement.classList.remove('active');
                }
            });
        });
    });
});