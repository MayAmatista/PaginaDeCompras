const express = require("express")
const productSchema = require('../models/latestProduct')

const router = express.Router()

//add product
  
router.post('/latestProducts', (req, res) => {
    const product = productSchema(req.body);
    product.save()
    .then(((data) => res.json(data)))
    .catch((error) => res.json({ message: error }));
})

//get all products

router.get('/latestProducts', (req, res) => {
    productSchema
    .find()
    .then(((data) => res.json(data)))
    .catch((error) => res.json({ message: error }));
})

//get a product

router.get('/latestProducts/:id', (req, res) => {
    const {id} = req.params;
    productSchema
    .findById(id)
    .then(((data) => res.json(data)))
    .catch((error) => res.json({ message: error }));
})

module.exports = router;