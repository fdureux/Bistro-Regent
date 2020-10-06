const down = document.getElementById('burger_btn_down');
const up = document.getElementById('burger_btn_up');
const responsiveMenu = document.getElementById('responsive_menu');
const navBtn = document.getElementsByClassName('nav_btn');

function rollUp(){
    responsiveMenu.style.marginLeft= "-10rem";
    down.style.zIndex = 3;
    up.style.zIndex = 2; 
}

//ACTIVATION SIDE NAVBAR
down.addEventListener('click', function(){
    responsiveMenu.style.marginLeft = "0";
    down.style.zIndex = 2;
    up.style.zIndex = 3;
})

up.addEventListener('click', function(){ 
    rollUp();  
})

for ( let i=0; i<navBtn.length; i++){
    navBtn[i].addEventListener('click', function(){
        rollUp(); 
    })
}
