var express = require('express');
var exp = express();

exp.use(express.static('client'));

exp.listen(1983);
