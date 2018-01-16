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


}