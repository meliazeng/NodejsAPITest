var express = require('express'),
	app = express(),
	port = process.env.PORT || 8081,
	mongoose = require('mongoose'),
	Visit = require('./api/models/helloModel'),
	bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://192.168.9.80:31581/hellodb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/helloRoutes');
routes(app);

app.listen(port);
console.log('Hello api started on : ' + port);

