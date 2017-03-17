$(document).ready(function(){
	var search = $("input[name='submit']");
	var results = [];
	search.submit(function(){
		
			URL = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=" + encodeURIComponent($("input[name='submit']").val() + "&callback=JSON_CALLBACK";
			
			$http.jsonp(URL).success(function(data){
				
				results = data.query.pages;
				
				results.forEach(function(){
					results.push([]);
				});
			});
			
			
			
		);
	});
	
});