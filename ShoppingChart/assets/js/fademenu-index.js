// Leon Customized Javascripts

// Navigation Fader for Pages
$(document).ready(function() {	
	
	$("#navigation-fade").css({"opacity" : "1"})
						 .fadeIn("slow");
	$("#hex7").fadeToggle("slow");
	$("#hex1").fadeToggle("slow", 
	 function showNext() {
		 $(this).next("div").fadeToggle("slow", showNext);
	$("#fademenu-header").hide();
	});	
			
});

$("#touch-button").first().click(function () {
	$("#hex7").fadeToggle("fast");
	$("#hex1").fadeToggle("fast", 
	 function showNext() {
		 $(this).next("div").fadeToggle("fast", showNext);
    });
});

$("#touch-button-hide").click(function () {
    $("#hex8").fadeToggle("fast", 
	 function hideNext() {
		 $(this).prev("div").fadeToggle("fast", hideNext);
		 $(this).find('#hex1').stop(true, true).fadeOut("fast");
    });
});