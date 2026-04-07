db = db.getSiblingDB('tasksdb'); // اسم قاعدة البيانات
db.tasks.insertMany([
  { id: 1, name: 'Homework', status: 'pending' },
  { id: 2, name: 'Laundry', status: 'completed' },
  { id: 3, name: 'Shopping', status: 'pending' },
  { id: 4, name: 'Exercise', status: 'completed' }
]);
