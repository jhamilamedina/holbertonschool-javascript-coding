#!/usr/bin/node

const request = require('request'); // Importar el modulo request

// Obtener la url del 1er argumento
const url = process.argv[2];

// Verificar si se proporcionó la URL
if (!url) {
  console.error('Debes proporcionar la URL como argumento.');
  process.exit(1); // Salir del script con código de error 1
}

// Hacer una solicitud GET a la URL
request.get(url, (error, response) => {
  if (error) {
    console.error('request error', error);
    return;
  }

  // Obtener el codigo de estado
  const statusCode = response.statusCode;

  // Imprime el codigo de estado
  console.log(`code: ${statusCode}`);
});
