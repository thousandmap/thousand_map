<?php
namespace Home\Controller;
use Think\Controller;
class IntegralController extends Controller {
   public function Integral(){
       $gid=62;
       $inc=M('admin')->where("id=%d",$gid)->select();
       $this->assign('inc',$inc);
/*       var_dump($inc);die;*/




       $integral=M('integral')->select();
       $this->assign('integral',$integral);

      // var_dump($integral);die;
       $this->display('Integral/Integral');

   }

    function integrl_goods(){
        $id=$_GET['id'];
        $model=M('integral');
      $goods=$model->where("id=%d",$id)->select();
        $this->assign('goods',$goods);

        $this->display("Integral/integral_goods");
    }

    function mission(){
        $this->display('Integral/mission');
    }



    function convert(){
        $gid=$_GET['gid'];//得到这个兑换商品的id
        $id=62;//我的id，查找积分
        $integral=M('admin')->where("id=%d",$id)->select();
        $m=$integral[0]['integral'];//得到我的现有积分
        $c=M('integral')->where("id=%d",$gid)->getField('integral');//得到兑换需要的积分
        $goodsnum=M('integral')->where("id=%d",$gid)->getField('goodsnum');//得到兑换商品还有多少件

if($goodsnum>0){

    if($m>$c){
        $d=$m-$c;//得到兑换过后的积分
        echo"兑换成功,你还有"."$d"."积分";
        $g['goodsnum']=$goodsnum[0]['goodsnum']-1;//当兑换过后，商品数量减一；
        M('integral')->where("id='$gid'")->save($g);//更新兑换商品还有多少数量
        $data=M("admin")->where("id='$id'")->select();
        $get['integral']=$data[0]['integral']-$c;//把得到兑换过后的积分赋给$get
        M('admin')->where("id='$id'")->save($get);//更新数据库
    }else{
        echo "积分不够，去做任务获得积分吧";
    }
}else{
    echo"商品库存不够,兑换别的吧";
}


    }













}