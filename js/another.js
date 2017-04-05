$(document).ready(function(){
	loadProjects();
	$('#btnFav').click(function(){
		$('#favourite').fadeIn();
	})
	$('#currentBtn').click(loadProjects)
});
function loadProjects(){
	$.ajax({
		url: 'https://www.googleapis.com/youtube/v3/videos',
		type: 'GET',
		success: function(json){
			result(json);
		}
	})
}
function result(data){
	var html= '';
	html+= '<ul class="projects">';
	$.each(data, function(i,item){
		// html+= '<li><h1>' + item.name +'</h1>';
		html+= '<li><a href="'+ item.html_url+'" target="_blank">' + item.name +'</a></li>';
	})
	html+= '</ul>'
	$('#result').html(html);
}