$(function(){
	//点击登录判断 用户名  密码是否正确
	
	$("#btn").on("click",function(){
		console.log($("#myform").serialize());
		var para = $("#myform").serialize();
		console.log(para); 
		
		$.ajax({
//			url:"http://127.0.0.1/eCity/src/login/php/login.php",
			url:"http://herenfu/bailian/server/login.php", 
			type:"post",
			dataType:"json",
			data:para,
			success:function(res){
				console.log(res);
				if(res[0].status==1){  
					alert(res[0].msg);
					
					//存cookie用于登录名显示 
                    $.cookie("userInfo", JSON.stringify(res[0].data), {expires : 7});
                    
                    window.sessionStorage.setItem("userInfo",JSON.stringify(res[0].data));
//			          ?userInfo="+JSON.stringify(res[0].data); 
					window.history.back(-1)
				}
				else{
					alert(res[0].msg); 
				}
			}
		})	
	})
	
})
