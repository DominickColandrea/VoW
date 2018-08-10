$(function(){

$("#home").click(function(){
	$(".nav-item").removeClass("active");
	$("#home").addClass("active");
	$(".container").addClass("hidden-xs-up");
	$(".home").removeClass("hidden-xs-up");
	location.replace("#home");
})//end home click

$("#events").click(function(){
	$(".nav-item").removeClass("active");
	$("#events").addClass("active");
	$("#drop").addClass("active");
	$(".container").addClass("hidden-xs-up");
	$(".events").removeClass("hidden-xs-up");
	location.replace("#Calendar");
})//end event click

$("#partners").click(function(){
	$(".nav-item").removeClass("active");
	$("#partners").addClass("active");
	$(".container").addClass("hidden-xs-up");
	$(".partners").removeClass("hidden-xs-up");
	location.replace("#partners");
})//end about click

$("#contact").click(function(){
	$(".nav-item").removeClass("active");
	$("#contact").addClass("active");
	$(".container").addClass("hidden-xs-up");
	$(".contact").removeClass("hidden-xs-up");
	location.replace("#contact");
})//end contact click

$(document).on('click', function(event) {
	var $clickedOn = $(event.target),
		$collapsableItems = $('.collapse'),
		isToggleButton = ($clickedOn.closest('.navbar-toggle').length == 1),
		isLink = ($clickedOn.closest('a').length == 1),
		isOutsideNavbar = ($clickedOn.parents('.navbar').length == 0);
	if ((!isToggleButton && isLink) || isOutsideNavbar) {
		$collapsableItems.each(function() {
			$(this).collapse('hide');
		});
	}
});
})//end ready
