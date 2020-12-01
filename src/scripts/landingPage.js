function main() {
	$('#CCFLogoLink').attr('src', 'media/logo.png');
	initPromptButtons();
}
main();

function initPromptButtons(){
	$('.clickableButton').on('mouseover', function(){
		$(this).css('cursor', 'pointer');
		$(this).css('background-color', 'rgb(73, 73, 73)');
	}).on('mouseout', function(){
		$(this).css('cursor', 'default');
		$(this).css('background-color', 'rgb(185, 185, 185)');
	});

	//Sign-In
	$('#SignInButton').on('click', function(){
		$('#prompt').css('display', 'none');
		$('#register').css('display', 'none');
		$('#signIn').css('display', 'inline');
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

	$('#submitButton').on('click', function(){
		if($('#sEmail').val() != "" && ($('#sPassword').val() != "")){
			console.log($('#sPassword').val());
			let jsonEmailTemp = {
				email: $('#sEmail').val(),
				password: $('#sPassword').val()
			}
			const response = postAccountVerification(jsonEmailTemp);
			if(response.message == "Cannot find Account"){
				$('#sErrorMe').text("Invaild Credentails");
			}else{
				$('#sErrorMe').text("");
			}
		}
	});

	const postAccountVerification = async () => {
		try {
			let json = {
				email : "joe@apstate.edu",
				password : "password"
			};
			const response = await axios.post("http://localhost:3013/rest/account/signin", json);
			console.log(response + "hi");
			return response;
		}catch (err) {
			console.log(err);
		}
	}
	
	
	const getRequest = async () => {
		try {
			const response = await axios.get("http://localhost:3013/rest/account/");
			console.log(response.data[0].email);
		}catch (err) {
			console.log(err);
		}
	}
}

