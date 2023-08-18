const $listaDeNumeros = document.querySelector("#lista-numeros");
const $textPromedio = document.querySelector("#promedio");
const $textPequeno = document.querySelector("#pequeno");
const $textGrande = document.querySelector("#grande");
const $textRepite = document.querySelector("#repite");
const $botonGenerarNumeros = document.querySelector("#boton-generar");

function llenarLista() {
  $listaDeNumeros.innerHTML = "";
  for (let i = 0; i < 20; i++) {
    let num = Math.round(Math.random() * 100);
    $listaDeNumeros.innerHTML += `<li>${num}</li>`;
  }
}

function obtenerLista() {
  let lista = [];
  $listaDeNumeros.childNodes.forEach((e) => {
    lista.push(e.textContent);
  });
  lista.reverse();
  lista.pop();
  return lista;
}

function calcularPromedio(lista) {
  let suma = 0;
  let cantidadDeElementos = lista.length;
  let masPequeno = 101;
  let masGrande = -1;
  let masFrecuente;
  let cantidadDeVeces = 0;
  lista.forEach((e) => {
    suma = suma + Number(e);
    if (Number(e) < masPequeno) {
      masPequeno = Number(e);
    }
    if (Number(e) > masGrande) {
      masGrande = Number(e);
    }
  });
  lista.forEach((n) => {
    let cantidad = 0;
    lista.forEach((f) => {
      if (n === f) {
        cantidad++;
      }
    });
    if (cantidad > 1) {
      masFrecuente = n;
      cantidadDeVeces = cantidad;
    }
  });
  $textPromedio.innerHTML = `El promedio es: ${suma / cantidadDeElementos}`;
  $textPequeno.innerHTML = `El número más pequeño es: ${masPequeno}`;
  $textGrande.innerHTML = `El número más grande es: ${masGrande}`;
  if (masFrecuente !== undefined) {
    $textRepite.innerHTML = `El número más frecuente es: ${masFrecuente}, aparece ${cantidadDeVeces} veces`;
  } else {
    $textRepite.innerHTML = `No hay números repetidos`;
  }
}

llenarLista();
calcularPromedio(obtenerLista());

$botonGenerarNumeros.onclick = function () {
  llenarLista();
  calcularPromedio(obtenerLista());
};