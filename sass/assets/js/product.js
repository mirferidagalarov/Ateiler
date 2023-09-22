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

let mainImg=document.querySelector(".swiper-slide img");


mainImg.addEventListener("mouseover", (e) => {
  e.target.style.transform = "scale(1.5)";
});

mainImg.addEventListener("mouseout", (e) => {
  e.target.style.transform = "scale(1)";
});

mainImg.addEventListener("mousemove", (e) => {
  const rect = mainImg.getBoundingClientRect();
  const X = (e.pageX - rect.left) / rect.width;
  const Y = (e.pageY - rect.top) / rect.height;
  const transformOrigin = X * 100 + '% ' + Y * 100 + '%';
  mainImg.style.transformOrigin = transformOrigin;
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