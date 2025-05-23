const headerNav = document.querySelector('.header-nav')
const headerBox = document.querySelector('.header-box')
const line2 = document.querySelector('.header-box-line2')

headerBox.addEventListener('click',()=>{
    const info = headerNav.classList.contains('hidden')
    if (info == true) {
    headerNav.classList.replace('hidden','visible')
    line2.style.width = '13px'
    }else{
        headerNav.classList.replace('visible','hidden')
        line2.style.width = '25px'
    }
})







const cat = document.querySelector('.header-photo')
let num = 0
setInterval(() => {
    num++
    if (num == 360) {
        num = 0
    }
    cat.style.rotate = `${num}deg`
}, 30);