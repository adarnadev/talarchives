(function(){
    $("body").hide().fadeIn(2000);

})();

function resizeContent() {
	var f =	$(".frame")
	
	f.css("height", window.innerHeight - 180 - 36 -18)
}

$(document).ready(function() {
	resizeContent()

	$(window).resize(function(event) {
		resizeContent()
    })
})