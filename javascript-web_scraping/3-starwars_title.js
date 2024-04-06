const request = require('request');

// Obtener el número de episodio de la línea de comandos
const movieId = process.argv[2];

// Construir la URL de la API de Star Wars
const url = `https://swapi-api.hbtn.io/api/films/${movieId}`;

// Realizar la solicitud GET a la API de Star Wars
request(url, (error, response, body) => {
    if (error) {
        console.error('Error al realizar la solicitud:', error);
        return;
    }

    if (response.statusCode !== 200) {
        console.error('Error en la respuesta de la API:', response.statusCode);
        return;
    }

    // Analizar la respuesta JSON
    const movieData = JSON.parse(body);

    // Imprimir el título de la película
    console.log(movieData.title);
});