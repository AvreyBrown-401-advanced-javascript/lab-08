'use strict';

const mongoose = require('mongoose');

const products = mongoose.Schema({
  name: String,
  description: String,
});




module.exports = mongoose.model('products', products);