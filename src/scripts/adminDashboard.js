function main() {
	initWelcome();
	initTableButtons();
	initTable();
	updateInfo();
}
main();

function updateInfo(){
	//TODO: Update Database with new input data.
}

function initWelcome(){
	//TODO: Get Name

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
	$('#counselorTable').css('display', 'none');
	$('#camperTableButton').css('box-shadow', '0px 5px red');
	$('#camperTableButton').on('click', function(){
		$('#counselorTable').css('display', 'none');
		$('#camperTable').css('display', 'inline-block');
		$(this).css('box-shadow', '0px 5px red');
		$(this).focus();
		$('#counselorTableButton').css('box-shadow', '0px 0px red');
	});
	$('#counselorTableButton').on('click', function(){
		$('#counselorTable').css('display', 'inline-block');
		$('#camperTable').css('display', 'none');
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

function initTable(){
	//TODO: Get campers from database

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