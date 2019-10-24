'use strict';

const express = require('express');
const categoryRouter = express.Router();

const Categories = require('../models/categories-model');
const categories = new Categories;

//grab all categories
categoryRouter.get('/categories', handleGet);

// grab a single category by id
categoryRouter.get('/categories/:categoryId', handleGet);

categories.post('/categories', handlePost);

function handleGet(req, res, next) {
  let filter = {};
  if (req.params.categoryId) {
    filter.id = req.params.categoryId;
  }

  categories.get(filter)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.error(err);
      res.send(err);
    });
}

function handlePost(req, res, next) {
  // const newCategory = { name: req.body.name, description: req.body.description };
}

module.exports = categoryRouter;