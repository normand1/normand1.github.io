// Leon Customized Javascripts
// Hide Address Bar on Mobile Devices
function hideAddressBar()
{
  if(!window.location.hash)
  {
      if(document.height < window.outerHeight)
      {
          document.body.style.height = (window.outerHeight + 50) + 'px';
      }

      setTimeout( function(){ window.scrollTo(0, 1); }, 50 );
  }
}
window.addEventListener("load", function(){ if(!window.pageYOffset){ hideAddressBar(); } } );
window.addEventListener("orientationchange", hideAddressBar );

//Menu Loader
$(document).ready(function() {
    $('#navigation-fade').load('fademenu.html', function() {
});
});
 
//Toggle Menu
$(document).ready(function() {
$('.toggle .toggle_content:first').show();
    $(".toggle_title").toggle(
    	function(){
    		$(this).addClass('toggle_active');
    		$(this).siblings('.toggle_content').slideDown("fast");
    	},
    	function(){
    		$(this).removeClass('toggle_active');
    		$(this).siblings('.toggle_content').slideUp("fast");
    	}
    );
	
	
	
});

// Contact form
$(function(){
	$('#contact_form').submit(function(e){
		e.preventDefault();
		var form = $(this);
		var post_url = form.attr('action');
		var post_data = form.serialize();
		$('#loader', form).html('<img src="assets/images/loader-contact.gif" /> Please Wait...'); // Message of waiting
		$.ajax({
			type: 'POST',
			url: post_url, 
			data: post_data,
			success: function(msg) {
				$(form).fadeOut(500, function(){
					form.html(msg).fadeIn();
				});
			}
		});
	});
});