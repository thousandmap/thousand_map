//头部用户信息下拉
$(function () {
    var A=1;

    function cookie(a) {
        var b, c, d = document.cookie.split("; ");
        for (new Object(),
        b = 0; b < d.length; b++)
            if (c = d[b].split("="),
            c[0] == a)
                return unescape(c[1]);
        return "";
    }
    $.getJSON(
        "http://www.58pic.com/index.php?&m=ajax&callback=?&u=1&type=1",
        function(ret){
            if(ret.vip_tx > 0){
                if(ret.vip_tx == 1){
                    $(".alljls").attr("status","1");
                    $(".alljls").before('<div class="vipjl">暂无消息</div>');
                }
                if(ret.vip_tx == 2){
                    $("#txshuzi").show();
                }
                $(".shuline1").show();
                $(".xiaoxi").show();
            }
            if(ret.is_login == 1){
                $("#loginname").html(ret.username);
                $(".mygrzy").attr("href",$(".mygrzy").attr("href")+ret.uid);
                $("#haslogin").show();
            }else{
                $("#nologin").show();
            }
        }
    );

    $('#sallBtn').click(function(){
        allsearch();
    });

    $("#sycBtn").click(function() {
        var a = $(".nbks-input").val().replace(/\s+/g, "");
        return 0 == a.length || "800万张免费设计素材任意下载" == a ? (alert("请输入要查找的关键词"),
        !1) : ($.getJSON("http://www.58pic.com/index.php?m=search&a=ajaxCheckPinyin&jsoncallback=?", {
            kw: a,
            sign: 1,
            type: 1
        }, function(b) {
            window.location.href = 1 == b.msg ? " http://www.58pic.com/tupian/" + b["pinyin"] + "-0-0-default-0-0-" + a + "-0_1_0_0_0-.html" : "http://www.58pic.com/tupian/0-0-0-default-0-0-" + a + "-0-.html";
        }),
        !1);
    })
             
    function allsearch(){
        var a = $('.nbks-input').val().replace(/\s+/,"");
        return 0 == a.length || "800万张免费设计素材任意下载" == a ? (alert("请输入要查找的关键词"),
        !1) : ($.getJSON("http://www.58pic.com/index.php?m=search&a=ajaxCheckPinyin&jsoncallback=?",{
            kw:a
        },function(b){
            window.location.href = 1==b["msg"]?"http://www.58pic.com/tupian/" + b["pinyin"] + ".html":"http://www.58pic.com/tupian/0-0-0-default-0-0-" + a + "-0-.html";
        }),!1);
    }

    $("#keyup_d").on("click", ".sokeyup_1", function() {
        var a = $("#keyup_d .sokeyup_1").index(this)
          , b = $("#keyup_d .sokeyup_2").eq(a).html();
        $(".nbks-input").val(b),
        $("#sallBtn").trigger("click"),
        allsearch();
    })

    var viptm1;
    var viptm2;
    $(".xiaoxi").mouseover(function(){

        clearTimeout(viptm1);
        clearTimeout(viptm2);
        $(".dhshowed").hide();
        $(".xiaoxi").css("color","#3EBB2B");
        if($(".alljls").attr("status") == "0"){
            $(".alljls").attr("status","1");
            $.getJSON(
                "http://www.58pic.com/index.php?&m=user&a=getMyVipRecords&callback=?",
                function(ret){
                    if(ret.viprd1){
                        $(".alljls").before('<div class="vipjl">'+ret.viprd1+'</div>');
                    }
                    //if(ret.viprd2){
                    //	$(".alljls").before("<div class='vipjl'>"+ret.viprd2+"</div>");
                    //}
                }
            );
        }
        var p = $(this).position();
        $("#viptx").css("left",p.left+"px").show();
    }).mouseout(function(){
        $(".xiaoxi").css("color","#aaaaaa");
        viptm1 = setTimeout(function(){
            $("#viptx").hide();
        },300);
    });
    $("#viptx").mouseover(function(){
        clearTimeout(viptm1);
        clearTimeout(viptm2);
        $(".xiaoxi").css("color","#3EBB2B");
        $(this).show();
    }).mouseout(function(){
        $(".xiaoxi").css("color","#aaaaaa");
        viptm2 = setTimeout(function(){
            $("#viptx").hide();
        },300);
    });

    var tmshow5;
    var tmshow6;
    $(".userinfo").mouseover(function(){
        clearTimeout(tmshow5);
        clearTimeout(tmshow6);
        $(".dhshowed").hide();
        $("#loginname").css("color","#3EBB2B");
        $("#uplinks").hide();
        $("#myuser").css("right","0px").show();
    }).mouseout(function(){
        $("#loginname").css("color","#aaaaaa");
        tmshow5 = setTimeout(function(){
            $("#myuser").hide();
        },300);
    });
    $("#myuser").mouseover(function(){
        clearTimeout(tmshow5);
        clearTimeout(tmshow6);
        $("#loginname").css("color","#3EBB2B");
        $(this).show();
    }).mouseout(function(){
        $("#loginname").css("color","#aaaaaa");
        tmshow6 = setTimeout(function(){
            $("#myuser").hide();
        },300);
    });
    var tmshow3;
    var tmshow4;
    $(".goupload").mouseover(function(){
        clearTimeout(tmshow3);
        clearTimeout(tmshow4);
        $(".dhshowed").hide();
        var pt = $(this).position();
        $("#uplinks").css("left",(pt.left - 30)+"px").show();
        $(".goupload").css("backgroundColor","#ffffff");
        $(".goupload").css("color","#3EBB2B");
        //$(".goupload").css("backgroundPosition","12px -74px");
    }).mouseout(function(){
        $(".goupload").css("backgroundColor","#505050");
        $(".goupload").css("color","#aaaaaa");
        //$(".goupload").css("backgroundPosition","12px -40px");
        tmshow3 = setTimeout(function(){
            $("#uplinks").hide();
        },300);
    });
    $("#uplinks").mouseover(function(){
        clearTimeout(tmshow3);
        clearTimeout(tmshow4);
        $(this).show();
        $(".goupload").css("backgroundColor","#ffffff");
        $(".goupload").css("color","#3EBB2B");
        //$(".goupload").css("backgroundPosition","12px -74px");
    }).mouseout(function(){
        $(".goupload").css("backgroundColor","#505050");
        $(".goupload").css("color","#aaaaaa");
        //$(".goupload").css("backgroundPosition","12px -40px");
        tmshow4 = setTimeout(function(){
            $("#uplinks").hide();
        },300);
    });

    $(".user-fav").click(function() {
        var a, b, c, d = $(this).attr("data-action"), e = $(this).attr("data-id"), f = $(this);
        return 1 == $(this).next(".tbdl").size() ? (a = $(this).parent().parent().prev().find(".xffav"),
        b = $(this)) : (a = $(this),
        b = $(this).parent().next().children(".picop").children(".tbfav")),
        c = cookie("auth_id"),
        "" == c ? (window.open("http://www.58pic.com/denglu/"),
        !1) : ($.ajax({
            type: "POST",
            url: "http://www.58pic.com/index.php?m=user&a=ajaxUserFav",
            data: {
                action: d,
                picid: e
            },
            dataType: "json",
            success: function(c) {
                var d, e, g;
                "1" == c.status && (a.attr("data-action", c.data.a),
                b.attr("data-action", c.data.a),
                d = "user-rfav" == c.data.c ? "not-fav-yet" : "rm-fav",
                e = "user-rfav" == c.data.c ? "已收藏" : "收藏",
                g = "user-rfav" == c.data.c ? "收藏成功!" : "取消成功!",
                a.removeClass(d),
                b.removeClass(d),
                "not-fav-yet" == d ? (a.addClass("rm-fav").html(e),
                b.addClass("rm-fav").css("background-position", "5px -1064px")) : (a.addClass("not-fav-yet").html(e),
                b.addClass("not-fav-yet").removeAttr("style")),
                $("#cgtstext").text(g),
                1 == f.next(".tbdl").size() ? $("#cgts").css({
                    top: b.offset().top - 33 + "px",
                    left: b.offset().left - 34 + "px"
                }).show() : $("#cgts").css({
                    top: a.offset().top - 40 + "px",
                    left: a.offset().left - 7 + "px"
                }).show(),
                setTimeout(function() {
                    $("#cgts").hide();
                }, 1e3));
            }
        }),
        void 0);
    });

    $(".user_f").click(function() {
        var a = $(this).attr("data-action")
          , b = $(this).attr("data-id")
          , c = $(this)
          , d = cookie("auth_id");
        return "" == d ? (window.open("http://www.58pic.com/denglu/"),
        !1) : ($.ajax({
            type: "POST",
            url: "http://www.58pic.com/index.php?m=user&a=ajaxUserFav",
            data: {
                action: a,
                picid: b
            },
            dataType: "json",
            success: function(a) {
                var b, d, e, f;
                "1" == a.status && (b = c.attr("data-fnum"),
                c.attr("data-action", a.data.a),
                d = "user-rfav" == a.data.c ? "not-fav-yet" : "rm-fav",
                e = "user-rfav" == a.data.c ? "已收藏" : "收藏",
                f = "user-rfav" == a.data.c ? "收藏成功!" : "取消成功!",
                c.removeClass(d),
                "not-fav-yet" == d ? c.addClass("rm-fav").html(e) : c.addClass("not-fav-yet").html('<span class="scthispicspan">' + e + " " + b + "</span>"),
                $("#cgtstext").text(f),
                $("#cgts").css({
                    top: c.offset().top - 30 + "px",
                    left: c.offset().left - 5 + "px"
                }).show(),
                setTimeout(function() {
                    $("#cgts").hide();
                }, 1500));
            }
        }),
        void 0);
    });

    var tmshow1;
    var tmshow2;
    $(".dhshow").mouseover(function(){
        clearTimeout(tmshow1);
        clearTimeout(tmshow2);
        $(".dhshowed").hide();
        var pt = $(this).position();
        var showid = $(this).attr("showid");
        $("#" + showid).css("left",(pt.left - 10)+"px");
        $("#" + showid).show();
        $(this).css("color","#3EBB2B");
    }).mouseout(function(){
        $(this).css("color","#aaaaaa");
        tmshow1 = setTimeout(function(){
            $(".dhshowed").hide();
        },300);
    });
    $("#hotcates,#designtool,#huodong").mouseover(function(){
        clearTimeout(tmshow1);
        clearTimeout(tmshow2);
        var idname = $(this).attr("id");
        $("a[showid='"+idname+"']").css("color","#3EBB2B");
        $(this).show();
    }).mouseout(function(){
        var idname = $(this).attr("id");
        $("a[showid='"+idname+"']").css("color","#aaaaaa");
        tmshow2 = setTimeout(function(){
            $(".dhshowed").hide();
        },300);
    });

    var timeout6;
    var timeout7;
    $("#socates").mouseover(function(){
        clearTimeout(timeout6);
        clearTimeout(timeout7);
        $(".dhshowed").hide();
        $("#fenleiso").show();
    }).mouseout(function(){
        timeout6 = setTimeout(function(){
            $("#fenleiso").hide();
        },300);
    });
    $("#fenleiso").mouseover(function(){
        clearTimeout(timeout6);
        clearTimeout(timeout7);
        $(this).show();
    }).mouseout(function(){
        timeout7 = setTimeout(function(){
            $("#fenleiso").hide();
        },300);
    });
    $(".soclass").click(function(){
        $("#socates").attr("flid",$(this).attr("flid"));
        $("#socates").html($(this).html());
        $("#fenleiso").hide();
    });

    var tmrb1;
    var tmrb2;
    $("#thisothers").mouseover(function(e){
        clearTimeout(tmrb1);
        clearTimeout(tmrb2);
        $("#thisothersitems").show();
        e.stopPropagation();
    }).mouseout(function(e){
        tmrb1 = setTimeout(function(){
            $("#thisothersitems").hide();
        },300);
        e.stopPropagation();
    });
    $("#backtotopbtn").mouseover(function(e){
        clearTimeout(tmrb1);
        clearTimeout(tmrb2);
        $("#thisothersitems").hide();
        e.stopPropagation();
    });
    $("#thisothersitems").mouseover(function(e){
        clearTimeout(tmrb1);
        clearTimeout(tmrb2);

        $(this).show();
        e.stopPropagation();
    }).mouseout(function(e){
        tmrb2 = setTimeout(function(){
            $("#thisothersitems").hide();
        },300);
        e.stopPropagation();
    });
    $("#backtotopbtn").click(function(){
        $("html,body").animate({scrollTop:0},500);
    });


    window.onscroll = function()
    {
        var rbt = document.getElementById("backtotop");
        if(window.navigator.userAgent.indexOf("Chrome") >= 0){
            if(document.body.scrollTop > 300){
                rbt.style.display = "block";
            }else{
                rbt.style.display = "none";
            }
        }else{
            document.documentElement.scrollTop > 300 ? rbt.style.display = "block" : rbt.style.display = "none";
        }
        if($(".lazyimg").size() > 0){
            $(".lazyimg").each(function(){
                $(this).attr("src",$(this).attr("tsrc"));
                $(this).removeClass("lazyimg");
            });
        }

    }

});

//搜索下拉
$(function(){


    function E() {
        var soInputWidth = $("#sokw").width();
        $.getJSON(
            "http://www.58pic.com/index.php?m=searchtips&a=recentSearch&callback=?",
            function(ret){
                if(ret != ""){
                    $("#keyup_d").html(ret).css({top:"47px",left:"0px",width:soInputWidth}).show();
                    $("#keyup_d .sokeyup_2").width(soInputWidth-150);
                }else{
                    $("#keyup_d").hide();
                }
            }
        );
    }


    $("#sokw").keyup(function(J){
        if(window.event){
            var H = window.event.keyCode;
        }else{
            var H = J.which;
        }
        var I = $("#sokw");
        var G = I.width();
        if(H != 38 && H != 40 && H != 13){
            var K = $.trim(I.val());
            if(K == ""){
                E();
            }
            $.getJSON(
                "http://www.58pic.com/index.php?m=searchtips&a=search&kw=" + K + "&callback=?",
                function(M){
                    if(M != ""){
                        $("#keyup_d").html(M).css({top:"47px",width:G,left:"0px"}).show();
                        $("#keyup_d .sokeyup_2").width(G - 150);
                    }else{
                        $("#keyup_d").hide();
                    }
                }
            );
        }
    });


    $("#sokw").focus(function() {
        var a = $.trim($("#sokw").val());
        "请输入关键字、标题搜索" == a && ($("#sokw").css({
            color: "#000000"
        }),
        $("#sokw").val(""));
    });

    $("#sokw").blur(function(){
        if($.trim($(this).val()) == ""){
            $(this).val("请输入关键字、标题搜索");
            $(this).css({"fontSize":"16px","color":"#999999"});
        }
        $("#sokw").css({"borderTopColor":"#dddddd","borderLeftColor":"#dddddd","borderBottomColor":"#dddddd"});
        setTimeout('$("#keyup_d").hide()',500)
    });

    $("#keyup_d").on("mouseover",".sokeyup_1",function(){
        var G = $("#keyup_d .sokeyup_1").index(this);
        $("#keyup_d .sokeyup_1").eq(G).css("background-color","#EBEBEB");
        $("#keyup_d .sokeyup_2").eq(G).css("background-color","#EBEBEB");
        $("#keyup_d .sokeyup_3").eq(G).css("background-color","#EBEBEB")
    });

    $("#keyup_d").on("mouseout",".sokeyup_1",function(){
        var G = $(".sokeyup_1").index(this);
        $("#keyup_d .sokeyup_1").eq(G).css("background-color","#FFF");
        $("#keyup_d .sokeyup_2").eq(G).css("background-color","#FFF");
        $("#keyup_d .sokeyup_3").eq(G).css("background-color","#FFF")
    });
    $("#keyup_d").on("click",".sokeyup_1",function(){
        var G = $("#keyup_d .sokeyup_1").index(this);
        var H = $(".sokeyup_2").eq(G).html();$("#sokw").val(H);
        $("#sobtn").trigger("click");
    });

    $("#sokw").keydown(function(H){
        if(window.event){
            var G = window.event.keyCode;
        }else{
            var G = H.which;
        }
        if(G == 13){
            $("#sallBtn").trigger("click");//修改
        }
    });

    var D=0;
    $("#sokw").keyup(function(H){
        if(window.event){
            var G = window.event.keyCode;
        }else{
            var G = H.which;
        }
        if(G != 38 && G != 40 && G != 13){
            D = 0;
        }else{
            if($("#keyup_d").css("display") == "block"){
                var I = $("#keyup_d ul").length;
                if(G==38){
                    D--;
                    if(D<1){
                        D = I;
                        C(D);
                        F(1);
                    }else{
                        F(D+1);
                        C(D)
                    }
                    $("#sokw").val($("#l_"+D).html());
                    return false
                }
                if(G==40){
                    D++;
                    if(D>I){
                        D=1;
                        C(1);
                        F(I)
                    }else{
                        F(D-1);
                        C(D)
                    }
                    $("#sokw").val($("#l_"+D).html());
                    return false;
                }
            }else{
                D=0;
            }
        }

    });
    function C(G){
        $("#u_"+G).css("background-color","#EBEBEB");
        $("#l_"+G).css("background-color","#EBEBEB");
        $("#r_"+G).css("background-color","#EBEBEB")
    }
    function F(G){
        $("#u_"+G).css("background-color","#fff");
        $("#l_"+G).css("background-color","#fff");
        $("#r_"+G).css("background-color","#fff")
    }

});











