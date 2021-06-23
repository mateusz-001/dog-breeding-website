const menuIcon = document.querySelector('nav .hamburger');
const menuContent = document.querySelector('aside');

const showMenu = () => {
    menuIcon.classList.toggle('active');
    menuContent.classList.toggle('active');
    console.log(menuIcon.classList)
    console.log(menuContent.classList)
}

menuIcon.addEventListener('click', showMenu);