var mongoose = require('mongoose');

var AppointmentSchema = new mongoose.Schema({
	name: String,
	date: Date,
	time: Date,
	complain: String
});

mongoose.model('Appointment', AppointmentSchema);