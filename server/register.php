<?php


	header("Content-type:JSON;charset=utf-8");  //统一输出编码为utf-8
	header("Access-Control-Allow-Origin:*");	//解决跨域问题
	
	if($_SERVER["REQUEST_METHOD"]=="POST"){
		
		//准备参数
		$uName = $_REQUEST["uName"];
		$uPwd = $_REQUEST["uPwd"];
		$uTel=$_REQUEST["uTel"];
		$uEmail=$_REQUEST["uEmail"];
		
		if(!empty($uName) && !empty($uPwd) &&! empty($uTel)){
			//1.准备    主机名、用户名、密码 、数据库名称
			$hostName = "127.0.0.1";
			$dbName = "root";
			$dbPwd = "";
			$databaseName="shopping";
			
			//2 创建连接
			$conn = new mysqli($hostName,$dbName,$dbPwd,$databaseName);
			
			//3 设置连接字符集(防止乱码)
			mysqli_query($conn, "set names utf8");
			
			//4 准备sql语句
			$sql="INSERT INTO userinfo (uName, uPwd, uTel,uEmail)VALUES('$uName','$uPwd','$uTel','$uEmail')";
//			
			//5 执行sql语句
			   $result = $conn->query($sql);
			   
			   //如果$restlt有结果，表示执行成功，没有结果表示执行失败
			   if($result){
				   	//成功
				   	//返回json [{status:1,msg:"文字描述的状态",data:{}}]
				   $resultArr = array();
				   $arr = array('status' =>1 ,'msg'=>"注册成功" );
				   array_push($resultArr,$arr);
				   print_r(json_encode($resultArr));
			   }else{
			   		//失败
			   		$resultArr = array();
				  	$arr = array('status' =>0 ,'msg'=>"注册失败" );
				   	array_push($resultArr,$arr);
				  	print_r(json_encode($resultArr));
			   }
			//  关闭连接
				$conn->close();
		}
		
	}



?>