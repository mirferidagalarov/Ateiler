function accordion() {
  const listopen = document.querySelectorAll(".accardion-open");
  listopen.forEach((item) => {
    item.addEventListener("click", () => {
      const submenu = item.querySelector(".sub-menu");
      submenu.classList.toggle("active");
      const icon = item.querySelector("i");
      icon.classList.toggle("turn");
    });
  });
}

function mobMenuOpen(){
    const opener=document.querySelector(".baricon");
    const mobmenu=document.querySelector(".mobile-menu-wrap");
    const body=document.body;
    const opac=document.querySelector(".commonopac");
    document.addEventListener("click",(e)=>{
        if(opener.contains(e.target))
        {
            mobmenu.classList.add("opened");
            body.classList.add("overflow-hidden");
            opac.style.display="block";
        }
        else if(!mobmenu.contains(e.target)){

            body.classList.remove("overflow-hidden");
            opac.style.display="none";
            mobmenu.classList.remove("opened");
        }

    })

}



function pageInit(){
    accordion();
    mobMenuOpen();
}

window.onload = pageInit;