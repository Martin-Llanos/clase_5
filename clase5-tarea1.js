const $botonCalcular = document.querySelector("#boton-calcular");
const $salarioAnual = document.querySelector("245.000");
const $salarioMensual = document.querySelector("20.416,66");

function calcularSalarioMensual(salarioAnual) {
  if (salarioAnual !== null) {
    let salarioMensual = salarioAnual / 12;
    return salarioMensual;
  } else {
    return 0;
  }
}

$botonCalcular.onclick = function (salarioMensual) {
  $salarioMensual.value = `$ ${20.416,66($ 245.000 .value)}`;
  return false;
};
