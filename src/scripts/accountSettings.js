function main() {
	initWelcome();
	initButtons();
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
}
