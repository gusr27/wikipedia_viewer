$(document).ready(function(){
	
	$("input[name='submit']").submit(function(){
		.ajax(
			URL = "https://en.wikipedia.org/w/api.php?" + "action=query&titles=" + encodeURIComponent($("input[name='submit']").val())+"&rvprop=content&prop=revisions"
			
			url: URL,
			data: queryData,
			dataType: 'json',
			type: 'POST',
			headers: { 'Api-User-Agent': 'Gus' },
			success: function(data){
					
			};
			
			
			
		);
	});
	
});