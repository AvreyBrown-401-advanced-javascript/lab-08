'use strict';

const express = require('express');
const Categories = require('../models/categories/categories-model');

const router = express.Router();

// Routes
router.get('/categories', async (request, response) => {
  try {
    const data = await Categories.find({});
    response.send(data);
  } catch (e) {
    response.send(e);
  }
});
router.get('/categories/:id', async (request, response) => {
  console.log('here');
  try{
    const categoryId = request.params.id;
    const data = await Categories.findById(categoryId);
    response.send(data);
  } catch(e) {
    response.send('No Category found');
  }
} );

router.post('/categories', async (request, response) => {
  const newCategory = new Categories(request.body);
  const categoryData = await newCategory.save();
  response.send(categoryData);
} );

router.put('/categories/:id', async (request, response) => {
  try{
    const categoryData = request.body;
    const updatedCategory = Categories.findByIdAndUpdate(request.params.id, categoryData, { new: true});
    response.send(updatedCategory);
  } catch(e) {
    response.send(e);
  }
  
} );
router.delete('/categories/:id', async (request, response) => {
  try{
    const categoryId = request.params.id;
    const deleteCategory = await Categories.findByIdAndDelete(categoryId);
    response.send(deleteCategory);
  } catch(e){
    response.send(e);
  }
} );

module.exports = router;
