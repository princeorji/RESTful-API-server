const express = require('express');

const app = express();

app.use(express.json());

// Handle errors.
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;
