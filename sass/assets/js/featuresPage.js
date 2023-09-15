const swiper = new Swiper('.bannerSwiper', {
    spaceBetween:0,
    effect:'fade',
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 4000
    },
    loop: true,
    slidesPerView: 1,
});