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

listOpening();
listSelector();