//This is a test file. 
//It will be deleted later

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useUnifiedTopology: true});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
    	//We are connected
	

	//Creates the schema
	const kittySchema = new mongoose.Schema({
		name: String
	});
	
	//Adds function 'speak' to the schema methods property 
	kittySchema.methods.speak = function() {
		const greeting = this.name
			? "Meow name is " + this.name
			: "I don't have a name";
		console.log(greeting);
	}	
	
	//Compiles the schema into a model prototype
	const Kitten = mongoose.model('Kitten', kittySchema);
	
	//Creates a new document representing a kitten
	const silence = new Kitten({ name: 'Silence'});
	console.log(silence.name);
	
	//Creates  another document... but this time calls a function related to that document. 
	const fluffy = new Kitten({name: 'fluffy'});
	fluffy.speak(); //Should say "Meow name is fluffy"
	

	//Saves fluffy to the database
	fluffy.save(function (err, fluffy) {
		if (err) return console.error(err);
		fluffy.speak();
	});

	//Query for all kittens 
	Kitten.find(function (err, kittens) {
		if (err) return console.error(err);
		console.log(kittens);
	});

	//Query by name
	Kitten.find({name: /^fluff/ }, callback);
});





