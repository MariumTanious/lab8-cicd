const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
// Connect to MongoDB
mongoose.connect('mongodb://mongo:27017/tasksdb', { 
useNewUrlParser: true, useUnifiedTopology: true });
const taskSchema = new mongoose.Schema({ title: String });
const Task = mongoose.model('Task', taskSchema);
// Route to get tasks
app.get('/tasks', async (req, res) => {
 const tasks = await Task.find();
 res.json(tasks);
});
app.listen(3000, () => {
 console.log('Server running on port 3000');
});
