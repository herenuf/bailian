$(function(){
				
	//wrap
	var categorysId = 0; //全局的类型id
	var areasId = 0; //全局的区域id
	var flag = 1; //按热门排序是1， 按评价排序2
	refresh();
	function refresh(){
		$(".box-list ul").empty();
		$.get("movies.json",function(data){
			//先获取json数据
			var obj = data;
			var arr = [];
			var arr2 = [];
			var arr3 = [];
			arr = obj.movies;
			console.log()
			//两个都是全选
			if(categorysId == 0 && areasId == 0){
				//获取所有数据
				for(var i=0;i<arr.length;i++){
					arr2.push(arr[i]);
				}
				//排序
				arr2 = paixu(flag,arr2);
//				console.log(arr2)
				//更新节点
				for(var i=0;i<arr2.length;i++){
					var str="";
					str+=`
					<li>
						<div class="proshow">
							<div class="pro-img">
								<a href="detail.html?id=${arr2[i].id}"><img src="${arr2[i].img}"/></a>
							</div>
							<div class="pro-name"><a href="javascript:void(0)">${arr2[i].name}</a></div>
							<div class="pro-money">
								<div class="money-fl">￥<span>${arr2[i].score}</span><a href="javascript:void(0)" class="collect">收藏</a></div>
							</div>
						</div>
					</li>`
					$(".box-list ul").append(str);
				}
			}
			//类型不全选，区域不全选
			else{
				//获取数据（类型和区域）
				for(var i=0;i<arr.length;i++){
					if(arr[i].category == categorysId && arr[i].area == areasId  ){
						arr2.push(arr[i]);
						console.log(arr2)
					};
				}
				//排序
				arr2 = paixu(flag,arr2);
				//更新节点
				for(var i=0;i<arr2.length;i++){
					var str1="";
					str1+=`
					<li>
						<div class="proshow">
							<div class="pro-img">
								<a href="detail.html?id=${arr2[i].id}"><img src="${arr2[i].img}"/></a>
							</div>
							<div class="pro-name"><a href="javascript:void(0)">${arr2[i].name}</a></div>
							<div class="pro-money">
								<div class="money-fl">￥<span>${arr2[i].score}</span><a href="javascript:void(0)" class="collect">收藏</a></div>
							</div>
						</div>
					</li>`
					$(".box-list ul").append(str1);
				}
				
			}
			
			//排序
			function paixu(flag,arr2){
				//按热门排序
				if (flag == 1) {
					for(var i =0;i<arr2.length;i++){
						for (var j=0; j<arr2.length-1-i; j++) {
							if ((arr2[j].score) > (arr2[j+1].score)) {
								var tmp = arr2[j];
								arr2[j] = arr2[j+1];
								arr2[j+1] = tmp;
							}
						}
					}
				}
				//按评价排序
				else{
					for(var i =0;i<arr2.length;i++){
						for (var j=0; j<arr2.length-1-i; j++) {
							if ((arr2[j].score) <(arr2[j+1].score)) {
								var tmp = arr2[j];
								arr2[j] = arr2[j+1];
								arr2[j+1] = tmp;
							}
						}
					}
					
				}
				return arr2;
			}
			
		})
	}
	$(".upanddown1").click(function(){
		//热门是1， 评价是2 
		flag = $(this).index()+1;
//		console.log($(this))
		refresh()
	})
	
				
})
