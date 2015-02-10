
	$(document).ready(function() {
	
		$("i.fa-bars").toggle(function() {
			$("nav").fadeIn("slow")},
			function() {
				$("nav").fadeOut("slow")});
				
		$(window).on('resize', (function(){
			var navDisplay = $("nav").css("display");
			var windowWidth = $(window).width();
			var bars = $("i.fa-bars").css("display");
			if(windowWidth > 768 || bars == "none") {
			$("nav").slideDown();}
			}));
	});

	$(function() {
 
	   var $frame = $('#frame');
	   
	   setInterval( function() {
		 var slides = $('.slide');
		 slides.first().appendTo($frame);
	   }, 3000);
	   
	});
