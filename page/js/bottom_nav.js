$(document).ready(function(){
		$("#hide-me").click(function(){
			$("#heading").hide();	
		});
		
		$("#show-me").click(function(){
			$("#heading").show();	
		});
		
		$("#toggle-me").click(function(){
			$("#bottom_nav").toggle();	
		});
		
		$("#slide-up").click(function(){
			$("#heading").slideUp();	
		});
		
		$("#slide-down").click(function(){
			$("#heading").slideDown();	
		});
		
		$("#slide-toggle").click(function(){
		    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
			$("#bottom_nav").slideToggle();	
		});
		
		$("#add-class").click(function(){
			$("#heading").addClass("addClass");	
		});
		
		$("#remove-class").click(function(){
			$("#heading").removeClass("addClass");	
		});

		$("#bottom_nav").slideToggle();	
});