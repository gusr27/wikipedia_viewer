var search = $("#inputButton");
	
	var query = '';
	var api = "https://en.wikipedia.org/w/api.php";
	var cb = "&callback=JSON_CALLBACK";
	
	var dList= {
			      "action": "query",
			      "format": "json",
			      "generator": "search",
			      "gsrlimit": 10,
			      "prop": "info|pageimages|extracts",
			      "exintro": 1,
			      "explaintext": 1,
			      "exsentences": 1,
			      "exlimit": "max",
			      "pilimit": "max",
			      "inprop": "url",
			      "redirects": 1,
			      "gsrsearch": query
	};

	


function fetchApi(query){
	var html = "";
		$.ajax({
				
				
				url: api,
				dataType: 'json',
				data: {
			      "action": "query",
			      "format": "json",
			      "generator": "search",
			      "gsrlimit": 10,
			      "prop": "info|pageimages|extracts",
			      "exintro": 1,
			      "explaintext": 1,
			      "exsentences": 1,
			      "exlimit": "max",
			      "pilimit": "max",
			      "inprop": "url",
			      "redirects": 1,
			      "gsrsearch": query
			    },
			    type: 'POST',
			    headers: {
				  'Api-User-Agent': 'Example/1.0'  
			    },
				jsonp: 'callback',
				async: false,
				success: function(data){
				
					 var results = data.query.pages;
					
					$.each(results, function(index, value){
						if (!value.thumbnail) {
					      var image = " ";
					    } else {
					      var thumb = value.thumbnail.source;
					      var image = "<img src='" + thumb + "' alt='Page image for " + value.title + "' class='thumbnail'>";
					    }
						
						html+= "<li class=\"list-group-item\">" ;
						html+= image;
						html+= "<a href=" + value.canonicalurl + ">"+value.title + "</a>";
						html+= "<p>" + value.extract + "</p>";
						html+="</li>";
					})
					
					$("#pages").html(html);
					
				}
					
				
			});
};

$(document).ready(function(){
	
	search.on("submit", function(e){
		
		e.preventDefault();
		query = $("#searchQuery").val().trim();
		
		if ( query != ''){
			fetchApi(query);
		}
		else{
			alert("Nothing to display");
		};
	});
	
});