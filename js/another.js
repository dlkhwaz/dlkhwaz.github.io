
$(document).ready(function(){
	loadNews();
});
function loadNews(){
	$.ajax({
		url: "https://newsapi.org/v1/articles?source=time&sortBy=top&apiKey=2f5eb3b1f2814f7ab5f9750aeb84061d",
		type: 'GET',
		success: function(json){
			result(json);
		}
	})
}
function result(data){
	var html= '';
	html+= '<ul>';
	$.each(data.articles, function(i,item){
		html+= '<li><a href="'+item.url+'" target="_blank"><h1>' + item.title +'</h1></a>';
		html+='<img src="'+item.urlToImage+'">'
		html+= '<p>'+ item.description+'</p></li>';
	})
	$('.container').html(html);
}