<?php
namespace Home\Controller;
use Think\Controller;
class SignController extends Controller {

    function sign(){

        $model=M('sign')->select();
        $this->assign('model',$model);
        $this->display('sign/sign');
    }

    function sign2(){
        $id=$_GET['id'];
        $data=array(2,5,8,10,12,15,18);
        $res=M('sign')->where("id='$id'")->find();
         foreach($data as $k=>$v){
           if($res['sign_num']==$k){
               $res['sign_time']=time();
                    $data['get_integral']=$res['get_integral']+$v;
                    $data['sign_num']=$res['sign_num']+1;
               $data['sign_time']=$res['sign_time'];
                    //$res['sign_days']=$data['sign_num'];
                    M('sign')->where("id='$id'")->save($data);
           }


             if((time()+86400)>$res['sign_time']){
                 echo"今天签过了，等明天吧";exit;
             }else{

                 if($res['sign_num']==7){
                     $data['sign_num']=0;
                     M('sign')->where("id='$id'")->save($data);
                 }
                 if($res){
                     $data['sign_days']=$res['sign_num']+1;
                     M('sign')->where("id='$id'")->save($data);

                 }
             }


        }
    }

    function money(){
        $this->display('sign/money');
    }











}