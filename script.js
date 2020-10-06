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
        alert (`Votre réservation du ${date.value} à ${time.value} pour ${nbPers.value} personnes a bien été reçu.\nConfirmation envoyée à l'adresse ${email.value}`)
    }else if (select.value === "other"){
        alert (`Votre ${chooseMotif.value} à bien été reçu.`)
    }else{
        alert(`Votre ${select.value} a bien été reçu.`);
    }    
}
