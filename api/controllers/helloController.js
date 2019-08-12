'use strict'
var mongoose = require('mongoose'),
	Visit = mongoose.model('Visitor');

exports.create_a_visit = function(req, res) {
	var new_visit = new Visit(req.body);
	new_visit.save(function(err, visit) {
		if (err)
			res.send(err);
		//res.json(visit);
		if (visit.Visit_name) {
			res.send('hello ' + visit.Visit_name);
		}
		else 
		{
			res.send('hello Stranger!');
		}
	});
};

