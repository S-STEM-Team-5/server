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

	//Sign-In
	$('#newApplicationButton').on('click', function(){
		window.location.href = "volApplication1.html";
	});
	//Register
	$('#RegisterButton').on('click', function(){
		$('#prompt').css('display', 'none');
		$('#register').css('display', 'inline');
		$('#signIn').css('display', 'none');
	});
	//GoBack
	$('.backButton').on('click', function(){
		$('#prompt').css('display', 'inline');
		$('#register').css('display', 'none');
		$('#signIn').css('display', 'none');
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