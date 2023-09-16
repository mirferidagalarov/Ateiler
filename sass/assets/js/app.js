let newsArea;
let areaItem;
let totalIndex = 0;
let translateX = 0;
function trendingSlider() {
  const trendingImgs = document.querySelectorAll(".trending-imgs");

  sliderActionWithImg(trendingImgs);
  sliderActionWithDots(trendingImgs);
};

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

        paginations.forEach(pagination => {
          pagination.classList.remove("selected");
        })

        paginations[index].classList.add("selected")

        imgElement.classList.add("selected");

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
      });
    });
  });
}

function sliderActionWithDots(trendingImgs) {
  trendingImgs.forEach(img => {
    const imgElements = img.querySelectorAll(".trending-img");
    const paginations = img.querySelectorAll(".pagination-dot");

    paginations.forEach((pag, index) => {
      pag.addEventListener('click', () => {
        paginations.forEach(pagination => {
          pagination.classList.remove('selected');
        })

        imgElements.forEach((element) => {
          element.classList.remove("selected");
          element.classList.remove("img-move-left");
          element.classList.remove("img-move-right");
          element.classList.remove("img-hide-left");
        });

        pag.classList.add('selected');
        imgElements[index].classList.add('selected');

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

// function newsMover() {
//   const moveLeftIcon = document.getElementById('news-move-left');
//   const moveRightIcon = document.getElementById('news-move-right');
//   const newsContainer = document.querySelector('.news-area .row');
//   const newsItems = document.querySelectorAll('.news-wrap');
//   const itemWidth = newsItems[0].clientWidth;
//   let currentIndex = 0;


//   if (newsContainer.clientWidth / itemWidth === 1) {
//     moveLeftIcon.addEventListener('click', () => {
//       currentIndex = (currentIndex - 1 + newsItems.length) % newsItems.length;
//       updateNewsWrapPosition();
//     });

//     moveRightIcon.addEventListener('click', () => {
//       currentIndex = (currentIndex + 1) % newsItems.length;
//       updateNewsWrapPosition();
//     });

//     function updateNewsWrapPosition() {
//       newsItems.forEach(item => {
//         const newPosition = -currentIndex * itemWidth;
//         item.style.transform = `translateX(${newPosition}px)`;
//       })
//     }
//   }
//   else {
//     translateX = 0;
//     const width = newsItems[0].clientWidth;

//     moveRightIcon.addEventListener('click', () => {
//       if (translateX >= 0) {
//         translateX -= width;
//       }
//       else if (translateX < width) {
//         translateX += width;
//       }
//       updateNewsPosition();
//     })

//     moveLeftIcon.addEventListener('click', () => {
//       if (translateX >= 0) {
//         translateX -= width;
//       }
//       else if (translateX < width) {
//         translateX += width;
//       }
//       updateNewsPosition();
//     })

//     function updateNewsPosition() {
//       newsItems.forEach(item => {
//         item.style.transform = `translateX(${translateX}px)`;
//       })
//     }
//   }
// }
//newsArea.style.transform = `translateX(${-areaItem}px)`;

function newsMover() {
  const leftSlider = document.getElementById('news-move-left');
  const rightSlider = document.getElementById('news-move-right');
  newsArea = document.getElementById("dp-Slider");
  areaItem = newsArea.children;
  leftSlider.addEventListener("click", () => {
    prevSlider(areaItem);
    sliderResize();
  });
  rightSlider.addEventListener("click", () => {
    nextSlider(areaItem);
    sliderResize();x
  });
  sliderResize();
  console.log(newsArea.children[0].offsetWidth);
}

const sliderResize = () => {
  // newsArea.style.transform = `translateX(${-areaItem[0].offsetWidth * totalIndex}px)`;
  translateX = -areaItem[0].offsetWidth;
  Array.from(areaItem).forEach(item => {
    item.style.transform = `translateX(${translateX * totalIndex}px)`;
  })
}

const prevSlider = (areaItem) => {
  totalIndex--;
  if (totalIndex < 0) {
    if (newsArea.clientWidth / areaItem[0].clientWidth == 1) {
      totalIndex = areaItem.length - 1;
    }
    else
      totalIndex = areaItem.length - 3;
  }
}

const nextSlider = (areaItem) => {
  totalIndex++;
  if (newsArea.clientWidth / areaItem[0].clientWidth == 3) {
    if (totalIndex == areaItem.length - 2) {
      totalIndex = 0;
      return;
    }
  }
  if (totalIndex == areaItem.length )
    totalIndex = 0;
}


function pageInit() {
  trendingSlider();
  newsMover();
  window.onresize = () => {
    areaItem = newsArea.children;
    sliderResize();
  }
}

pageInit();
