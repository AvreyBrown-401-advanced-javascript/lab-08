'use strict';

const express = require('express');

const router = express.Router();

// Routes
router.get('/products', async (request, response) => {
  const data = await Products.find({});
  
  response.send(data);
} );
router.get('/products/:id', async (request, response) => {
  try{
    const productId = request.params.id;
    const data = await Products.findById(productId);
    response.send(data);
  } catch(e) {
    response.send('No Product found');
  }
} );

router.post('/products', async (request, response) => {
  const newProduct = new Products(request.body);
  const productData = await newProduct.save();
  response.send(productData);
} );

router.put('/products/:id', async (request, response) => {
  try{
    const productData = request.body;
    const updatedProduct = Products.findByIdAndUpdate(request.params.id, productData, { new: true});
    response.send(updatedProduct);
  } catch(e) {
    response.send(e);
  }
  
} );
router.delete('/product/:id', async (request, response) => {
  try{
    const productId = request.params.id;
    const deleteProduct = await Products.findByIdAndDelete(productId);
    response.send(deleteProduct);
  } catch(e){
    response.send(e);
  }
} );