$(document).ready(function(){
	var search = $("#inputButton");
	var results = [];
	
	search.on("#submit", function(e){
		
		e.preventDefault();
		var query = $("#search").val().trim();
		
		if ( query !== ''){
			
		}
		else{
			alert("Nothing to search");
		};
	});
	
});