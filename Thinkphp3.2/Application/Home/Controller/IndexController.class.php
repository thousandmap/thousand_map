<?php
namespace Home\Controller;
use Think\Controller;
use think\Db;

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
//        var_dump($result2);
//        die;
        $this->assign('result',$result);
        $this->assign('result2',$result2);
        $this->assign('result3',$result3);
        $this->assign('result4',$result4);
        $this->assign('result5',$result5);
        $this->assign('result6',$result6);
        $this->assign('result7',$result7);
        $this->display();
    }
    public function detailsOne(){

//        dump();exit;

        $this->display('Admin/detailsOne');
    }
    public function detailsTwo(){

        $this->display('Admin/detailsTwo');
    }

    public function detailsThree(){


        $this->display('Admin/detailsThree');
    }



}