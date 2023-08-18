const $contenedorDeClases = document.querySelector("#contenedor-clases");
const $botonCalcular = document.querySelector("#btn-calcular");
const $tiempoTotal = document.querySelector("#tiempo-total");
const arrayClases = [
  [2, 34, 43],
  [1, 48, 24],
  [0, 47, 26],
  [2, 18, 45],
  [2, 40, 48],
  [1, 14, 28],
  [1, 30, 40],
  [2, 4, 55],
  [0, 43, 5],
  [1, 35, 28],
  [1, 44, 18],
  [2, 11, 32],
  [1, 52, 22],
  [2, 4, 41],
  [2, 4, 17],
  [1, 42, 15],
  [1, 49, 19],
  [0, 50, 4],
  [1, 35, 12],
  [1, 5, 44],
  [1, 14, 19],
  [2, 7, 14],
  [1, 22, 10],
  [1, 19, 8],
  [1, 7, 19],
];

function calcularTotal() {
  let horasTot = 0;
  let minutosTot = 0;
  let segundosTot = 0;
  arrayClases.forEach((c) => {
    horasTot = horasTot + c[0];
    minutosTot = minutosTot + c[1];
    segundosTot = segundosTot + c[2];
  });
  let segundos = segundosTot % 60;
  let minutos = (minutosTot + Math.trunc(segundosTot / 60)) % 60;
  let horas = horasTot + Math.trunc(minutosTot / 60);

  return [horas, minutos, segundos];
}

function llenarDuracionDeClases() {
  for (let i = 0; i < arrayClases.length; i++) {
    $contenedorDeClases.innerHTML += `
    <label for="${"clase" + i}">${"CLASE " + (i+1)}</label>
    <form id="${"clase" + i}">
        <label for="horas">Horas:</label>
        <input type="text" disabled id="horas" value=${arrayClases[i][0]} />
        <label for="minutos">Minutos:</label>
        <input type="text" disabled id="minutos" value=${arrayClases[i][1]} />
        <label for="segundos">Segundos:</label>
        <input type="text" disabled id="segundos" value=${arrayClases[i][2]} />
    </form>
    <br>`;
  }
}
llenarDuracionDeClases();
$botonCalcular.onclick = function () {
  let tiempoTot = calcularTotal();
  $tiempoTotal.innerHTML = `Duración total de las clases  ${tiempoTot[0]}:${tiempoTot[1]}:${tiempoTot[2]}`;
};