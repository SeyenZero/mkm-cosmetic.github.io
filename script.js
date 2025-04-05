document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.mySwiper', {
      loop: true,
      slidesPerView: 'auto',
      centeredSlides: false,
      spaceBetween: 20,
      grabCursor: true,
      autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
      },
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      breakpoints: {
          640: {
              slidesPerView: 1,
              spaceBetween: 10
          },
          768: {
              slidesPerView: 2,
              spaceBetween: 15
          },
          1024: {
              slidesPerView: 3,
              spaceBetween: 20
          }
      }
  });
});