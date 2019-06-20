const express = require('express');
const app = express();

//Import our pages routes
const pageRoutes = require('./routes/pages');
const blogsRoutes = require('./routes/blogs');

//Register our page routes
app.use('/', pageRoutes);
app.use('/blogs', blogsRoutes);

//Export the changes
module.exports = app;