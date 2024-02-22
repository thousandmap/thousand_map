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

   function category($id){
       $Model=new \Think\Model();
       $res=$Model->query("select s.cid,s.pic,s.describe,s.id from figure_search as s where s.cid=$id");
//      dump($res);

       $this->assign('res',$res);

       $this->display('index/search');

   }
     function download(){
         echo 123;
         die;
         $filename=$_GET['filename'];
         $id=$_GET['id'];
         $Date=M('goods');
         $download=$Date->where("pic=$id")->getField("download");
         $data['download']=$download+1;
         $Date->where("pic=$id")->save($data);





         $basename=pathinfo($filename);
         header('Content-type: application/x-'.$basename['extension']);
         header("Content-Type: image/png/jpg"); //指定下载文件类型的
         header("Content-Disposition:attachment;filename=".$basename["basename"]);
//指定下载文件的描述信息
         header("Content-Length:".filesize($filename));  //指定文件大小的
         readfile($filename);//将内容输出，以便下载。






     }


}