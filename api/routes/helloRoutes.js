'use strict';
module.exports = function(app) {
	var helloTask = require('../controllers/helloController');

	app.route('/hello')
		.post(helloTask.create_a_visit);
};
