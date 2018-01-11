<?php
namespace Home\Controller;
use Think\Controller;
class SearchController extends Controller {
    function search(){
        $describe=$_GET['describe'];
        $data=M('search');
        $map['describe'] = array('like',"%{$describe}%");
        $res=$data->where($map)->select();
//        dump($res);
//        die;
        $this->assign('res',$res);
        $this->display('index/search');
    }


    function Detail(){
        $id=$_GET['id'];
        $data=M('search');
        $res=$data->where("id=$id")->select();
       $this->assign('res',$res);

        $this->display('index/Detail');

    }


}