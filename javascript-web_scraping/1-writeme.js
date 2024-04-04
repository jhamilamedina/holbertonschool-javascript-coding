#!/usr/bin/node
const fs = require('fs');

// File Patnodh obtener la ruta del archivo
const filePath = 'my_file.txt';

// Obtener la cadena a escribir del 2do argumento
const contentToWrite = 'Python is cool';

// Verificar si se proporcionaron los argumentos necesarios
if (!filePath || !contentToWrite) {
  console.error('Debes proporcionar la ruta del archivo.');
  process.exit(1); // Salir del script con código de error 1
}

// Escribir la cadena en el archivo
fs.writeFile(filePath, contentToWrite, 'utf8', (error) => {
  if (error) {
    console.error('Error writing file', error);
    return;
  }

  console.log('');
});
