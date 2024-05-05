const fs = require('fs');

function Person(data) {
  const [firstname, lastname, age, field] = data.split(',');
  this.firstname = ` ${firstname}`;
  this.lastname = lastname;
  this.age = age;
  this.field = field;
}

function getPersons(persons) {
  const personObj = [];
  if (Array.isArray(persons)) {
    persons.shift();
    persons.map((p) => personObj.push(new Person(p)));
  }
  return personObj;
}

function getInfo(personObj, field, condition) {
  let total = 0;
  const names = [];
  if (Array.isArray(personObj)) {
    personObj.forEach((p) => {
      if (p[field] === condition) {
        total += 1;
        names.push(p.firstname);
      }
    });
  }
  return {
    total,
    names,
  };
}

function stats(persons) {
  const personObj = getPersons(persons);
  const cs = getInfo(personObj, 'field', 'CS');
  const swe = getInfo(personObj, 'field', 'SWE');

  console.log(`Number of students: ${personObj.length}`);
  console.log(`Number of students in CS: ${cs.total}. List:${cs.names.join(',')}`);
  console.log(`Number of students in SWE: ${swe.total}. List:${swe.names.join(',')}`);
}

function countStudents(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error('Cannot load the database');
  } else {
    const content = fs.readFileSync(filePath, 'utf-8');
    const persons = content.split('\n').filter((line) => line.trim() !== '');
    stats(persons);
  }
}

module.exports = countStudents;
