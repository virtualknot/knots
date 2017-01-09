var express = require('express');
var exp = express();

var port = process.env.PORT || 1983;

exp.use(express.static('client'));

exp.listen(port);
