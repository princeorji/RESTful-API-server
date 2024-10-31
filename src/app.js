const express = require('express');
const taskRoutes = require('./routes/task.routes');

const app = express();

app.use(express.json());

app.use('/tasks', taskRoutes);

// Handle errors.
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;
