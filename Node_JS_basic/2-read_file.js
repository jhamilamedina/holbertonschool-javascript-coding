const fs = require('fs');

function countStudents(path) {
    try {
        // Leer el archivo CSV de forma síncrona
        const data = fs.readFileSync(path, 'utf8');
        
        // Dividir el contenido del archivo en líneas
        const lines = data.split('\n');
        
        // Crear un objeto para almacenar el conteo de estudiantes en cada campo
        const count = {};

        // Recorrer cada línea del archivo CSV
        lines.forEach(line => {
            // Dividir cada línea en campos separados por comas
            const fields = line.split(',');
            
            // Verificar si hay al menos un campo en la línea
            if (fields.length > 0) {
                // Obtener el campo que representa el campo de estudio
                const field = fields[fields.length - 1].trim();

                // Incrementar el conteo de estudiantes en el campo correspondiente
                count[field] = (count[field] || 0) + 1;
            }
        });

        // Mostrar el número total de estudiantes
        console.log(`Number of students: ${lines.length - 1}`);

        // Mostrar el número de estudiantes en cada campo y la lista de nombres
        for (const field in count) {
            console.log(`Number of students in ${field}: ${count[field]}. List: ${getNamesInField(lines, field).join(', ')}`);
        }
    } catch (error) {
        // Manejar el error si el archivo no está disponible
        console.error('Cannot load the database');
    }
}

// Función auxiliar para obtener la lista de nombres en un campo específico
function getNamesInField(lines, field) {
    const names = [];
    lines.forEach(line => {
        const fields = line.split(',');
        if (fields.length > 0 && fields[fields.length - 1].trim() === field) {
            names.push(fields[0]);
        }
    });
    return names;
}

// Llamar a la función countStudents con la ruta del archivo como argumento
countStudents('database.csv');