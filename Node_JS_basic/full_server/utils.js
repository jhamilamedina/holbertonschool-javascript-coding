const fs = require('fs');
const readline = require('readline');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    const studentsByField = {};

    const rl = readline.createInterface({
      input: fs.createReadStream(filePath),
      crlfDelay: Infinity,
    });

    rl.on('line', (line) => {
      const [firstname, field] = line.split(',');
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstname);
    });

    rl.on('close', () => {
      resolve(studentsByField);
    });

    rl.on('error', (error) => {
      reject(error);
    });
  });
}

module.exports = { readDatabase };
