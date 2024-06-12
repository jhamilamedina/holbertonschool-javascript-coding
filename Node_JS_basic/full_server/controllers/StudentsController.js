const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const database = await readDatabase(process.argv[2]);
      let responseText = 'This is the list of our students\n';

      const fields = Object.keys(database).sort((a, b) => a.localeCompare(b));
      fields.forEach((field) => {
        const studentNames = database[field];
        responseText += `Number of students in ${field}: ${studentNames.length}. List: ${studentNames.join(', ')}\n`;
      });

      res.status(200).send(responseText.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params.major;
    if (!['CS', 'SWE'].includes(major)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const database = await readDatabase(process.argv[2]);
      if (!database[major]) {
        res.status(200).send('List: ');
        return;
      }
      const studentNames = database[major] || [];
      res.status(200).send(`List: ${studentNames.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
