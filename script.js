
const down = document.getElementById('burger_btn_down');
const up = document.getElementById('burger_btn_up');
const responsiveMenu = document.getElementById('responsive_menu');
const navBtn = document.getElementsByClassName('nav_btn');
const section = document.getElementsByTagName('section');
const booking = document.getElementById('booking');

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

for ( let i=0; i<section.length; i++){
    section[i].addEventListener('click', function(){
        rollUp();
    })
}

booking.addEventListener('click', function(){
    select.value ="reservation";
    dateTime.style.display = "flex";

})
    /* FORM */
    
const select = document.getElementById('select_input');
const dateTime = document.getElementById('date_time_box');
const nbPers = document.getElementById('nb_personnes');
const other = document.getElementById('other');
const date = document.getElementById('date');
const time = document.getElementById('time');
const email = document.getElementById('user_email');
const chooseMotif = document.getElementById('choose_motif');

select.addEventListener('change', function(){
    if (select.value =="reservation"){
        dateTime.style.display = "flex";
    }else{
        dateTime.style.display = "none";
    }
    if (select.value =="other"){
        chooseMotif.style.display = "flex";
    }else{
        chooseMotif.style.display = "none";
    }
})

const submit = document.getElementById('submit_btn');
const form = document.getElementById('form');

form.onsubmit = function (){
    if (select.value === "reservation"){
        alert (`Votre réservation du ${date.value} à ${time.value} pour ${nbPers.value} personnes a bien été reçue.\nConfirmation envoyée à l'adresse ${email.value}`)
    }else if (select.value === "other"){
        alert (`Votre ${chooseMotif.value} à bien été reçu.`)
    }else if (select.value === "reclamation"){
        alert(`Votre réclamation a bien été reçue.`)
    }else{
        alert(`Votre ${select.value} a bien été reçu.`);
    } 
}}


/* TEST */

$(window).scroll(function(){
    let scrolledFromTop = $(window).scrollTop() + $(window).height();
    $(".appear").each(function(){
      let distanceFromTop = $(this).offset().top;
      if(scrolledFromTop >= distanceFromTop+100){
        let delaiAnim = $(this).data("delai");
        $(this).delay(delaiAnim).animate({
          top:0,
          opacity:1
        });
      }
    });
  });

// /*SCROLL TOP BUTTON*/
const scrollTopBtn = document.getElementById('scroll_top');
const rootElement = document.documentElement;

function scrollTop(){
    rootElement.scrollTo({
        top: 0,
        behavior : "smooth"
    })
}

scrollTopBtn.addEventListener('click', scrollTop);