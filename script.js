const select = document.getElementById('select_input');
const dateTime = document.getElementById('date_time_box');
const nbPers = document.getElementById('nb_personnes');
const other = document.getElementById('other');
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
    alert('ok');
}