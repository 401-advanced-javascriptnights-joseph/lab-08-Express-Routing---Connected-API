'use strict';

// 3rd Party Resources

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Esoteric Resources
const errorHandler = require( './middleware/error.js');
const notFound = require( './middleware/404.js' );

// Custom Routes
const productsRoutes = require('./routes/products.js');
const categoriesRoutes = require('./routes/categories');

const categoriesModels = require('./models/categories/categories');

const productModels = require('./models/products/products.js');


// Prepare the express app
const app = express();

app.use(categoriesModels);
app.use(productModels);

// App Level MW
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Routes
app.use(productsRoutes);
app.use(categoriesRoutes);

// Catchalls
app.use(notFound);
app.use(errorHandler);

module.exports = {
  server: app,
  start: (port) => app.listen(port, () => console.log(`Server up on port ${port}`) ),
};
