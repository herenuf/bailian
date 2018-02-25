<?php
header("Content-type:JSON;charset=utf-8");  //统一输出编码为utf-8
header("Access-Control-Allow-Origin:*");

if ($_SERVER["REQUEST_METHOD"] == "POST") {

//  $uName = ($_POST["uName"]) || ($_POST["uTel"]) || ($_POST["uEmail"]);//接受用户名
    $uName = $_POST["uName"];//接受用户名  
    $uPwd = $_POST["uPwd"];//接收密码

    //如果用户名或密码有一个是空的,就不执行逻辑
    if (!empty($uName) || !empty($uPwd)) {

//1.准备 主机名称 用户名,密码,数据库的名称
        $localName = "127.0.0.1";  //主机名称
        $dbName = "root"; // 用户名
        $dbPwd = ""; // 密码
        $dataBase = "shopping";// 数据库的名称
//2.创建连接
        $connection = new mysqli($localName, $dbName, $dbPwd, $dataBase);
//3.设置连接的字符集  保证 你返回的数据 不是乱码
        mysqli_query($connection, "set names utf8");
//4.准备sql语句
//		$sql = "SELECT * FROM userinfo WHERE uName='$uName' AND uPwd='$uPwd' AND uTel='$uTel' AND uEmail='$uEmail';";//用户名的查询
		$sql = "SELECT * FROM userinfo WHERE uName='$uName' AND uPwd='$uPwd'";//用户名的查询

//5.执行sql,返回结果
        $result = $connection->query($sql);  // 相当于$connection.query()  -> 点出来的属性
		//print_r($result);

        //返回了行数大于1,说明登录成功,有结果
		
		//
        if ($result->num_rows >= 1){
			
            $rowsArr=$result->fetch_assoc(); // fetch_assoc() 相当遍历每一行,并且返回的是一个数组  遍历邮箱的数组

			
            $resultArr=array();//空的数组,用于返回所有的数据的一个 包裹  接收邮箱还有电话
			
            $arr=array("status"=>1,"msg"=>"登录成功","data"=>$rowsArr); // 准备的真实数据 邮箱或者手机
            array_push( $resultArr,$arr);//往包裹里添加真实的数据

            print_r(json_encode($resultArr));//把包裹返回到客户端

        }else{
            //用户名与密码没有匹配得上
            //登录失败
            $resultArr=array();
            $arr=array("status"=>0,"msg"=>"登录失败");
            array_push( $resultArr,$arr);

            print_r(json_encode( $resultArr));
        }		
//6.断开与mysql的连接
        $connection->close();


    }
}

?>