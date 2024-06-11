const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      const lines = data.trim().split('\n');
      const header = lines[0].split(',');
      const students = lines.slice(1).map(line => {
        const values = line.split(',');
        const student = {};
        header.forEach((key, index) => {
          student[key] = values[index];
        });
        return student;
      });

      const fields = {};
      students.forEach(student => {
        if (!fields[student.field]) {
          fields[student.field] = [];
        }
        fields[student.field].push(student.firstname);
      });

      resolve(fields);
    });
  });
}

module.exports = { readDatabase };