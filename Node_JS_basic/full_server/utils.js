const fs = require('fs');
const os = require('os');

class Person {
  constructor(data) {
    const [firstname, lastname, age, field] = data.split(',');
    this.firstname = ` ${firstname}`;
    this.lastname = lastname;
    this.age = age;
    this.field = field;
  }
}

function getPersons(persons) {
  return persons
    .slice(1)
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
  // const a = `Number of students: ${personObj.length}`;
  // const b = `Number of students in CS: ${cs.total}. List:${cs.names.join(',')}`;
  // const c = `Number of students in SWE: ${swe.total}. List:${swe.names.join(',')}`;
  // return `${a}\n${b}\n${c}`;
}

// export default function readDatabase(filePath) {
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
        }
        resolve(stats(persons));
      }
    });
  });
}

export default readDatabase;
