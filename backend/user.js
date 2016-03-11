var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/linked');
//mongoose.connection.on('error', console.error.bind(console, 'MongoDb connection error: '));


var userSchema = new mongoose.Schema({
	name: {
		type:String
	},
	title:{
		type:String
	},
	location:{
		type:String
	},
	industry:{
		type:String
	},
	education:{
		type:String
	},
	photoUrl:{
		type:String
	}

})


var User = mongoose.model('User', userSchema);
module.exports = User;





