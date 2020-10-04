const select = document.getElementById('select_input');
const dateTime = document.getElementById('date_time_box');
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
// select.addEventListener('change', function(){
    
// })
// console.log(select.value);
// const date = document.getElementById('date');
// const time = document.getElementById('time');