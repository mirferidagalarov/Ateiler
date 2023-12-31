// plus minus buttons

let plus = document.querySelector(".plus-minus .plus");
let minus = document.querySelector(".plus-minus .minus");
let count = document.querySelector(".count");

plus.addEventListener("click", function () {
  count.textContent++;
})

minus.addEventListener("click", function () {
  if (count.textContent > 1) {
    count.textContent--;
  }
})

// mouseover


let swiperSlide = document.querySelectorAll(".first-swiper .swiper-slide ");

swiperSlide.forEach(el => {
  let mainImg = el.lastElementChild
  mainImg.addEventListener("mouseover", e => {
    e.target.style.transform = "scale(1.5)"
    e.target.style.transformOrigin = "center center"

    console.log(e.target);
  })
  mainImg.addEventListener("mouseout", (e) => {
    e.target.style.transform = "scale(1)";
  });
  mainImg.addEventListener("mousemove", function (e) {
    const rect = this.getBoundingClientRect();
    const X = (e.pageX - rect.left) / rect.width;
    const Y = (e.pageY - rect.top) / rect.height;
    const transformOrigin = X * 100 + '% ' + Y * 100 + '%';
    this.style.transformOrigin = transformOrigin;
  });

});



var swiper = new Swiper(".myPhotobox", {
  spaceBetween: 20,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true
});
var swiper2 = new Swiper(".mainSwiper", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper
  }
});

// fullscreen

var swiper = new Swiper(".fullscreenSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function fullscreen() {
  const openerFullScreen = document.querySelectorAll('.search-icon-div');
  const container = document.querySelector('.fullscreenSwiper');
  const closer = document.querySelectorAll('.div-cancel-button');
  closer.forEach(item => {
    item.addEventListener('click', () => {
      container.classList.add('d-none');
    })
  })
  openerFullScreen.forEach(item => {
    item.addEventListener('click', () => {
      container.classList.remove('d-none');
    })
  })

}

fullscreen();