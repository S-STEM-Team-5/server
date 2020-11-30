//This is a test file. 
//It will be deleted later
//
// This is for Spring Semester 
// mongoosejs.com/docs/guide.html

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useUnifiedTopology: true});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
    	//We are connected
	

	//Creates the schema
	const accountSchema = new mongoose.Schema({
		accType:  { type: String, required: true },
	 	email: { type: String, required: true, unique: true }, 
		password: { type: String, required: true },	
		name: {
			fname: { type: String, required: true },
			lname: { type: String, required: true }
		}
	});

	const camperSchema = new mongoose.Schema({
		guardianEmail: {type: String, required: true},
		name: {
			fname: {type: String, required: true},
			lname: {type: String, required: true},
			minit: {type: String, required: false} 
		},
		homeAddr: {
			street: {type: String, required: true},
			city: {type: String, required: true},
			state: {type: String, required: true},
			zip: {type: Number, required: true}
		},
		residence: { type: String, required: true},
		shirtSize: { type: String, required: true},
		week: { type: [String], required: true},
		previousCamper: {type: Boolean, required: true},
		previousOvernightCamper: { type: String, required: true},
		canMakeFriends: { type: String, required: true},
		
		
		//Camper Attending session 1 or 5
		sibOrParentName: { type: String, required: false}, 
		sibOrParentDiagnosis: { type: String}, 
		sibOrParentDiagnosisDate: { type: Date},
		sibOrParentTreatmentLocation: {type: String},
		sibOrParentPhysician: { 
			name: { type: String},
			phone: { type: Number}
		},
		
		
		// Camper attending 2,3,4,or 6
		camperDiagnosis: {type: String},
		camperDiagnosisDate: { type: Date},
		camperTreatmentLocation: {type: String},
		camperPhysician: { 
			name: { type: String},
			phone: { type: Number}
		},
		controlled: {type: Boolean},


		nickName: {type: String},
		schoolYear: { type: String},
		favSubject: { type: String}, 
		hobbies: { type: String},
		talents: { type: String},
		favSport: { type: String},
		canSwim: { type: Boolean, required: true},
		mostAnticipated: { type: String},
		notes: {type: String},
		applicationBy: { type: Boolean} 
	});

	//Schema describing guardian
	const guardianSchema = new mongoose.Schema({
		contactInfo: { 
			homePhone: { type: Number, required: false},
			workPhone: { type: Number, required: false},
			emergencyPhone: { type Number, required: true}
		}
	});	

	//Schema that describes a volunteer. 
	const volunteerSchema = new mongoose.Schema({
		volEmail: { type: String, required: true},
		birthDate: {type: Date, required: true},
		gender: { type: String, required: true},
		address: {
			streetAddr: { type: String, required: true},
			city: { type: String, required: true},
			state: { type: String, required: true},
			zip: {type: Number, required: true}
		},
		schoolName: {type: String},
		shirtSize: {type: String, required: true},
		weeks: {type: [String], required: true},
		car: {type: Boolean, required: true},
		previouslyWorkedAtCamp: {type: Boolean, required: true},
		previouslyCamper: { type: Boolean, required: true},
		ssn: {type: Number, required: true},
		crime: { type: Boolean, required: true},
		crimeDescription: { type: String},
		certifications: { type: [String]},
		signature: { type: String, required: true},
		gname: { type: String},
		grelation: { type: String},
		gsignature: { type: String}
	});
/* 
 *	const guardianSchema = new mongoose.Schema({
		contactInfo: { 
			homePhone: { type: Number, required: false},
			workPhone: { type: Number, required: false},
			emergencyPhone: { type Number, required: true}
		}
	});	
*/

	const guardian = mongoose.model('Guardian', GuardianSchema);
	
	const bryan = new Guardian({
		"contactInfo" : {
			"homePhone" : 1111111111,
			"workPhone" : 2222222222,
			"emergencyPhone" : 33333333333
		}
	});
	bryan.save(function (err, bryan) {
		if (err) return console.error(err);
	});
	
	Guardian.find(function (err, guardians) {
		if (err) return consile.error(err);
		console.log(guardians);
	});
	//Adds function 'speak' to the schema methods property 
	//kittySchema.methods.speak = function() {
	//	const greeting = this.name
	//		? "Meow name is " + this.name
	//		: "I don't have a name";
	//	console.log(greeting);
	//}	
	
	//Compiles the schema into a model prototype
	//const Kitten = mongoose.model('Kitten', kittySchema);
	
	//Creates a new document representing a kitten
	//const silence = new Kitten({ name: 'Silence'});
	//console.log(silence.name);
	
	//Creates  another document... but this time calls a function related to that document. 
	//const fluffy = new Kitten({name: 'fluffy'});
	//fluffy.speak(); //Should say "Meow name is fluffy"
	

	//Saves fluffy to the database
	//fluffy.save(function (err, fluffy) {
	//	if (err) return console.error(err);
	//	fluffy.speak();
	//});

	//Query for all kittens 
	//Kitten.find(function (err, kittens) {
	//	if (err) return console.error(err);
	//	console.log(kittens);
	//});

	//Query by name
	//Kitten.find({name: /^fluff/ }, callback);
});
