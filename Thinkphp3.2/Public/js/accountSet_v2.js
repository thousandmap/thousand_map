$(".outspan").click(function () {
    if ($(this).find(".selectitem").size() > 0) {
        $(this).find(".zonediv").show();
    }
});
$(".zonediv").mouseover(function () {
    $(this).show();
}).mouseout(function () {
    $(this).hide();
});
$(document).on("click", ".si2", function (e2) {
    var thistext2 = $(this).text();
    var selecttext2 = $(this).parent().parent().find(".inspan").text();
    if (thistext2 != selecttext2) {
        $(this).parent().parent().find(".inspan").text(thistext2);
        $(this).parent(".zonediv").hide();
    }
    e2.stopPropagation();
});

$(".si1").click(function (e) {
    var thistext = $(this).text();
    var selecttext = $(this).parent().parent().find(".inspan").text();
    if (thistext != selecttext) {
        $(this).parent().parent().find(".inspan").text(thistext);
        $(this).parent(".zonediv").hide();
        $(".is2").text("请选择");
        $(".zd2").html("");
        $.post(
            "http://www.58pic.com/index.php?m=user&a=getThisMap", {
                "thistext": thistext
            },
            function (data) {
                $(".zd2").html(data);
            }
        );
    }
    e.stopPropagation();
});





//QQ 工作年限 验证
$("input[name='work_year'],input[name='qq']").on('keyup', function () {
    var str = $(this).val();
    var qqReg = /^[1-9][0-9]{4,9}$/;
    var workReg = /^[0-9]{1,2}$/;
    var oParent = $(this).parent().find('.warning-text');
    var result;
    if (str != '') {
        if ($(this).attr('name') == 'qq') {
            result = qqReg.test(str);
        } else if ($(this).attr('name') == 'work_year') {
            result = workReg.test(str);
        }
        if (result) {
            oParent.hide();
            $("#submitButton").removeClass('disabled');
        } else {
            oParent.show();
            $("#submitButton").addClass('disabled');
        }
    }
})
//昵称验证
// $("input[name='nickname']").on('input propertychange', function () {
//     var str = $(this).val();
//     var oParent = $(this).parent().find('.warning-text');
//     var result;
//     if (str.length >= 20) {
//         oParent.text('昵称长度不得超过20个字符').show();
//         $("#submitButton").addClass('disabled');
//         return;
//     } else if (str == '') {
//         $("input[name='nickname']").parent().find('.warning-text').text('昵称不能为空').show();
//         $("#submitButton").addClass('disabled');
//         return;
//     }
//     $.post("http://www.58pic.com/index.php?m=user&a=strIsIllegal", {
//         "str": str
//     }, function (data) {
//         result = /^[\u4E00-\u9FA5a-z0-9\.\_]+$/i.test(str);
//         if (!result) {
//             oParent.text('请输入正确的昵称[包含中英文数字、小数点、下划线]').show();
//             $("#submitButton").addClass('disabled');
//         } else if (data == '1') {
//             oParent.text('昵称中包含违禁字').show();
//             $("#submitButton").addClass('disabled');
//         } else {
//             oParent.hide();
//             $("#submitButton").removeClass('disabled');
//         }
//     });

// })


$("#submitButton").click(function () {
    var zone1 = $.trim($(".is1").text());
    if (zone1.length == 0 || zone1 == "请选择") {
        zone1 = "";
    }
    var zone2 = $.trim($(".is2").text());
    if (zone2.length == 0 || zone2 == "请选择") {
        zone2 = "";
    }
    var work_year = $.trim($("input[name='work_year']").val());
    if (work_year.length == 0) {
        work_year = "";
    }
    var is_jd = 0;
    // if ($("input[name='is_jd']")[0].checked) {
    //     is_jd = 1;
    // }
    var qq = $.trim($("input[name='qq']").val());
    var drss = $.trim($("input[name='drss']").val());
    // alert(drss);
    // if (is_jd == 1 && qq.length == 0) {
    //     alert("请填写您的QQ号码");
    //     return false;
    // }
    if (qq.length == 0) {
        qq = "";
    }

    //添加验证
    var sex = '';
    if ($("input[name='sex']")[0].checked) {
        sex = 1;
    }
    if ($("input[name='sex']")[1].checked) {
        sex = 2;
    }
    var job = $.trim($(".job_name").find('select').val())
    if (job.length == 0 || job == "请选择") {
        job = "";
    }
    var job_type = $.trim($(".job_type").find('select').val())
    if (job_type.length == 0 || job_type == "请选择") {
        job_type = "";
    }
    var useryear = $.trim($(".sel_year").val());
    var usermonth = $.trim($(".sel_month").val());
    var userday = $.trim($(".sel_day").val());
   

    var nickname = $.trim($("input[name='nickname']").val());
    $.post(
        "http://www.58pic.com/index.php?m=user&a=saveAccountSet", {
            "zone1": zone1,
            "zone2": zone2,
            "job": job,
            "work_year": work_year,
            "qq": qq,
            // "is_jd": is_jd,
            //add
            "sex": sex,
            "job_type": job_type,
            "useryear": useryear,
            "usermonth": usermonth,
            "userday": userday,
            "drss": drss,
            // "nickname": nickname
        },
        function (data) {
            if (data == "3") {
                alert("请填写正确的QQ号码");
            } else if (data == "4") {
                alert("工作年限请填写大于0的整数");
            } else if (data == "5") {
                alert("该QQ号码与你绑定的QQ重复");
            } else if (data == "1") {
                alert("保存成功");
            } else {
                alert("保存失败");
            }
        }
    );
});