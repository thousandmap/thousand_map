$(document).ready(function () {
	//修改邮寄地址弹窗-复选框
	$('.popup1-p1').click(function () {
		$(this).toggleClass('popup1-p1-click');
	});

	//修改邮寄地址弹窗-修改点击
	$('.popup1-a1').click(function () {
		$(this).parent().parent().parent().parent().css('display', 'none');
		$('.popup1').eq(2).css('display', '');
	});

	//修改邮寄地址弹窗-添加邮寄地址
	$('.popup1-li2').click(function () {
		$(this).parent().parent().css('display', 'none');
		$('.popup1').eq(2).css('display', '');
	});

	//修改邮寄地址弹窗-确认按钮
	//$('.popup1-a2').click(function () {
		//$(this).parent().parent().parent().css('display', 'none');
		//$('.popup1').eq(3).css('display','');
	//});


	//兑换详情弹窗-修改按钮
	$('.popup2-div1-a1').click(function () {
		$(this).parent().parent().parent().css('display', 'none');
		$('.popup1').eq(2).css('display', '');
	});


	//填写收货地址-复选框
	$('.popup3-ul1-li2 i').click(function () {
		$(this).toggleClass('popup1-p1-click');
	});

	//index页面切换按钮
	$('.cs-ul3-li2 a').click(function () {
		var con = $('.cs-ul3-li2 a');
		con.attr('class', '').eq(con.index(this)).attr('class', 'cs-ul3-li2-a1');
	});


	//升级制度-数字百分比化
	var jfnum=parseInt($('.yh-li1 p').text() / $('.yh-li3').text() * 100);
	$('.yh-li1 p').css('left',jfnum+'%');
	$('.yh-li2 p').css('width',jfnum+'%');

});