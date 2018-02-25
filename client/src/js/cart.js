$(function(){

			
	//刷新， 重新从cookie中获取最新的数据，并用节点显示
				refreshUI(); 
				function refreshUI(){

					//获取购物车cookie商品
					var arr = $.cookie("cart");
					if (arr) {
						//如果数组不为undefined,则解析
						arr = JSON.parse(arr);
						//先移除旧节点
						$(".cart-list").empty();
						
						
						//然后再显示最新的cookie数据
						//创建节点， 显示购物车商品
						var totals = 0;
						var allnums =0;
						for (var i=0; i<arr.length; i++) {
							var obj = arr[i];
							
							//创建li
							var ul = $('<ul class="CLlist"></ul>').appendTo(".cart-list");	
//							var li = $("<li></li>").appendTo("#list");
							
							if ( obj.checked ) {
								$('<li class="CLchk"><input type="checkbox" class="chk"  checked="checked"/></li>').appendTo(ul);
							}
							else {
								$('<li class="CLchk"><input type="checkbox" class="chk"/></li>').appendTo(ul);
							}
							 
						$('<li class="CLdetail"><img src='+obj.img+'><a href="#">'+ obj.describe+'</a></li>').appendTo(ul);
						$('<li class="type-box"></li>').appendTo(ul);
						$('<li class="CLprice">'+obj.price+'</li>').appendTo(ul);
						$('<li class="Clhander"><button id="reduce" class="btn-reduce">-</button><input value='+obj.num+' id="itemnumber" class="text"/><button id="addnum" class="btn-add">+</button></li>').appendTo(ul);
						$('<li class="CLtotal-price">'+ obj.price*obj.num +'</li>').appendTo(ul);
						$('<li class="CLremove"><a class="delete" href="javascript:void(0);">删除</a></li>').appendTo(ul);
							
							//将勾选的商品价格进行累加 
							if (obj.checked) {
								totals += obj.price*obj.num;
								allnums += obj.num;
//								console.log(obj.num);
//								console.log(allnums);
	 						}
					}    	

						//显示总价
						$(".totalPrice").html(totals);
						$(".totalnum").html(allnums);
					}
					else {
						console.log("您还没有买过商品，请先移步到首页购买商品");
					}
			
				}
				 
				 
				//删除
				$(".cart-list").on("click", ".delete", function(){
					//获取原来的cookie
					var cookieArr = JSON.parse( $.cookie("cart") );
					var index = $(this).index(".cart-list .del");
					
					//修改cookie
					cookieArr.splice(index, 1);
					
					//重新存入最新的cookieArr,替换原来的cookie
					$.cookie("cart", JSON.stringify(cookieArr), {expires:30, path:"/"});
					
					//判断是否全选了
					isAllChecked();
					
					//刷新UI 
					refreshUI();
				});
//				
				//+加号
				$(".cart-list").on("click", "#addnum", function(){
					//获取原来的cookie
					var cookieArr = JSON.parse( $.cookie("cart") );
					var index = $(this).index(".cart-list #addnum");
					
					//修改cookie
					cookieArr[index].num++;
					
					//重新存入最新的cookieArr,替换原来的cookie
					$.cookie("cart", JSON.stringify(cookieArr), {expires:30, path:"/"});
					
					//刷新UI
					refreshUI();
				})
			
				//-减号
				$(".cart-list").on("click", "#reduce", function(){
					//获取原来的cookie
					var cookieArr = JSON.parse( $.cookie("cart") );
					var index = $(this).index(".cart-list #reduce");
					
					//修改cookie
					cookieArr[index].num--;
					if (cookieArr[index].num <= 0) {
						cookieArr[index].num = 1;
					}
					
					//重新存入最新的cookieArr,替换原来的cookie
					$.cookie("cart", JSON.stringify(cookieArr), {expires:30, path:"/"});
					
					
					//刷新UI
					refreshUI();
				}) 
			
				//勾选    
				$(".cart-list").on("click", ".chk", function(){ 
					//获取原来的cookie

//						$(".chk").prop({checked:true});	
						var cookieArr = JSON.parse( $.cookie("cart") );
						var index = $(this).index(".cart-list .chk");
//						 console.log(index); 
						//修改cookie 
						cookieArr[index].checked = !cookieArr[index].checked;
						
						//重新存入最新的cookieArr,替换原来的cookie
						$.cookie("cart", JSON.stringify(cookieArr), {expires:30, path:"/"});
						
						//判断是否全选了
						isAllChecked();
						
						//刷新UI
						refreshUI();  
				})  
		
				//判断是否全选了
				isAllChecked();
				function isAllChecked(){
					//如果没有cookie,则直接返回
					if ( !$.cookie("cart") ){
						return; 
					}
					var cookieArr = JSON.parse( $.cookie("cart") );
					
					var sum = 0;
					for (var i=0; i<cookieArr.length; i++) {
						sum += cookieArr[i].checked;
					}
					
					//全选了
					if (cookieArr.length!=0 && sum==cookieArr.length) {
						$("#allCheck").prop("checked", true);
					} 
					else { //没有全选
						$("#allCheck").prop("checked", false);
					}
					
				}
			
				//全选
				$("#allcheck").click(function(){
					//如果没有cookie,则直接返回
					if ( !$.cookie("cart") ){
						return;
					}
					var cookieArr = JSON.parse( $.cookie("cart") );
					//console.log($(this).prop("checked"));
					
					//遍历cookieArr
					for (var i=0; i<cookieArr.length; i++) {
						
						if ( $(this).prop("checked") ) {
							cookieArr[i].checked = true; //全选
						}
						else {
							cookieArr[i].checked = false; //全不选
						}
					}
					
					//重新存入最新的cookieArr,替换原来的cookie
					$.cookie("cart", JSON.stringify(cookieArr), {expires:30, path:"/"});
 
					
					//刷新UI
					refreshUI(); 
				})
				
				
//				//删除选中
				$(".delSelect").click(function(){
					//如果没有cookie,则直接返回
					if ( !$.cookie("cart") ){
						return;
					}
					var cookieArr = JSON.parse( $.cookie("cart") );
					
					//遍历cookieArr
					var newArr = [];
					for (var i=0; i<cookieArr.length; i++){
						if (cookieArr[i].checked == false) {
							newArr.push(cookieArr[i]);
						}
					}
					
					//重新存入最新的cookieArr,替换原来的cookie
					$.cookie("cart", JSON.stringify(newArr), {expires:30, path:"/"});

					//刷新UI
					refreshUI();
				})
				

				
})

