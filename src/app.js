const express = require('express');
const passport = require('passport');
const taskRoutes = require('./routes/task.routes');
const userRoutes = require('./routes/user.routes');
require('./config/passport');

const app = express();

app.use(express.json());
app.use(passport.initialize());

app.use('/users', userRoutes);
app.use('/tasks', passport.authenticate('jwt', { session: false }), taskRoutes);

// Handle errors.
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;
