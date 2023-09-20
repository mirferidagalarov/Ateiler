function listOpening() {
    const opener = document.querySelector('.select-area');
    const list = document.querySelector('.list');

    opener.addEventListener('click', () => {
        list.classList.toggle('open');
    })
}

function listSelector() {
    const options = document.querySelectorAll('.option');
    const current = document.querySelector('.current');


    options.forEach(option => {
        option.addEventListener('click', () => {
            options.forEach(option => {
                option.classList.remove('selected');
            })
            option.classList.add('selected');
            current.textContent = option.textContent;
        })
    })
}

function sizeListOpening() {
    const opener = document.querySelector('.category-selector');
    const list = document.querySelector('.size-list');

    document.addEventListener('click', (e) => {
        const target = e.target;
        if (!opener.contains(target)) {
            list.classList.remove('d-flex');
        }
        else {
            list.classList.toggle('d-flex');
        }
    });
}

function sizeListText() {
    const currenSize = document.querySelector('.current-size');
    const sizes = document.querySelectorAll('.size');

    sizes.forEach(size => {
        size.addEventListener('click', () => {
            currenSize.textContent = size.textContent;
        })
    })
}

function priceFilter() {
    const sliders = document.querySelectorAll(".range-slider input");
    sliders.forEach(slider => {
        slider.oninput = getVals;
        slider.oninput();
    })

    function getVals() {
        // Get slider values
        let parent = this.parentNode;
        let slides = parent.getElementsByTagName("input");
        let slide1 = parseFloat(slides[0].value);
        let slide2 = parseFloat(slides[1].value);
        if (slide1 > slide2) { let tmp = slide2; slide2 = slide1; slide1 = tmp; }

        let displayElement = parent.getElementsByClassName("rangeValues")[0];
        displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
    }
}

function pagination(n = 12) {
    const products = document.querySelectorAll('.products-wrap .col-12');

    const productsPerPage = n;

    const paginationList = document.getElementById("pagination-list");


    const totalPages = Math.ceil(products.length / productsPerPage);

    function displayProducts(page) {
        if (n < 30) {
            products.forEach(prod => {
                prod.classList.add('d-none');
            })
            const startIdx = (page - 1) * productsPerPage;
            const endIdx = startIdx + productsPerPage;

            for (let i = startIdx; i < endIdx && i < products.length; i++) {
                products[i].classList.remove('d-none');
            }
        }
        else{
            products.forEach(prod => {
                prod.classList.remove('d-none');
            })
        }
    }

    function generatePaginationLinks() {
        paginationList.innerHTML = "";
        if (n < 30) {

            for (let i = 1; i <= totalPages; i++) {
                const listItem = document.createElement("li");
                const link = document.createElement("a");
                link.textContent = i;
                link.addEventListener("click", () => {
                    displayProducts(i);
                });
                listItem.appendChild(link);
                paginationList.appendChild(listItem);
            }
        }
    }

    displayProducts(1);
    generatePaginationLinks();
}

function paginationOption() {
    const amount = document.querySelectorAll('.pagin-count');

    amount.forEach(a => {
        a.addEventListener('click', () => {
            amount.forEach(a => {
                a.classList.remove('active');
            })
            a.classList.add('active');
            const c = parseInt(a.getAttribute('value'));
            pagination(c);
        })
    })

}

function pageInit() {
    listOpening();
    listSelector();
    sizeListOpening();
    sizeListText();
    priceFilter();
    pagination();
    paginationOption();
}

window.onload = pageInit();


