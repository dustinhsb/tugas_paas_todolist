require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

// 1. Endpoint Health Check (Syarat Wajib)
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', timestamp: new Date() });
});

// Mock Data (Ganti dengan Query Database untuk nilai maksimal)
let tasks = [{ id: 1, task: 'Selesaikan Laporan Cloud Computing' }];

// 2. Endpoint Get All Tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// 3. Endpoint Create Task
app.post('/tasks', (req, res) => {
    const newTask = { id: tasks.length + 1, ...req.body };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});