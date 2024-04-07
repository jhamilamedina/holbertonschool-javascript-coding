#!/usr/bin/node

const request = require('request');

const url = process.argv[2];
const idPeople = 'https://swapi-api.hbtn.io/api/people/18/';

if (!url) {
  console.log('Ingrese una URL valida');
  process.exit(1);
}

request(url, function (err, response, body) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  if (response.statusCode === 200) {
    const charactersTotal = JSON.parse(body);
    const n = [];
    for (let i = 0; i < charactersTotal.count; i++) {
      n.push(...charactersTotal.results[i].characters);
    }
    console.log(n.filter((v) => v === idPeople).length);
  } else {
    console.log(`Error: ${response.statusCode}`);
  }
});
