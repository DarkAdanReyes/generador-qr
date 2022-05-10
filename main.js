const contenedorQR = document.getElementById('contenedorQR');
const formulario = document.getElementById('formulario');

const qr = new QRCode(contenedorQR);

formulario.addEventListener('submit', (e) => {
  e.preventDefault(); // <= para que la pagina no refresque
  qr.makeCode(formulario.link.value);
});