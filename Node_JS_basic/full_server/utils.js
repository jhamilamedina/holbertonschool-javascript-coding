const fs = require('fs');
const os = require('os');

class Person {
  constructor(data) {
    const [firstname, lastname, age, field] = data.split(',');
    this.firstname = firstname.trim();
    this.lastname = lastname.trim();
    this.age = age.trim();
    this.field = field.trim();
  }
}

function getPersons(persons) {
  return persons
    .slice(1) // Ignorar el encabezado si existe
    .map((p) => (p ? new Person(p) : null))
    .filter((p) => p !== null);
}

function getInfo(personObj, field, condition) {
  let total = 0;
  const names = [];
  personObj.forEach((p) => {
    if (p[field] === condition) {
      total += 1;
      names.push(p.firstname);
    }
  });
  return {
    total,
    names,
  };
}

function stats(persons) {
  const personObj = getPersons(persons);
  const cs = getInfo(personObj, 'field', 'CS');
  const swe = getInfo(personObj, 'field', 'SWE');

  return {
    CS: cs.names,
    SWE: swe.names,
  };
}

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lineSeparator = os.EOL;
        const persons = data.split(lineSeparator).filter((line) => line.trim() !== '');
        if (persons.length === 0) {
          reject(new Error('Cannot load the database'));
        } else {
          resolve(stats(persons));
        }
      }
    });
  });
}

export default readDatabase;
