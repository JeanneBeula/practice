const express = require('express');
const app = express();

const productRoutes = require('./src/routes/products'); 

app.use('/products', productRoutes);

module.exports = app;