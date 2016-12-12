// require express and path
var express = require("express");
var path = require("path");
// create the express app
var app = express();
// require body parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
// static content 
app.use(express.static(path.join(__dirname, "./client")));
//require mongoose (run it)
require('./config/mongoose.js');
// require routes.js and invoke it with app as an argument
require('./config/routes.js')(app);

app.listen(8000, function() {
 console.log("listening on port 8000");
})


