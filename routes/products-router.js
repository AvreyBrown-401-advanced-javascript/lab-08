'use strict';

const express = require('express');
const productRouter = express.Router();

// const Products = require('../models/products-model');
const products = new products;

//grab all products
productRouter.get('/products', handleGet);

// grab a single product by id
productRouter.get('/products/:productId', handleGet);

products.post('/products', handlePost);

function handleGet(req, res, next) {
  let filter = {};
  if (req.params.productId) {
    filter.id = req.params.productId;
  }

  products.get(filter)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.error(err);
      res.send(err);
    });
}

function handlePost(req, res, next) {
//   const newProduct = { name: req.body.name, description: req.body.description };
}

module.exports = productRouter;