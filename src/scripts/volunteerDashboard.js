function main() {
	initWelcome();
	initApplicationButtons();
	initStatus();
}
let eml = localStorage["email"];
main();

function initWelcome(){
	//Changes Welcome sign
	findUserByEmail(eml).then((response) => {
		$('#welcome').text("Welcome " + response.name.fname +"!");
	});
}

function initApplicationButtons(){
	$('button').on('mouseover', function(){
		$(this).css('cursor', 'pointer');
		$(this).css('background-color', 'rgb(73, 73, 73)');
	}).on('mouseout', function(){
		$(this).css('cursor', 'default');
		$(this).css('background-color', 'rgb(185, 185, 185)');
	});

	//New Application
	$('#newApplicationButton').on('click', function(){
		//Check to see if they already have an application
		findVolunteerByEmail(eml).then((response) => {
			let dataHaveApplication = (response.message != "Cannot find Volunteer");
			if(dataHaveApplication){
				$('#applicationMessage').text('You already have an application.');
			}
			else{
				window.location.href = "volApplication1.html";
			}
		});
	});

	//Remove Application
	$('#removeApplicationButton').on('click', function(){
		//Check to see if they have an application to remove.
		findVolunteerByEmail(eml).then((response) => {
			let dataHaveApplication = (response.message != "Cannot find Volunteer");
			if(dataHaveApplication){
				$('#applicationMessage').text('Are you sure you want to remove your application?');
				$('.smallButtons').css('display', 'inline');
			}
			else{
				$('#applicationMessage').text('You do not have an application to remove.');
			}
		});
	});
	//View Application
	$('#viewApplicationButton').on('click', function(){
		//Check to see if they have an application to review.
		findVolunteerByEmail(eml).then((response) => {
			let dataHaveApplication = (response.message != "Cannot find Volunteer");
			if(dataHaveApplication){
				//TODO: View Application
			}
			else{
				$('#applicationMessage').text('You do not have an application to review.');
			}
		});
	});
	//Account Settings
	$('#accountSettingsButton').on('click', function(){
		window.location.href = "accountSettings.html";
	});

	//Yes No Buttons
	$('#removeYesButton').on('click', function() {
		//Remove Application
		removeVolunteerByEmail(eml).then((response) => {
			$('#applicationMessage').text('Your application has been removed.');
			$('.smallButtons').css('display', 'none');
			initStatus();
		});
	});
	$('#removeNoButton').on('click', function() {
		$('#applicationMessage').text('');
		$('.smallButtons').css('display', 'none');
	});
}

function initStatus(){
	let Status = $('#approvalStatus');
	let Weeks = $('#weeksToWork');
	//Get Status from Database
	findVolunteerByEmail(eml).then((response) => {
		let dataStatus = response.status;	//Options: Approved, Pending, Declined, and Not Submitted
		//Update the status
		Status.text("Status: " + dataStatus);
		if(dataStatus == "Approved"){
			//Get Weeks from Database
			findVolunteerByEmail(eml).then((response) => {
				let dataWeeks = response.weeks;
				
				Weeks.text("Weeks: " + dataWeeks.join(", "));
			});
		}
		else {
			Weeks.text("Weeks: Unavailable")
		}
	});
}


//--------------------------------------------------- API Calls -------------------------------------------------------------
//Find by email
async function findUserByEmail(eml) {
	try {
		const response = await axios.get('http://localhost:3013/rest/account/' + eml);
		return response.data;
	}catch (err) {
		console.log("Can not connect to server.");
		console.log(err);
	}
}
//Find if there is a volunteer with that email.
async function findVolunteerByEmail(eml) {
	try {
		const response = await axios.get('http://localhost:3013/rest/volunteer/' + eml);
		return response.data;
	}catch (err) {
		console.log("Can not connect to server.");
		console.log(err);
	}
}
//Removes volunteer by Email
async function removeVolunteerByEmail(eml) {
	try {
		const response = await axios.delete('http://localhost:3013/rest/volunteer/' + eml);
		return response.data;
	}catch (err) {
		console.log("Can not connect to server.");
		console.log(err);
	}
}

