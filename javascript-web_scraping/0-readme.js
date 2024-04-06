#!/usr/bin/node

const fs = require('fs');
// File path
const filePath = process.argv[2];

if (!filePath) {
  console.error('Error: ruta invalida.');
  process.exit(1);
}

// leer el achivo
fs.readFile(filePath, 'utf-8', (error, data) => {
  if (error) {
    console.error(error);
  }else {
    console.log(data);
  }
});