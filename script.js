var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;


const swiper = new Swiper('.swiper-container', {
  speed: 500,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  centeredSlides: true,
  paginationClickable: true,
  watchSlidesProgress: true,
  loop: true,
  slidesPerView: (width > 812) ? 2 : 1.2,
  spaceBetween: (width > 812) ? 30 : 5,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});