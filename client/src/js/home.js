

$(function(){
	
	$('.nav-right li').on('mouseenter',function(){
		$(this).find('span').stop(false).show().animate({marginTop:"8px"});
	})
	$('.nav-right li').on('mouseleave',function(){
		$(this).find('span').stop(false).hide().animate({marginTop:"20px"});
	})
//	三级联动
	$('.show-nav').on('mouseleave',function(){
//		console.log();
		var index=$(this).index();
		$('.right-show').hide();
	})
	$('.nav-list ul').on('mouseenter','li',function(){
//		console.log();
		var index=$(this).index();
		$('.right-show').show();
		$('.right-show ul').children('li').eq(index).show().siblings().hide();
	})
	
//	手机充值..水电费...充值游戏...固话...图标切换
	$('.thr-list').on('mouseenter','li',function(){
		$(this).children().children('div').css('background-position',"0 -28px");
	})
	$('.thr-list').on('mouseleave','li',function(){
		$(this).children().children('div').css('background-position',"0 0px");
	})
	
	$('.thr-show').on('mouseenter',function(){
		var thrIndex=$(this).index();
		$('.rec-three-cov').show();
		console.log();
		$(this).css('border-bottom','1px solid #fff').siblings().css('border-bottom','1px solid #ddd');
		$('.three-cov-btn').eq(thrIndex).show().siblings('.three-cov-btn').hide();
	})
//	点击x隐藏rec-three-cov
	$('.three-x').on('click',function(){
		$('.rec-three-cov').hide();
		$('.thr-show').css('border-bottom','1px solid #ddd');
	})
//	超值团切换
	$('.new-czt-prev').on('click',function(){
//		console.log('432');
		$('.off-czt-r ul').animate({marginLeft:"0"});
		$(this).hide();
		$('.new-czt-next').show()
	})
	$('.new-czt-next').on('click',function(){
//		console.log('4dads2');
		$(this).hide();
		$('.new-czt-prev').show();
		$('.off-czt-r ul').animate({marginLeft:"-966px"});
	})
	$(".img-left").hover(function() {
	    $(this).stop(true)
	    .animate({marginLeft:"-10px"}) //如果在此时触发了光标的移出事件
	           //将执行下面的动画
	 },function() {
	   $(this).stop(true)
	   .animate({marginLeft:"0px"},10)
	 });
	 
	 
	
	//吸顶悬浮
	$(document).ready(function(){
		$(window).scroll(function(e){
			var ceiling=$("#nav").offset().top;
			if($(this).scrollTop()>ceiling){
            	$("#ceiling").show();
            }else{
            	$("#ceiling").hide()
            }
		})
	})
//	$('.ceiling')


	$(function(){
	        //1.妤兼浠€涔堟椂鍊欐樉绀猴紝800px scroll--->scrollTop
        $(window).on('scroll',function(){
            var $scroll=$(this).scrollTop();
            var main=$('.main-height').offset().top-100;
//          console.log(main);
            if($scroll>=main){
                $('#loutinav').show();
            }else{
                $('#loutinav').hide();
            }
            //4.鎷栧姩婊氳疆锛屽搴旂殑妤兼鏍峰紡杩涜鍖归厤
            $('.louti').each(function(){
                var $loutitop=$('.louti').eq($(this).index()).offset().top+314;
                //console.log($loutitop);
                if($loutitop>$scroll){//妤煎眰鐨則op澶т簬婊氬姩鏉＄殑璺濈
                    $('#loutinav li').removeClass('active');
                    $('#loutinav li').eq($(this).index()).addClass('active');
                    return false;//涓柇寰幆
                }
            });
        });
        //2.鑾峰彇姣忎釜妤兼鐨刼ffset().top,鐐瑰嚮妤兼璁╁搴旂殑鍐呭妯″潡绉诲姩鍒板搴旂殑浣嶇疆  offset().left
        
        var $loutili=$('#loutinav li').not('.last');
        $loutili.on('click',function(){
            $(this).addClass('active').siblings('li').removeClass('active');
            var $loutitop=$('.louti').eq($(this).index()).offset().top-150;
            //鑾峰彇姣忎釜妤兼鐨刼ffsetTop鍊�
            $('html,body').animate({//$('html,body')鍏煎闂body灞炰簬chrome
                scrollTop:$loutitop
            })
        });
        //3.鍥炲埌椤堕儴
        $('.last').on('click',function(){
            $('html,body').animate({//$('html,body')鍏煎闂body灞炰簬chrome
                scrollTop:0
            })
        });
    })
})
