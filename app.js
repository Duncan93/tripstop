var express = require("express");
var morgan = require('morgan');
var yelpRoute = require('./routes/yelpRoute.js');
// don't need routing for Google maps since it's all client-side

var app = express();

// Set the views directory
app.set('views', __dirname + '/views');

// Define the view (templating) engine
// app.set('view engine', 'ejs');

// logging
app.use(morgan('dev'))


app.get('/stop/:ll/:radius_filter', yelpRoute.findRestaurants);


// load static pages
app.use(express.static(__dirname + '/public'));


app.listen(50000);

console.log("Server listening at http://localhost:50000/");