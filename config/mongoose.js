//this is a config file that connects to MOngoDb and loads all of our models for us.
//we do this here because we don't wandt to have to conect to the db every time we require a model!
var mongoose = require('mongoose');
//require file-system so that we can load, read require all of the model files 
var fs = require('fs');
mongoose.connect('mongodb://localhost/black_belt2');
//specify the path to all of the models
var models_path = __dirname + '/../server/models';
// read all of the files in the models_path and for each one check if it is a javascript file before requiring it
fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js')>0){
		require(models_path + '/' + file);
	}
})

