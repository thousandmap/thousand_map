<?php
namespace Home\Controller;
use Think\Controller;
class DowntotalController extends Controller
{
    public function downtotal()
    {
//        $Data = M('goods');
//        $result = $Data->limit(11,10)->select();
//
//        $this->assign('result', $result);
       //  var_dump($result);
        //die;

        $Date=M("goods");
        $result=$Date->where("download>0")->order("download desc")->select();
        $this->assign('result', $result);
        $this->display("Ranking/downtotal");
    }
}