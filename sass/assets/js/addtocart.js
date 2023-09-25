const hid = document.getElementById("hid-main-page");
const addToCartBtn = document.querySelectorAll('.img-icon');
let prodArray = JSON.parse(localStorage.getItem('products')) || [];

function shopPageFunction() {
    addToCartBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const product = e.target.closest('.product');
            const prodImg = product.querySelector('img').src;
            const prodName = product.querySelector('.prod-name').textContent;
            const prodPrice = product.querySelector('.price').textContent;

            const productObject = { img: prodImg, name: prodName, price: prodPrice, count: '1' };
            if (prodArray.length > 0) {
                const existingItem = prodArray.find(item => item.name === prodName);

                if (existingItem) {
                    existingItem.count++;
                } else {
                    prodArray.push(productObject);
                }
            }
            else {
                prodArray.push(productObject);
            }


            localStorage.setItem('products', JSON.stringify(prodArray));
        });
    });
}

function cartFunction() {
    const tbody = document.getElementsByTagName('tbody')[0];
    prodArray.forEach(item => {
        let tr = document.createElement('tr');
        let tdImg = document.createElement('td');
        let tdName = document.createElement('td');
        let tdPrice = document.createElement('td');
        let tdQuantity = document.createElement('td');
        let tdTotal = document.createElement('td');
        let tdIcon = document.createElement('td');

        tdImg.className = 'body-img';
        tdPrice.className = 'body-price';
        tdTotal.className = 'body-total';

        tdQuantity.innerHTML = '<div class="counter"> <p class="count">' + parseInt(item.count) + '</p> <div class="plus-minus"> <div class="plus d-flex justify-content-center align-items-center px-1"> <span><i class="fa-solid fa-chevron-up"></i></span> </div> <div class="minus d-flex justify-content-center align-items-center  px-1"> <span><i class="fa-solid fa-chevron-down"></i></span> </div> </div> </div>';

        let img = document.createElement('img');
        img.src = item.img;
        img.className = 'img-fluid';

        let name = document.createElement('p');
        name.className = 'prod-name';
        name.textContent = item.name;

        let price = document.createElement('p');
        price.className = 'prod-price';
        price.textContent = item.price;

        let total = document.createElement('p');
        total.className = 'prod-total';

        let icon = document.createElement('i');
        icon.className = 'fa-solid fa-x';
        icon.addEventListener('click', deleteProd);

        tdImg.appendChild(img);
        tdName.appendChild(name);
        tdPrice.appendChild(price);
        tdTotal.appendChild(total);
        tdIcon.appendChild(icon);

        tr.appendChild(tdImg);
        tr.appendChild(tdName);
        tr.appendChild(tdPrice);
        tr.appendChild(tdQuantity);
        tr.appendChild(tdTotal);
        tr.appendChild(tdIcon);

        tbody.appendChild(tr);
    })
}

function counter() {
    let plus = document.querySelectorAll(".plus-minus .plus");
    let minus = document.querySelectorAll(".plus-minus .minus");

    plus.forEach(p => {
        p.addEventListener("click", function () {
            let count = p.parentElement.parentElement.querySelector(".count");
            count.textContent++;
            totalPrice();
        })
    })

    minus.forEach(m => {
        m.addEventListener("click", function () {
            let count = m.parentElement.parentElement.querySelector(".count");
            if (count.textContent > 1) {
                count.textContent--;
            }
            totalPrice();
        })
    })

}

function totalPrice() {
    let totalPrices = document.querySelectorAll('.prod-total');

    totalPrices.forEach(totalPrice => {
        let count = totalPrice.parentElement.parentElement.querySelector(".count").textContent;
        let price = totalPrice.parentElement.parentElement.querySelector('.prod-price').textContent;
        totalPrice.textContent = price * count;
    })

}

const deleteProd = (e) => {
    const tr = e.target.closest("tr");
    const prodName = tr.querySelector('.prod-name');

    prodArray = prodArray.filter(prod => prod.name !== prodName.textContent);
    localStorage.setItem('products', JSON.stringify(prodArray));
    location.reload();
}

function containers(){
    const nonEmpty = document.querySelector('.non-empty-cart');
    const empty = document.querySelector('.empty-cart');
    if(prodArray.length > 0){
        nonEmpty.classList.remove('d-none');
        empty.classList.add('d-none');
    }
    else{
        nonEmpty.classList.add('d-none');
        empty.classList.remove('d-none');
    }
}

const pageLoad = () => {
    if (hid) {
        shopPageFunction();
    }
    else {
        cartFunction();
        counter();
        totalPrice();
        containers();
    }
}

pageLoad();







// const imgs = document.querySelectorAll(".first-img");
// const secondImg = document.getElementById("second-img");
// const imgAlt = document.getElementById("img-alt");
// const hid = document.getElementById("hid-main-page");

// const mainPageIniter = () => {
//   imgs.forEach((img) => {
//     img.addEventListener("click", () => {
//       let altText = img.getAttribute('alt');
//       let object = JSON.stringify({src:img.src, alt:altText});
//       localStorage.setItem("selectedImg", object);
//       window.location.href = "second.html";
//     });
//   });
// };

// const secondPageIniter = () =>{
//     let selectedImg = JSON.parse(localStorage.getItem('selectedImg'));

//     secondImg.src = selectedImg.src;
//     imgAlt.textContent = selectedImg.alt;
// }