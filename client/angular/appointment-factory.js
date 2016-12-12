myApp.factory('appointmentFactory', function($http){
	var appointments = [];
	var factory = {};

	factory.getAppointments = function(callback){
		$http.get('/appointments').success(function(output){
			appointments = output;
			callback(appointments);
		})
	}

	factory.addAppointment = function(info, callback){
		$http.post('/addAppointment', info).success(function(result){
			appointments.push(result);
			callback(appointments);
		})
	}

	factory.validateAppointment = function(info, callback){
		$http.post('/sameDateAppointments', info).success(function(result){
			callback(result);
		})
	}

	factory.removeAppointment = function(appointment){
		$http.post('/removeAppointment', appointment).success(function(){
			for(var i = 0; i< appointments.length; i++){
				if(appointments[i]._id == appointment._id){
					appointments.splice(i, 1);
				}
			}
		})
	}

	return factory;
})