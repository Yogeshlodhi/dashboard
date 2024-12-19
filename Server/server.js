const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');

require('dotenv').config();

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.get('/students', async (req, res) => {
  const students = await prisma.student.findMany();
  res.json(students);
});

// POST a new student
// app.post('/students', async (req, res) => {
//   const { name, cohort, course, dateJoined, lastLogin, status } = req.body;
//   const newStudent = await prisma.student.create({
//     data: { name, cohort, course, dateJoined, lastLogin, status },
//   });
//   res.json(newStudent);
// });

app.listen(port, () => {
  console.log(`server is running fine @ `, port);
});
