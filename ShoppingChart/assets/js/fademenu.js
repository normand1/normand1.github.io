// Leon Customized Javascripts

// Navigation Fader for Pages
$(document).ready(function() {	
	$("#navigate").click(function(e){
		$("#navigation-fade").css({"opacity" : "1"})
						     .fadeIn("slow");
		$("#hex7").fadeToggle("fast");
		$("#hex1").fadeToggle("fast", 
		 function showNext() {
			 $(this).next("div").fadeToggle("fast", showNext);
		});			
	});
		
	$("#close-icon").click(function(){
		$("#hex8").fadeToggle("fast", 
	 function hideNext() {
		 $(this).prev("div").fadeToggle("fast", hideNext);
		 $(this).find('#hex1').stop(true, true).fadeOut("fast");
    	});
		$("#navigation-fade").delay(1500).fadeOut("slow");
	});
});