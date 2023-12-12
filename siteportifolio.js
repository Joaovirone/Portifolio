const navbar = document.querySelector('.navbar');


GamepadButton.addEventListener('click', function(){
    mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function(){
    if(this.window.pageXOffset > 0) return navbar.classList.add('active')
    return navbar.classList.remove('active');
});