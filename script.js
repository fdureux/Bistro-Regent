const down = document.getElementById('burger_btn_down');
const up = document.getElementById('burger_btn_up');
const responsiveMenu = document.getElementById('responsive_menu');

// down.addEventListener('click', function(){
//     responsiveMenu.style.display = "flex";
//     down.style.zIndex = 1;
//     up.style.zIndex = 2;
// })

// up.addEventListener('click', function(){
//     responsiveMenu.style.display = "none";
//     down.style.zIndex = 2;
//     up.style.zIndex = 1;
    
// })




down.addEventListener('click', function(){
    responsiveMenu.style.marginTop = "300px";
    down.style.zIndex = 1;
    up.style.zIndex = 2;
})

up.addEventListener('click', function(){
    responsiveMenu.style.height = 0;
    down.style.zIndex = 2;
    up.style.zIndex = 1;    
})
