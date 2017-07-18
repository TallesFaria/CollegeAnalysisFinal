const express = require('express');
const bodyParser = require('body-parser');
const uniqid = require('uniqid');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const subjects = [
    { name: 'Digital Circuits', acronym: 'EEA-21' },
    { name: 'Object oriented Programming', acronym: 'CES-22' },
    { name: 'Discreet Structures for Computing', acronym: 'CTC-20' },
    { name: 'Basics Eletronic Circuits and Devices', acronym: 'EEA-45' },
    { name: 'Control Systems I', acronym: 'EES-10' },
    { name: 'Systems and Electromagnetism', acronym: 'ELE-12 ' }
];

const students = [
    {
        name: 'Arthur',
        id: uniqid(),        grades: [
            { acronym: 'EEA-21', grade: Math.random() * 100 },
            { acronym: 'CES-22', grade: Math.random() * 100 },
            { acronym: 'CTC-20', grade: Math.random() * 100 },
            { acronym: 'EEA-45', grade: Math.random() * 100 },
            { acronym: 'EES-10', grade: Math.random() * 100 },
            { acronym: 'ELE-12', grade: Math.random() * 100 },
        ],
        mean: 0,
        rank: 0
    },
    {
        name: 'Liam',
        id: uniqid(),
        grades: [
            { acronym: 'EEA-21', grade: Math.random() * 100 },
            { acronym: 'CES-22', grade: Math.random() * 100 },
            { acronym: 'CTC-20', grade: Math.random() * 100 },
            { acronym: 'EEA-45', grade: Math.random() * 100 },
            { acronym: 'EES-10', grade: Math.random() * 100 },
            { acronym: 'ELE-12', grade: Math.random() * 100 },
        ],
        mean: 0,
        rank: 0
    },
    {
        name: 'Janete', 
        id: uniqid(),        grades: [
            { acronym: 'EEA-21', grade: Math.random() * 100 },
            { acronym: 'CES-22', grade: Math.random() * 100 },
            { acronym: 'CTC-20', grade: Math.random() * 100 },
            { acronym: 'EEA-45', grade: Math.random() * 100 },
            { acronym: 'EES-10', grade: Math.random() * 100 },
            { acronym: 'ELE-12', grade: Math.random() * 100 },
        ],
        mean: 0,
        rank: 0
    },
    {
        name: 'Elisa', 
        id: uniqid(),        grades: [
            { acronym: 'EEA-21', grade: Math.random() * 100 },
            { acronym: 'CES-22', grade: Math.random() * 100 },
            { acronym: 'CTC-20', grade: Math.random() * 100 },
            { acronym: 'EEA-45', grade: Math.random() * 100 },
            { acronym: 'EES-10', grade: Math.random() * 100 },
            { acronym: 'ELE-12', grade: Math.random() * 100 },
        ],
        mean: 0,
        rank: 0
    },
    {
        name: 'Jack Meyers', 
        id: uniqid(),        grades: [
            { acronym: 'EEA-21', grade: Math.random() * 100 },
            { acronym: 'CES-22', grade: Math.random() * 100 },
            { acronym: 'CTC-20', grade: Math.random() * 100 },
            { acronym: 'EEA-45', grade: Math.random() * 100 },
            { acronym: 'EES-10', grade: Math.random() * 100 },
            { acronym: 'ELE-12', grade: Math.random() * 100 },
        ],
        mean: 0,
        rank: 0
    },
    {
        name: 'Barbara', 
        id: uniqid(),        grades: [
            { acronym: 'EEA-21', grade: Math.random() * 100 },
            { acronym: 'CES-22', grade: Math.random() * 100 },
            { acronym: 'CTC-20', grade: Math.random() * 100 },
            { acronym: 'EEA-45', grade: Math.random() * 100 },
            { acronym: 'EES-10', grade: Math.random() * 100 },
            { acronym: 'ELE-12', grade: Math.random() * 100 },
        ],
        mean: 0,
        rank: 0
    },
    {
        name: 'Kelly', 
        id: uniqid(),        grades: [
            { acronym: 'EEA-21', grade: Math.random() * 100 },
            { acronym: 'CES-22', grade: Math.random() * 100 },
            { acronym: 'CTC-20', grade: Math.random() * 100 },
            { acronym: 'EEA-45', grade: Math.random() * 100 },
            { acronym: 'EES-10', grade: Math.random() * 100 },
            { acronym: 'ELE-12', grade: Math.random() * 100 },
        ],
        mean: 0,
        rank: 0
    },
    {
        name: 'Mattheus', 
        id: uniqid(),        grades: [
            { acronym: 'EEA-21', grade: Math.random() * 100 },
            { acronym: 'CES-22', grade: Math.random() * 100 },
            { acronym: 'CTC-20', grade: Math.random() * 100 },
            { acronym: 'EEA-45', grade: Math.random() * 100 },
            { acronym: 'EES-10', grade: Math.random() * 100 },
            { acronym: 'ELE-12', grade: Math.random() * 100 },
        ],
        mean: 0,
        rank: 0
    },
    {
        name: 'George', 
        id: uniqid(),
        grades: [
            { acronym: 'EEA-21', grade: Math.random() * 100 },
            { acronym: 'CES-22', grade: Math.random() * 100 },
            { acronym: 'CTC-20', grade: Math.random() * 100 },
            { acronym: 'EEA-45', grade: Math.random() * 100 },
            { acronym: 'EES-10', grade: Math.random() * 100 },
            { acronym: 'ELE-12', grade: Math.random() * 100 },
        ],
        mean: 0,
        rank: 0
    },
    {
        name: 'Bryan', 
        id: uniqid(),
        grades: [
            { acronym: 'EEA-21', grade: Math.random() * 100 },
            { acronym: 'CES-22', grade: Math.random() * 100 },
            { acronym: 'CTC-20', grade: Math.random() * 100 },
            { acronym: 'EEA-45', grade: Math.random() * 100 },
            { acronym: 'EES-10', grade: Math.random() * 100 },
            { acronym: 'ELE-12', grade: Math.random() * 100 },
        ],
        mean: 0,
        rank: 0
    }
];

// const numberOfSubjects = subjects.length;

// students.forEach((student) => {
//     let mean = 0;
//     student.grades.forEach((subject) => {
//         mean += subject.grade;
//     });
//     student.mean = mean;
// })

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/students', (req, res) => {
  res.json(students);
});

app.get('/students/:id', (req, res) => {
  students.forEach((student) => {
    if (student.id == req.params.id) {
        res.json(student);
        return;
    }
  });
  res.status(404).end();
});

app.post('/students', (req, res) => {
    const student = req.body;
    student.id = uniqid();
    students.push(student);
  res.json(true);
});

app.get('/subjects', (req, res) => {
  res.json(subjects);
});

app.listen(process.env.PORT || 3413);
