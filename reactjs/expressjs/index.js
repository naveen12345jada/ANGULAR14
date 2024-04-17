var express = require('express');
var app = express();

var thingskm = require('./routing2.js'); //filename including

//both index.js and things.js should be in same directory
app.use('/thingskira', thingskm);

app.listen(3000);