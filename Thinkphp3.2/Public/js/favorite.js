$(function () {
    $('.j-model-fav,.j-model-fav-create,.j-model-null').model();
    $('.favirite-box').on('click', '.fav-list', function() {
        $(this).addClass('on').siblings().removeClass('on')
    });
    $('.j-close').click(function() {
        $(this).parents('.qt-model-t').hide()
    });
    $('.model-table-close').click(function() {
        $(this).parents('.qt-model-t').hide()
    });
});
$(document).on("click", ".handle-fav",function(){
    if(cookie('auth_id') == ""){
        $(".login-model").show();return false;
    }
	$('.favorite-error-msg').hide();
    $('#favirite-create .edit-warning').remove();
    $('#favirite-create').find('.create-alert').remove();
    $('#favirite-create .fav-name').val("");
    var string = '<p class="edit-warp create-alert" style="padding-top: 0px">创建后将自动保存在此收藏夹内</p>';
    $('#favirite-create .fav-create').append(string);
    var action = $(this).attr("data-action");
    var picid = $(this).attr("data-id");
    if($('#favirite-all').is(':hidden') && action=="addFav"){
        $.ajax({
            type: "GET",
            url: "http://www.58pic.com/index.php?m=favorPage&a=ajaxGetFavorPage&picid="+picid,
            dataType: "json",
            success: function(ret) {
                if(ret.status == 0){
                    if(ret.info == 0){
                        $('#favirite-null').fadeIn(200);
                        $('#favirite-create #add-page').attr('data-id',picid);
                    }else{
                        $('#favirite-all .favirite-box').find('li').remove();
                        var favorHtml = "";
                        var data = ret.data;
                        for(var i = 0;i<data.length;i++){
                            var check = "";
                            if(i == 0){
                                check = "on";
                            }
                            var url = "background: url('"+data[i].cover_img+"') 100%;background-size:cover;";
                            favorHtml += '<li class="fav-list ' +check+ '" data-id="'+data[i].id+'"><div class="bg" style="'+url+'"></div><p class="h3">'+data[i].pic_num+'个作品</p><p class="h1">'+data[i].name+'</p></li>';
                        }
                        $('#favirite-all .favirite-box').append(favorHtml);
                        $('#favirite-all').fadeIn(200);
                        $('#favirite-all .fav-ajax').attr('data-id',picid);
                    }
                    
                }else{
                    var html = "<p>您已收藏该图片</p>";
                    $("#favirite-success .alert-con .icont-true").next().replaceWith(html);
                    $("#favirite-success").fadeIn(200);
                    setTimeout(function () {
                        $("#favirite-success").fadeOut(200);
                    },2000);
                } 
            }
        });
        return;
    }
    var current = $(this);
    $.ajax({
        type: "POST",
        url: "http://www.58pic.com/index.php?m=user&a=ajaxFav",
        data: {
            action: action,
            picid: picid
        },
        dataType: "json",
        success: function(ret) {
            if (ret.status == true) {
                // current.attr("data-action", ret.data.a);
                current.attr("id", ret.data.i);
                current.children().eq(0).removeClass("on");
                current.children().eq(1).html(parseInt(current.children().eq(1).html())-1);
            } else {
                var html = "<p>您已取消收藏该图片</p>";
                $("#favirite-success .alert-con .icont-true").next().replaceWith(html);
                $("#favirite-success").fadeIn(200);
                setTimeout(function () {
                    $("#favirite-success").fadeOut(200);
                },2000);
                return false;
            }
        }
    });
});
$(document).on("click", ".fav-ajax",
    function() {
        var picidAll = $('#favirite-all .fav-ajax').attr('data-id');
        var picidNone = $('#favirite-create #add-page').attr('data-id');
        var picid;
        (picidAll == '') ? picid = picidNone : picid = picidAll;
        var pageId = $('#favirite-all .fav-list.on').attr('data-id');
        var pageName = $('#favirite-all .fav-list.on .h1').html();
        // if(pageName.length>4){
        //   pageName=pageName.substring(0,4)+"...";
        // }
        var current = $('[data-id='+picid+']').eq(1);
        var action = current.attr("data-action");
        if(action == undefined){
            current = $('[data-id='+picid+']').eq(2);
        }
        $.ajax({
            type: "POST",
            url: "http://www.58pic.com/index.php?m=user&a=ajaxFav",
            data: {
                action: 'addFav',
                picid: picid,
                page_id:pageId
            },
            dataType: "json",
            success: function(ret) {
                if (ret.status == 1) {
                    $('#favirite-all').hide();
                    // current.attr("data-action", ret.data.a);
                    current.attr("id", ret.data.i);
                    var html = "<p>成功保存到<span>"+pageName+"</span></p>";
                    $("#favirite-success .alert-con .icont-true").next().replaceWith(html);
                    $("#favirite-success").fadeIn(200);
                    setTimeout(function () {
                        $("#favirite-success").fadeOut(200);
                    },2000);
                    current.children().eq(0).addClass("on");
                    current.children().eq(1).html(parseInt(current.children().eq(1).html())+1);
                } else {
					var html = "<p>" + ret.info + "</p>";
                    $("#favirite-error .alert-con .icont-error").next().replaceWith(html);
                    $("#favirite-error").fadeIn(200);
                    setTimeout(function () {
                        $("#favirite-error").fadeOut(200);
                    },2000);
                }
            }
        });
        return false;
    });
$('#add-page').click(function(){
    var name = $(".fav-name").val();
    var picid = $('#favirite-all .fav-ajax').attr('data-id');
    if(picid == ''){
        picid = $('#favirite-create #add-page').attr('data-id');
    }
    var current = $('[data-id='+picid+']').eq(1);
    var action = current.attr("data-action");
    if(name.length > 10 || name.length < 3){
        var string = "<p class='edit-warning' style='padding-left:0px;margin-top:0px'><i class='icon-warning'></i>请保持收藏夹名称3到10个字</p>";
        $("#favirite-create .edit-warp").html(string);
        return false;
    }
    if(name.length == 0){
        var string = "<p class='edit-warning' style='padding-left:0px;margin-top:0px'><i class='icon-warning'></i>名称不能为空</p>";
        $("#favirite-create .edit-warp").html(string);
        return false;
    }
    $('#favirite-create .fav-name').val("");
    $.ajax({
        type: "POST",
        url: "http://www.58pic.com/index.php?m=favorPage&a=save",
        data: {
            name: name,
        },
        dataType: "json",
        success: function(ret) {
            $('#favirite-all').hide();
            $('#favirite-null').hide();
            $('#favirite-create').hide();
            if(ret.status == 0){
                $.ajax({
                    type: "POST",
                    url: "http://www.58pic.com/index.php?m=user&a=ajaxFav",
                    data: {
                        action: 'addFav',
                        picid: picid,
                        page_id:ret.data
                    },
                    dataType: "json",
                    success: function(result) {
                        if (result.status == true) {
                            $('#favirite-create #fav-name').attr('value','');
                            // current.attr("data-action", result.data.a);
                            current.attr("id", ret.data.i);
                            // if(name.length>4){
                            //   name=name.substring(0,4)+"...";
                            // }
                            var html = "<p>成功保存到<span>"+name+"</span></p>";
                            $("#favirite-success .alert-con .icont-true").next().replaceWith(html);
                            $("#favirite-success").fadeIn(200);
                            setTimeout(function () {
                                $("#favirite-success").fadeOut(200);
                            },2000);
                            current.children().eq(0).addClass("on");
                            current.children().eq(1).html(parseInt(current.children().eq(1).html())+1);
                        } else {
                            return false;
                        }
                    }
                });
            }else{
                var string = "<p class='edit-warning' style='padding-left:0px;margin-top:0px'><i class='icon-warning'></i>"+ret.info+"</p>";
                $("#favirite-create .edit-warp").replaceWith(string);
            }
        }
    });
});