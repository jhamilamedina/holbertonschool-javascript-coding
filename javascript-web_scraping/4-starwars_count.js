#!/usr/bin/node

const request = require('request');

// Obtener la URL de la API de Star Wars
const apiUrl = process.argv[2];

// ID del personaje "Wedge Antilles"
const characterId = 'https://swapi-api.hbtn.io/api/people/18/';

// Realizar una solicitud GET a la API de Star Wars
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error al realizar la solicitud:', error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error('Error en la respuesta de la API:', response.statusCode);
    return;
  }

  // Analizar la respuesta JSON
  const filmsData = JSON.parse(body);

  // Contador para contar las películas donde aparece "Wedge Antilles"
  let moviesWithWedgeAntilles = 0;

  // Iterar sobre las películas
  filmsData.results.forEach(film => {
    // Verificar si "Wedge Antilles" está presente en el array de personajes de la película
    if (film.characters.includes(apiUrl + characterId + '/')) {
      moviesWithWedgeAntilles++;
    }
  });

  // Imprimir el número de películas donde aparece "Wedge Antilles"
  console.log(moviesWithWedgeAntilles);
});
