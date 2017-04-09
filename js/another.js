var url='https://www.googleapis.com/youtube/v3/videos?part=snippet&key=AIzaSyBCi2XQJWVhMgBEzjAqKPgaHQtRK7drgL8&chart=mostPopular&q=javascript'
function loadData(){
	$.ajax({
		url:url,
		type:'GET'
		success: function(data){
			result(data);
		}
	})
}
function result(data){
	var html= '';
	html+= '<ul>';
	$.each(data, function(i,item){
		// html+= '<li><h1>' + item.name +'</h1>';
		html+= '<li><a href="'+ item.html_url+'" target="_blank">' + item.name +'</a></li>';
	})
	html+= '</ul>'
	$('.result').html(html);
}
