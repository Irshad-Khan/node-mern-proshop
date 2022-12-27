const express = require('express');
const router = express.Router();
const products = require('../data/products');

router.get('/', (req, res) => {
    res.status(200).json({
        status: true,
        products: products
    });
});

router.get('/:id', (req, res)=>{
    const product = products.find((p) => p._id === req.params.id);
    res.status(200).json({
        status: true,
        product: product
    });
});

module.exports = router;