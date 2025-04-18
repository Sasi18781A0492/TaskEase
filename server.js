const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Task = require('./task');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/taskease', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post('/tasks', async (req, res) => {
  const task = new Task({ title: req.body.title });
  await task.save();
  res.status(201).json(task);
});

app.listen(5000, () => console.log('Server running on port 5000'));
