<?php
namespace Home\Controller;
use Think\Controller;
class LikeController extends Controller {
   public function likes(){
      $gname=$_POST['gname'];

       //echo "$gname";
       if($gname){
           $result=M('goods')->where("goodsname like '%{$gname}%'")
               ->select();
/*var_dump($result[0]['pic']);die;*/
           $this->assign('result',$result);

           $this->display('index/like');

       }
   }
    function line(){
        $gid=$_GET['id'];
        $model=M('goods')->where("id=%d",$gid)->select();
        $this->assign('model',$model);
        $this->display('index/like_download');

    }




}