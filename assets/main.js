var swiper = new Swiper(".mySwiper", {
    speed: 600,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

ScrollReveal({ distance: '60px' }, {reset:true});
ScrollReveal().reveal('.right', { origin: 'right' });
ScrollReveal().reveal('.right', { delay:500 });
ScrollReveal().reveal('.left', { origin: 'left' });
ScrollReveal().reveal('.left', { delay:700 });
