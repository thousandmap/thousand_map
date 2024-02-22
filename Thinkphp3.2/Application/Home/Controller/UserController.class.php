<?php
namespace Home\Controller;
use Illuminate\Support\Facades\Session;
use Think\Controller;
use Think\Upload;

class  UserController extends Controller
{


    public function user()
    {
//            dump(21221);
//            die;
        $isLogin = $_SESSION['admin'];

//          dump(  $isLogin);
//            die;
        if (!$isLogin) {
            $this->redirect('Login/Login');
            return;
        } else {
            $this->redirect('user/usercenter');
            return;
        }

//          $this->display('user/usercenter');
    }

    function installs()
    {
          $name=$_POST['nickname'] ;
        $sex=$_POST['sex'];
         $sel=$_POST['sel1'];
        $purpose=$_POST['purpose'];
        $qq=$_POST['qq'] ;
           $location=$_POST['location_p'];
          $arr=D('user');
        $test=array(
            'username'=>"$name",
            'sex'=>"$sex",
            'city'=>"$location" ,
            'hangye'=>"$purpose",
            'reg_time'=>"$sel" ,
            'qq'=>"$qq",


        ) ;
            $result= $arr->add($test);
        if($result){
            $this->success('保存成功', 'user/install');
        } else {
            $this->error('保存失败');
        }
    }
    function upload(){
        $pic=$_POST['img'];
//             $image=$pic;
        $imageName = "25220_".date("His",time())."_".rand(1111,9999).'.png';
       //   dump($imageName);
        //  die;
        if (strstr($pic,",")){
            $image = explode(',',$pic);
            $image = $image[1];
        }
       //  dump($image);
       //  die;
        $path = "Public/upload/";
        if (!is_dir($path)){ //判断目录是否存在 不存在就创建
            mkdir($path,0777,true);
        }
        $imageSrc=  $path."/". $imageName;  //图片名字
//
//       dump($imageName);
//        die;
        $r=file_put_contents($imageSrc, base64_decode($image));//返回的是字节数


        if (!$r) {
           return json_encode(['data'=>null,"re"=>1,"msg"=>"图片生成失败"]);
       }else{
            $isLogin = session('admin');
//        dump($isLogin)  ;
//        die;
            $user=M('user');
            $date['pic']=$imageName;
            $user->where("username='$isLogin'")->save($date);
          echo 1;
        }
    }
    public  function down(){
        $test=M('goods');
        $map['download']  = array('gt',0);
        $dates=$test->where($map)->select();
//        dump($dates);
//               die;
        $this->assign('da',$dates);
        $this->display('user/download');
    }
}
