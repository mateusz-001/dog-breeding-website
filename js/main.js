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
const slideList = ["img/dog1.jpg", "img/dog2.jpg", "img/dog3.jpg"];

const image = document.querySelector('img.slider');
const dots = [...document.querySelectorAll('.dots span')];