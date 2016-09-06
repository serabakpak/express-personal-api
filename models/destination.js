var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var DestinationSchema = new Schema({
	image: String,
	name: String,
	country: String,
	description: String
});

var Destination = mongoose.model('Destination', DestinationSchema);

module.exports = Destination;