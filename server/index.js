const express = require('express');
const path = require('path');
const morgan = require('morgan');

// spin up app
const app = express();

// logging middleware
app.use(morgan('dev'));

//serve up static assets
app.use(express.static(path.join(__dirname, '../public')));

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// separate api namespace from frontend, mounted routes accessed here:
app.use('/api', require('./api'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  }); // Send index.html for any other requests

// error handling middleware
app.use((err, req, res, next) => {
    if (process.env.NODE_ENV !== 'test') console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  });

module.exports = app;
