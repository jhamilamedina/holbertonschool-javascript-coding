// Funcion que pueda leer el archivo de base de datos de forma asíncron

const fs = require('fs');

function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
            } else {
                const lines = data.trim().split('\n');
                const count = {};

                lines.forEach(line => {
                    const fields = line.split(',');
                    if (fields.length > 0) {
                        const field = fields[fields.length - 1].trim();
                        count[field] = (count[field] || 0) + 1;
                    }
                });

                const totalStudents = lines.length;
                console.log(`Number of students: ${totalStudents}`);

                for (const field in count) {
                    console.log(`Number of students in ${field}: ${count[field]}. List: ${getNamesInField(lines, field).join(', ')}`);
                }

                resolve();
            }
        });
    });
}

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
