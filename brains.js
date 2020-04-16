$(document).ready(function(){

    $(".nav-link").click(function(){ 
        $(this).scrollTo($(this).attr("href"),1000);
    });
    $(".nav-link").hover(function(){
        $(this).addClass("select");
    },function(){
        $(this).removeClass("select");
    });
	$('img').mousedown(function (e) {
  		if(e.button === 2) { // right click
	  		return false; // do nothing!
  		}
	});
    if($(window).width()<=768){
        $("#alert").removeClass("display-none");
        $("#alert").addClass("show");
    }
    $('a').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
});
