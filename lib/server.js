'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
// const router = require('../router');
// const categoryRouter = require('../routes/categories-router.js');
// const productRouter = require('../routes/products-router.js');

// Cross origin resource sharing
app.use(cors());
// API route logging
app.use(morgan('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

const Products = mongoose.Schema({
  name: String,
  description: String,
});

const products = mongoose.model('products', Products);


// Routes
app.get('/api/v1/categories', getCategories);
app.post('/api/v1/categories', postCategories);
app.get('/api/v1/categories/:id', getCategory);
app.put('/api/v1/categories/:id', putCategories);
app.delete('/api/v1/categories/:id', deleteCategories);
// undefined router;
// app.use('/api', router);
// app.use('/api', categoryRouter);
// app.use('/api', productRouter);



module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => console.log(`Server up on ${port}`));
  },
};

