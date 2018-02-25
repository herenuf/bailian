$(function(){

	var flag1 =false;
	var	flag2 =false;
	var	flag3 = false;
	var	flag4 =false;
	var flag5 = false;
	var	flag6 =false;
	var	flag7 = false;
	
	//用户名
	$("#loginId").on("blur",function(){
		var str = $(this).val(); 
		var reg = /^[a-zA-Z0-9]\w{6,20}$/;
		
		if(!str){
			$(".prompt-corr1").hide();
			$(".prompt-error1").hide();
			$(".prompt-text1").show();
		}
		else{
			$(".prompt-text1").hide();
			if(reg.test(str)){
				$(".prompt-error1").hide();
				$(".prompt-corr1").show();
				flag1 =true;
			}
			else{
				$(".prompt-corr1").hide();
				$(".prompt-error1").show();
			}
		}
	})
	
	//密码
	$("#loginPwd").on("blur",function(){
		var str = $(this).val(); 
		var reg = /^[a-zA-Z0-9]{8,20}$/;
		
		if(!str){
			$(".prompt-corr2").hide();
			$(".prompt-error2").hide();
			$(".prompt-text2").show();
		}
		else{
			$(".prompt-text2").hide();
			if(reg.test(str)){
				$(".prompt-error2").hide();
				$(".prompt-corr2").show();
				flag2 =true; 
			}
			else{
				$(".prompt-corr2").hide();
				$(".prompt-error2").show();
			}
		}
	})
	
	//确认密码
	$("#loginPwd1").on("blur",function(){
		var str = $(this).val(); 
		if(!str){
			$(".prompt-corr3").hide();
			$(".prompt-error3").hide();
			$(".prompt-text3").show();
		}
		else{
			$(".prompt-text3").hide();
			if(str==$("#loginPwd").val()){
				$(".prompt-error3").hide();
				$(".prompt-corr3").show();
				flag3 =true; 
			}
			else{
				$(".prompt-corr3").hide();
				$(".prompt-error3").show();
			}
		}
	})

	//手机号
	$("#loginTel").on("blur",function(){
		var str = $(this).val(); 
		var reg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/;
		
		if(!str){
			$(".prompt-corr4").hide();
			$(".prompt-error4").hide();
			$(".prompt-text4").show();
		}
		else{
			$(".prompt-text4").hide();
			if(reg.test(str)){
				$(".prompt-error4").hide();
				$(".prompt-corr4").show();
				flag4 =true; 
			}
			else{
				$(".prompt-corr4").hide();
				$(".prompt-error4").show();
			}
		}
	})
	
	//更新验证码
	$("#qr").on("click",function(){
		var str ="";
		for(var i= 0; i< 4; i++){
			var flag = Math.random()>0.5 ? true : false;
			if (flag) {
				str += parseInt(Math.random()*10);
			}
			else  {
				str += String.fromCharCode( 65 + parseInt(Math.random()*26) );
			} 		
		}
		$(this).val(str);
	})
	
	//验证验证码
	$("#loginQr").on("blur",function(){
		var str = $(this).val(); 
		
		if(!str){
			$(".prompt-corr5").hide();
			$(".prompt-error5").hide();
			$(".prompt-text5").show();
		}
		else{
			$(".prompt-text5").hide();
			if(str==$("#qr").val()){
				$(".prompt-error5").hide();
				$(".prompt-corr5").show();
				flag5 =true; 
			}
			else{
				$(".prompt-corr5").hide();
				$(".prompt-error5").show();
			}
		}
	})
	//电子邮箱
	$("#loginEmail").on("blur",function(){
		var str = $(this).val(); 
		var reg = /^\w+\@\w+\.\w+$/gi;
		if(!str){
			$(".prompt-corr6").hide();
			$(".prompt-error6").hide();
			$(".prompt-text6").show();
		}
		else{
			$(".prompt-text6").hide();
			if(reg.test(str)){
				$(".prompt-error6").hide();
				$(".prompt-corr6").show();
				flag6 =true; 
			}
			else{
				$(".prompt-corr6").hide();
				$(".prompt-error6").show();
			}
		}
	})
	
	
//	//判断是否注册成功
	$("#btn").on("click",function(){
	
		if($("#loginCkb").is(":checked")){//判断勾选
			
			if(flag1 && flag2 && flag3 && flag4 &&flag5 && flag6){
				
				//连接数据库把   用户名，密码，电话存入数据库
				
				$.ajax({
					url:"http://herenfu/bailian/server/register.php",//发送到远程后台接口
					type:"post", 
					data:{
						uName:$("#loginId").val(),
						uPwd:$("#loginPwd").val(),
						uTel:$("#loginTel").val(),
						uEmail:$("#loginEmail").val()
					},
					success:function(res){
						console.log(res);
					}
				})
				
				var con= confirm("注册成功,是否跳转到登录页面");
				if(con){
					location.href="login.html";
				}
			}
			else{
				alert("用户信息输入有误");
			}
		}
		else{
			alert("请先阅读用户协议");
		}
	})

})
