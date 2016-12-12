myApp.controller('appointmentsController', function($scope, appointmentFactory){
	$scope.appointments = [];
	updateAppointments();

	

	function updateAppointments(){
		appointmentFactory.getAppointments(function(output){
			$scope.appointments = output;
		})
	}

	$scope.addAppointment = function(){
		var date = new Date();
		if($scope.newAppointment.complain.length < 10){
			$scope.err = "complaint must be at least 10 characters long."
		}
		else if($scope.newAppointment.time.getHours() < 8 || $scope.newAppointment.time.getHours() > 16){
			$scope.err = "Your appointment must be scheduled between 8:00AM and 5:00PM";
		}
		else if($scope.newAppointment.date < date){
			$scope.err = "Please select a date in the future."
		}
		else{
			if($scope.newAppointment.date.getFullYear() == date.getFullYear() && $scope.newAppointment.date.getMonth() == date.getMonth()){
				if($scope.newAppointment.date.getDate() == (date.getDate()+1)){
					$scope.err = "Please schedule an appointment atleast two days from today."
					return;
				}
			}

			appointmentFactory.validateAppointment($scope.newAppointment,function(output){
				var exist = true;
				if(output.length < 3){
					for(var i = 0; i<output.length; i++){
						if(output[i].name.toLowerCase() == name.toLowerCase())
							exist = false;	
					}
					if(exist){
						$scope.newAppointment.name = name;
						appointmentFactory.addAppointment($scope.newAppointment, function(output){
							updateAppointments();
							$scope.newAppointment = {};
							$scope.err = "Appointment added successfully!";
						})
					}
					else{
						$scope.err = "You already have an appointment on this date. Please choose another date.";
					}
				}
				else{
					$scope.err = "This date has already been booked with 3 appointments. Please choose another date.";
				}
			})
		}	
	}

	$scope.logout = function(){
		name = "";
		name = prompt("Please enter your name");
	}

	$scope.sameName = function(user){
		if(user.toLowerCase() == name.toLowerCase())
			return true;
		else
			return false;
	}

	$scope.removeAppointment = function(appointment){
		// var date = new Date();
		// 	if(appointment.date.getFullYear() == date.getFullYear() && appointment.date.getMonth() == date.getMonth()){
		// 		if(appointment.date.getDate() == (date.getDate()+1)){
		// 			$scope.err = "You can only cancel your appointment 2 or more days before the appointment."
		// 			return;
		// 		}
		// 	}
		appointmentFactory.removeAppointment(appointment);
		updateAppointments();
	}
})