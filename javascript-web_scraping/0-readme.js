#!/usr/bin/node
const fs = require('fs');

// File path
const filePath = process.argv[2];

// leer el achivo
fs.readFile(filePath, 'utf8', (error, data) => {
  if (error) {
    console.error('', error);
    return;
  }

  // Mostrar el contenido del archivo
  console.log(data);
});
