<?php
namespace Home\Controller;
use Illuminate\Support\Facades\Session;
use Think\Controller;
use Think\Upload;

class  ToppController extends Controller
{          public function prints(){
    $date=M('print');
    $print=$date->where("cid='1'") ->select();
    //dump($print);
    $this->assign('print',$print);
    $this->display('topp/print');
}



}
