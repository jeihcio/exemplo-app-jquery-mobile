$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
  
    $("#menuBotao A").click(function(){
	  
  		$("#menuBotao A").each(function(){
  			$(this).removeClass('selecionado');
  		});
  		
  		$(this).addClass('selecionado');
		
    });	
	
});


