$(document).ready(function(){
	var search = $("#inputButton");
	var results = [];
	var query = '';
	
	search.on("#submit", function(e){
		
		e.preventDefault();
		query = $("#search").val().trim();
		
		if ( query != ''){
			console.log(query);
		}
		else{
			console.log("Nothing to display");
		};
	});
	
});