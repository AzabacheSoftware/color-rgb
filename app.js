const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

function actualizarColor(rojo, verde, azul) {
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
  document.body.style.backgroundColor = colorRGB;
}

inputRojo.addEventListener('input', (e) => {
  rojo = e.target.value;
  textoRojo.innerText = rojo;
  actualizarColor(rojo, verde, azul);
});

inputVerde.addEventListener('input', (e) => {
  verde = e.target.value;
  textoVerde.innerText = verde;
  actualizarColor(rojo, verde, azul);
});

inputAzul.addEventListener('input', (e) => {
  azul = e.target.value;
  textoAzul.innerText = azul;
  actualizarColor(rojo, verde, azul);
});

const descargarColorBtn = document.getElementById('descargar-color');
descargarColorBtn.addEventListener('click', () => {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const context = canvas.getContext('2d');
  context.fillStyle = `rgb(${rojo}, ${verde}, ${azul})`;
  context.fillRect(0, 0, canvas.width, canvas.height);

  const link = document.createElement('a');
  link.href = canvas.toDataURL('image/png');
  link.download = 'color.png';
  link.click();
});

const crearNuevoBtn = document.getElementById('crear-nuevo');
crearNuevoBtn.addEventListener('click', () => {
  location.reload();
});
