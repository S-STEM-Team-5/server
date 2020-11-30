function main() {
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
}