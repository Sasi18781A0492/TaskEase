const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: String,
});

module.exports = mongoose.model('Task', taskSchema);
