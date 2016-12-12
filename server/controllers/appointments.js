var mongoose = require('mongoose');
var Appointment = mongoose.model('Appointment');

module.exports = {

	show: function(req,res){
		Appointment.find({}, function(err,result){
			if(err){
				console.log(err);
			}
			else{
				res.json(result);
			}
		})
	},

	add: function(req,res){
		var appointment = new Appointment({name: req.body.name, date: req.body.date, time: req.body.time, complain: req.body.complain});
		appointment.save(function(err,result){
			if(err){
				console.log(err);
			}
			else{
				res.json(result);
			}
		})
	},

	remove: function(req,res){
		Appointment.remove({_id: req.body._id}, function(err, result){
			if(err){
				console.log(err);
			}
			else{
				res.end();
			}
		})
	},

	sameDayAppointments: function(req,res){
		console.log(req.body);
		Appointment.find({date: req.body.date}, function(err, result){
			if(err){
				console.log(err);
			}
			else{
				res.send(result);
			}
		})
	}
	
} // module.exports