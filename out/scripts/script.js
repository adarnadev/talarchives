(function(){
    $("body").hide().fadeIn(4000);

})();

function resizeContent() {
	var f =	$(".frame")
	
	f.css("height", window.innerHeight - 180 - 36 -18 - 10)
}

$(document).ready(function() {
	resizeContent()

	$(window).resize(function(event) {
		resizeContent()
    })

	$(".navbutton").css("opacity",1.0)
	$(".navbutton").hover(function() {
		$(this).animate({opacity:0.5},1000)	
	}, function() {
		$(this).animate({opacity:1.0},500)
	})



})