$(function(){$(".classify-close,.model-footer .btn-white").on("click",function(){$(".model-classify").fadeOut(200)});$(".c-drop-down").on("click",function(e){var that=$(this);e.stopPropagation();$(this).find(".tishi3,tishi2,tishi1").hide();$(this).parent().toggleClass("on").siblings().removeClass("on");$(document).on("click",function(){$(".main-list").removeClass("on")})});$(".c-drop-box").on("click",function(e){e.stopPropagation()});$(".c-drop-box").on("click","li",function(){$(this).addClass("on").siblings().removeClass("on");$(this).closest(".c-drop-down").find("p").html($(this).text());$(".main-list").removeClass("on")});$(document).on("click",".classify-alert",function(){$(".model-index").show();$(".model-alert").hide();$(".model-classify").fadeIn(200)});$(".links-ship .nav-ship h3").hover(function(){var i=$(this).index();$(this).addClass("on").siblings().removeClass("on");$(".links-ship .ship-box ul").eq(i).show().siblings().hide()});$(window).on("load",function(){$('.masonry-box').masonry({itemSelector:'.masonry-item',columnWidth:300})});$(".big-pic-model .close-bgm,.big-pic-model .bg").click(function(){$(".big-pic-model").hide()});$(window).on("scroll",function(){if($(this).scrollTop()>=($(".detail-container .detail-user .user-info").offset().top+$(".detail-container .detail-user .user-info").outerHeight())&&$(this).scrollTop()<=($(".recommend-more").offset().top-$(".detail-container .detail-fixed").outerHeight()-200)&&$(".big-pic-model").css('display')=='none'){$(".detail-container .detail-fixed").css({"position":"fixed","display":"block","top":"50px","z-index":300,"box-shadow":" 0px 2px 8px 0 rgba(0, 0, 0, 0.15)"})}else{$(".detail-container .detail-fixed").removeAttr("style")}});$(".tag-box a").attr('sta-site','12').addClass('sta-site');$('.sta-site').click(function(){var site=$(this).attr('sta-site');$.getJSON("http://stats.58pic.com/58pic/index.php?m=staShow&site="+site+"&callback=?",function(){})});var f,g,h,j,k,l,m,n,o,p,q,r,s;f=new Date(),g=3,$("#hd_s_picid").length>0&&(h=$("#hd_s_picid").val(),j=$("#hd_s_authid").val(),g=new Array(),k=0,$(".bottom-fav-ajax").each(function(){g[k]=$(this).attr("data-id"),k++}),l=g.toString(),m=$("#hd_s_kid").val(),m||(m=0),o||(o=0),pictype=$("#pictype").val(),did=$('#did').val(),$.get("http://www.58pic.com/index.php?m=show&a=ajaxShowDcp&did="+did+"&u=1&pictype="+pictype+"&picid="+h+"&authid="+j+"&picids="+l+"&kid="+m+"&bid="+o,function(a){var b,c,d;$.each(a["data"]["pfav"],function(a,b){d=$(".bottom-fav-ajax[data-id="+b["id"]+"]");d.attr("data-action",b["action"]);"rFav"===b["action"]&&(d.find("a").addClass("on"))}),$(".head-img2").attr("src",a["data"]["face"]),$("#s_readnum").html(a["data"]["params"]["readnum"]),$("#s_dnum").html(a["data"]["params"]["dnum"]),$("#s_fav").html(a["data"]["params"]["fav"]),$(".bdsharebuttonbox .text-c").html(a["data"]["share_num"]),$(".fav-ajax").attr({"data-action":a["data"]["fav"]["action"],id:a["data"]["fav"]["id"]}),function(){if(a["data"]["fav"]["action"]=='rFav'){$(".fav-ajax").addClass('on').find('font').text("���ղ�")}else{$(".fav-ajax").removeClass('on').find('font').text("�ղ�")}}(a)},"json"))});function getWindowHeight(){var a=0;return window.innerHeight?a=window.pageYOffset:document.documentElement&&document.documentElement.scrollTop?a=document.documentElement.scrollTop:document.body&&(a=document.body.scrollTop),a}function cookie(a){var b,c,d=document.cookie.split("; ");for(new Object(),b=0;b<d.length;b++)if(c=d[b].split("="),c[0]==a)return unescape(c[1]);return""}function setCookie(a,b){var c=3,d=new Date();d.setTime(d.getTime()+864e5*c),document.cookie=a+"="+escape(b)+";expires="+d.toGMTString()}function cookie(a){var b,c,d=document.cookie.split("; ");for(new Object(),b=0;b<d.length;b++)if(c=d[b].split("="),c[0]==a)return unescape(c[1]);return""}