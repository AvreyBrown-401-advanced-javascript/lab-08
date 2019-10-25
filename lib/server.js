'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const handleError = require('../src/middleware/error');
const errNotFound = require('../src/middleware/404');

const categoryRouter = require('../src/routes/categories-router');
const productRouter = require('../src/routes/products-router');

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


app.use(categoryRouter);
app.use(productRouter);

app.use(handleError);
app.use(errNotFound);


module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => console.log(`Server up on ${port}`));
  },
};

