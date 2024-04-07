#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

if (!url) {
  console.log('Ingrese una URL');
  process.exit(1);
}

request(url, (err, response, body) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.log('Houston tenemos un problema');
    process.exit(1);
  }

  const todos = JSON.parse(body);
  const todosCompleted = {};

  todos.forEach((todo) => {
    if (todo.completed) {
      if (todosCompleted[todo.userId]) {
        todosCompleted[todo.userId]++;
      } else {
        todosCompleted[todo.userId] = 1;
      }
    }
  });
  console.log(todosCompleted);
});
