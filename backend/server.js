const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

app.get('/', (req, res) => {
    res.send('Api\'s working');    
});

const productRoute = require('./routes/product');
app.use('/api/products', productRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));