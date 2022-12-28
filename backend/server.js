const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const app = express();

dotenv.config();
connectDB();

app.get('/', (req, res) => {
    res.send('Api\'s working');    
});

const productRoute = require('./routes/product');
app.use('/api/products', productRoute);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));