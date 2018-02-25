
$(function(){
	//	点击返回顶部
	
	$('#buy').append(`
			<div class="right-slidebar-main">
				<!--我的信息-->
				<div class="sidecss buy-login j-side-content">
					<div class="currenttab mui-mbar-tab-normal-arr"></div>
					<div class="mui-mbar-tab">
						<div class="mui-mbar-tab-tip">
							<div class="tip_con">
								我的信息
								<div class="mui-mbar-arr mui-mbar-tab-tip-arr">&nbsp;</div>
							</div>
						</div>
					</div>
					<i></i>
				</div>
				<!--购物车-->
				<div class="shopcar j-side-content">
					<div class="currenttab mui-mbar-tab-cart-arr">&nbsp;</div>
					<i></i>
					<span>
						购<br />物<br />车
						<b id="cartNum">0</b>
					</span>
					<img src="//res12.iblimg.com/respc-1/resources/v4.2/widget/sidebar/i/cartbar-bk.png" class="ca-imgs"/>
					<div class="cartbar_co"></div>
				</div>
				<!--我的收藏-->
				<div class="sidecss collection j-side-content">
					<!--<div class="currenttab mui-mbar-tab-cart-arr">&nbsp;</div>-->
					<div class="mui-mbar-tab">
						<div id="msg">收藏成功</div>
						<div class="mui-mbar-tab-tip">
							<div class="tip_con">
								我的收藏
								<div class="mui-mbar-arr mui-mbar-tab-tip-arr">&nbsp;</div>
							</div>
						</div>
					</div>
					<i></i>
				</div>
				<!--浏览历史-->
				<div class="sidecss history j-side-content">
					<i></i>
					<div class="mui-mbar-tab">
						<div class="mui-mbar-tab-tip">
							<div class="tip_con">
								浏览历史
								<div class="mui-mbar-arr mui-mbar-tab-tip-arr">&nbsp;</div>
							</div>
						</div>
					</div>
				</div>
				
				<div class="sidecss qrcode">
					<div class="mui-mbar-tab">
						<div class="mui-mbar-tab-tip mui-mbar-tab-tip1">
							<div style="width: 150px;">
								<div class="code_title">手机APP专享</div>
								<img src="//img22.iblimg.com/market-2/images/activity/1849148942.png"/>
								<div class="mui-mbar-arr mui-mbar-tab-tip-arr"></div>
							</div>
						</div>
					</div>
					<i></i>
					<div class="ico_dd"></div>
				</div>
				
				<div class="sidecss service">
					<div class="mui-mbar-tab">
						<div class="mui-mbar-tab-tip">
							<div class="tip_con">
								我的客服
								<div class="mui-mbar-arr mui-mbar-tab-tip-arr">&nbsp;</div>
							</div>
						</div>
					</div>
					<a href="javascript:void(0)">
						<i></i>
					</a>
				</div>
				
				<!--返回顶部-->
				<div class="sidecss totop">
					<div class="mui-mbar-tab">
						<div class="mui-mbar-tab-tip">
							<div class="tip_con">
								返回顶部
								<div class="mui-mbar-arr mui-mbar-tab-tip-arr">&nbsp;</div>
							</div>
						</div>
					</div>
					<i class="iconfont iconfont-1"></i>
				</div>
			</div>
			<!--购物车商品数据-->
			<div class="right-slidebar-detail">
					<div class="ri-sl-one">
						<div class="login-detail-h"><i class="sidebar-closed"></i></div>
						<div class="font">我的信息</div>						
					</div>
					<div class="ri-sl-two">
						<div class="login-detail-h"><i class="sidebar-closed"></i></div>
						<div class="font">购物车</div>	
					</div>
					<div class="ri-sl-three">
						<div class="login-detail-h"><i class="sidebar-closed"></i></div>
						<div class="font">我的收藏</div>	
					</div>
					<div class="ri-sl-four">
						<div class="login-detail-h"><i class="sidebar-closed"></i></div>
						<div class="font">浏览历史</div>	
					</div>
			</div>
		
	`)
	
	
	$('.totop').click(function(){
		$('html,body').animate({scrollTop: '0px'}, 800)
	})
	
	
	$('.sidecss').on('mouseenter',function(){
		$(this).children('.mui-mbar-tab').children('.mui-mbar-tab-tip').stop(false).animate({width:"80px"},500).show();
		$(this).children('.mui-mbar-tab').children('.mui-mbar-tab-tip1').stop(false).animate({width:"150px"},500).show().css({"top":"-86px"})
	})
	
	$('.sidecss').on('mouseleave',function(){
		$(this).children('.mui-mbar-tab').children('.mui-mbar-tab-tip').stop(false).animate({width:"0"}).css({"width":'0',"display":"none"})
		$(this).children('.mui-mbar-tab').children('.mui-mbar-tab-tip1').stop(false).animate({width:"0"}).css({"width":'0',"display":"none","top":"0"})
	})
	
	$('.qrcode').on('mouseenter',function(){
		$('.qrcode').children('.ico_dd').addClass('cur').stop(false).animate({top:"-115px"});
	})
	$('.qrcode').on('mouseleave',function(){
		$('.qrcode').children('.ico_dd').removeClass('cur').stop(false).animate({top:"0px"});
	})
	
	var fal=true,fal1=true;
//	点击购物车,弹出右边框
//	$('.shopcar').click(function(){
//		if(fal){
//			console.log('aadds')
//			$('.shopcar').css('width','43px');
//			$(this).css('background','#e6133c');
//			$('#buy').animate({right:"0px"});
//			fal=false;
//		}else{
//			fal=true;
//			console.log('4243')
//			$(this).css('background','#e6133c');
//			$('.shopcar').css('width','43px');
//			$('#buy').animate({right:"-276px"});
//		}
//	})
//	$('.shopcar').mouseenter(function(){
//			$(this).css('background','#e6133c');
//	})
//	$('.shopcar').mouseleave(function(){
//			$(this).css('background','#333');
//	})
//	点击收藏,弹出收藏框
	$('#buy').on("click",".j-side-content",function(){
		if(fal){
			$('#buy').animate({right:"0px"});
			if(fal1){
//				$('.shopcar').css('width','43px');
				$('.right-slidebar-detail').children('div').eq($(this).index()).show().siblings('div').hide();
				fal1=false;
			}else{
				fal1=true;
				$('.right-slidebar-detail').children('div').eq($(this).index()).show().siblings('div').hide();
				//显示
			}
		}else{
			fal=true;
			$('#buy').animate({right:"-276px"});
		}
	})
//	点击箭头关闭
	$('.sidebar-closed').click(function(){
		fal=true;
		$('.shopcar').css('width','43px');
		$('#buy').animate({right:"-276px"});
	})
	
	
//	点击加入收藏
	 $(".proshow").on("click", '.collect',function(){
//	 	console.log('42432')
        // begin 用于添加到 购车的 里的 li
		var coll=$(this).parents('li').find('img').clone(true);
		coll.css('position','absolute');
		coll.appendTo($("body"));
		//克隆的位置等于 图片原先的位置
        coll.css({
            left : $(this).parents('li').find('img').offset().left,
            top : $(this).parents('li').find('img').offset().top
        });
//      console.log(coll.css("left"))
//		console.log($('.j-side-content').offset().left);
		console.log($('.collection').offset().top-$(document).scrollTop());
//		console.log($(document).scrollTop())
		var flyY=$('.collection').offset().top;
		var flyX=$('.collection').offset().left;
		coll.stop(false).animate({left : flyX, top : flyY, height : 0, width : 0},1000,function(){
			$('#msg').show().animate({width: '80px'}, 200).fadeOut(1000);
			$(this).remove();
		})
      })
	 
	 

})