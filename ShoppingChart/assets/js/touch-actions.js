// JavaScript Document
//Touch Actions
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