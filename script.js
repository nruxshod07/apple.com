let img = document.querySelector('.iPhone')
let btns = document.querySelectorAll('.btn')
let box = document.querySelector('.colors')
let color = document.querySelector('.color')
let current = null
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
            current = btn.getAttribute('data-btn')
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
        color.innerHTML = `Color - ${current}`
    }
})
let modalOpen = document.querySelector('.modalOpen')
let container = document.querySelector('.container')
let modal_bg = document.querySelector('.modal_bg')
let modal_cancel = document.querySelector('.modal_cancel')
let iPhone14 = document.querySelector('.iPhone14')
let iPhone14Plus = document.querySelector('.iPhone14Plus')
let arrow = document.querySelector('.arrow')
let arrowTwo = document.querySelector('.arrowTwo')
let hidden = document.querySelector('.hidden')
let hiddenTwo = document.querySelector('.hidden')
iPhone14.onclick = () => {
    hidden.style.display = "flex"
    if (arrow.classList.contains('rotate') === true) {
        arrow.classList.remove('rotate')
        arrow.classList.add('noRotate')
    } else if (arrow.classList.contains('rotate') === false) {
        arrow.classList.add('rotate')
        arrow.classList.remove('noRotate')
    }
}
iPhone14Plus.onclick = () => {
    hiddenTwo.style.display = "flex"
    if (arrowTwo.classList.contains('rotate') === true) {
        arrowTwo.classList.remove('rotate')
        arrowTwo.classList.add('noRotate')
    } else if (arrowTwo.classList.contains('rotate') === false) {
        arrowTwo.classList.add('rotate')
        arrowTwo.classList.remove('noRotate')
    }
}
modalOpen.onclick = () => {
    modal_bg.style.display = "block"
    setTimeout(() => {
        modal_bg.style.opacity = "1"
    }, 100)

}
modal_cancel.onclick = () => {
    modal_bg.style.opacity = "0"
    setTimeout(() => {
        modal_bg.style.display = "none"
    }, 500)


}