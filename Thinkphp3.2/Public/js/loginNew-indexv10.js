$(function () {
    $("#img-captcha").click(function () {
        $(this).attr('src', 'http://www.58pic.com/index.php?m=userinfo&a=getImgCaptch&v=' + new Date().getTime())
    });
    $("#img-captcha2").click(function () {
        $(this).attr('src', 'http://www.58pic.com/index.php?m=userinfo&a=getImgCaptch&v=' + new Date().getTime())
    });
    $('.j-phoneLogin,.j-accountLogin').on('click', function () {
        var oLoginWrap = $(this).closest('.login-wrap');
        $(".geetest_logo").attr('href', 'javascript:void(0);');
        oLoginWrap.find('.phone-box,.account-box').hide();
        if ($(this).hasClass('j-phoneLogin')) {
            if ($("#img-captcha").attr('src') == '') {
                $.post('http://www.58pic.com/index.php?m=userinfo&a=getImgCaptchStatus', {}, function (data) {
                    if (data.imgStatus == 1) {
                        login.imgCodeStatus = 1;
                        $("#sendcode-captcha").css('display', 'none')
                    } else {
                        login.imgCodeStatus = 0;
                        $("#img-captcha").click();
                        $("#sendcode-captcha").css('display', 'block')
                    }
                }, 'json')
            }
            oLoginWrap.find('.phone-box').show();
            $("#statis-enroll").attr('site', '9');
            $("#statis-qq").attr('site', '10');
            $("#statis-wx").attr('site', '11');
            $("#statis-sina").attr('site', '12')
        } else {
            $("#statis-enroll").attr('site', '16');
            $("#statis-qq").attr('site', '17');
            $("#statis-wx").attr('site', '18');
            $("#statis-sina").attr('site', '19');
            oLoginWrap.find('.account-box').show()
        }
        if (!oLoginWrap.find('.login-footer').is(':hidden')) {
            oLoginWrap.find('.login-footer').hide();
            oLoginWrap.find('.login-others').stop().animate({marginTop: '-100px'}, 200, 'linear', function () {
                $(this).attr('class', 'login-others-cards').removeAttr('style');
                oLoginWrap.find('.login-box').fadeIn(300)
            })
        }
    });
    var login = {
        phoneRule: /^1[34578]\d{9}$/,
        isPhone: 0,
        isCode: 0,
        isAccount: 0,
        isPasswd: 0,
        codeBtnStatus: 1,
        imgCodeStatus: 0,
        init: function () {
            var _this = this;
            $('.login-main input').focus(function () {
                $(this).css('color', '#666');
                $(this).removeClass('danger')
            }).blur(function () {
                var id = $(this).attr('id');
                switch (id) {
                    case'phone':
                        _this.getErrorInfo("#phone", _this.checkPhone());
                        break;
                    case'captcha':
                        _this.getErrorInfo("#captcha", _this.checkCaptcha());
                        break;
                    case'account':
                        _this.getErrorInfo("#account", _this.checkAccount());
                        break;
                    case'passwd':
                        _this.getErrorInfo("#passwd", _this.checkPasswd());
                        break
                }
            });
            $("#captcha").keydown(function (e) {
                if (e.which == '13') {
                    $("#captcha").blur();
                    $("#submit-phone").click()
                }
            });
            $("#passwd").keydown(function (e) {
                if (e.which == '13') {
                    $("#passwd").blur();
                    $("#submit-passwd").click()
                }
            });
            $(".btn-captcha").click(function () {
                _this.checkEnroll()
            });
            $(document).on("click", "#submit-phone", function () {
                if (!_this.getErrorInfo("#phone", _this.checkPhone()))return false;
                if (!_this.getErrorInfo("#captcha", _this.checkCaptcha()))return false;
                _this.loginByPhone()
            });
            _this.loginByAccount()
        },
        loginByPhone: function () {
            var phone = $('#phone').val();
            var captcha = $('#captcha').val();
            $.post("http://www.58pic.com/index.php?m=userinfo&a=loginByCodeNew", {
                username: phone,
                userpass: captcha
            }, function (data) {
                if (data.status == 2) {
                    login.getErrorInfo("#captcha", data['info'])
                } else if (data.status == 0) {
                    login.getErrorInfo("#phone", data['info'])
                } else if (data.status == 1) {
                    location.href = data.data
                }
            }, 'json')
        },
        loginByAccount: function () {
            var _this = this;
            $("#submit-passwd").click(function () {
                if (!_this.getErrorInfo("#account", _this.checkAccount())) {
                    return false
                }
                if (!_this.getErrorInfo("#passwd", _this.checkPasswd())) {
                    return false
                }
                var account = $("#account").val();
                var passwd = $("#passwd").val();
                $.post("http://www.58pic.com/index.php?m=userinfo&a=loginByPasswdNew", {
                    username: account,
                    userpass: passwd,
                    imgCode: $("#img-code2").val()
                }, function (data) {
                    if (data.data >= 3 && data.status != 1) {
                        $(".account-captcha").css('display', 'block');
                        $("#submit-phone").addClass('disabled');
                        $("#img-captcha2").click()
                    }
                    if (data.status == 2) {
                        login.getErrorInfo("#account", data['info'])
                    } else if (data.status == 0) {
                        login.getErrorInfo("#passwd", data['info'])
                    } else if (data.status == 1) {
                        location.href = data.data
                    } else if (data.status == 4) {
                        login.getErrorInfo("#img-code2", data['info'])
                    }
                }, 'json')
            })
        },
        checkLogin: function () {
            if (this.isPhone && this.isCode) {
                return 1
            }
            if (this.isAccount && this.isPasswd) {
                return 2
            }
            return false
        },
        checkAccount: function () {
            var account = $("#account").val();
            login.isAccount = 0;
            if (account == '') {
                $("#submit-passwd").addClass('disabled');
                return '�ʺŲ���Ϊ��!'
            }
            login.isAccount = 1;
            if (login.checkLogin() == 2) {
                $("#submit-passwd").removeClass('disabled')
            }
            return false
        },
        checkPasswd: function () {
            var passwd = $("#passwd").val();
            login.isPasswd = 0;
            if (passwd == '') {
                $("#submit-passwd").addClass('disabled');
                return '���벻��Ϊ��!'
            }
            login.isPasswd = 1;
            if (login.checkLogin() == 2) {
                $("#submit-passwd").removeClass('disabled')
            }
            return false
        },
        checkPhone: function () {
            var phone = $('#phone').val();
            login.isPhone = 0;
            if (phone == '') {
                $("#submit-phone").addClass('disabled');
                return '�ֻ�Ų���Ϊ��!'
            }
            if (!this.phoneRule.test(phone)) {
                $("#submit-phone").addClass('disabled');
                return '�ֻ�Ÿ�ʽ����!'
            }
            login.isPhone = 1;
            if (login.checkLogin() == 1) {
                $("#submit-phone").removeClass('disabled')
            }
            return false
        },
        checkCaptcha: function () {
            var captcha = $('#captcha').val();
            var captchaRull = /^\d{6}$/;
            if (captcha == '') {
                login.isCode = 0;
                $("#submit-phone").addClass('disabled');
                return '��֤�벻��Ϊ��!'
            } else if (!captchaRull.test(captcha)) {
                login.isCode = 0;
                $("#submit-phone").addClass('disabled');
                return '��֤��ӦΪ6λ����!'
            } else {
                login.isCode = 1;
                if (login.checkLogin() == 1) {
                    $("#submit-phone").removeClass('disabled')
                }
                return false
            }
        },
        checkImgCaptcha: function () {
            if (login.imgCodeStatus == 1)return false;
            var imgCaptcha = $('#img-code').val();
            var captchaRull = /^[a-zA-Z]{4}$/;
            if (imgCaptcha == '') {
                return 'ͼ����֤�벻��Ϊ��!'
            } else if (!captchaRull.test(imgCaptcha)) {
                return 'ͼ����֤��ӦΪ4λ��ĸ!'
            } else {
                return false
            }
        },
        captchaKeyUp: (function () {
            var captchaRull = /^\d{6}$/;
            $('#captcha').keyup(function () {
                var captcha = $(this).val();
                if (captchaRull.test(captcha)) {
                    login.isCode = 1;
                    if (login.checkLogin()) {
                        login.getErrorInfo("#captcha", false);
                        $("#submit-phone").removeClass('disabled');
                        return
                    }
                } else {
                    login.isCode = 0;
                    $("#submit-phone").addClass('disabled')
                }
            })
        })(),
        getErrorInfo: function (obj, errorInfo) {
            if (errorInfo) {
                this.getErrorInfo('.login-main input', false);
                var errorInfo = "<span><i class='danger-icon'></i>  " + errorInfo + "</span>";
                $(obj).addClass('danger').nextAll('.warning-text').html(errorInfo).addClass('show');
                return false
            } else {
                $(obj).removeClass('danger').nextAll('.warning-text').removeClass('show');
                return true
            }
        },
        sendCode: function (phone) {
            $.post('http://www.58pic.com/index.php?m=userinfo&a=sendCode', {
                phone: phone,
                sms_tpl: 'login',
                imgCode: $('#img-code').val()
            }, function (data) {
                login.codeBtnStatus = 1;
                if (data.status == 1) {
                    login.getErrorInfo("#phone", false);
                    login.captchaChange()
                } else if (data.status == 2) {
                    if (login.imgCodeStatus == 1) {
                        login.getErrorInfo("#img-captcha", "������ͼ����֤��!");
                        login.imgCodeStatus = 0;
                        $("#sendcode-captcha").css('display', 'block')
                    } else {
                        login.getErrorInfo("#img-captcha", data.info)
                    }
                    $("#img-captcha").click()
                } else if (data.status == 4) {
                    login.getErrorInfo("#img-captcha", data.info);
                    $("#img-captcha").click()
                } else if (data.info != undefined) {
                    login.getErrorInfo("#phone", data.info);
                    $("#img-captcha").click()
                }
            }, 'json')
        },
        time: 60,
        captchaChange: function () {
            var obj = $(".btn-captcha a");
            if (login.time == 60) {
                obj.parent().addClass('disabled')
            }
            if (login.time == 0) {
                login.time = 60;
                obj.html('���·���');
                obj.parent().removeClass('disabled')
            } else {
                obj.html(login.time + 's');
                login.time--;
                setTimeout(function () {
                    login.captchaChange()
                }, 1000)
            }
        },
        checkEnroll: function () {
            if (!login.getErrorInfo("#img-code", login.checkImgCaptcha()))return false;
            if (login.codeBtnStatus == 0) {
                return false
            }
            if (login.checkPhone()) {
                login.getErrorInfo('#phone', login.checkPhone());
                return false
            }
            var phone = $('#phone').val();
            $.ajax({
                type: 'post',
                url: 'http://www.58pic.com/index.php?m=userinfo&a=checkPhone',
                data: {phone: phone},
                async: false,
                dataType: 'json',
                success: function (data) {
                    if (data.status == '2') {
                        var errorInfo = '���ֻ�Ż�δע�ᣬ<a href="http://www.58pic.com/index.php?m=loginNew&a=enroll" class="text-green">ȥע��</a>';
                        login.getErrorInfo("#phone", errorInfo);
                        login.isPhone = 0;
                        login.codeBtnStatus = 1
                    } else {
                        login.codeBtnStatus = 0;
                        login.sendCode(phone);
                        login.isPhone = 1
                    }
                }
            })
        }
    };
    login.init();
    var statis = {
        init: function () {
            var site = 1;
            $.getJSON("http://stats.58pic.com/58pic/index.php?m=staLogin&a=index&site=" + site + "&callback=?", function () {
            });
            this.clickStatis()
        }, clickStatis: function () {
            $(document).on('click', '.statis', function () {
                var site = $(this).attr('site');
                $.getJSON("http://stats.58pic.com/58pic/index.php?m=staLogin&a=login&site=" + site + "&callback=?", function () {
                })
            })
        }
    };
    statis.init()
});