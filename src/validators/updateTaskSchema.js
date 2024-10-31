const Joi = require('joi');

const updateTaskSchema = Joi.object({
  title: Joi.string().min(5).max(225).optional(),
  description: Joi.string().min(5).optional(),
  dueDate: Joi.date().iso().optional(),
  status: Joi.string().valid('pending', 'in-progress', 'completed').optional(),
});

module.exports = updateTaskSchema;
