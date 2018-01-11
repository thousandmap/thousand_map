$(document).ready(function() {
    var tmrb1;
    var tmrb2;
    $("#thisothers").mouseover(function(e) {
        clearTimeout(tmrb1);
        clearTimeout(tmrb2);
        $("#thisothersitems").show();
        e.stopPropagation();
    }).mouseout(function(e) {
        tmrb1 = setTimeout(function() {
            $("#thisothersitems").hide();
        }, 300);
        e.stopPropagation();
    });
    $("#backtotopbtn").mouseover(function(e) {
        clearTimeout(tmrb1);
        clearTimeout(tmrb2);
        $("#thisothersitems").hide();
        e.stopPropagation();
    });
    $("#thisothersitems").mouseover(function(e) {
        clearTimeout(tmrb1);
        clearTimeout(tmrb2);
        $(this).show();
        e.stopPropagation();
    }).mouseout(function(e) {
        tmrb2 = setTimeout(function() {
            $("#thisothersitems").hide();
        }, 300);
        e.stopPropagation();
    });
    $("#backtotopbtn").click(function() {
        $("html,body").animate({
            scrollTop:0
        }, 500);
    });
    $(".hd-s").each(function(i) {
        var w = $(this).width() / 2 - 7;
        $(this).find("i").css({
            right:w
        });
    });
    $(".hd-s").hover(function() {
        $(this).addClass("on");
    }, function() {
        if (!$(this).hasClass("fixed")) {
            $(this).removeClass("on");
        }
    });
    window.onscroll = function() {
        var rbt = document.getElementById("backtotop");
        if (window.navigator.userAgent.indexOf("Chrome") >= 0) {
            if (document.body.scrollTop > 300) {
                rbt.style.display = "block";
            } else {
                rbt.style.display = "none";
            }
        } else {
            document.documentElement.scrollTop > 300 ? rbt.style.display = "block" :rbt.style.display = "none";
        }
        if ($(".lazyimg").size() > 0) {
            $(".lazyimg").each(function() {
                $(this).attr("src", $(this).attr("tsrc"));
                $(this).removeClass("lazyimg");
            });
        }
    };
    var A = 1;
    $.getJSON("http://www.58pic.com/index.php?&m=ajax&callback=?&u=1&type=" + A, function(G) {
        if (G.is_login == 1) {
            var len = 0;
            var ascii;
            var v = G.username;
            for (i = 0; i < v.length; i++) {
                ascii = v.charCodeAt(i);
                if (ascii > 96 && ascii < 123 || ascii > 47 && ascii < 58) {
                    len++;
                } else {
                    len += 2;
                }
                if (len == 8) {
                    v = v.substr(0, i + 1) + "..";
                } else if (len == 9) {
                    v = v.substr(0, i) + "..";
                }
            }
            if (G.username + ".." == v) {
                v = G.username;
            }
            $("#username b").html(v);
            switch (G.vip_flag) {
              case "1":
                $("#username a").attr("href", "javascript:;").attr("title", "终身素材VIP会员").css({
                    background:"url(http://icon.qiantucdn.com/images/homecenter/public_v7.png) no-repeat -60px -183px",
                    right:"39px"
                });
                break;

              case "2":
                $("#username a").attr("href", "javascript:;").attr("title", "素材VIP到期时间：" + G.vip_expired).css({
                    background:"url(http://icon.qiantucdn.com/images/homecenter/public_v7.png) no-repeat -30px -183px",
                    right:"39px"
                });
                break;

              case "3":
                if(G.yc_vip_flag == '0'){
                    $("#username a").attr("title", "点击成为素材VIP").css({
                        background:"url(http://icon.qiantucdn.com/images/homecenter/public_v7.png) no-repeat 0 -183px",
                        right:"20px"
                    });
                    $("#TB_overlayBG").after('<a href="http://www.58pic.com/index.php?m=sponsor&t=1&f=4&fex=1" class="back">获取VIP</a>');
                }
                break;
            }
            switch (G.yc_vip_flag) {
              

                  case "1":
                        if(G.vip_flag != '3')
                            $("#username a").after('<a rel="nofollow"></a>');
                            
                        $("#username a:last").attr("href", "javascript:;").attr("title", "原创VIP到期时间：" + G.yc_vip_expired).css({
                        background:"url(http://icon.qiantucdn.com/images/homecenter/public_v7.png) no-repeat -90px -183px",
                        right:"20px"
                    });
                    break;

                case "2":
                    if(G.vip_flag != '3')
                        $("#username a").after('<a rel="nofollow"></a>');
                    $("#username a:last").attr("href", "javascript:;").attr("title", "终身原创VIP会员").css({
                    background:"url(http://icon.qiantucdn.com/images/homecenter/public_v7.png) no-repeat -120px -183px",
                    right:"20px"
                });
                break;
            }
            $("#user-home-menu").show();
            $("#username b").attr("title", G.username);
            var kuan = $("#username b").width() + 60;
            if (kuan > 140)
                $("#user-home-menu .last").css("width", 140 + "px");
            $(".user-new").html('<a href="http://www.58pic.com/index.php?m=user&a=vipRecord" id="my-vip-rs-a">查看全部VIP记录</a>');
            var J = parseInt(G.vip_tx);
            if (J == 1) {
                $("#my-vip-rs").find("i").remove();
            }
            if (G.vip_flag == 2 && G.url) {
                $(".user-new").html('<a href="' + G.url + '" id="tuisong">' + G.title + "</a>");
            } else if (G.vip_flag == 3 && G.default_url && G.url) {
                $(".user-new").html('<a href="' + G.url + '" id="tuisong">' + G.title + '</a><a href="' + G.default_url + '">' + G.default_title + "</a>");
            } else if (G.vip_flag == 3 && G.url) {
                $(".user-new").html('<a href="' + G.url + '" id="tuisong">' + G.title + "</a>");
            } else if (J == 1) {
                $("#my-vip-rs-a").before('<a href="http://www.58pic.com/index.php?m=user&a=vipRecord" id="no-message">暂无消息</a>');
            }
            var TG = parseInt(G.tuiguang);
            if (TG == 1) {
                $(".user-new").prepend('<a href="' + G.tuiguang_url + '" id="tuisong">' + G.tuiguang_title + "</a>");
            }
            if (G.xx_title) {
                $(".user-new").prepend('<a href="javascript:void(0);" id="xxtq" data-url="' + G.xx_url + '">' + G.xx_title + "</a>");
            }
        } else {
            $(".login_before").show();
        }
    });
    $(".slide").mouseenter(function() {
        $(".slide .tabBtn").fadeIn(500);
    });
    $(".slide").mouseleave(function() {
        $(".slide .tabBtn").fadeOut(500);
    });
    $("#return_top").click(function() {
        $("html,body").animate({
            scrollTop:0
        }, 500);
    });
    $("#return_bottom").click(function() {
        $("html,body").animate({
            scrollTop:document.body.clientHeight
        }, 500);
    });
    $(".us,.user-sc").mouseenter(function() {
        $(".user-sc").show();
        $(".us").addClass("hover");
    }).mouseleave(function() {
        $(".user-sc").hide();
        $(".us").removeClass("hover");
    });
    $(".un,.user-new").mouseenter(function() {
        $(".user-new").show();
        $(".un").addClass("hover");
    }).mouseleave(function() {
        $(".user-new").hide();
        $(".un").removeClass("hover");
    });
    $(".uc,.user-c").mouseenter(function() {
        $(".user-c").show();
        $(".uc").addClass("hover");
    }).mouseleave(function() {
        $(".user-c").hide();
        $(".uc").removeClass("hover");
    });
    $(".QQ_serive,.serive_notice").mouseenter(function() {
        $(".serive_notice").show();
    }).mouseleave(function() {
        $(".serive_notice").hide();
    });
    $("#QQ_millance,.maillance_ul").mouseenter(function() {
        $(".maillance_ul").show();
    }).mouseleave(function() {
        $(".maillance_ul").hide();
    });
    $("#QQ_millance").show();
});

function cookie(C) {
    var B = document.cookie.split("; ");
    var E = new Object();
    for (var A = 0; A < B.length; A++) {
        var D = B[A].split("=");
        if (D[0] == C) {
            return unescape(D[1]);
        }
    }
    return "";
}

function SetHome(A, C) {
    try {
        A.style.behavior = "url(#default#homepage)";
        A.setHomePage(C);
    } catch (D) {
        if (window.netscape) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            } catch (D) {
                window.open("http://www.58pic.com/index.php?m=index&a=setHome");
            }
            var B = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
            B.setCharPref("browser.startup.homepage", C);
        } else {
            window.open("http://www.58pic.com/index.php?m=index&a=setHome");
        }
    }
}

function addFavorite(C, A) {
    try {
        window.external.addFavorite(A, C);
    } catch (B) {
        try {
            window.sidebar.addPanel(C, A, "");
        } catch (B) {
            alert("请按 Ctrl+D 来收藏本站");
        }
    }
}

function cookie(C) {
    var B = document.cookie.split("; ");
    var E = new Object();
    for (var A = 0; A < B.length; A++) {
        var D = B[A].split("=");
        if (D[0] == C) {
            return unescape(D[1]);
        }
    }
    return "";
}

var timeout = 100;

var closetimer = 0;

var ddmenuitem = 0;

function mopen(A) {
    mcancelclosetime();
    if (ddmenuitem) {
        ddmenuitem.style.display = "none";
    }
    ddmenuitem = document.getElementById(A);
    ddmenuitem.style.display = "block";
}

function mclose() {
    if (ddmenuitem) {
        ddmenuitem.style.display = "none";
    }
}

function mclosetime() {
    closetimer = window.setTimeout(mclose, timeout);
}

function mcancelclosetime() {
    if (closetimer) {
        window.clearTimeout(closetimer);
        closetimer = null;
    }
}

document.onclick = mclose;

$("#my-vip-rs").mouseover(function() {
    var obj = $("#my-vip-rs").find("i");
    if (obj.size() == 1 && obj.data("status") != 1 && $("#tuisong").size() != 1) {
        obj.data("status", 1);
        $.getJSON("http://www.58pic.com/index.php?&m=user&a=getMyVipRecords&callback=?", function(B) {
            if (B.viprd1 || B.viprd2) {
                $("#no-message").remove();
            }
            if (B.viprd1) {
                $("#my-vip-rs-a").before('<a href="http://www.58pic.com/index.php?m=user&a=vipRecord">' + B.viprd1 + "</a>");
            }
            if (B.viprd2) {
                $("#my-vip-rs-a").before('<a href="http://www.58pic.com/index.php?m=user&a=vipRecord">' + B.viprd2 + "</a>");
            }
        });
    }
    $(".user-new").show();
}).mouseout(function() {
    $(".user-new").hide();
});

$(".gotoout").click(function() {
    var A = $.trim($(this).attr("goto"));
    if (A) {
        window.open(A, "_blank");
    }
});