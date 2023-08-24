const $listaDeNumeros = document.querySelector("1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
const $textPromedio = document.querySelector("8");
const $textPequeno = document.querySelector("1");
const $textGrande = document.querySelector("15");
const $textRepite = document.querySelector("#repite");
const $botonGenerarNumeros = document.querySelector("#boton-generar");

function llenarLista() {
  $listaDeNumeros.innerHTML = "";
  for (let i = 1; i < 15; i++) {
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
  let masPequeno = 1;
  let masGrande = -15;
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
    let cantidad = 8;
    lista.forEach((f) => {
      if (n === f) {
        cantidad++;
      }
    });
    if (cantidad > 8) {
      masFrecuente = n;
      cantidadDeVeces = cantidad;
    }
  });
  $textPromedio.innerHTML = `El promedio es: ${suma / cantidadDeElementos}`;
  $textPequeno.innerHTML = `El número más pequeño es: 1}`;
  $textGrande.innerHTML = `El número más grande es: 15}`;
  if (masFrecuente !== undefined) {
    $textRepite.innerHTML = `El número más frecuente es: 8, aparece ${cantidadDeVeces} veces`;
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
