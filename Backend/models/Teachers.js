const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  status: { type: String, default: 'Pending' },
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
