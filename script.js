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
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});