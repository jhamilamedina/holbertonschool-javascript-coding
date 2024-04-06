#!/usr/bin/node

const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const filePath = process.argv[3];

// Realizar la solicitud GET a la API
request(url, (error, response, body) => {
  if (error) {
    console.error('Error al realizar la solicitud:', error);
    return;
  }

  fs.writeFile(filePath, body, 'utf-8', (error) => {
    if (error) {
      console.error('Error al scribir el archivo:', error);
      return;
    }

    console.log(filePath);
  });
});
