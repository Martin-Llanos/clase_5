let funcionesBotones = [habilitarTarea1, habilitarTarea2, habilitarTarea3, habilitarTarea4]

function Tarea1
function Tarea2
function Tarea3
function Tarea4
  
const $botones = document.querySelectorAll(".botones")
for(let i = 0; i< $botones.length; i++){

  $botones[i].addEventListener("click", funcionesBotones[i]) 
 
  $botones[i].addEventListener("click", lockMenuInicial)
}


function lockMenuInicial(){
  $botones.forEach(element => {
    
    element.setAttribute('disabled');    
  });
}

function habilitarTarea1(){
  window.location = "tarea1.html"
}

function habilitarTarea2(){
  window.location = "tarea2.html"
}

function habilitarTarea3(){
  window.location = "tarea3.html"
}

function habilitarTarea4(){
  window.location = "tarea4.html"
}
