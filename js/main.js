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