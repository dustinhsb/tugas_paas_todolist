require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());


app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', timestamp: new Date() });
});


let tasks = [{ id: 1, task: 'Selesaikan Laporan Cloud Computing' }];


app.get('/tasks', (req, res) => {
    res.json(tasks);
});


app.post('/tasks', (req, res) => {
    const newTask = { id: tasks.length + 1, ...req.body };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});