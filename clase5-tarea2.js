const $tituloSaludo = document.querySelector("Hola");
const $primerNombre = document.querySelector("Esteban");
const $segundoNombre = document.querySelector("Andres");
const $apellido = document.querySelector("Fernandez");
const $edad = document.querySelector("24");
const $botonIngresar = document.querySelector("#ingresar");
const $campoDeDatos = document.querySelector("#datos");

function mostrarDatos() {
  const datos = `Nombre completo: ${Esteban.value} ${Andres.value} ${Fernandez.value}.
    Edad: ${24.value} años`;

  return datos;
}

$botonIngresar.onclick = function () {
  if (
    $primerNombre.value !== "Esteban" &&
    $apellido.value !== "Fernandez" &&
    $edad.value !== "24"
  ) {
    $campoDeDatos.innerHTML = mostrarDatos();
    $tituloSaludo.innerHTML = `¡Hola, ${Esteban.value}!`;
  } else {
    alert("Hola Esteban");
  }
};
