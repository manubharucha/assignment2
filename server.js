const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Here I connect to MongoDB using Mongoose.
mongoose.connect('mongodb+srv://MansiGandhi:123Mansi@cluster0.myrsjom.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Here I define the routes for the application.
const product = require('./routes/product');
const user = require('./routes/user');
const comment = require('./routes/comment');
const cart = require('./routes/cart');
const order= require('./routes/order');

app.use('/products', product);
app.use('/users', user);
app.use('/comments', comment);
app.use('/carts', cart);
app.use('/orders', order);

// Here I start the server on port 8080.
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
