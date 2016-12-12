var appointments = require('./../server/controllers/appointments.js');
module.exports = function(app){

	app.get('/appointments', function(req,res){
		appointments.show(req,res);
	})

	app.post('/addAppointment', function(req,res){
		appointments.add(req,res);
	})

	app.post('/removeAppointment', function(req,res){
		appointments.remove(req,res);
	})

	app.post('/sameDateAppointments', function(req,res){
		appointments.sameDayAppointments(req,res);
	})

};