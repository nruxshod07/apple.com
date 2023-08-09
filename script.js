let img = document.querySelector('.iPhone')
let btns = document.querySelectorAll('.btn')
let box = document.querySelector('.colors')
let color = document.querySelector('.color')
let photo = {
    purple: "./img/purpleiPhone.png",
    gold: "./img/goldiPhone.png",
    silver: "./img/silveriPhone.png",
    black: "./img/spaceBlackiPhone.png",
}


btns.forEach((btn) => {
    btn.onclick = () => {
        let key = btn.getAttribute('data-btn')
        img.src = photo[key]
        let clicked = event.target
        box.addEventListener('click', (event) => {
            for (let i = 0; i < btns.length; i++) {
                btns[i].classList.remove('focus');
            }
            clicked.classList.add('focus')
        });
        if (btn.classList.contains('purple') === true) {
            color.innerHTML = "Color - Deep Purple"
        } else if (btn.classList.contains('gold') === true) {
            color.innerHTML = "Color - Gold"
        } else if (btn.classList.contains('silver') === true) {
            color.innerHTML = "Color - Silver"
        } else if (btn.classList.contains('spaceBlack') === true) {
            color.innerHTML = "Color - Space Black"
        }
    }
    btn.onmouseenter = () => {
        btn.classList.add('hover')
        if (btn.classList.contains('purple') === true) {
            color.innerHTML = "Color - Deep Purple"
        } else if (btn.classList.contains('gold') === true) {
            color.innerHTML = "Color - Gold"
        } else if (btn.classList.contains('silver') === true) {
            color.innerHTML = "Color - Silver"
        } else if (btn.classList.contains('spaceBlack') === true) {
            color.innerHTML = "Color - Space Black"
        }
    }
    btn.onmouseleave = () => {
        btn.classList.remove('hover')
        if (btn.classList.contains('purple') === false) {
            color.innerHTML = "Color - Deep Purple"
        } else if (btn.classList.contains('gold') === false) {
            color.innerHTML = "Color - Gold"
        } else if (btn.classList.contains('silver') === false) {
            color.innerHTML = "Color - Silver"
        } else if (btn.classList.contains('spaceBlack') === false) {
            color.innerHTML = "Color - Space Black"
        }
    }
})
