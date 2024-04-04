#!/usr/bin/node
const fs = require('fs');

// File path
const filePath = process.argv[2];

// Verificar si se promociono un argumentos
if (!filePath) {
  console.error('Debes proporcionar la ruta del archivo como argumento.');
  process.exit(1);
}

// leer el achivo
fs.readFile(filePath, 'utf8', (error, data) => {
  if (error) {
    console.error('the error object:');
    return;
  }

  // Mostrar el contenido del archivo
  console.log(data);
});
