const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sideBar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const container = document.querySelector('.container');
const slidesCount = mainSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;

sideBar.style.top = `-${(slidesCount -1) * 100}vh`;

upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

document.addEventListener('keydown', event =>{
    if(event.key === 'ArronUp'){
        changeSlide('up')
    } else if (event.key === 'ArrowDown'){
        changeSlide('down')
    }
})