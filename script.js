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
	$(".container").addClass("hidden-xs-up");
	$(".events").removeClass("hidden-xs-up");
	location.replace("#events");
})//end event click

$("#about").click(function(){
	$(".nav-item").removeClass("active");
	$("#about").addClass("active");
	$(".container").addClass("hidden-xs-up");
	$(".about").removeClass("hidden-xs-up");
	location.replace("#about");
})//end about click

$("#contact").click(function(){
	$(".nav-item").removeClass("active");
	$("#contact").addClass("active");
	$(".container").addClass("hidden-xs-up");
	$(".contact").removeClass("hidden-xs-up");
	location.replace("#contact");
})//end contact click

})//end ready

function hashReset(){
	
}