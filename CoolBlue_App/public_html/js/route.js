// Routes

$( "a" ).click(function() {
    var route = ($(this).attr("rel")+'.html');
   	
	if(route != 'undefined.html'){
		$('#view-con').hide().load('views/'+route).fadeIn('500');
    	$('.navbar-collapse').collapse('hide');							//Collapse menu at click
	}
});  
