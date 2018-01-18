<?php
namespace Home\Controller;
use Think\Controller;
class RankingController extends Controller {
    public function ranking(){
//        $id=$_GET['id'];
        $Data=M('goods');
        $result=$Data->limit(10)->select();
        $this->assign("result",$result);
        $this->display("Ranking/ranking");
    }

}