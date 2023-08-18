const $tituloSaludo = document.querySelector("#saludo");
const $primerNombre = document.querySelector("#primer-nombre-usuario");
const $segundoNombre = document.querySelector("#segundo-nombre-usuario");
const $apellido = document.querySelector("#apellido-usuario");
const $edad = document.querySelector("#edad-usuario");
const $botonIngresar = document.querySelector("#ingresar");
const $campoDeDatos = document.querySelector("#datos");

function mostrarDatos() {
  const datos = `Nombre completo: ${$primerNombre.value} ${$segundoNombre.value} ${$apellido.value}.
    Edad: ${$edad.value} años`;

  return datos;
}

$botonIngresar.onclick = function () {
  if (
    $primerNombre.value !== "" &&
    $apellido.value !== "" &&
    $edad.value !== ""
  ) {
    $campoDeDatos.innerHTML = mostrarDatos();
    $tituloSaludo.innerHTML = `¡Bienvenido, ${$primerNombre.value}!`;
  } else {
    alert("Debe llenar todos los campos");
  }
};