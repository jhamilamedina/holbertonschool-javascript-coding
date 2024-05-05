const fs = require('fs');

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
// function getPersons(persons) {
//   const personObj = [];
//   if (Array.isArray(persons)) {
//     persons.shift();
//     persons.map((p) => personObj.push(new Person(p)));
//   }
//   return personObj;
// }

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

  const a = `Number of students: ${personObj.length}`;
  const b = `Number of students in CS: ${cs.total}. List:${cs.names.join(',')}`;
  const c = `Number of students in SWE: ${swe.total}. List:${swe.names.join(',')}`;

  console.log(a);
  console.log(b);
  console.log(c);
}

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const persons = data.split('\n').filter((line) => line.trim() !== '');
        resolve(stats(persons));
      }
    });
  });
}

module.exports = countStudents;
