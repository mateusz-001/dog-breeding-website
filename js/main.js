//menu
const menuIcon = document.querySelector('nav .hamburger');
const menuContent = document.querySelector('aside');

const showMenu = () => {
    menuIcon.classList.toggle('active');
    menuContent.classList.toggle('active');
}

menuIcon.addEventListener('click', showMenu);
menuContent.addEventListener('click', showMenu);

//slider
const slideList = ["img/slider1.webp", "img/slider2.webp", "img/slider3.webp"];

const image = document.querySelector('.slider-image');

const time = 2500;
let active = 0;

const changeSlide = () => {
    active++;

    if(active === slideList.length){
        active = 0;
    }
        image.src = slideList[active];
}
setInterval(changeSlide, time);

//read more
const textContainer = document.querySelector('.read-more-text');
const showTextBtn = document.querySelector('.read-more-btn');

const showText = e => {
    
    const current = e.target
    const isReadMoreBtn = current.className.includes('read-more-btn');
    
    if(!showTextBtn) return;

    const currentText = e.target.parentNode.querySelector('.read-more-text');
    
    currentText.classList.toggle('read-more-text--active');
    current.textContent = current.textContent.includes('Pokaż więcej...') ? "Pokaż mniej..." : "Pokaż więcej...";
}

showTextBtn.addEventListener('click', showText);