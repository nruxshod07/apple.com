let img = document.querySelector('.iPhone')
let btn = document.querySelectorAll('.btns')

let photo = {
    purple: "./img/purpleiPhone.png",
    gold: "./img/goldiPhone.png",
    silver:"./img/silveriPhone.png",
    black:"./img/spaceBlackiPhone.png",
}

btn.forEach((btn) => {
    btn.onclick = () => {
        let key = btn.getAttribute('data-btn')

        img.src = photo[key]
    }
})