function listOpening() {
    const opener = document.querySelector('.select-area');
    const list = document.querySelector('.list');
    const icon = document.querySelector('.select-area i');

    document.addEventListener('click', (e) => {
        const target = e.target;
        if (!opener.contains(target)) {
            list.classList.remove('open');
            icon.classList.remove('turn');
        }
        else {
            list.classList.toggle('open');
            icon.classList.toggle('turn');
        }
    });
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
    const opener = document.querySelectorAll('.category-selector');

    opener.forEach(elem => {
        document.addEventListener('click', (e) => {
            const target = e.target;
            const list = elem.querySelector('.size-list');
            const icon = elem.querySelector('.cat-icons i');
            const clear = elem.querySelector('.closer');

            if (!elem.contains(target) || target == clear) {
                list.classList.remove('d-flex');
                icon.classList.remove('turn');
            }
            else {
                list.classList.toggle('d-flex');
                icon.classList.toggle('turn');
            }
        });
    })
}

function sizeListText() {
    const opener = document.querySelectorAll('.category-selector');

    opener.forEach(elem => {
        const currenSize = elem.querySelector('.current-size');
        const temp = currenSize.textContent;
        const sizes = elem.querySelectorAll('.size');
        const clear = elem.querySelector('.closer');


        sizes.forEach(size => {
            size.addEventListener('click', () => {
                currenSize.textContent = size.textContent;
                clear.classList.remove('d-none');
            })
        })

        clear.addEventListener('click', () => {
            currenSize.textContent = temp;
            clear.classList.add('d-none');
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
        const brief = document.querySelector('.prods-brief');
        brief.innerHTML = 'Showing <span class="start-index"></span>-<span class="end-index"></span> of <span class="prod-count">36</span> results';

        if (n < 30) {
            products.forEach(prod => {
                prod.classList.add('d-none');
            })
            const startIdx = (page - 1) * productsPerPage;
            const endIdx = startIdx + productsPerPage > products.length ? products.length : startIdx + productsPerPage;

            for (let i = startIdx; i < endIdx && i < products.length; i++) {
                products[i].classList.remove('d-none');
            }

            showingIndex(startIdx, endIdx);
        }
        else {
            products.forEach(prod => {
                prod.classList.remove('d-none');
            })
            brief.textContent = 'Showing all ' + products.length + ' results';
        }
    }

    function generatePaginationLinks() {
        paginationList.innerHTML = "";
        if (n < 30) {

            for (let i = 1; i <= totalPages; i++) {
                const listItem = document.createElement("li");
                const link = document.createElement("a");
                link.href = '#';
                link.textContent = i;
                link.addEventListener("click", () => {
                    displayProducts(i);
                });
                listItem.appendChild(link);
                paginationList.appendChild(listItem);
            }
        }
    }

    function showingIndex(startIdx, endIdx) {
        const startIndex = document.querySelector('.start-index');
        const endIndex = document.querySelector('.end-index');
        const prodCount = document.querySelector('.prod-count');
        startIndex.textContent = ++startIdx;
        endIndex.textContent = endIdx;
        prodCount.textContent = products.length;
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

function layoutChanging() {
    const standart = document.querySelector('.standart-layout');
    const list = document.querySelector('.list-layout');
    const prodWrapper = document.querySelector('.products-wrap');

    standart.addEventListener('click', () => {
        prodWrapper.classList.remove('products-grid');
        standart.classList.add('active');
        list.classList.remove('active');
    })
    list.addEventListener('click', () => {
        prodWrapper.classList.add('products-grid');
        standart.classList.remove('active');
        list.classList.add('active');
    })
}

function filterOpener() {
    const filterBtn = document.querySelector('.shop-filter p');
    const filterArea = document.querySelector('.filter-area');

    filterBtn.addEventListener('click', () => {
        filterBtn.classList.toggle('active');
        filterArea.classList.toggle('filter-open');
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
    layoutChanging();
    filterOpener();
}

window.onload = pageInit();


