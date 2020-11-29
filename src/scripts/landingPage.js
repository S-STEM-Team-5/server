function main() {
	$('#CCFLogoLink').attr('src', 'media/logo.png');
	initPromptButtons();
}
main();

function initPromptButtons(){
	$('.clickableButton').on('mouseover', function(){
		$(this).css('cursor', 'pointer');
		$(this).css('text-shadow', '0px 0px 0px black');
		$(this).css('box-shadow', '0px 0px 0px black');
	}).on('mouseout', function(){
		$(this).css('cursor', 'default');
		$(this).css('text-shadow', '2px 2px 2px black');
		$(this).css('box-shadow', '3px 3px 2px black');
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
}