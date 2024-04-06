#!/usr/bin/node

const fs = require('fs');

const FILE_PATH = process.argv[2];
const STRING_TO_WRITE = process.argv[3];

if (!FILE_PATH) {
  console.log('Error: proporciona una ruta valida y contenido.');
  process.exit(1);
}

fs.writeFile(FILE_PATH, STRING_TO_WRITE, 'utf-8', (err) => {
  if (err) {
    console.log(err);
  }
});
