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



// alert('Важлива інформація! Якщо хочете послухати гімн України натисніть на слово "опа".Для зупинненя звуки натисніть ще раз на слово "опа".')

const secret = document.querySelector('.main-secret')

secret.addEventListener('click',()=>{
    const info2 = secret.classList.contains('prop')
    if (info2 == true){
        secret.classList.replace('prop','rop')
        secret.innerHTML += `
        <audio autoplay loop>
            <source src="./gimn-ukrainy-Ponomarev.mp3">
        </audio>
        `
    }else{
        secret.classList.replace('rop','prop')
        secret.innerHTML =`
            <p class="main-secret-arrow1">▼</p>
            <p class="main-secret-arrow2">▼</p>
            <p class="main-secret-text">опа</p>
        `
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