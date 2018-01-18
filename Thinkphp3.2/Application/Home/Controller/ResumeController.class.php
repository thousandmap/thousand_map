<?php
namespace Home\Controller;
use Think\Controller;
class ResumeController extends Controller {

    public function add_resume (){
//            var_dump($_POST);exit;
                    $id=4;
//        var_dump($id);exit;
        if($_GET['sign']==1){
            $data['name']=$_POST['name'];
            $data['sex']=$_POST['sex'];
            $data['city']=$_POST['city'];
            $data['sel1']=$_POST['sel1'];
            $data['sel2']=$_POST['sel2'];
            $data['location_p']=$_POST['location_p'];
            $data['location_c']=$_POST['location_c'];
            $data['education']=$_POST['education'];
            $data['phone']=$_POST['phone'];
            $data['email']=$_POST['email'];
            $str=M('resume');
            $arr=$str-> where("uid=$id")->save($data);
            if($arr){
                echo "<script>alert('保存成功');history.go(-1)</script>";
            }else{
                echo "<script>alert('保存失败');history.go(-1)</script>";
            }
        }else if($_GET['sign']==2){
            $data['position']=$_POST['position'];
            $data['type']=$_POST['type'];
            $data['location_p']=$_POST['location_p'];
            $data['location_c']=$_POST['location_c'];
            $data['start']=$_POST['start'];
            $data['end']=$_POST['end'];
            $data['work']=$_POST['work'];

//            var_dump(data);exit;
            $str=M('intention');
            $aar=$str-> where("uid=$id")->save($data);
            if($aar){
                echo "<script>alert('保存成功');history.go(-1)</script>";
        }else{
                echo "<script>alert('保存失败');history.go(-1)</script>";
            }
        }
    }

}