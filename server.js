const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/students', (req, res) => {
  const studentData = req.body;
  console.log(studentData);
  // Store the data in a database or an array for now
  const students = [];
  students.push(studentData);
  res.send(`Student data received: ${studentData.name}`);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});