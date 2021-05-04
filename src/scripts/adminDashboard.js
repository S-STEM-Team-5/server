function main() {
	initWelcome();
	initTableButtons();
	camperTable();
	counselorTable();
	updateInfo();
}
main();

function updateInfo(){
	//TODO: Update Database with new input data.
}

function initWelcome(){
	let dataName = "Admin";

	$('#welcome').text("Welcome " + dataName +"!");
}

function initTableButtons(){
	//Table button nice effects.
	$('button').on('mouseover', function() {
		$(this).css('cursor', 'pointer');
		$(this).css('background-color', 'rgb(73, 73, 73)');
	}).on('mouseout', function() {
		$(this).css('cursor', 'default');
		$(this).css('background-color', '#272727');
	});
	//Table button actualling switching tables.
	$('#camperDatabase').focus();
	$('#counselorDatabase').css('display', 'none');
	$('#camperTableButton').css('box-shadow', '0px 5px red');
	$('#camperTableButton').on('click', function(){
		$('#counselorDatabase').css('display', 'none');
		$('#camperDatabase').css('display', 'inline-block');
		$(this).css('box-shadow', '0px 5px red');
		$(this).focus();
		$('#counselorTableButton').css('box-shadow', '0px 0px red');
	});
	$('#counselorTableButton').on('click', function(){
		$('#counselorDatabase').css('display', 'inline-block');
		$('#camperDatabase').css('display', 'none');
		$(this).css('box-shadow', '0px 5px red');
		$(this).focus();
		$('#camperTableButton').css('box-shadow', '0px 0px red');
	});




	//Remove Entry
	$('.removeEntryButton').on('click', function(){
		//TODO: Check to see if they have an entry to remove.
		let dataHaveEntry = true;
		if(dataHaveEntry){
			$('#applicationMessage').text("Are you sure you want to remove _____'s?");
			$('.smallButtons').css('display', 'inline');
		}
		else{
			$('#applicationMessage').text('You do not have an entry to remove.');
		}
	});
	//View Application
	$('.viewApplicationButton').on('click', function(){
		//TODO: Check to see if they have an application to review.
		let dataHaveApplication = false;
		if(dataHaveApplication){
			//TODO: View Application
		}
		else{
			$('#applicationMessage').text('You do not have an application to review.');
		}
		
	});
	//Account Settings
	$('#accountSettingsButton').on('click', function(){
		window.location.href = "accountSettings.html";
	});

	//Yes No Buttons
	$('#removeYesButton').on('click', function() {
		//TODO: Remove Application
		$('#applicationMessage').text('Your application has been removed.');
		$('.smallButtons').css('display', 'none');
		initStatus();
	});
	$('#removeNoButton').on('click', function() {
		$('#applicationMessage').text('Your application was not removed.');
		$('.smallButtons').css('display', 'none');
	});
}

async function counselorTable(){
	let counselors = await getAllVolunteers();
	//Get counselors from database
	$(document).ready( function () {
		let counselor_Table = $('#counselorTable').DataTable();
		counselors.forEach(counselor => {
			//let Name = counselor.name.fname + " " + counselor.name.lname  || "Unavailable";
			let age = counselor.birthDate || "Unavailable";
			let prevWorked = "No";
			if(counselor.previouslyWorkedAtCamp)
				prevWorked = "Yes";
			let hasCar = "No";
			if(counselor.car)
				hasCar = "Yes";
			let status = counselor.status || "Unavailable";
			let week = counselor.weeks || "Unavailable";
			let shirt = counselor.shirtSize || "Unavailable";
			let phone = counselor.homePhone || "Unavailable";
			console.log(counselor);
			counselor_Table.row.add(["Name", age, prevWorked, hasCar, status, week, shirt, 0, null, null]).draw();
		});
	});
}
async function camperTable(){
	let campers = await getAllCamper();
	//Get campers from database
	$(document).ready( function () {
		let camper_Table = $('#camperTable').DataTable();
		campers.forEach(camper => {
			let Name = camper.name.fname + " " + camper.name.lname  || "Unavailable";
			let Age = camper.age || "Unavailable";
			let Status = camper.status || "Unavailable";
			let Week = camper.week || "Unavailable";
			let Shirt = camper.shirtSize || "Unavailable";
			let Phone = camper.homePhone || "Unavailable";
			camper_Table.row.add([Name, Age, Status, Week, Shirt, Phone, null, null]).draw();
		});
	});
}

//--------------------------------------------------- API Calls -------------------------------------------------------------
//Get all campers
async function getAllCamper() {
	try {
		const response = await axios.get('http://localhost:3013/rest/camper/');
		return response.data;
	}catch (err) {
		console.log("Can not connect to server.");
		console.log(err);
	}
}
//Get All Volunteers
async function getAllVolunteers() {
	try {
		const response = await axios.get('http://localhost:3013/rest/volunteer/');
		return response.data;
	}catch (err) {
		console.log("Can not connect to server.");
		console.log(err);
	}
}
// //Removes volunteer by Email
// async function removeVolunteerByEmail(eml) {
// 	try {
// 		const response = await axios.delete('http://localhost:3013/rest/volunteer/' + eml);
// 		return response.data;
// 	}catch (err) {
// 		console.log("Can not connect to server.");
// 		console.log(err);
// 	}
// }

