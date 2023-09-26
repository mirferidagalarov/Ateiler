function accordion() {
  const listopen = document.querySelectorAll(".accardion-open");
  listopen.forEach((item) => {
    item.addEventListener("click", () => {
      const submenu = item.parentElement.querySelector(".sub-menu");
      submenu.classList.toggle("active");
      const icon = item.parentElement.querySelector("i");
      icon.classList.toggle("turn");
    });
  });
}

function mobMenuOpen() {
  const opener = document.querySelector(".baricon");
  const mobmenu = document.querySelector(".mobile-menu-wrap");
  const body = document.body;
  const opac = document.querySelector(".commonopac");

  document.addEventListener("click", (e) => {
    if (opener.contains(e.target)) {
      mobmenu.classList.add("opened");
      body.classList.add("overflow-hidden");
      opac.style.display = "block";
    }
    else if (!mobmenu.contains(e.target)) {
      body.classList.remove("overflow-hidden");
      opac.style.display = "none";
      mobmenu.classList.remove("opened");
    }
  })

}

function delay() {
  const items = document.querySelectorAll(".item");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(function () {
          entry.target.style.transform = "translateY(0)";
          entry.target.style.opacity = 1;
          observer.unobserve(entry.target);
        }, 300);
      }
    });
  });

  items.forEach(item => {
    observer.observe(item);
  });
}

function cartCount() {
  let prodArray = JSON.parse(localStorage.getItem('products')) || [];
  const cartCount = document.querySelector('.cart-count');
  let itemCount = 0;
  prodArray.forEach(item => {
    itemCount = itemCount + parseInt(item.count);
  })
  cartCount.textContent = itemCount;
}

function pageInit() {
  accordion();
  mobMenuOpen();
  delay();
  cartCount();
}

window.onload = pageInit;