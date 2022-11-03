// navbar-toggle and menu Toggle
const navToggle = document.querySelector('.nav-btn');
const menuOpen = document.querySelector('.hamburger')
const menuClose = document.querySelector('.cross')
const sideBar = document.querySelector('.navbar')

// navbar-toggle and menu Toggle
navToggle.addEventListener('click', function () {
    menuOpen.classList.toggle('open')
    sideBar.classList.toggle('side-bar')
    if (menuOpen.classList.contains('open')) {
       menuClose.classList.remove('close') 
    }else{
        menuClose.classList.add('close') 
    }
});
