function main() {
	initWelcome();
	initApplicationButtons();
	initStatus();
}
main();

function initWelcome(){
	//TODO: Get Name

	let dataName = "Ethan";

	$('#welcome').text("Welcome " + dataName +"!");
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
		window.location.href = "volApplication1.html";
	});
	//Remove Application
	$('#removeApplicationButton').on('click', function(){
		//TODO: Check to see if they have an application to remove.
		let dataHaveApplication = true;
		if(dataHaveApplication){
			$('#applicationMessage').text('Are you sure you want to remove your application?');
			$('.smallButtons').css('display', 'inline');
		}
		else{
			$('#applicationMessage').text('You do not have an application to remove.');
		}
	});
	//View Application
	$('#viewApplicationButton').on('click', function(){
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

function initStatus(){
	let Status = $('#approvalStatus');
	let Weeks = $('#weeksToWork');
	//TODO: Get Status from Database
	
	let dataStatus = "Not Submitted";	//Options: Approved, Pending, Declined, and Not Submitted
	
	//Update the status
	Status.text("Status: " + dataStatus);
	if(dataStatus == "Approved"){
		//TODO: Get Weeks from Database

		let dataWeeks = "Kids, Siblings";

		Weeks.text("Weeks: " + dataWeeks);
	}
	else {
		Weeks.text("Weeks: Unavailable")
	}
}