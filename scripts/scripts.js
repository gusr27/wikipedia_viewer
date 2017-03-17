$(document).ready(function(){
	var search = $("#inputButton");
	var results = [];
	var query = '';
	
	search.on("#submit", function(e){
		
		e.preventDefault();
		var query = $("#search").val().trim();
		
		if ( query != ''){
			
		}
		else{
			console.log("Nothing to display");
		};
	});
	
});