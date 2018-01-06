const express = require('express');
const mongoose = require('mongoose');

const PORT = 5000;
const MONGO_URL =
  'mongodb://admin:admin@ds235827.mlab.com:35827/european-capitals';

const app = express();

app.use(express.static('./build'));

mongoose.connect(MONGO_URL, function(err, conn) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Connected to DB');
  console.log('Starting server...');

  app.listen(PORT, function() {
    console.log(`Server started on ${PORT}`);
  });
});
