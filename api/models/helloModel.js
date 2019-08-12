'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var VisitorSchema = new Schema({
	Visit_name: {
		type: String,
		required: false,
		default: null
	},
	Visit_date: {
		type: Date,
		default: Date.now
	}
});
module.exports = mongoose.model('Visitor', VisitorSchema);

