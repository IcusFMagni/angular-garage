var express = require('express');
var bodyParser = require('body-parser');
var company = require('./routes/company.js')


var app = express();
var port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));//for jQuery
app.use(bodyParser.json());//for Angular
app.use(express.static('server/public'));

app.use('/company', company)

app.listen(port, function () {
    console.log('up and running on port', port);
});