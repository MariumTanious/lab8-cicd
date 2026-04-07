const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo:27017/tasksdb', { useNewUrlParser: true, 
useUnifiedTopology: true });
const taskSchema = new mongoose.Schema({ title: String });
const Task = mongoose.model('Task', taskSchema);
const sampleTasks = [
 { title: "Study Docker" },
 { title: "Finish Assignment" }
];
Task.insertMany(sampleTasks)
 .then(() => {
 console.log("Data seeded");
 mongoose.disconnect();
 })
 .catch(err => console.error(err));
