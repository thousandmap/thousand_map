<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
        $Data=M('goods');
        $result=$Data->limit(4)->select();
        $result2=$Data->limit(4,12)->select();
        $result3=$Data->limit(12,20)->select();
        $result4=$Data->limit(20,28)->select();
        $result5=$Data->limit(28,36)->select();
        $result6=$Data->limit(36,44)->select();
        $result7=$Data->limit(44,52)->select();
        $result8=$Data->limit(52,60)->select();
//        var_dump($result2);
//        die;
        $this->assign('result',$result);
        $this->assign('result2',$result2);
        $this->assign('result3',$result3);
        $this->assign('result4',$result4);
        $this->assign('result5',$result5);
        $this->assign('result6',$result6);
        $this->assign('result7',$result7);
        $this->assign('result8',$result8);
        $this->display();
    }

    public function Details(){
        $id=$_GET['id'];
        $arr=M('');
        $date=$arr->query("select p.id,p.gid,g.cid,g.addtime,g.goodsname,p.goods_details,p.Picture,p.author,g.size,g.Suffix FROM figure_pic as p INNER JOIN figure_goods as g ON g.id=p.gid where p.gid=$id");
//      dump($date);exit;
        $this->assign('date',$date);
        if($date[0]['cid']==1){
            $this->display('Admin/detailsOne');
        }else{
            $this->display('Admin/details');
        }

    }


    public function Resume (){
        $User=M();
        $name="zhang";
        if($name==null){
            echo "<script>alert('请先去登录哦,亲！')</script>";
            $this->display('Login/Login');
        }else{
            $arr=$User->query("SELECT u.id,u.username,r.sex,r.city,r.sel1,sel2,location_p,location_c,education,r.phone,r.email FROM figure_user as u INNER JOIN figure_resume as r ON r.uid=u.id where u.username='$name'");
//          var_dump($arr);exit;
            $this->assign('arr',$arr);
            $this->display('Resume/resume');
        }

    }

    public function Resume_list (){

        $this->display('Resume/resume_list');

    }

    public function edit(){
        if($_POST){
            $id=$_POST['id'];
            $User=M();
            $aar=$User->query("SELECT u.id,u.username,r.sex,r.city,r.sel1,sel2,location_p,location_c,education,r.phone,r.email FROM figure_user as u INNER JOIN figure_resume as r ON r.uid=u.id where u.id='$id'");
//           var_dump($aar);exit;
            $this->assign('aar',$aar);
            $this->display('Resume/Edit_information');
        }
    }

    public function edit_two(){
//        var_dump($_POST['id']);exit;
        if($_POST){
            $id=$_POST['id'];
            $User=M();
            $aar=$User->query("SELECT u.id,u.username,r.sex,r.city,r.sel1,sel2,location_p,location_c,education,r.phone,r.email FROM figure_user as u INNER JOIN figure_resume as r ON r.uid=u.id where u.id='$id'");
//           var_dump($aar);exit;
            $this->assign('aar',$aar);
            $this->display('Resume/intention');
        }
        }


}