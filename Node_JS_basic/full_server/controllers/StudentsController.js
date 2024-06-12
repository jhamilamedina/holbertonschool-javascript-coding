const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(process.argv[2]);
      let responseText = 'This is the list of our students\n';
      for (const [field, names] of Object.entries(students).sort(([a], [b]) => a.localeCompare(b))) {
        responseText += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }
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
      const students = await readDatabase(process.argv[2]);
      const names = students[major] || [];
      res.status(200).send(`List: ${names.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
