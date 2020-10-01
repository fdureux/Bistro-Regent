const burgerBtn = document.getElementById('burger_btn');
const responsiveMenu = document.getElementById('responsive_menu');
const rollUp = document.getElementById('rollup_btn');

const display = burgerBtn.addEventListener('click', function(){
    responsiveMenu.style.display = "flex";
})

const hide = rollUp.addEventListener('click', function(){
    responsiveMenu.style.display = "none";
})