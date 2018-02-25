
$(function(){
//	var a=0;
//	var num=90;
//	$('.prev').on('click',function(){
////		var prev=a-90;
//		a--;
////		console.log(a);
////		var a=prev;
//		if(a<=0){
//			a=0
//		}
//		console.log(a*num)
//		$('.items').children('ul').stop(true).animate({marginLeft:"-"+a*num+"px"});
//	})
//	$('.next').on('click',function(){
////		console.log($('.items').children().children('li').length);
//		var len=$('.items').children().children('li').length;//li的长度
//		a++;
////		console.log(a*num);
//		if(a>=len-4){
//			a=len-4;
//		}
//		console.log(a);
//		$('.items').children('ul').stop(true).animate({marginLeft:"-"+a*num+"px"});
//	})
	
//	$('.items ul li').on('mouseenter','img',function(){
////		console.log()
////		获取当前img的SRC属性
//		var img=$(this).attr("src");
////		console.log(img)
//		$('.midImg').children('img').attr("src",img);
//		$(this).css('border','1px solid #ec595c').parent('li').siblings().children('img').css('border','1px solid #eee');
//		
//	})
	$('#magnifier').magnifier();
		
	//JQ代码
	$('.spinnerExample').spinner({});
//	加减插件
	$("#btn").click(function(){
		var num = $(".spinnerExample").val();
		console.log(num);		
	});
	
	$('.collect').on('mouseenter',function(){
		$(this).text('确认收藏');
		$(this).css('background','#fff');
	})
	$('.collect').on('mouseleave',function(){
		$(this).text('收藏店铺')
		$(this).css('background','#f7f7f7');
	})
//	购买此商品的客户也会购买
	$('.currer .prev').on('click',function(){
//		console.log('432');
		$('.emptionNum i').text(1);
		$('.emption-scroll').animate({marginLeft:"0"});
	})
	$('.currer .next').on('click',function(){
//		console.log('4dads2');
		$('.emptionNum i').text(2);
		$('.emption-scroll').animate({marginLeft:"-1190px"});
	})
//	点击切换
	$('.selects').on('click',function(){
		var index=$(this).index();
		$(this).children('a').addClass('name-first').parent('li').siblings().children('a').removeClass('name-first')
		$('#product-fix-tab').children().children('a').eq(index).addClass('name-first').parent('li').siblings().children('a').removeClass('name-first')
		$('#proinfo-main-menu').children().children('a').eq(index).addClass('name-first').parent('li').siblings().children('a').removeClass('name-first')
		$('.pro-list').children('li').eq(index).show().siblings().hide();
	})
//	颜色尺码
	$('.color-list').on('click','li',function(){
//		console.log('4243')
		$(this).addClass('select').siblings().removeClass('select');
//		console.log($(this).parent('ul').children('.select').text());
	})
	
//	头部悬浮
	$(document).ready(function(){
		$(window).scroll(function(e){
			var ceiling=$('.proinfo-main').offset().top;
			if($(this).scrollTop()>ceiling){
            	$(".product-tab-fixed").show();
            }else{
            	$(".product-tab-fixed").hide();
            }
		})
	})
	
	
//	点击加入购物车

	$('.btn-now').click(function(){//跳转
		
//		location.href="cart.html";
	})
	
	refresh();
	function refresh(){
		$(".box-list ul").empty();
		$.get("movies.json",function(data){
			console.log(Number(getUrlById()));
			var arr=data.movies;
			for (var i=0; i<arr.length; i++) {
					var obj = arr[i];
				if (obj.id == Number(getUrlById())){
					//obj对象就是当前商品详情的数据
//					console.log(obj)
					//刷新页面的一部分
					refreshUI(obj);
				}
			}
			
//			obj.id==getUrlById
		})
	}
//	刷新
	function refreshUI(obj){
		$('#magnifier').append(`
			 <div class="small-box">
						      <img src="${obj.img}" alt="#">
						      <span class="hover-er"></span>
						    </div>
						    <div class="thumbnail-box">
							    <a href="javascript:void(0);" class="btn btn-prev"></a>
							    <a href="javascript:void(0);" class="btn btn-next"></a>
							    <div class="list">
							        <ul class="wrapper">
							            <li class="item item-cur"><img src="${obj.img}" alt="#"></li>
							        </ul>
							    </div>
						    </div>
						    <div class="big-box">
						    <img src="${obj.img}" alt="#">
			</div>`)
		$('.price-line').append(`
			<span class="black">销售价</span>
								<span class="price">
									<strong><i>￥</i>${obj.score}</strong>
								</span>`)
	
	//	加入购物车
			$('.btn-now').on('click',function(){
				var color=$('.select').eq(0).text();//颜色尺码的大小
				var size=$('.select').eq(1).text();
				console.log(color+size);
				console.log(obj);
				console.log($('.value').val())
				var num=$('.value').val();

				var cookieArr = $.cookie("cart") ? JSON.parse($.cookie("cart")) : [];
				
				//判断原来cookie中是否已经存在相同商品
				for (var i=0; i<cookieArr.length; i++) {
					if (cookieArr[i].id == obj.id) {
						cookieArr[i].num++; //数量+1
						break;
					}
				}
				//如果for循环全部循环完，没有进入if，则表示不存在相同商品，那么我们就添加新商品到数组中
				if (i == cookieArr.length) {
					//添加新商品
					var myObj = {
						id: obj.id,
						name: obj.name,
						price: obj.score,
						unit: obj.category,
						img: obj.img,
						num: num //数量
					}
					cookieArr.push(myObj);
				}
									
				//存入cookie(覆盖原来的cookie)
				$.cookie("cart", JSON.stringify(cookieArr), {expires:30, path:"/"});
//				console.log( $.cookie("cart") );
				location.href="cart.html";
			})
	}
	
	
})
