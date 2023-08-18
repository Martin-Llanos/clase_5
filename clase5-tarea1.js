const $botonCalcular = document.querySelector("#boton-calcular");
const $salarioAnual = document.querySelector("#salario-anual");
const $salarioMensual = document.querySelector("#salario-mensual");

function calcularSalarioMensual(salarioAnual) {
  if (salarioAnual !== null) {
    let salarioMensual = salarioAnual / 12;
    return salarioMensual;
  } else {
    return 0;
  }
}

$botonCalcular.onclick = function () {
  $salarioMensual.value = `$ ${calcularSalarioMensual($salarioAnual.value)}`;
  return false;
};