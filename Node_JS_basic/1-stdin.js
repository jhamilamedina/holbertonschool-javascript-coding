// Crea un programa que se ejecute a traves de la linea de comando.

// Importar el módulo 'readline' para leer la entrada del usuario desde la línea de comandos
const readline = require('readline');

// Crear una interfaz de lectura para leer la entrada del usuario desde la línea de comandos
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Mostrar un mensaje de bienvenida
console.log('Welcome to Holberton School, what is your name?');

// Leer la entrada del usuario
rl.on('line', (input) => {
  // Mostrar el nombre del usuario
  console.log(`Your name is: ${input}`);
  
  // Mostrar un mensaje de despedida y cerrar el programa
  console.log('This important software is now closing');
  rl.close();
  
    }
  );
