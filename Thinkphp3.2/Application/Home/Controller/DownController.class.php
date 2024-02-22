<?php
namespace Home\Controller;
use Think\Controller;
class DownController extends Controller {
    public function download(){
        $id=$_GET['id'];
        $Data=M('goods');
        $result=$Data->where("id=$id")->select();
        $this->assign('result',$result);
        $this->display("download/download");
    }
    public function down(){
        $filename=$_GET['filename'];
        $id=$_GET['pid'];
        $Date=M('goods');
        $download=$Date->where("pic=$id")->getField("download");
        $data['download']=$download+1;
        $Date->where("pic=$id")->save($data);
//        $Date->where('$id=pic')->setInc('$id');  加1
    //    $Date->where('$id=pic')->setInc('$id',1); 点击加1

        //更新数据库    有图片id  去找图品表 让相应字段加一


       /* $fileinfo = pathinfo($filename);
        readfile($fileinfo);
        header('Content-type: application/x-'.$fileinfo['extension']);
        header('Content-Disposition: attachment; filename='.$fileinfo['basename']);
        header('Content-Length: '.filesize($filename));

        exit();*/




         $basename=pathinfo($filename);
        header('Content-type: application/x-'.$basename['extension']);
        header("Content-Type: image/png/jpg"); //指定下载文件类型的
        header("Content-Disposition:attachment;filename=".$basename["basename"]);
//指定下载文件的描述信息
        header("Content-Length:".filesize($filename));  //指定文件大小的
        readfile($filename);//将内容输出，以便下载。

    }
}