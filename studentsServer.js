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
            { acronym: 'EEA-21', grade: Math.random() * 100, rank: 0 },
            { acronym: 'CES-22', grade: Math.random() * 100, rank: 0 },
            { acronym: 'CTC-20', grade: Math.random() * 100, rank: 0 },
            { acronym: 'EEA-45', grade: Math.random() * 100, rank: 0 },
            { acronym: 'EES-10', grade: Math.random() * 100, rank: 0 },
            { acronym: 'ELE-12', grade: Math.random() * 100, rank: 0 },
        ],
        mean: 0,
        rank: 0
    },
    {
        name: 'Liam',
        id: uniqid(),
        grades: [
            { acronym: 'EEA-21', grade: Math.random() * 100, rank: 0 },
            { acronym: 'CES-22', grade: Math.random() * 100, rank: 0 },
            { acronym: 'CTC-20', grade: Math.random() * 100, rank: 0 },
            { acronym: 'EEA-45', grade: Math.random() * 100, rank: 0 },
            { acronym: 'EES-10', grade: Math.random() * 100, rank: 0 },
            { acronym: 'ELE-12', grade: Math.random() * 100, rank: 0 },
        ],
        mean: 0,
        rank: 0
    },
    {
        name: 'Janete', 
        id: uniqid(),        grades: [
            { acronym: 'EEA-21', grade: Math.random() * 100, rank: 0 },
            { acronym: 'CES-22', grade: Math.random() * 100, rank: 0 },
            { acronym: 'CTC-20', grade: Math.random() * 100, rank: 0 },
            { acronym: 'EEA-45', grade: Math.random() * 100, rank: 0 },
            { acronym: 'EES-10', grade: Math.random() * 100, rank: 0 },
            { acronym: 'ELE-12', grade: Math.random() * 100, rank: 0 },
        ],
        mean: 0,
        rank: 0
    },
    {
        name: 'Elisa', 
        id: uniqid(),        grades: [
            { acronym: 'EEA-21', grade: Math.random() * 100, rank: 0 },
            { acronym: 'CES-22', grade: Math.random() * 100, rank: 0 },
            { acronym: 'CTC-20', grade: Math.random() * 100, rank: 0 },
            { acronym: 'EEA-45', grade: Math.random() * 100, rank: 0 },
            { acronym: 'EES-10', grade: Math.random() * 100, rank: 0 },
            { acronym: 'ELE-12', grade: Math.random() * 100, rank: 0 },
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
            { acronym: 'EEA-21', grade: Math.random() * 100, rank: 0 },
            { acronym: 'CES-22', grade: Math.random() * 100, rank: 0 },
            { acronym: 'CTC-20', grade: Math.random() * 100, rank: 0 },
            { acronym: 'EEA-45', grade: Math.random() * 100, rank: 0 },
            { acronym: 'EES-10', grade: Math.random() * 100, rank: 0 },
            { acronym: 'ELE-12', grade: Math.random() * 100, rank: 0 },
        ],
        mean: 0,
        rank: 0
    },
    {
        name: 'Kelly', 
        id: uniqid(),        grades: [
            { acronym: 'EEA-21', grade: Math.random() * 100, rank: 0 },
            { acronym: 'CES-22', grade: Math.random() * 100, rank: 0 },
            { acronym: 'CTC-20', grade: Math.random() * 100, rank: 0 },
            { acronym: 'EEA-45', grade: Math.random() * 100, rank: 0 },
            { acronym: 'EES-10', grade: Math.random() * 100, rank: 0 },
            { acronym: 'ELE-12', grade: Math.random() * 100, rank: 0 },
        ],
        mean: 0,
        rank: 0
    },
    {
        name: 'Mattheus', 
        id: uniqid(),        grades: [
            { acronym: 'EEA-21', grade: Math.random() * 100, rank: 0 },
            { acronym: 'CES-22', grade: Math.random() * 100, rank: 0 },
            { acronym: 'CTC-20', grade: Math.random() * 100, rank: 0 },
            { acronym: 'EEA-45', grade: Math.random() * 100, rank: 0 },
            { acronym: 'EES-10', grade: Math.random() * 100, rank: 0 },
            { acronym: 'ELE-12', grade: Math.random() * 100, rank: 0 },
        ],
        mean: 0,
        rank: 0
    },
    {
        name: 'George', 
        id: uniqid(),
        grades: [
            { acronym: 'EEA-21', grade: Math.random() * 100, rank: 0 },
            { acronym: 'CES-22', grade: Math.random() * 100, rank: 0 },
            { acronym: 'CTC-20', grade: Math.random() * 100, rank: 0 },
            { acronym: 'EEA-45', grade: Math.random() * 100, rank: 0 },
            { acronym: 'EES-10', grade: Math.random() * 100, rank: 0 },
            { acronym: 'ELE-12', grade: Math.random() * 100, rank: 0 },
        ],
        mean: 0,
        rank: 0
    },
    {
        name: 'Bryan', 
        id: uniqid(),
        grades: [
            { acronym: 'EEA-21', grade: Math.random() * 100, rank: 0 },
            { acronym: 'CES-22', grade: Math.random() * 100, rank: 0 },
            { acronym: 'CTC-20', grade: Math.random() * 100, rank: 0 },
            { acronym: 'EEA-45', grade: Math.random() * 100, rank: 0 },
            { acronym: 'EES-10', grade: Math.random() * 100, rank: 0 },
            { acronym: 'ELE-12', grade: Math.random() * 100, rank: 0 },
        ],
        mean: 0,
        rank: 0
    }
];

students.forEach((student) => {
    var mean = 0;
    student.grades.forEach((subject) => {
        mean += subject.grade;
    });
    student.mean = mean / student.grades.length;
})

rankBySubjectSort = (index) => {
    students.sort((a,b) => (a.grades[index].grade > b.grades[index].grade) ? -1 : ((b.grades[index].grade > a.grades[index].grade) ? 1 : 0)); 

    var rank = 0;
    students.forEach((student) => {
        rank++;
        student.grades[index].rank = rank;
    })
}

rankSort = () => {
    for(index = 0; index < students[0].grades.length; index++) {
        rankBySubjectSort(index);
    }
    
    students.sort((a,b) => (a.mean > b.mean) ? -1 : ((b.mean > a.mean) ? 1 : 0)); 

    var rank = 0;
    students.forEach((student) => {
        rank++;
        student.rank = rank;
    })
}

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/students', (req, res) => {
  rankSort();
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
    console.log(req.body);
    var student = 
    {
        name: req.body.name, 
        id: uniqid(),
        grades: [
            { acronym: 'EEA-21', grade: parseInt(req.body.grades[0]) },
            { acronym: 'CES-22', grade: parseInt(req.body.grades[1]) },
            { acronym: 'CTC-20', grade: parseInt(req.body.grades[2]) },
            { acronym: 'EEA-45', grade: parseInt(req.body.grades[3]) },
            { acronym: 'EES-10', grade: parseInt(req.body.grades[4]) },
            { acronym: 'ELE-12', grade: parseInt(req.body.grades[5]) },
        ]
    }
    var mean = 0;
    var numberOfSubjects = 0;
    student.grades.forEach((subject) => {
        if(typeof subject.grade === 'number' && !isNaN(subject.grade)){
            mean += subject.grade;
            numberOfSubjects++;
        }
    });
    student.mean = mean / numberOfSubjects;
    students.push(student);
    rankSort();
    res.json(true);
});

app.post('/students/edit', (req, res) => {
    console.log(req.body);
    student =  req.body;
    var mean = 0;
    var numberOfSubjects = 0;
    student.grades.forEach((subject) => {
        if(typeof subject.grade !== 'number')
            subject.grade = parseInt(subject.grade)
        if(!isNaN(subject.grade)){
            mean += subject.grade;
            numberOfSubjects++;
        }
    });
    student.mean = mean / numberOfSubjects;
    console.log(student)
    for(index = 0; index < students.length; index++) {
        if(students[index].id === student.id) 
            students[index] = student;
    }
    rankSort();
    res.json(true);
});

app.get('/subjects', (req, res) => {
  res.json(subjects);
});

app.listen(process.env.PORT || 3413);
