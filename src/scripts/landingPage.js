function main() {
	$('#CCFLogoLink').attr('src', 'media/logo.png');
	initPromptButtons();
	initSubmitButtons();
}
main();
/* ----------------------------------------------------
	initPromptButtons
   ----------------------------------------------------*/
function initPromptButtons() {
	$('.clickableButton').on('mouseover', function() {
		$(this).css('cursor', 'pointer');
		$(this).css('background-color', 'rgb(73, 73, 73)');
	}).on('mouseout', function() {
		$(this).css('cursor', 'default');
		$(this).css('background-color', '#272727');
	});

	//Sign-In
	$('#SignInButton').on('click', function() {
		$('#register').css('display', 'none');
		$('#signIn').css('display', 'inline');
	});
	//Register
	$('#RegisterButton').on('click', function() {
		$('#register').css('display', 'inline');
		$('#signIn').css('display', 'none');
	});
	//GoBack
	$('.backButton').on('click', function() {
		$('#register').css('display', 'none');
		$('#signIn').css('display', 'inline');
		resetErrorMessages();
		clearAllInputs()
	});
	document.getElementById("sPassword").oninput = function() {
		resetErrorMessages();
	};
	document.getElementById("sEmail").oninput = function() {
		resetErrorMessages();
	};
}
function resetErrorMessages(){
	$('#rErrorMessage, #sErrorMessage').css('display','none').text("");
}
/* ----------------------------------------------------
	initSubmitButtons and SignIn and Register Forms
   ----------------------------------------------------*/
function initSubmitButtons() {
	//Sign In
	$('#sSubmitButton').on('click', function() {
		if ($('#sEmail').val() != "" && ($('#sPassword').val() != "")) {
			const response = postRequestSignIn().then((response) => {
				if (response.data.message == "Cannot find Account") {
					$('#sErrorMessage').text("Invaild Credentails");
					$('#sErrorMessage').css('display', 'inline');
				} else {
					$('#sErrorMessage').text("");
					$('#sErrorMessage').css('display', 'none');
					let accType = response.data.accType;
					console.log(response.data);
					if(accType == "Volunteer"){ //Volunteer
						localStorage["email"] = $('#sEmail').val();
						window.location.href = "htmls/volunteerDashboard.html?name=";
					}
					else if(accType == "Parent"){ //Parent
						localStorage["email"] = $('#sEmail').val();
						window.location.href = "htmls/parentDashboard.html";
					}
					else if(accType == "Admin"){ //Admin
						window.location.href = "htmls/adminDashboard.html";
					}
					else{ //Error Message
						$('#sErrorMessage').text("Account Type is Broken");
						$('#sErrorMessage').css('display', 'inline');
					}
				}
			});
		}
	});
	$('#signInForm, #registerForm').submit(function (e) {
		e.preventDefault();
	});
	//Register
	$('#rSubmitButton').on('click', function(){
		if($('#fName').val() != "" &&
		   $('#lName').val() != "" &&
		   $('#rEmail').val() != "" &&
		   $('#rPassword').val() != "" &&
		   $('#rRPassword').val() != "" &&
		   (($('#radioVolunteer').is(':checked')) || ($('#radioParent').is(':checked'))))
		{
			if($('#rPassword').val() != $('#rRPassword').val()){
				$('#rErrorMessage').text("Passwords do not match");
				$('#rErrorMessage').css('display', 'inline');
			}else{
				$('#rErrorMessage').text("");
				$('#rErrorMessage').css('display', 'none');
				const response = postRequestRegister().then((response) => {
					if (response.status == 200) {
						$('#rErrorMessage').text("Account already exists");
						$('#rErrorMessage').css('display', 'inline').css('color', 'red');
					} else {
						$('#rErrorMessage').text("Account Created");
						$('#rErrorMessage').css('display', 'inline').css('color', 'green');
					}
				});
			}
		}
	});
}
function clearAllInputs(){
	$('input').val("");
	$('#radioParent, #radioVolunteer').attr('chekced', false);
}
//------------------------------------------------------- API Calls --------------------------------------------------------------
async function getRequest() {
    try {
		const response = await axios.get("http://localhost:3013/rest/account/");
		console.log(response.data[0].email);
	  } catch (err) {
		console.log(err);
	  }
}
//Sign In Post Request
async function postRequestSignIn() {
	var data = {
		"email": $('#sEmail').val(),
		"password": $('#sPassword').val()
	}
	try {
		const response = await axios.post('http://localhost:3013/rest/account/signin', data);
		resetErrorMessages();
		return response;
	}catch (err) {
		$('#sErrorMessage').text("Cannont connect to server");
		$('#sErrorMessage').css('display', 'inline').css('color', 'red');
	}
}
//Register Post Request
async function postRequestRegister() {
	let accTypeS = "Parent";
	if($('#radioVolunteer').is(':checked') == true)
		accTypeS = "Volunteer";
	var data = {
		"accType": accTypeS,
		"email": $('#rEmail').val(),
		"password": $('#rPassword').val(),
		"name" : {
			"fname" : $('#fName').val(),
			"lname" : $('#lName').val()
		}
	}
	try{
		const response = await axios.post('http://localhost:3013/rest/account', data);
		resetErrorMessages();
		return response;
	}catch (err){
		$('#rErrorMessage').text("Cannont connect to server");
		$('#rErrorMessage').css('display', 'inline').css('color', 'red');
	}
}
