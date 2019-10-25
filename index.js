'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Avrey125:Peaches125@cluster0-adwlw.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

require('./lib/server').start(3000);

