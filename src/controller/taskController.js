const Task = require('../models/task');

const create = async (req, res, next) => {
  const { title, description, dueDate, status } = req.body;

  try {
    const task = await Task.create({
      title,
      description,
      dueDate,
      status,
    });

    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};

const tasks = async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const skip = (page - 1) * limit;
  try {
    const tasks = await Task.find().skip(skip).limit(limit);

    res.status(200).json({ tasks, page, limit });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  const { id } = req.params;
  const newTask = req.body;

  try {
    const task = await Task.findByIdAndUpdate(id, newTask, { new: true });
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  const { id } = req.params;

  try {
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  tasks,
  getById,
  update,
  remove,
};
