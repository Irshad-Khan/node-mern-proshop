const express = require('express');
const { find } = require('../models/productModel');
const router = express.Router();
const Product = require('../models/productModel');

router.get('/', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({
            status: true,
            products: products
        });
    } catch (error) {
        console.log(error);
    }
});

router.get('/:id', async (req, res)=>{
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.status(200).json({
                status: true,
                product: product
            });   
        } else {
            res.status(200).json({
                status: true,
                product: {},
                message: 'Product not Found'
            });
        }

    } catch (error) {
        console.log(error);
    }
});

module.exports = router;