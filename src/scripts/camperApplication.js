function main() {
	initSubmitButton();
}
main();
/* ----------------------------------------------------
	initSubmitButton
   ----------------------------------------------------*/
function initSubmitButton() {
	$('.clickableButton').on('mouseover', function() {
		$(this).css('cursor', 'pointer');
		$(this).css('background-color', 'rgb(73, 73, 73)');
	}).on('mouseout', function() {
		$(this).css('cursor', 'default');
		$(this).css('background-color', '#272727');
	});
}
