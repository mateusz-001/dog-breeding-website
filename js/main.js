const menuIcon = document.querySelector('nav .hamburger');
const menuContent = document.querySelector('aside');

const showMenu = () => {
    menuIcon.classList.toggle('active');
    menuContent.classList.toggle('active');
}

/*
const showText = () => {
    paragraphEddie.classList.toggle('show');
    if(paragraphEddie.classList.contains('show')){ 
        paragraphEddie.textContent = currentTextEddie + showTextEddie;
        btnEddie.textContent = "Zobacz mniej";
    }else{
        paragraphEddie.textContent = currentTextEddie;
        btnEddie.textContent = "Zobacz więcej";
    }
}
*/
menuIcon.addEventListener('click', showMenu);
menuContent.addEventListener('click', showMenu);

//slider
const slideList = ["img/1.jpg", "img/3.jpg"];

const image = document.querySelector('.slider-image');

const time = 3000;
let active = 0;

const changeSlide = () => {
    active++;

    if(active === slideList.length){
        active = 0;
    }
        image.src = slideList[active];
}
setInterval(changeSlide, time);