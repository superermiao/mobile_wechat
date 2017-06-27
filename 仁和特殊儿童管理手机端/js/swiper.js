var var_page=1;
$(function(){
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: false
    });
	$(".swiper-container").css("height",$(".swiper-container").width()*240/350+"px");
	$(".swiper-container img").css("height",$(".swiper-container").width()*240/350+"px"); 
	function get_list(){
		var moreLoading = 'Loading...';
		if($('#moreLoading').length<=0 || $('#moreLoading').html()==moreLoading) return;
		$('#moreLoading').html(moreLoading);
		$.ajax({url: "#"+var_page+"",type: "post",dataType:'json',
			error:function(err){console.log(err);},
			success:function(data){
				var result = data;//eval('('+data+')');
				var_page = result.next;
				var list = result.list;
				for(var x in list){
					$("#ulNewsList").append(list[x]);
				}
				$('#moreLoading').html('');
				if(var_page<0) $('#moreLoading').remove();
			}
		});
	}
	$(window).bind("scroll resize", function(e) {
		if($('#moreLoading').length<=0) return;
		var scrollTop=$(window).scrollTop();
		var windowHeight=$(window).height();
		var inViewMoreTop = $("#moreLoading").offset().top;
		if(scrollTop+windowHeight >= inViewMoreTop-300) {
			get_list();
		}
	});
	get_list();
});