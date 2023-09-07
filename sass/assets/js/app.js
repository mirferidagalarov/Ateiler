function trendingSlider() {
  const trendingImgs = document.querySelectorAll(".trending-imgs");

  trendingImgs.forEach((img) => {
    const imgElements = img.querySelectorAll(".trending-img");
    const paginations = img.querySelectorAll(".pagination-dot");

    imgElements.forEach((imgElement, index) => {
      imgElement.addEventListener("click", () => {
        imgElements.forEach((element) => {
          element.classList.remove("selected");
          element.classList.remove("img-move-left");
          element.classList.remove("img-move-right");
        });

        paginations.forEach(pagination =>{
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



      });
    });
  });
};



function pageInit(){
    trendingSlider();
}

pageInit();
