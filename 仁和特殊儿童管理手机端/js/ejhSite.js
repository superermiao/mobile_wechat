// JavaScript Document
(function(){
	$(function(){
//navList
$(".menu").on("click",
function() {
    $("header").hide();
    $(".indexHeader").show();
    var page_h = $(window).height() - 57;
    $(".menuList").css("height", page_h + "px").slideDown();
    $(document.body).css({
        "overflow-y": "hidden"
    });
})

$(".menuP").on("click",
function() {
    $(this).siblings(".sonMenu").toggle();
    $(this).find(".menuArr").toggleClass("menuArrR")
})

$(".close").on("click",
function() {
    $(document.body).css({
        "overflow-y": "auto"
    });
    $(".indexHeader").hide();
    $("header").show();
    $(".menuList").slideUp();
})
		//tabs
		$('.tabs').each(function(){
			var it = $(this);
			var menus = $('.t_menu li',it);
			var conts = $('.t_cont',it);
			menus.on('click',function(){
				var _this = $(this);
				if(_this.hasClass('cur')) return;
				var _index = _this.index();
				_this.addClass('cur').siblings().removeClass('cur');
				conts.hide(0).eq(_index).stop().fadeIn();
			});
		})
	});
})(jQuery);