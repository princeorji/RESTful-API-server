const Joi = require('joi');

const createTaskSchema = Joi.object({
  title: Joi.string().min(5).max(225).required(),
  description: Joi.string().min(5).required(),
  dueDate: Joi.date().iso().required(),
  status: Joi.string().valid('pending', 'in-progress', 'completed').required(),
});

module.exports = createTaskSchema;
