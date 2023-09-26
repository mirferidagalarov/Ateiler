function trendingSlider() {
  const trendingImgs = document.querySelectorAll(".trending-imgs");

  sliderActionWithImg(trendingImgs);
  sliderActionWithDots(trendingImgs);
}

function sliderActionWithImg(trendingImgs) {
  trendingImgs.forEach((img) => {
    const imgElements = img.querySelectorAll(".trending-img");
    const paginations = img.querySelectorAll(".pagination-dot");

    imgElements.forEach((imgElement, index) => {
      imgElement.addEventListener("click", () => {
        imgElements.forEach((element) => {
          element.classList.remove("selected");
          element.classList.remove("img-move-left");
          element.classList.remove("img-move-right");
          element.classList.remove("img-hide-left");
        });

        paginations.forEach((pagination) => {
          pagination.classList.remove("selected");
        });

        paginations[index].classList.add("selected");

        imgElement.classList.add("selected");

        let prevIndex = index - 1;
        let nextIndex = index + 1;

        if (prevIndex !== -1) {
          imgElements[prevIndex].classList.add("img-move-left");
        }

        if (nextIndex < imgElements.length) {
          imgElements[nextIndex].classList.add("img-move-right");
        }
        if (nextIndex >= imgElements.length && imgElements.length > 2) {
          imgElements[0].classList.add("img-hide-left");
        }
      });
    });
  });
}

function sliderActionWithDots(trendingImgs) {
  trendingImgs.forEach((img) => {
    const imgElements = img.querySelectorAll(".trending-img");
    const paginations = img.querySelectorAll(".pagination-dot");

    paginations.forEach((pag, index) => {
      pag.addEventListener("click", () => {
        paginations.forEach((pagination) => {
          pagination.classList.remove("selected");
        });

        imgElements.forEach((element) => {
          element.classList.remove("selected");
          element.classList.remove("img-move-left");
          element.classList.remove("img-move-right");
          element.classList.remove("img-hide-left");
        });

        pag.classList.add("selected");
        imgElements[index].classList.add("selected");

        let prevIndex = index - 1;
        let nextIndex = index + 1;

        if (prevIndex !== -1) {
          imgElements[prevIndex].classList.add("img-move-left");
        }

        if (nextIndex < imgElements.length) {
          imgElements[nextIndex].classList.add("img-move-right");
        }

        if (nextIndex >= imgElements.length) {
          imgElements[0].classList.add("img-hide-left");
        }
      })
    })
  })
}

function newsMover() {
  const moveLeftIcon = document.getElementById('news-move-left');
  const moveRightIcon = document.getElementById('news-move-right');
  const newsContainer = document.querySelector('.news-area .row');
  const newsItems = document.querySelectorAll('.news-wrap');
  const itemWidth = newsItems[0].clientWidth;
  let currentIndex = 0;
  resetNewsWrapPosition();

  moveLeftIcon.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + newsItems.length) % newsItems.length;
    updateNewsWrapPosition('left');
  });

  moveRightIcon.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % newsItems.length;
    updateNewsWrapPosition('right');
  });

  function updateNewsWrapPosition(direction) {
    newsItems.forEach(item => {
      let newPosition = -currentIndex * itemWidth;
      if (newsContainer.clientWidth / itemWidth != 1) {
        if (direction === 'right' && newPosition < -itemWidth) {
          newPosition = 0;
          currentIndex = 0;
        }
        if (newPosition < -itemWidth && direction === 'left') {
          newPosition = -itemWidth;
          currentIndex = 1;
        }
      }
      item.style.transform = `translateX(${newPosition}px)`;
    })
  }

  function resetNewsWrapPosition() {
    newsItems.forEach(item => {
      item.style.transform = `translateX(${0}px)`;
    })
  }
}

function pageInit() {
  trendingSlider();
  newsMover();
  window.onresize = () => {
    newsMover();
  }
}

window.onload = pageInit();


