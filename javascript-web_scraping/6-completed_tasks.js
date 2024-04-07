#!/usr/bin/node

const request = require('request');

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error al realizar la solicitud:', error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error('Error en la respuesta de la API:', response.statusCode);
    return;
  }

  const tasks = JSON.parse(body);

  const completedTasksByUser = {};

  tasks.forEach(task => {
    if (task.completed) {
      if (completedTasksByUser[task.userId]) {
        completedTasksByUser[task.userId]++;
      } else {
        completedTasksByUser[task.userId] = 1;
      }
    }
  });

    console.log(completedTasksByUser);
  
});
