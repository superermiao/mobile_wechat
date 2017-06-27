$(function(){
    var page_w = $(window).width();
    $(".sonNav").css("width", page_w + "px");
	$(".nav").on("click",
	function() {
		$(this).parent().siblings().find(".navArr").hide();
		$(this).parent().siblings().find(".sonNav").hide();
		$(this).siblings(".navArr").toggle();
		$(this).siblings(".sonNav").toggle();
	});
});