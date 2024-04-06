#!/usr/bin/node

const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const filePath = process.argv[3];

if (!url || !filePath) {
  console.log('Ingresa una URL');
  process.exit(1);
}
// Realizar la solicitud GET a la URL
request(url, (error, response, body) => {
  if (error) {
    console.log(error);
    process.exit(1);
  }

  // Escribir y almacenar el contenido de la web en un archivo
  if (response.statusCode === 200) {
    fs.writeFile(filePath, body, 'utf-8', function (error) {
      if (error) {
        console.log(error);
      }
    });
  } else {
    console.log(`Error: ${response.statusCode}`);
  }
});
