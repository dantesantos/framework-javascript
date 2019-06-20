const express = require('express');
const app = express();

//Import our pages routes
const pageRoutes = require('./routes/pages');

//Register our page routes
app.use('/', pageRoutes);

//Export the changes
module.exports = app;