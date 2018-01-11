<?php
namespace Home\Controller;
use Think\Controller;
class LoginController extends Controller {
    public function Login(){
        $this->display("Login/Login");
    }
    public function Login2(){
        if($_POST){
            $user=$_POST['user'];
            $password=$_POST['password'];
            $model=M();
            $admin=$model->query("select * from figure_admin");
            foreach($admin as $k=>$v){
                $username=$v['adminname'];
            }
            if($user!=$username){
                echo "<script>alert('此用户不存在')</script>";
            }else{
                $model=M();
                $pass=$model->query("select * from figure_admin WHERE adminname='$user'");

                if(md5($password)==$pass[0]['password']){
                    echo " 登录成功";
                    $_SESSION['admin']= $pass[0]['adminname'];
                    $this->redirect('Index/index');
                }else{
                    echo "<script>alert('密码错误')</script>";
                }
            }
        }
    }
    public function reg(){
        $this->display("Login/reg");
    }
    public function reg2(){
        if($_POST){
            $username=$_POST['username'];
            $password=$_POST['password'];
            $password2=$_POST['password2'];
            $number=$_POST['number'];
            $password3=md5($_POST['password']);
            $time=time();
            $model=M();
            $ARR=$model->query("select * from figure_admin where adminname = '$username'");
            if($ARR){
                echo "<script>alert('此用户已存在')</script>";
            }elseif($password!=$password2){
                echo "<script>alert('两次输入密码不同')</script>";
            }else{
    $model1=M();
      $insert=$model1->execute("insert into figure_admin(id,adminname,password,phone,created_at)VALUES('','$username','$password3','$number',$time)");
                echo "<script>alert('添加成功');history.back(-1)</script>";
            }
        }
    }
    //退出
    public function out(){
if($_SESSION['admin']){
    unset($_SESSION['admin']);
    $this->redirect('Index/index');
}
    }



}