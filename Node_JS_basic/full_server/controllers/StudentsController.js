const { readDatabase } = require('../utils');

export default class StudentsController {
  static getAllStudents(req, res) {
    const database = 'database.csv';
    readDatabase(database)
      .then((data) => {
        let textResponse = 'This is the list of our students\n';
        for (const field in data) {
          if (Object.prototype.hasOwnProperty.call(data, field)) {
            textResponse += `Number of students in ${field}: ${data[field].length}. List:${data[field].join(',')}\n`;
          }
        }
        res.status(200).send(`${textResponse.slice(0, -1)}`);
      })
      .catch((err) => {
        // const textResponse = 'This is the list of our students\n';
        // res.status(500).send(`${textResponse}${err.message}`);
        res.status(500).send(`${err.message}`);
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
    } else {
      const database = 'database.csv';
      readDatabase(database)
        .then((data) => {
          res.status(200).send(`List:${data[major]}`);
        })
        .catch((err) => {
          res.status(500).send(err.message);
        });
    }
  }
}
