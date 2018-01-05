function initalize() {
    var a, b, c, d, e, f, g, h, i;
    window.innerWidth ? a = window.innerWidth : document.body && document.body.clientWidth && (a = document.body.clientWidth),
    document.documentElement && document.documentElement.clientWidth && (a = document.documentElement.clientWidth),
    1152 > a && (a = 1152), b = 236 * parseInt((a - 261) / 236) + 261, c = parseInt((a - 261) / 236),
        b = 236 * c + 268, d = 236 * c + 262, e = 236 * c - 177, f = 236 * c + 265, g = 236 * c + 244 + 11,
        h = f / 2 - 60, i = 236 * c - 330, document.getElementById("auto_list1").style.width = b + "px",
        document.getElementById("auto_list2").style.width = f + "px", document.getElementById("links_ship").style.width = f + "px",
        document.getElementById("list_11").style.width = f + "px", document.getElementById("wtTop").style.width = d + "px",
        document.getElementById("w1030").style.width = f + "px", document.getElementById("wtTop2").style.width = d + "px",
        document.getElementById("header-searchForm").style.width = e + "px", document.getElementById("js-so-kw").style.width = i + "px",
        document.getElementById("auto_listbr").style.width = g + "px", null != document.getElementById("listBox") && (document.getElementById("listBox").style.width = b + 10 + "px"),
    null != document.getElementById("yc_1") && (document.getElementById("yc_1").style.width = h + "px"),
    null != document.getElementById("yc_2") && (document.getElementById("yc_2").style.width = h + "px");
}

function lazy() {
    / MSIE(5\.5 | 6) /.test(navigator.userAgent) ? $("img.myimgbox,img.lazyload").each(function() {
        this.src = $(this).attr("data-original");
    }) : ($("img.myimgbox").lazyload({
        resize: !0,
        resizeW: 202,
        resizeH: 85
    }), $("img.lazyload").lazyload({
        threshold: 250
    }));
}

function cookie(a) {
    var c, d, b = document.cookie.split("; ");
    for (new Object(), c = 0; c < b.length; c++) if (d = b[c].split("="), d[0] == a) return unescape(d[1]);
    return "";
}

function showLimitCnt(a, b) {
    var c = '<div class="limitBg" style="display:none;"></div><div class="limitMain" style="display:none;"><div class="limitTitle">?á??</div><div class="limitCnt"><p>?§??????' + a + "?ò??????????????</p><p>???? " + b + ' ?è????????????...</p><p>???ì <a href="/?m=login" target="_blank" class="loginLink">????</a> ?ò <a href="/?m=login&a=register" target="_blank" class="loginLink">×??á</a></p><div class="socialBox"><a href="/?m=login&a=snsLogin&type=qq&ref=false" target="_blank" class="qqLogin"></a><a href="/?m=login&a=snsLogin&type=sina&ref=false" target="_blank" class="sinaLogin"></a></div></div></div>';
    $("body").append(c), $(".limitBg").show(), $(".limitMain").show(), $(".limitBg").css({
        height: getWindowHeight() + $(window).height() + "px",
        width: "100%"
    }), $(".limitMain").css({
        left: ($(window).width() - 375) / 2 + "px",
        top: ($(window).height() - 230) / 2 + getWindowHeight() + "px"
    });
}

function getWindowHeight() {
    var a = 0;
    return window.innerHeight ? a = window.pageYOffset : document.documentElement && document.documentElement.scrollTop ? a = document.documentElement.scrollTop : document.body && (a = document.body.scrollTop),
        a;
}

function loadHeadNav() {
    $("#headNav_loaded").length || $.ajax({
        type: "POST",
        async: !1,
        url: "http://www.58pic.com/index.php?m=ajax1&a=getHeadNav",
        data: {},
        dataType: "json",
        success: function(a) {
            $("#header-simpnav").prepend(a.data);
        }
    });
}

function cutString(a, b) {
    if (2 * a.length <= b) return a;
    for (var c = 0, d = "", e = 0; e < a.length; e++) if (d += a.charAt(e), a.charCodeAt(e) > 128) {
        if (c += 2, c >= b) return d.substring(0, d.length - 1);
    } else if (c += 1, c >= b) return d.substring(0, d.length - 2);
    return d;
}

function getStorage(a, b) {
    var d, e, c = window.localStorage;
    return
    c ? (d = c.getItem('new-'+a), e = parseInt(c.getItem(a + "time")), null != typeof d && new Date().getTime() - e < 864e5 ? ($("#keyup_d").html(d).css({
        top: "43px",
        width: b - 1 + "px"
    }).show(), $("#keyup_d .sokeyup_2").width(b - 163), 1) : (c.removeItem(a), c.removeItem(e),
        0)) : 0;
}
function getStorage1(a, b) {
    var d, e, c = window.localStorage;
    a = 'new-'+a;
    d = c.getItem(a);
    return c ? (d = c.getItem(a), e = parseInt(c.getItem(a + "time")), null != typeof d && new Date().getTime() - e < 864e5 ? ($(".search-res1").html(d).show(),1) : (c.removeItem(a), c.removeItem(e),
        0)) : 0;
}
function getStorage2(a, b) {
    var d, e, c = window.localStorage;
    a = 'new-'+a;
    return c ? (d = c.getItem(a), e = parseInt(c.getItem(a + "time")), null != typeof d && new Date().getTime() - e < 864e5 ? ($(".search-res2").html(d).show(),1) : (c.removeItem(a), c.removeItem(e),
        0)) : 0;
}
!function(a) {
    a.fn.lazyload = function(b) {
        var d, c = {
            threshold: 0,
            failurelimit: 0,
            event: "scroll",
            effect: "show",
            container: window,
            resize: !1,
            resizeW: 134,
            resizeH: 134
        };
        return b && a.extend(c, b), d = this, "scroll" == c.event && a(c.container).bind("scroll", function() {
            var e, b = 0;
            d.each(function() {
                if (a.abovethetop(this, c) || a.leftofbegin(this, c)) ; else if (a.belowthefold(this, c) || a.rightoffold(this, c)) {
                    if (b++ > c.failurelimit) return !1;
                } else a(this).trigger("appear");
            }), e = a.grep(d, function(a) {
                return !a.loaded;
            }), d = a(e);
        }), this.each(function() {
            var b = this;
            a(b).one("appear", function() {
                this.loaded || a("<img />").bind("load", function() {
                    if (a(b).hide().attr("src", a(b).attr("data-original"))[c.effect](c.effectspeed).removeClass('lazyload'),
                            b.loaded = !0, 1 == c.resize || "true" == c.resize) try {
                        ImageSize2(b, c.resizeW, c.resizeH);
                    } catch (d) {}
                }).attr("src", a(b).attr("data-original")).removeClass('lazyload');
            }), "scroll" != c.event && a(b).bind(c.event, function() {
                b.loaded || a(b).trigger("appear");
            });
        }), a(c.container).trigger(c.event), this;
    }, a.belowthefold = function(b, c) {
        var d;
        return d = void 0 === c.container || c.container === window ? a(window).height() + a(window).scrollTop() : a(c.container).offset().top + a(c.container).height(),
        d <= a(b).offset().top - c.threshold;
    }, a.rightoffold = function(b, c) {
        var d;
        return d = void 0 === c.container || c.container === window ? a(window).width() + a(window).scrollLeft() : a(c.container).offset().left + a(c.container).width(),
        d <= a(b).offset().left - c.threshold;
    }, a.abovethetop = function(b, c) {
        var d;
        return d = void 0 === c.container || c.container === window ? a(window).scrollTop() : a(c.container).offset().top,
        d >= a(b).offset().top + c.threshold + a(b).height();
    }, a.leftofbegin = function(b, c) {
        var d;
        return d = void 0 === c.container || c.container === window ? a(window).scrollLeft() : a(c.container).offset().left,
        d >= a(b).offset().left + c.threshold + a(b).width();
    }, a.extend(a.expr[":"], {
        "below-the-fold": "$.belowthefold(a, {threshold : 0, container: window})",
        "above-the-fold": "!$.belowthefold(a, {threshold : 0, container: window})",
        "right-of-fold": "$.rightoffold(a, {threshold : 0, container: window})",
        "left-of-fold": "!$.rightoffold(a, {threshold : 0, container: window})"
    });
}(jQuery), function(a, b) {
    "use strict";
    var c, e, d = b.event;
    d.special.smartresize = {
        setup: function() {
            b(this).bind("resize", d.special.smartresize.handler);
        },
        teardown: function() {
            b(this).unbind("resize", d.special.smartresize.handler);
        },
        handler: function(a, b) {
            var e = this, f = arguments;
            a.type = "smartresize", c && clearTimeout(c), c = setTimeout(function() {
                d.dispatch.apply(e, f);
            }, "execAsap" === b ? 0 : 100);
        }
    }, b.fn.smartresize = function(a) {
        return a ? this.bind("smartresize", a) : this.trigger("smartresize", [ "execAsap" ]);
    }, b.Mason = function(a, c) {
        this.element = b(c), this._create(a), this._init();
    }, b.Mason.settings = {
        isResizable: !0,
        isAnimated: !1,
        animationOptions: {
            queue: !1,
            duration: 500
        },
        gutterWidth: 0,
        isRTL: !1,
        isFitWidth: !1,
        containerStyle: {
            position: "relative"
        }
    }, b.Mason.prototype = {
        _filterFindBricks: function(a) {
            var b = this.options.itemSelector;
            return b ? a.filter(b).add(a.find(b)) : a;
        },
        _getBricks: function(a) {
            var b = this._filterFindBricks(a).css({
                position: "absolute"
            }).addClass("masonry-brick");
            return b;
        },
        _create: function(c) {
            var d, e, f, g, h, i;
            this.options = b.extend(!0, {}, b.Mason.settings, c), this.styleQueue = [], d = this.element[0].style,
                this.originalStyle = {
                    height: d.height || ""
                }, e = this.options.containerStyle;
            for (f in e) this.originalStyle[f] = d[f] || "";
            this.element.css(e), this.horizontalDirection = this.options.isRTL ? "right" : "left",
                g = this.element.css("padding-" + this.horizontalDirection), h = this.element.css("padding-top"),
                this.offset = {
                    x: g ? parseInt(g, 10) : 0,
                    y: h ? parseInt(h, 10) : 0
                }, this.isFluid = this.options.columnWidth && "function" == typeof this.options.columnWidth,
                i = this, setTimeout(function() {
                i.element.addClass("masonry");
            }, 0), this.options.isResizable && b(a).bind("smartresize.masonry", function() {
                i.resize();
            }), this.reloadItems();
        },
        _init: function(a) {
            this._getColumns(), this._reLayout(a);
        },
        option: function(a) {
            b.isPlainObject(a) && (this.options = b.extend(!0, this.options, a));
        },
        layout: function(a, b) {
            var c, d, e, f, g, h, i;
            for (c = 0, d = a.length; d > c; c++) this._placeBrick(a[c]);
            if (e = {}, e.height = Math.max.apply(Math, this.colYs), this.options.isFitWidth) {
                for (f = 0, c = this.cols; --c && 0 === this.colYs[c]; ) f++;
                e.width = (this.cols - f) * this.columnWidth - this.options.gutterWidth;
            }
            for (this.styleQueue.push({
                $el: this.element,
                style: e
            }), h = this.isLaidOut && this.options.isAnimated ? "animate" : "css", i = this.options.animationOptions,
                     c = 0, d = this.styleQueue.length; d > c; c++) g = this.styleQueue[c], g.$el[h](g.style, i);
            this.styleQueue = [], b && b.call(a), this.isLaidOut = !0;
        },
        _getColumns: function() {
            var a = this.options.isFitWidth ? this.element.parent() : this.element, b = a.width();
            this.columnWidth = this.isFluid ? this.options.columnWidth(b) : this.options.columnWidth || this.$bricks.outerWidth(!0) || b,
                this.columnWidth += this.options.gutterWidth, this.cols = Math.floor((b + this.options.gutterWidth) / this.columnWidth),
                this.cols = Math.max(this.cols, 1);
        },
        _placeBrick: function(a) {
            var c, d, e, f, g, i, j, k, l, m, n, o, h = b(a);
            if (c = Math.ceil(h.outerWidth(!0) / this.columnWidth), c = Math.min(c, this.cols),
                1 === c) e = this.colYs; else for (d = this.cols + 1 - c, e = [], g = 0; d > g; g++) f = this.colYs.slice(g, g + c),
                e[g] = Math.max.apply(Math, f);
            for (i = Math.min.apply(Math, e), j = 0, k = 0, l = e.length; l > k; k++) if (e[k] === i) {
                j = k;
                break;
            }
            for (m = {
                top: i + this.offset.y
            }, m[this.horizontalDirection] = this.columnWidth * j + this.offset.x, this.styleQueue.push({
                $el: h,
                style: m
            }), n = i + h.outerHeight(!0), o = this.cols + 1 - l, k = 0; o > k; k++) this.colYs[j + k] = n;
        },
        resize: function() {
            var a = this.cols;
            this._getColumns(), (this.isFluid || this.cols !== a) && this._reLayout();
        },
        _reLayout: function(a) {
            var b = this.cols;
            for (this.colYs = []; b--; ) this.colYs.push(0);
            this.layout(this.$bricks, a);
        },
        reloadItems: function() {
            this.$bricks = this._getBricks(this.element.children());
        },
        reload: function(a) {
            this.reloadItems(), this._init(a);
        },
        appended: function(a, b, c) {
            if (b) {
                this._filterFindBricks(a).css({
                    top: this.element.height()
                });
                var d = this;
                setTimeout(function() {
                    d._appended(a, c);
                }, 1);
            } else this._appended(a, c);
        },
        _appended: function(a, b) {
            var c = this._getBricks(a);
            this.$bricks = this.$bricks.add(c), this.layout(c, b);
        },
        remove: function(a) {
            this.$bricks = this.$bricks.not(a), a.remove();
        },
        destroy: function() {
            var c, d;
            this.$bricks.removeClass("masonry-brick").each(function() {
                this.style.position = "", this.style.top = "", this.style.left = "";
            }), c = this.element[0].style;
            for (d in this.originalStyle) c[d] = this.originalStyle[d];
            this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"), b(a).unbind(".masonry");
        }
    }, b.fn.imagesLoaded = function(a) {
        function c() {
            a.call(e, f);
        }
        function d(a) {
            var e = a.target;
            e.src !== h && -1 === b.inArray(e, i) && (i.push(e), --g <= 0 && (setTimeout(c),
                f.unbind(".imagesLoaded", d)));
        }
        var e = this, f = e.find("img").add(e.filter("img")), g = f.length, h = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==", i = [];
        return g || c(), f.bind("load.imagesLoaded error.imagesLoaded", d).each(function() {
            var a = this.src;
            this.src = h, this.src = a;
        }), e;
    }, e = function() {}, b.fn.masonry = function(a) {
        if ("string" == typeof a) {
            var c = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                var d = b.data(this, "masonry");
                return d ? b.isFunction(d[a]) && "_" !== a.charAt(0) ? void d[a].apply(d, c) : void e("no such method '" + a + "' for masonry instance") : void e("cannot call methods on masonry prior to initialization; attempted to call method '" + a + "'");
            });
        } else this.each(function() {
            var c = b.data(this, "masonry");
            c ? (c.option(a || {}), c._init()) : b.data(this, "masonry", new b.Mason(a, this));
        });
        return this;
    };
}(window, jQuery);
var respond_tag = $("#respond_tag").is(":visible");

1 == respond_tag && initalize(), lazy(), $(window).resize(function() {
    1 == respond_tag && initalize(), $("#listBox").masonry({
        itemSelector: ".flow-box",
        singleMode: !0
    }), $(".limitBg").css({
        height: getWindowHeight() + $(window).height() + "px",
        width: "100%"
    }), $(".limitMain").css({
        left: ($(window).width() - 375) / 2 + "px",
        top: ($(window).height() - 230) / 2 + getWindowHeight() + "px"
    });
});
$(function () {
    $('.user-img img,.des-img img,.user-info .head-img2').each(function(){
        var error = false;
        if (!this.complete) {
            error = true;
        }
        if (typeof this.naturalWidth != "undefined" && this.naturalWidth == 0) {
            error = true;
        }
        if(error){
            $(this).bind('error.replaceSrc',function(){
                this.src = "http://icon.qiantucdn.com/images/user/user-default.png";
                $(this).unbind('error.replaceSrc');
            }).trigger('load');
        }
    });
    // 页面加载完毕之后获取头部数据
    $(function(){
        var isMouse = true;
        var getOne = "";
        var getTwo = "";
        var getThree = "";
        $(".qt-header-nav").hover(function(){
            if (isMouse)
            {
                // 网速慢的时候  连续请求多次
                isMouse = false;
                $.post('http://www.58pic.com/index.php?m=publicHeaderM&a=index',{},function(data){
                    if (data.status == 1)
                    {
                        getOne   = data.one;
                        getTwo   = data.two;
                        getThree = data.three;
                        $(".down-boxOne").append(getOne);
                        $(".down-boxTwo").append(getTwo);
                        $(".down-boxThree").append(getThree);
                    }
                },'json')
            }
            else
            {
                $(".down-boxOne").html("");
                $(".down-boxTwo").html("");
                $(".down-boxThree").html("");
                $(".down-boxOne").append(getOne);
                $(".down-boxTwo").append(getTwo);
                $(".down-boxThree").append(getThree);
            }
        })
    });



    $(window).on("scroll", function () {
        if(!$(".qt-header-search").length){
            return;
        }else{
            if (($(".qt-header-search").offset().top + $(".qt-header-search").outerHeight()) <=
                $(this).scrollTop()) {
                $(".header-fixed").css({
                    "top": "0",
                    "visibility": "visible"
                });
                $(".qt-header-search").css({
                    "visibility": "hidden"
                });
            } else {
                $(".header-fixed").css({
                    "top": "-80px",
                    "visibility": "hidden"
                });
                $(".qt-header-search").css({
                    "visibility": "visible"
                });
            }
        }

    });
    /*回到顶部*/
    $("#returnTop").click(function () {
        var speed = 200;
        $('body,html').animate({
            scrollTop: 0
        }, speed);
        return false;
    });

    /*头部搜索*/
    $(".search-input").on("focus", "input", function () {
        $(this).closest(".qt-search-input").css("borderColor", "#10c55b");
    }).on("blur", "input", function () {
        $(this).closest(".qt-search-input").css("borderColor", "#ccc");
    });
    $(".qt-header-search .search-input").on("focus", "input", function () {
        $(this).closest(".qt-header-search").find(".search-res").show();
    });

    $(".qt-header-search .search-type").on("click", function (e) {
        var typeName = $(this).html();
        var temp;
        $(this).next().toggle();
        e.stopPropagation();
        $(".qt-header-search .type-box a").one("click", function () {
            temp = $(this).text();
            $(this).parent().hide();
            $(this).text(typeName);
            $(this).parent().prev().html(temp);
            typeName = undefined;
            $(this).addClass('typeon').siblings().removeClass('typeon');
        });
        $(document).one("click", function () {
            $(".qt-header-search .type-box").hide();
            typeName = undefined;
        });
    });

    $(".qt-header-other .search-type").on("click", function (e) {
        var typeName = $(this).html();
        var temp;
        $(this).next().toggle();
        e.stopPropagation();
        $(".qt-header-other .type-box a").one("click", function () {
            temp = $(this).text();
            $(this).parent().hide();
            $(this).text(typeName);
            $(this).parent().prev().html(temp);
            typeName = undefined;
            $(this).addClass('typeon').siblings().removeClass('typeon');
        })
        $(document).one("click", function () {
            $(".qt-header-other .type-box").hide();
            typeName = undefined;
        })
    });
    /* 搜索框获得焦点 */
    function inputFocus(){
        var t=$('.js-so-new1').val();
        $('.js-so-new1').val('').focus().val(t);
    }
    inputFocus();
    /*头部搜索展开*/
    $(".qt-header-other .search-input").on("focus", "input", function (e) {
        e.stopPropagation();
        $(".qt-header-other .qt-header-nav .nav-list").eq(1).siblings().hide()
        $(".qt-header-other .qt-header-box").addClass("searched");
    });

    $(".qt-header-other").on("click", function (e) {
        e.stopPropagation();
    });
    $(document).on("click", function () {
        $(".qt-header-other .qt-header-box").removeClass("searched")
        $(".qt-header-other .qt-header-nav .nav-list").eq(1).siblings().show();
    });

    $(".qt-header-other .search-input").on("keyup", "input", function () {
        $(this).closest(".qt-header-box").find(".search-res").show();
    });
    $(".search-btn1").click(function() {
        var a = $(".js-so-new1").val().replace(/[ '.,:;*?~`!@\#$%^&+=\-_)(<>{}]|\]|\[|\/|\\\|\"|\|/g, "");
        var type = $('.type-box1 .typeon').attr('data-type');
        var thats = $(this);
        if(type == 2){
            return 0 == a.length ? (alert("请输入要查找的关键词！"), !1) : ($.getJSON("http://www.58pic.com/index.php?m=search&a=ajaxCheckPinyin&jsoncallback=?", {
                kw: a,
                sign: 1,
                type: 2
            }, function(b) {
                return (b.msg = !0) ? (window.location.href = "http://www.58pic.com/tupian/" + b["pinyin"] + "-0-0-default-0-0-" + a + "-0_1_0_0_0-.html",
                    void 0) : void 0;
            }), !1);
        }else if(type == 1){
            return 0 == a.length ? (alert("请输入要查找的关键词！"), !1) : ($.getJSON("http://www.58pic.com/index.php?m=search&a=ajaxCheckPinyin&jsoncallback=?", {
                kw: a,
                sign: 1,
                type: 1
            }, function(b) {
                window.location.href = "http://www.58pic.com/tupian/" + b["pinyin"] + "-0-0-default-0-0-" + a + "-0_0_0_0_0-.html"
            }), !1);
        }else if (type == 3) {
            return 0 == a.length ? (alert("请输入要查找的关键词！"), !1) : ($.getJSON("http://www.58pic.com/index.php?m=search&a=ajaxCheckPinyin&jsoncallback=?", {
                kw: a,
                sign: 1,
                type: 3
            }, function(b) {
                return (b.msg = !0) ? (window.location.href = "http://www.58pic.com/tupian/" + b["pinyin"] + "-0-0-default-0-0-" + a + "-0_3_0_0_0-.html",
                    void 0) : void 0;
            }), !1);
        }else if(type == 0){
            return 0 == a.length ? (alert("请输入要查找的关键词！"), !1) : ($.getJSON("http://www.58pic.com/index.php?m=search&a=ajaxCheckPinyin&jsoncallback=?", {
                kw: a,
                sign: 1,
                type: 0
            }, function(b) {
                window.location.href = 1 == b.msg ? "http://www.58pic.com/tupian/" + b.pinyin + ".html" : "http://www.58pic.com/tupian/0-0-0-default-0-0-" + a + "-0-.html";
            }), !1);
        } else if(type == 4) {
            return 0 == a.length ? (alert("请输入要查找的关键词！"), !1) : ($.getJSON("http://www.58pic.com/index.php?m=search&a=ajaxCheckPinyin&jsoncallback=?", {
                kw: a,
                sign: 1,
                type: 0
            }, function(b) {
                window.location.href = "http://www.58pic.com/tupian/" + b.pinyin +"-0-0-default-0-0-" + a + "-0_2_0_0_0_0_1-.html";
            }), !1);
        } else if(type == 5) {
            var categoryId = thats.attr("data-categordId");
            return 0 == a.length ? (alert("请输入要查找的关键词！"), !1) : ($.getJSON("http://www.58pic.com/index.php?m=search&a=ajaxCheckPinyin&jsoncallback=?", {
                kw: a,
                sign: 1,
                type: 0
            }, function(b) {
                window.location.href = "http://www.58pic.com/tupian/" + b.pinyin + "-" +categoryId+ "-0.html";
            }), !1);
        }
    }),$(".search-btn2").click(function() {

        var a = $(".js-so-new2").val().replace(/[ '.,:;*?~`!@\#$%^&+=\-_)(<>{}]|\]|\[|\/|\\\|\"|\|/g, "");
        var type = $('.type-box2 .typeon').attr('data-type');
        if(type == 2){
            return 0 == a.length ? (alert("请输入要查找的关键词！"), !1) : ($.getJSON("http://www.58pic.com/index.php?m=search&a=ajaxCheckPinyin&jsoncallback=?", {
                kw: a,
                sign: 1,
                type: 2
            }, function(b) {
                return (b.msg = !0) ? (window.location.href = "http://www.58pic.com/tupian/" + b["pinyin"] + "-0-0-default-0-0-" + a + "-0_1_0_0_0-.html",
                    void 0) : void 0;
            }), !1);
        }else if(type == 1){
            return 0 == a.length ? (alert("请输入要查找的关键词！"), !1) : ($.getJSON("http://www.58pic.com/index.php?m=search&a=ajaxCheckPinyin&jsoncallback=?", {
                kw: a,
                sign: 1,
                type: 1
            }, function(b) {
                window.location.href = "http://www.58pic.com/tupian/" + b["pinyin"] + "-0-0-default-0-0-" + a + "-0_0_0_0_0-.html"
            }), !1);
        }else if (type == 3) {
            return 0 == a.length ? (alert("请输入要查找的关键词！"), !1) : ($.getJSON("http://www.58pic.com/index.php?m=search&a=ajaxCheckPinyin&jsoncallback=?", {
                kw: a,
                sign: 1,
                type: 3
            }, function(b) {
                return (b.msg = !0) ? (window.location.href = "http://www.58pic.com/tupian/" + b["pinyin"] + "-0-0-default-0-0-" + a + "-0_3_0_0_0-.html",
                    void 0) : void 0;
            }), !1);
        }else if(type == 0){
            return 0 == a.length ? (alert("请输入要查找的关键词！"), !1) : ($.getJSON("http://www.58pic.com/index.php?m=search&a=ajaxCheckPinyin&jsoncallback=?", {
                kw: a,
                sign: 1,
                type: 0
            }, function(b) {
                window.location.href = 1 == b.msg ? "http://www.58pic.com/tupian/" + b.pinyin + ".html" : "http://www.58pic.com/tupian/0-0-0-default-0-0-" + a + "-0-.html";
            }), !1);
        }
    }),$('.js-so-new1').on('click',function(a){
        var b, c, d, e, f, h;
        b = window.event ? window.event.keyCode : a.which;
        h = $(this).attr('data-isShow');
        if ( c = $(".js-so-new1"), d = c.width(),
            38 != b && 40 != b && 13 != b) {
            if (e = c.val(), "" == e || -1 != e.indexOf("?"))
            {
                var urls = window.location.pathname;
                if (h != 1) {
                    // 没有值得情况下需要查询到用户的历史搜索词以及推荐的内容模块
                    f = "http://www.58pic.com/index.php?m=searchtips&a=searchUserHistoryAtT&kw=" + e + "&urls=" + urls + "&callback=?",
                        $.getJSON(f, function(a) {
                            e = 'new-'+e;
                            "" != a && window.localStorage && (window.localStorage.setItem(e, a), window.localStorage.setItem(e + "time", new Date().getTime()));
                            var name = localStorage[e];

                            $(".search-res1").html(a).show();
                        });
                }
            }
        }
    }),$('.js-so-new2').on('click',function(a){
        var b, c, d, e, f;
        b = window.event ? window.event.keyCode : a.which;
        if ( c = $(".js-so-new2"), d = c.width(),
            38 != b && 40 != b && 13 != b) {
            if (e = c.val(), "" == e || -1 != e.indexOf("?"))
            {
                var urls = window.location.pathname;
                // 没有值得情况下需要查询到用户的历史搜索词以及推荐的内容模块
                f = "http://www.58pic.com/index.php?m=searchtips&a=searchUserHistoryAtT&kw=" + e + "&urls=" + urls + "&callback=?",
                    $.getJSON(f, function(a) {
                        e = 'new-'+e;
                        "" != a && window.localStorage && (window.localStorage.setItem(e, a), window.localStorage.setItem(e + "time", new Date().getTime()));
                        var name = localStorage[e];

                        $(".search-res2").html(a).show();
                    });
            }
        }
    }),$(document).on('keyup','.js-so-new1',function(a){
        var b, c, d, e, f;
        b = window.event ? window.event.keyCode : a.which;
        if ( c = $(".js-so-new1"), d = c.width(),
            38 != b && 40 != b && 13 != b) {
            if (e = c.val(), "" == e || -1 != e.indexOf("?")) return !1;
            if (1 == getStorage1(e, d)) return !1;
            f = "http://www.58pic.com/index.php?m=searchtips&a=searchNew&kw=" + e + "&callback=?",
                $.getJSON(f, function(a) {
                    e = 'new-'+e;
                    "" != a && window.localStorage && (window.localStorage.setItem(e, a), window.localStorage.setItem(e + "time", new Date().getTime()));
                    if("" != a){
                        $(".search-res1").html(a).show();
                    }else{
                        $(".search-res1").hide();
                    }
                });
        }
        if(b == 13){
            $('.search-btn1').trigger('click');
        }
    }),$(document).on('keyup','.js-so-new2',function(a){
        var b, c, d, e, f;
        b = window.event ? window.event.keyCode : a.which;
        if ( c = $(".js-so-new2"), d = c.width(),
            38 != b && 40 != b && 13 != b) {
            if (e = c.val(), "" == e || -1 != e.indexOf("?")) return !1;
            if (1 == getStorage2(e, d)) return !1;
            f = "http://www.58pic.com/index.php?m=searchtips&a=searchNew&kw=" + e + "&callback=?",
                $.getJSON(f, function(a) {
                    e = 'new-'+e;
                    "" != a && window.localStorage && (window.localStorage.setItem(e, a), window.localStorage.setItem(e + "time", new Date().getTime()));
                    if("" != a){
                        $(".search-res2").html(a).show();
                    }else{
                        $(".search-res2").hide();
                    }
                });
        }
        if(b == 13){
            $('.search-btn2').trigger('click');
        }
    }),$(".js-so-new1").blur(function() {
        setTimeout('$(".search-res1").hide()', 200);
    }),$(".js-so-new2").blur(function() {
        setTimeout('$(".search-res2").hide()', 200);
    }),$(".search-res1").on("click",".res-list",function() {
        var b = $(this).children('dd').eq(0).html();
        var urls = $(this).children('dd').eq(0).attr('data-urls');
        if (urls) {
            $(".js-so-new1").val(b);
            window.location.href = urls;
        } else {
            $(".js-so-new1").val(b), $(".search-btn1").trigger("click");
        }
    }),$(".search-res2").on("click",".res-list",function() {
        var b = $(this).children('dd').eq(0).html();
        var urls = $(this).find('dd:eq(0)').attr('data-urls');
        if (urls) {
            $(".js-so-new2").val(b)
            window.location.href = urls;
        } else {
            $(".js-so-new2").val(b), $(".search-btn2").trigger("click");
        }
    }),d = new Date(), e = d.getHours(), e >= 9 && 18 > e ? $(".footer-left img").attr("src", "http://icon.58pic.com/images/qq/qiyeQQ.png") : $(".footer-left img").attr("src", "http://icon.58pic.com/images/qq/qqoffline.png"),
        f = 0, $("#hd_s_picid").length > 0 ? f = 3 : $(".s_add_1#auto_list1").length > 0 && (f = 4),
        $.getJSON("http://www.58pic.com/index.php?m=ajax&callback=?&u=1&type=" + f, function(a) {
            var b, c, d, e, f;
            if (1 == a.is_login) {
                $(".user-info .info-name").html(a.username);
                $(".user-info .u-info-id").html("ID:"+a.uid);
                $(".qt-header-right .vip-center").show();
                $(".user-box").show();
                $(".login-after").show();
                // 企业vip
                if (parseInt(a.qy_vip_flag) == 0) {
                    $(".qy_stThree").show();
                    $(".info-down").find('p').eq(1).addClass("isQY"+a.qy_vip_type);
                } else if (parseInt(a.qy_vip_flag) == 1) {
                    $(".qy_stOne").show();
                    $(".info-down").find('p').eq(1).addClass("isQY"+a.qy_vip_type);
                    $(".user-info .info-vip .QY-c"+a.qy_vip_type).show();
                } else if (parseInt(a.qy_vip_flag) == 2) {
                    $(".qy_stTwo").show();
                    $(".info-down").find('p').eq(1).addClass("isQY"+a.qy_vip_type);
                    $(".qy_stTwo .text-green").text(a.qy_vip_expired);
                    $(".user-info .info-vip .QY-c"+a.qy_vip_type).show();
                }

                if (parseInt(a.vip_flag) == 3) {
                    //  不是共享vip
                    $(".sj_stThree").show();
                } else if (parseInt(a.vip_flag) == 2) {
                    // 普通共享vip
                    $(".sj_stTwo").show();
                    $(".sj_stTwo .text-green").text(a.vip_expired);
                    if (parseInt(a.qy_vip_flag) == 1 || parseInt(a.qy_vip_flag) == 2) {
                        $(".user-info .info-vip .QY-c"+a.qy_vip_type).show();
                    } else {
                        $(".user-info .info-vip .GX-c").show();
                    }
                } else if (parseInt(a.vip_flag) == 1) {
                    // 终身共享vip
                    $(".sj_stOne").show();
                    if (parseInt(a.qy_vip_flag) == 1 || parseInt(a.qy_vip_flag) == 2) {
                        $(".user-info .info-vip .QY-c"+a.qy_vip_type).show();
                    } else {
                        $(".user-info .info-vip .GX-c").show();
                    }
                }

                // 原创
                if (parseInt(a.yc_vip_flag) == 0) {
                    // 不是原创vip
                    $(".yc_stThree").show();
                } else if (parseInt(a.yc_vip_flag) == 1) {
                    // 普通原创vip
                    $(".yc_stTwo").show();
                    $(".yc_stTwo .text-green").text(a.yc_vip_expired);
                    if (parseInt(a.qy_vip_flag) == 1 || parseInt(a.qy_vip_flag) == 2) {
                        $(".user-info .info-vip .QY-c"+a.qy_vip_type).show();
                    } else {
                        $(".user-info .info-vip .YC-c").show();
                    }
                } else if (parseInt(a.yc_vip_flag) == 2) {
                    // 终身原创vip
                    $(".yc_stOne").show();
                    if (parseInt(a.qy_vip_flag) == 1 || parseInt(a.qy_vip_flag) == 2) {
                        $(".user-info .info-vip .QY-c"+a.qy_vip_type).show();
                    } else {
                        $(".user-info .info-vip .YC-c").show();
                    }
                }
                // 办公
                if (parseInt(a.bg_vip_flag) == 0) {
                    // 不是办公vip
                    $(".bg_stThree").show();
                } else if (parseInt(a.bg_vip_flag) == 1) {
                    // 普通办公vip
                    $(".bg_stTwo").show();
                    $(".bg_stTwo .text-green").text(a.bg_vip_expired);
                    if (parseInt(a.qy_vip_flag) == 1 || parseInt(a.qy_vip_flag) == 2) {
                        $(".user-info .info-vip .QY-c"+a.qy_vip_type).show();
                    } else {
                        $(".user-info .info-vip .BG-c").show();
                    }
                } else if (parseInt(a.bg_vip_flag) == 2) {
                    // 终身办公vip
                    $(".bg_stOne").show();
                    if (parseInt(a.qy_vip_flag) == 1 || parseInt(a.qy_vip_flag) == 2) {
                        $(".user-info .info-vip .QY-c"+a.qy_vip_type).show();
                    } else {
                        $(".user-info .info-vip .BG-c").show();
                    }
                }
                // 首先判断vip到期时间
                var nowDate = Date.parse(new Date());
                var gxDate  = Date.parse(new Date(a.vip_expired));
                var ycDate  = Date.parse(new Date(a.yc_vip_expired));
                var bgDate  = Date.parse(new Date(a.bg_vip_expired));
                // 剩余天数
                var numbers = [];
                if (a.yc_vip_flag != 0) {
                    var ycTimes = Math.round((ycDate - nowDate)/86400000);
                    if (ycTimes > 0) {
                        numbers[1] = ycTimes;
                    } else if(ycTimes == -0){
                        numbers[1] = 0;
                    } else {
                        numbers[1] = 111111111111;
                    }
                } else {
                    var ycTimes = 0;
                    numbers[1] = 111111111111;
                }
                if (a.vip_flag != 3) {
                    var gxTimes = Math.round((gxDate - nowDate)/86400000);
                    if (gxTimes > 0) {
                        numbers[0] = gxTimes;
                    } else if (gxTimes == -0){
                        numbers[0] = 0;
                    } else {
                        numbers[0] = 111111111111;
                    }
                } else {
                    var gxTimes = 0;
                    numbers[0] = 111111111111;
                }
                if (a.bg_vip_flag != 0) {
                    var bgTimes = Math.round((bgDate - nowDate)/86400000);
                    if (bgTimes >0) {
                        numbers[2] = bgTimes;
                    } else if (bgTimes == -0) {
                        numbers[2] = 0;
                    } else {
                        numbers[2] = 111111111111;
                    }
                } else {
                    var bgTimes = 0;
                    numbers[2] = 111111111111;
                }
                // 判断着3个时间点的数据
                var minInNumbers = Math.min.apply(Math, numbers);
                var downB        = numbers.indexOf(minInNumbers);
                // 数据获取完毕，之后需要向数据拼接了
                // 首先判断用户是否已经点击过吗？
                function getCookie(name){
                    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
                    if(arr=document.cookie.match(reg))
                        return unescape(arr[2]);
                    else
                        return null;
                }
                var is_click_close = getCookie('user_vips_click_status');
                if (is_click_close != 1 || is_click_close == "")
                {
                    var isInto  = true;
                    var whereis = 0;
                    if (minInNumbers <= 7) {
                        $(".qt-tips").show();
                        if ((ycTimes == gxTimes) && (gxTimes == bgTimes) && ycTimes != 0 && gxTimes != 0 && bgTimes !=0 && bgTimes<=7 && gxTimes <=7 && ycTimes<=7) {
                            whereis = 2;
                            $(".vips_types").html("原创");
                            if (minInNumbers == 0) {
                                $(".vips_days").html("今");
                            } else {
                                $(".vips_days").html(minInNumbers);
                            }
                            $(".vips_jump_urls").attr('href', 'http://www.58pic.com/index.php?m=sponsor&a=indexnew&f=4&t=2');
                            isInto = false;
                        } else if (((ycTimes == gxTimes) && ycTimes != 0 && gxTimes != 0 && ycTimes<=7 && gxTimes<=7) && (downB == 0 || downB == 1)){
                            whereis = 2;
                            $(".vips_types").html("原创");
                            if (minInNumbers == 0) {
                                $(".vips_days").html("今");
                            } else {
                                $(".vips_days").html(minInNumbers);
                            }
                            $(".vips_jump_urls").attr('href', 'http://www.58pic.com/index.php?m=sponsor&a=indexnew&f=4&t=2');
                            isInto = false;
                        } else if (((ycTimes == bgTimes) && ycTimes !=0 && bgTimes !=0 && ycTimes <=7 && bgTimes <=7) && (downB == 1 || downB == 2)) {
                            whereis = 2;
                            $(".vips_types").html("原创");
                            if (minInNumbers == 0){
                                $(".vips_days").html("今");
                            } else {
                                $(".vips_days").html(minInNumbers);
                            }
                            $(".vips_jump_urls").attr('href', 'http://www.58pic.com/index.php?m=sponsor&a=indexnew&f=4&t=2');
                            isInto = false;
                        } else if (((gxTimes == bgTimes) && ycTimes !=0 && bgTimes !=0 && gxTimes<=7 && bgTimes <=7) && (downB == 0 || downB == 2)) {
                            whereis = 3;
                            $(".vips_types").html("办公");
                            if (minInNumbers == 0) {
                                $(".vips_days").html("今");
                            } else {
                                $(".vips_days").html(minInNumbers);
                            }
                            $(".vips_jump_urls").attr('href', 'http://www.58pic.com/index.php?m=sponsor&a=officeVip');
                            isInto = false;
                        }

                        if (isInto) {
                            if (downB == 0) {
                                whereis = 1;
                                $(".vips_types").html("共享");
                                if (minInNumbers == 0) {
                                    $(".vips_days").html("今");
                                } else {
                                    $(".vips_days").html(minInNumbers);
                                }
                                $(".vips_jump_urls").attr('href', 'http://www.58pic.com/index.php?m=sponsor&a=indexnew&f=4&t=1');
                            } else if (downB == 1) {
                                whereis = 2;
                                $(".vips_types").html("原创");
                                if (minInNumbers == 0) {
                                    $(".vips_days").html("今");
                                } else {
                                    $(".vips_days").html(minInNumbers);
                                }
                                $(".vips_jump_urls").attr('href', 'http://www.58pic.com/index.php?m=sponsor&a=indexnew&f=4&t=2');
                            } else if (downB == 2) {
                                whereis = 3;
                                $(".vips_types").html("办公");
                                if (minInNumbers == 0) {
                                    $(".vips_days").html("今");
                                } else {
                                    $(".vips_days").html(minInNumbers);
                                }
                                $(".vips_jump_urls").attr('href', 'http://www.58pic.com/index.php?m=sponsor&a=officeVip');
                            }
                        }
                        // 信息展示出来之后需要将当前用户的基本信息进行记录，用于后期查看用户是否进行充值操作-由于cookie在支付的返回的时候是没有办法获取的
                        $.getJSON('http://ajax.58pic.com/58pic/index.php?m=vipOverTime&a=addUserMessage&id=' + a.uid + '&whereis='+ whereis +'&callback=?',function(data){})
                    }
                }
            } else {
                $(".qt-header-right .vip-center").show();
                // $(".user-box").hide();
                $(".user-message").hide();
                $(".login-before").show();
                $(".sj_stThree").show();
                $(".yc_stThree").show();
                $(".bg_stThree").show();
            }
        }),$(".user_click_bth").on('click',function(a){
        // 设置cookie
        function setCookie(name,value){
            var Days = 24;
            var exp = new Date();
            exp.setTime(exp.getTime() + Days*60*60*1000);
            document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
        }
        var htmls   = $(this).parents('div').find('span').eq(0).text();
        var whereis = 0;
        if (htmls == "原创") {
            whereis = 2;
        } else if (htmls == "共享"){
            whereis = 1;
        } else if (htmls == "办公") {
            whereis = 3;
        }
        //  发送统计的ajax请求
        var idas = $(this).attr('data-ids');
        if (idas == 2)
        {
            $(".qt-tips").hide();
            setCookie('user_vips_click_status',1);
        } else {
            // 只有点击立即充值的才算是统计，设置一下cookie的值用户判断当前用户是在公共页面那个vip到期了，用户充值成功之后判断
            setCookie("public_vip_types", whereis);
        }
        $.getJSON('http://ajax.58pic.com/58pic/index.php?m=vipOverTime&idas=' + idas + '&whereis='+ whereis +'&callback=?',function(data){})
    }),$(".js-so-new1").keyup(function(a){
        var d, e, g = 0;
        if(d = window.event ? window.event.keyCode:a.which,38 == d || 40 == d){
            var index;
            index = $('.search-res1 .dl-hover-class').index();
            if(d == 38){
                index--;
            }else if(d == 40){
                index++;
            }
            $('.search-res1 .res-list').removeClass('dl-hover-class').eq(index).addClass('dl-hover-class');
            var keyword = $('.search-res1 .dl-hover-class').children('.list-name').html();
            $(this).val(keyword);
        }
    }),$(".js-so-new2").keyup(function(a){
        var d, e, g = 0;
        if(d = window.event ? window.event.keyCode:a.which,38 == d || 40 == d){
            var index;
            index = $('.search-res2 .dl-hover-class').index();
            if(d == 38){
                index--;
            }else if(d == 40){
                index++;
            }
            $('.search-res2 .res-list').removeClass('dl-hover-class').eq(index).addClass('dl-hover-class');
            var keyword = $('.search-res2 .dl-hover-class').children('.list-name').html();
            $(this).val(keyword);
        }
    });
});
(function ($) {
    $.fn.model = function () {
        $(this).each(function () {
            var data = $(this).data('model');
            if(data.width){
                $(data.target).find('.model-content').css({
                    width: data.width,
                    height: data.height || 'auto'
                });
            }

            $(this).on('click', function () {
                $(data.target).fadeIn(200)
            })
            $(data.target).on('click', '.model-table-close,.j-close', function () {
                $(data.target).fadeOut(200);
            })
        })
    }
})(jQuery);
(function ($) {
    $.fn.model = function () {
        $(this).each(function () {
            var data = $(this).data('model');
            if(data.width){
                $(data.target).find('.model-content').css({
                    width: data.width,
                    height: data.height || 'auto'
                });
            }

            $(this).on('click', function () {
                $(data.target).fadeIn(200)
            })
            $(data.target).on('click', '.model-table-close,.j-close', function () {
                $(data.target).fadeOut(200);
            })
        })
    }
})(jQuery);
$(function(){
    function setCookie(name,value){
        var Days = 30;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days*24*60*60*1000);
        document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
    }
    function getCookie(name){
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    }
    if(getCookie('message2')!=0){
        $('.user-message.j-message').addClass('notify-yellow');
        setCookie('message2',1);
    }
    var message='<div style="text-align:center;font-size:14px;color:#999;padding:10px 0;">通知</div>'
        +'<div style="border-top:1px solid #f0f0f0;;"><a href="http://www.58pic.com/index.php?m=Blog&a=detail&blog=48" target="_blank" style="font-size:12px;"><i style="background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAQCAYAAADNo/U5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjhCMDlEQUEzNzdFQzExRTdCMEQ2QzkwQTM0RTVFRjNDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjhCMDlEQUE0NzdFQzExRTdCMEQ2QzkwQTM0RTVFRjNDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OEIwOURBQTE3N0VDMTFFN0IwRDZDOTBBMzRFNUVGM0MiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEIwOURBQTI3N0VDMTFFN0IwRDZDOTBBMzRFNUVGM0MiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7HxRl/AAABS0lEQVR42oySu0oDURCGd9cLaGEsvL2AgUAewcpmG0ULMaCIhYWlVZo8QEoVQRARBAvBXovFC17yCoKEdLFRVBCMARXX74fZcCw2yYGP4cyZf87MnOPHceylrSiKtjD1MAw3Xb+fJkJwgFmz7QjC1+QsSBEcYZagDF/Q7573WpCcP7bfhxXIQQZK8O2KAgQn2Gd4BJWwCjOU84DNguofJi7rlrcI13Bjdg7BWdKz3TIItwi3W+URNJ8ywNj60a3LcIHwKrCexr32a4jEl9hzWA+87pZvtkflJuU9dRC9U80Udhpmk5Fv2ORUf4UkVecGvVMejmGXs1OJ9JBFaGi0MEaSPIf3JuqDD92Cr9b6RgQN2OMq4NCeYQIm4Q5GEbz8+xE4mrbXmxRIooYrsAO/lsxr+/dIsqBWTaSYz65+uQ1I/+6NJHuu/0+AAQAOhnHFh5+S3AAAAABJRU5ErkJggg==) no-repeat;display:inline-block;width:13px;height:16px;vertical-align: sub;margin-right: 10px;"></i>关于非法下载/破解下载行为的忠告</a> </div>';
    $('.user-message.j-message').on('mouseleave',function(){
        $(this).removeClass('notify-yellow');
        setCookie('message2',0);
    })
    $('.user-message.j-message .down-box').css({'left':'-108px','width':'248px'});
    $('.user-message.j-message .message-box').css({'width':'248px'}).html(message);
    var currentPos = {
        x: 0,
        y: 0
    };
    var pos = [{
        x: 0,
        y: 0
    }];
    $("body").on("mousemove", function(e) {
        pos.splice(0, pos.length);
        currentPos.x = e.pageX;
        currentPos.y = e.pageY;
        pos.push(currentPos);
        if (pos.length > 10) {
            pos.shift()
        }
    });

    $('body').on('click', '.download-page', function () {
        var j = cookie("auth_id");
        if (j == "") {
            $("#loginBtn").click();
            return false;
        }
        var t = stime || Date.parse(new Date());
        var x = pos[0].x;
        var y = pos[0].y;
        var isClick = $(this).parent().attr('class');
        var isClick = 'x:' + x + ':y:' + y + '/' + isClick + t;
        var auth_id = cookie('auth_id');
        var picid = $(this).attr('data-id');
        var token = base64.encode(isClick);
        if (auth_id != '') {
            var auth = auth_id.split("|");
            var a = isClick + auth[3].substring(0, 10);
            token = base64.encode(a)
        }
        window.open("http://www.58pic.com/index.php?m=show&a=download&id=" + picid + "&token=" + token)
    });
    

    $(".upload-works").on('click', function(){
        var j = cookie("auth_id");
        if (j == "") {
            $("#loginBtn").click();
            return false;
        }
    })

})