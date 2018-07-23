$(function () {


	var tophtml = "<div id=\"izl_rmenu\" class=\"izl-rmenu\">" +
		"<a href=\"http://wpa.qq.com/msgrd?v=3&uin=279759361&site=http://www.estronger.cn/&menu=yes\" style=\"background-color:#4490cd;\" title=\"279759361\" target=\"blank\" class=\"btn btn-qq\"><i class=\"fa fa-qq\" style=\"font-size:30px;line-height:1.5; \"></i><p class=\"text-center congHidden\" style=\"font-size:12px\">在线客服</p></a>" +
		"</a><div class=\"btn btn-phone\"><i class=\"fa fa-phone\" style=\"font-size:30px;line-height:1.5;\"></i><p class=\"text-center congHidden\" style=\"font-size:12px\">咨询电话</p><div class=\"phone\"><a target=\"_blank\" href=\"tel:13925817311\">13925817311</a></div></div><div class=\"btn btn-top\"><i class=\"fa fa-chevron-up\"></i></div></div>";
	//<a href=\"http://wpa.qq.com/msgrd?v=3&uin=279759361&site=http://www.estronger.cn/&menu=yes\" style=\"background-color:#4490cd;\" title=\"279759361\" target=\"blank\" class=\"btn btn-qq\"><i class=\"fa fa-qq\" style=\"font-size:30px;line-height:1.5; \"></i><p class=\"text-center\" style=\"font-size:12px\">产品经理</p></a>
	$("body").append(tophtml);

	$(document).on('click', '.btn-top', function (e) {
		$("html, body").animate({
			"scroll-top": 0
		}, "fast");
	})
	$("#izl_rmenu").each(function () {
		$(this).find(".btn-phone").on('click', function () {
			$(this).find(".phone").fadeToggle("fast");
		});
		$(this).find(".btn-top").click(function () {
			$("html, body").animate({
				"scroll-top": 0
			}, "fast");
		});
	});
	var lastRmenuStatus = false;
	$(window).scroll(function () { //bug
		var _top = $(window).scrollTop();
		if (_top > 200) {
			$("#izl_rmenu").data("expanded", true);
		} else {
			$("#izl_rmenu").data("expanded", false);
		}
		if ($("#izl_rmenu").data("expanded") != lastRmenuStatus) {
			lastRmenuStatus = $("#izl_rmenu").data("expanded");
			if (lastRmenuStatus) {
				$("#izl_rmenu .btn-top").slideDown();
			} else {
				$("#izl_rmenu .btn-top").slideUp();
			}
		}
	});
});