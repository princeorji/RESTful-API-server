const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    dueDate: { type: Date, required: true },
    status: { type: String, enum: ['pending', 'in-progress', 'completed'] },
  },
  { timestamps: true },
);

module.exports = mongoose.model('task', schema);
