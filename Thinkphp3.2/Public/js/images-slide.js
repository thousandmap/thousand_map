/*  轮播图  原效果 js分离   */
$(document).ready(function () {
        $(".tabs").tabs(".images > div", {
            effect: "horizontal",
            fadeInSpeed: 700,
            fadeOutSpeed: 700,
            rotate: !0,
            autoplay: !1,
            interval: 7e3
        }).slideshow(), $(".slide").mouseenter(function () {
            $(".slide .tabBtn").fadeIn(500);
        }), $(".slide").mouseleave(function () {
            $(".slide .tabBtn").fadeOut(500);
        })
        $(".slide .images .slideLazy").each(function () {
            var slideTitle = $(this).attr("data-title");
            var slideUrl = $(this).attr("data-url");
            var html = '<img src="' + slideUrl + '" alt="' + slideTitle +
                '" width="1200" height="340" />';
            // $(this).append(html);
        });
        $(".tabs").data("slideshow").play();
    }),
    function (a, b) {
        var c, d, e = b.event;
        e.special.smartresize = {
            setup: function () {
                b(this).bind("resize", e.special.smartresize.handler);
            },
            teardown: function () {
                b(this).unbind("resize", e.special.smartresize.handler);
            },
            handler: function (a, b) {
                var d = this,
                    f = arguments;
                a.type = "smartresize", c && clearTimeout(c), c = setTimeout(function () {
                    e.dispatch.apply(d, f);
                }, "execAsap" === b ? 0 : 100);
            }
        }, b.fn.smartresize = function (a) {
            return a ? this.bind("smartresize", a) : this.trigger("smartresize", ["execAsap"]);
        }, b.Mason = function (a, c) {
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
            _filterFindBricks: function (a) {
                var b = this.options.itemSelector;
                return b ? a.filter(b).add(a.find(b)) : a;
            },
            _getBricks: function (a) {
                var b = this._filterFindBricks(a).css({
                    position: "absolute"
                }).addClass("masonry-brick");
                return b;
            },
            _create: function (c) {
                var d, e, f, g, h, i;
                this.options = b.extend(!0, {}, b.Mason.settings, c), this.styleQueue = [], d = this.element[0].style, this.originalStyle = {
                    height: d.height || ""
                }, e = this.options.containerStyle;
                for (f in e) this.originalStyle[f] = d[f] || "";
                this.element.css(e), this.horizontalDirection = this.options.isRTL ? "right" : "left", g = this.element.css("padding-" + this.horizontalDirection), h = this.element.css("padding-top"), this.offset = {
                    x: g ? parseInt(g, 10) : 0,
                    y: h ? parseInt(h, 10) : 0
                }, this.isFluid = this.options.columnWidth && "function" == typeof this.options.columnWidth, i = this, setTimeout(function () {
                    i.element.addClass("masonry");
                }, 0), this.options.isResizable && b(a).bind("smartresize.masonry", function () {
                    i.resize();
                }), this.reloadItems();
            },
            _init: function (a) {
                this._getColumns(), this._reLayout(a);
            },
            option: function (a) {
                b.isPlainObject(a) && (this.options = b.extend(!0, this.options, a));
            },
            layout: function (a, b) {
                var c, d, e, f, g, h, i;
                for (c = 0, d = a.length; d > c; c++) this._placeBrick(a[c]);
                if (e = {}, e.height = Math.max.apply(Math, this.colYs), this.options.isFitWidth) {
                    for (f = 0, c = this.cols; --c && 0 === this.colYs[c];) f++;
                    e.width = (this.cols - f) * this.columnWidth - this.options.gutterWidth;
                }
                for (this.styleQueue.push({
                        $el: this.element,
                        style: e
                    }), h = this.isLaidOut ? this.options.isAnimated ? "animate" : "css" : "css", i = this.options.animationOptions, c = 0, d = this.styleQueue.length; d > c; c++) g = this.styleQueue[c], g.$el[h](g.style, i);
                this.styleQueue = [], b && b.call(a), this.isLaidOut = !0;
            },
            _getColumns: function () {
                var a = this.options.isFitWidth ? this.element.parent() : this.element,
                    b = a.width();
                this.columnWidth = this.isFluid ? this.options.columnWidth(b) : this.options.columnWidth || this.$bricks.outerWidth(!0) || b, this.columnWidth += this.options.gutterWidth, this.cols = Math.floor((b + this.options.gutterWidth) / this.columnWidth), this.cols = Math.max(this.cols, 1);
            },
            _placeBrick: function (a) {
                var c, d, e, f, g, h, i, j, k, l, m, n = b(a),
                    o = Math.ceil(n.outerWidth(!0) / this.columnWidth);
                if (o = Math.min(o, this.cols), 1 === o) d = this.colYs;
                else
                    for (c = this.cols + 1 - o, d = [], f = 0; c > f; f++) e = this.colYs.slice(f, f + o), d[f] = Math.max.apply(Math, e);
                for (g = Math.min.apply(Math, d), h = 0, i = 0, j = d.length; j > i; i++)
                    if (d[i] === g) {
                        h = i;
                        break;
                    }
                for (k = {
                        top: g + this.offset.y
                    }, k[this.horizontalDirection] = this.columnWidth * h + this.offset.x, this.styleQueue.push({
                        $el: n,
                        style: k
                    }), l = g + n.outerHeight(!0), m = this.cols + 1 - j, i = 0; m > i; i++) this.colYs[h + i] = l;
            },
            resize: function () {
                var a = this.cols;
                this._getColumns(), (this.isFluid || this.cols !== a) && this._reLayout();
            },
            _reLayout: function (a) {
                var b = this.cols;
                for (this.colYs = []; b--;) this.colYs.push(0);
                this.layout(this.$bricks, a);
            },
            reloadItems: function () {
                this.$bricks = this._getBricks(this.element.children());
            },
            reload: function (a) {
                this.reloadItems(), this._init(a);
            },
            appended: function (a, b, c) {
                if (b) {
                    this._filterFindBricks(a).css({
                        top: this.element.height()
                    });
                    var d = this;
                    setTimeout(function () {
                        d._appended(a, c);
                    }, 1);
                } else this._appended(a, c);
            },
            _appended: function (a, b) {
                var c = this._getBricks(a);
                this.$bricks = this.$bricks.add(c), this.layout(c, b);
            },
            remove: function (a) {
                this.$bricks = this.$bricks.not(a), a.remove();
            },
            destroy: function () {
                var c, d;
                this.$bricks.removeClass("masonry-brick").each(function () {
                    this.style.position = "", this.style.top = "", this.style.left = "";
                }), c = this.element[0].style;
                for (d in this.originalStyle) c[d] = this.originalStyle[d];
                this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"), b(a).unbind(".masonry");
            }
        }, b.fn.imagesLoaded = function (a) {
            function c() {
                a.call(e, f);
            }

            function d(a) {
                var e = a.target;
                e.src !== h && -1 === b.inArray(e, i) && (i.push(e), --g <= 0 && (setTimeout(c), f.unbind(".imagesLoaded", d)));
            }
            var e = this,
                f = e.find("img").add(e.filter("img")),
                g = f.length,
                h = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
                i = [];
            return g || c(), f.bind("load.imagesLoaded error.imagesLoaded", d).each(function () {
                var a = this.src;
                this.src = h, this.src = a;
            }), e;
        }, d = function (b) {
            a.console && a.console.error(b);
        }, b.fn.masonry = function (a) {
            if ("string" == typeof a) {
                var c = Array.prototype.slice.call(arguments, 1);
                this.each(function () {
                    var e = b.data(this, "masonry");
                    return e ? b.isFunction(e[a]) && "_" !== a.charAt(0) ? (e[a].apply(e, c), void 0) : (d("no such method '" + a + "' for masonry instance"), void 0) : (d("cannot call methods on masonry prior to initialization; attempted to call method '" + a + "'"), void 0);
                });
            } else this.each(function () {
                var c = b.data(this, "masonry");
                c ? (c.option(a || {}), c._init()) : b.data(this, "masonry", new b.Mason(a, this));
            });
            return this;
        };
    }(window, jQuery),
    function (a) {
        function b(b, c, d) {
            var f, g = this,
                h = b.add(this),
                i = b.find(d.tabs),
                j = c.jquery ? c : b.children(c);
            i.length || (i = b.children()), j.length || (j = b.parent().find(c)), j.length || (j = a(c)), a.extend(this, {
                click: function (c, j) {
                    var k, l, m = i.eq(c),
                        n = !b.data("tabs");
                    if ("string" == typeof c && c.replace("#", "") && (m = i.filter('[href*="' + c.replace("#", "") + '"]'), c = Math.max(i.index(m), 0)), d.rotate) {
                        if (k = i.length - 1, 0 > c) return g.click(k, j);
                        if (c > k) return g.click(0, j);
                    }
                    if (!m.length) {
                        if (f >= 0) return g;
                        c = d.initialIndex, m = i.eq(c);
                    }
                    return c === f ? g : (j = j || a.Event(), j.type = "onBeforeClick", h.trigger(j, [c]), j.isDefaultPrevented() ? void 0 : (l = n ? d.initialEffect && d.effect || "default" : d.effect, e[l].call(g, c, function () {
                        f = c, j.type = "onClick", h.trigger(j, [c]);
                    }), i.removeClass(d.current), m.addClass(d.current), g));
                },
                getConf: function () {
                    return d;
                },
                getTabs: function () {
                    return i;
                },
                getPanes: function () {
                    return j;
                },
                getCurrentPane: function () {
                    return j.eq(f);
                },
                getCurrentTab: function () {
                    return i.eq(f);
                },
                getIndex: function () {
                    return f;
                },
                next: function () {
                    return g.click(f + 1);
                },
                prev: function () {
                    return g.click(f - 1);
                },
                destroy: function () {
                    return i.off(d.event).removeClass(d.current), j.find('a[href^="#"]').off("click.T"), g;
                }
            }), a.each("onBeforeClick,onClick".split(","), function (b, c) {
                a.isFunction(d[c]) && a(g).on(c, d[c]), g[c] = function (b) {
                    return b && a(g).on(c, b), g;
                };
            }), d.history && a.fn.history && (a.tools.history.init(i), d.event = "history"), i.each(function (b) {
                a(this).on(d.event, function (a) {
                    return g.click(b, a), a.preventDefault();
                });
            }), j.find('a[href^="#"]').on("click.T", function (b) {
                g.click(a(this).attr("href"), b);
            }), location.hash && "a" == d.tabs && b.find('[href="' + location.hash + '"]').length ? g.click(location.hash) : (0 === d.initialIndex || d.initialIndex > 0) && g.click(d.initialIndex);
        }
        a.tools = a.tools || {
            version: "v1.2.7"
        }, a.tools.tabs = {
            conf: {
                tabs: "a",
                current: "current",
                onBeforeClick: null,
                onClick: null,
                effect: "default",
                initialEffect: !1,
                initialIndex: 0,
                event: "click",
                rotate: !1,
                slideUpSpeed: 400,
                slideDownSpeed: 400,
                history: !1
            },
            addEffect: function (a, b) {
                e[a] = b;
            }
        };
        var c, d, e = {
            "default": function (a, b) {
                this.getPanes().hide().eq(a).show(), b.call();
            },
            fade: function (a, b) {
                var c = this.getConf(),
                    d = c.fadeOutSpeed,
                    e = this.getPanes();
                d ? e.fadeOut(d) : e.hide(), e.eq(a).fadeIn(c.fadeInSpeed, b);
            },
            slide: function (a, b) {
                var c = this.getConf();
                this.getPanes().slideUp(c.slideUpSpeed), this.getPanes().eq(a).slideDown(c.slideDownSpeed, b);
            },
            ajax: function (a, b) {
                this.getPanes().eq(0).load(this.getTabs().eq(a).attr("href"), b);
            }
        };
        a.tools.tabs.addEffect("horizontal", function (b, e) {
            if (!c) {
                var f = this.getPanes().eq(b),
                    g = this.getCurrentPane();
                d || (d = this.getPanes().eq(0).width()), c = !0, f.show(), g.animate({
                    width: 0
                }, {
                    step: function (a) {
                        f.css("width", d - a);
                    },
                    complete: function () {
                        a(this).hide(), e.call(), c = !1;
                    }
                }), g.length || (e.call(), c = !1);
            }
        }), a.fn.tabs = function (c, d) {
            var e = this.data("tabs");
            return e && (e.destroy(), this.removeData("tabs")), a.isFunction(d) && (d = {
                onBeforeClick: d
            }), d = a.extend({}, a.tools.tabs.conf, d), this.each(function () {
                e = new b(a(this), c, d), a(this).data("tabs", e);
            }), d.api ? e : this;
        };
    }(jQuery),
    function (a) {
        function b(b, c) {
            function d(c) {
                var d = a(c);
                return d.length < 2 ? d : b.parent().find(c);
            }

            function e() {
                f = setTimeout(function () {
                    j.next();
                }, c.interval);
            }
            var f, g, h = this,
                i = b.add(this),
                j = b.data("tabs"),
                k = !0,
                l = d(c.next).click(function () {
                    j.next();
                }),
                m = d(c.prev).click(function () {
                    j.prev();
                });
            a.extend(h, {
                getTabs: function () {
                    return j;
                },
                getConf: function () {
                    return c;
                },
                play: function () {
                    if (f) return h;
                    var b = a.Event("onBeforePlay");
                    return i.trigger(b), b.isDefaultPrevented() ? h : (k = !1, i.trigger("onPlay"), i.on("onClick", e), e(), h);
                },
                pause: function () {
                    if (!f) return h;
                    var b = a.Event("onBeforePause");
                    return i.trigger(b), b.isDefaultPrevented() ? h : (f = clearTimeout(f), i.trigger("onPause"), i.off("onClick", e), h);
                },
                resume: function () {
                    k || h.play();
                },
                stop: function () {
                    h.pause(), k = !0;
                }
            }), a.each("onBeforePlay,onPlay,onBeforePause,onPause".split(","), function (b, d) {
                a.isFunction(c[d]) && a(h).on(d, c[d]), h[d] = function (b) {
                    return a(h).on(d, b);
                };
            }), c.autopause && j.getTabs().add(l).add(m).add(j.getPanes()).hover(h.pause, h.resume), c.autoplay && h.play(), c.clickable && j.getPanes().click(function () {
                j.next();
            }), j.getConf().rotate || (g = c.disabledClass, j.getIndex() || m.addClass(g), j.onBeforeClick(function (a, b) {
                m.toggleClass(g, !b), l.toggleClass(g, b == j.getTabs().length - 1);
            }));
        }
        var c;
        c = a.tools.tabs.slideshow = {
            conf: {
                next: ".forward",
                prev: ".backward",
                disabledClass: "disabled",
                autoplay: !1,
                autopause: !0,
                interval: 3e3,
                clickable: !0,
                api: !1
            }
        }, a.fn.slideshow = function (d) {
            var e = this.data("slideshow");
            return e ? e : (d = a.extend({}, c.conf, d), this.each(function () {
                e = new b(a(this), d), a(this).data("slideshow", e);
            }), d.api ? e : this);
        };
    }(jQuery)