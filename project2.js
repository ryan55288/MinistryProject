// JavaScript Document

$(function () {
	$('.project2-box-2-button').click(function () {
		$('.project2-box-2-button').css({
			'background-color': '#fff'
		});
		$('.project2-box-2-button span').css({
			'color': 'var(--color-3)'
		});
		$('.project2-box-2-button').css({
			'box-shadow': '0px 0px var(--color-1)'
		});
		$('.project2-box-2-button').css({
			'-webkit-box-shadow': '0px 0px var(--color-1)'
		});
	});

	$('.project2-box-2-buttonA').click(function () {
		$('.project2-box-2-buttonA').css({
			'background-color': 'var(--color-3)'
		});
		$('.project2-box-2-buttonA span').css({
			'color': '#fff'
		});
		$('.project2-box-2-buttonA').css({
			'box-shadow': '0px 5px var(--color-1)'
		});
		$('.project2-box-2-buttonA').css({
			'-webkit-box-shadow': '0px 5px var(--color-1)'
		});
		$('.imageA').css({
			'display': 'block'
		});
		$('.imageC').css({
			'display': 'none'
		});
		$('.imageB').css({
			'display': 'none'
		});
	});
	$('.project2-box-2-buttonB').click(function () {
		$('.project2-box-2-buttonB').css({
			'background-color': 'var(--color-3)'
		});
		$('.project2-box-2-buttonB span').css({
			'color': '#fff'
		});
		$('.project2-box-2-buttonB').css({
			'box-shadow': '0px 5px var(--color-1)'
		});
		$('.project2-box-2-buttonB').css({
			'-webkit-box-shadow': '0px 5px var(--color-1)'
		});
		$('.imageA').css({
			'display': 'none'
		});
		$('.imageC').css({
			'display': 'none'
		});
		$('.imageB').css({
			'display': 'block'
		});
	});
	$('.project2-box-2-buttonC').click(function () {
		$('.project2-box-2-buttonC').css({
			'background-color': 'var(--color-3)'
		});
		$('.project2-box-2-buttonC span').css({
			'color': '#fff'
		});
		$('.project2-box-2-buttonC').css({
			'box-shadow': '0px 5px var(--color-1)'
		});
		$('.project2-box-2-buttonC').css({
			'-webkit-box-shadow': '0px 5px var(--color-1)'
		});
		$('.imageA').css({
			'display': 'none'
		});
		$('.imageC').css({
			'display': 'block'
		});
		$('.imageB').css({
			'display': 'none'
		});
	});
	/////////////////////////未來應用區塊新版/////////////////////////////////////////////////
	$('.future01').hover(function () {
		$('.circle4').css({
			'background-image': 'url(images/web2-3/circle.svg)',
			'position': 'absolute',
			'top': '-135px',
			'left': '-125px',
			'transform': 'rotate(126deg)',
		});
		$('.littleCircle3').css({
			'top': '-74px',
			'left': '31px'
		})
	}, function () {
		$('.circle4').css({
			'position': 'absolute',
			'top': '-183px',
			'left': '-130px',
			'background-image': 'url(images/web2-3/circle2.svg)',
			'width': '100%',
			'height': '100%',
			'background-repeat': 'no-repeat',
			'transform': 'rotate(196deg)',
			'z-index': '1'
		});
	})
	$('.future02').hover(function () {
		$('.circle2').css({
			'background-image': 'url(images/web2-3/circle.svg)',
			'position': 'absolute',
			'top': '-40px',
			'left': '-33px',
			'transform': 'rotate(72deg)',
			'z-index': '2'
		});
		$('.littleCircle3').css({
			'top': '-37px',
			'left': '50px'
		})
	}, function () {
		$('.circle2').css({
			'position': 'absolute',
			'top': '-25px',
			'left': '-47px',
			'background-image': 'url(images/web2-3/circle2.svg)',
			'width': '70%',
			'height': '70%',
			'background-repeat': 'no-repeat',
			'transform': 'rotate(135deg)',
		});
	})
	$('.future03').hover(function () {
		$('.circle1').css({
			'background-image': 'url(images/web2-3/circle.svg)',
			'position': 'absolute',
			'top': '-41px',
			'left': '78px',
			'transform': 'rotate(362deg)',
			'z-index': '2'
		});
		$('.littleCircle3').css({
			'top': '-37px',
			'left': '90px'
		})
	}, function () {
		$('.circle1').css({
			'position': 'absolute',
			'top': '-10px',
			'left': '69px',
			'background-image': 'url(images/web2-3/circle2.svg)',
			'width': '70%',
			'height': '70%',
			'background-repeat': 'no-repeat',
			'transform': 'rotate(73deg)',
		});
	})
	$('.future04').hover(function () {
		$('.circle3').css({
			'background-image': 'url(images/web2-3/circle.svg)',
			'position': 'absolute',
			'top': '-120px',
			'left': '118px',
			'width': '70%',
			'height': '70%',
			'transform': 'rotate(305deg)',
			'z-index': '1'
		});
		$('.littleCircle3').css({
			'top': '-74px',
			'left': '105px'
		})
	}, function () {
		$('.circle3').css({
			'position': 'absolute',
			'top': '-104px',
			'left': '140px',
			'background-image': 'url(images/web2-3/circle2.svg)',
			'width': '70%',
			'height': '70%',
			'background-repeat': 'no-repeat',
			'transform': 'rotate(18deg)',
		});
	})
	////////////////////////pj3按鈕///////
	// $('.future03').hover(function () {
	// 	$('.littleCircle').css({
	// 		'display': 'none'
	// 	});
	// 	$('.littleCircle2').css({
	// 		'display': 'block'
	// 	});
	// 	$('.littleCircle3').css({
	// 		'display': 'none'
	// 	});
	// 	$('.littleCircle4').css({
	// 		'display': 'none'
	// 	});
	// 	// $('.circle1').addClass("hover")
	// 	$('.circle1').css({
	// 		'background-image': 'url(images/web2-3/circle.svg)',
	// 		'position': 'absolute',
	// 		'top': '-41px',
	// 		'left': '79px',
	// 		'transform': 'rotate(362deg)',
	// 	});
	// 	$('.circle2').css({
	// 		'background-image': 'url(images/web2-3/circle2.svg)',
	// 		'position': 'absolute',
	// 		'top': '-25px',
	// 		'left': '-47px',
	// 		'transform': 'rotate(135deg)',
	// 	});
	// 	$('.circle3').css({
	// 		'background-image': 'url(images/web2-3/circle2.svg)',
	// 		'position': 'absolute',
	// 		'top': '-99px',
	// 		'left': '140px',
	// 		'transform': 'rotate(18deg)',
	// 	});
	// 	$('.circle4').css({
	// 		'background-image': 'url(images/web2-3/circle2.svg)',
	// 		'position': 'absolute',
	// 		'top': '-183px',
	// 		'left': '-130px',
	// 		'transform': 'rotate(196deg)',
	// 	});
	// 	$('.future03').css({
	// 		'border': '10px solid var(--color-5)',
	// 	});
	// 	$('.future01').css({
	// 		'border': '0px solid var(--color-5)',
	// 	});
	// 	$('.future02').css({
	// 		'border': '0px solid var(--color-5)',
	// 	});
	// 	$('.future04').css({
	// 		'border': '0px solid var(--color-5)',
	// 	});
	// 	$('.img03').css({
	// 		'background-color': 'var(--color-5)',
	// 		'border': '5px solid var(--color-3)',
	// 		'transition': '0.2s'
	// 	});
	// 	$('.img01').css({
	// 		'background-color': '#fff',
	// 		'border': '5px solid #fff',
	// 		'transition': '0s',
	// 	});
	// 	$('.img02').css({
	// 		'background-color': '#fff',
	// 		'border': '5px solid #fff',
	// 		'transition': '0s',
	// 	});
	// 	$('.img04').css({
	// 		'background-color': '#fff',
	// 		'border': '5px solid #fff',
	// 		'transition': '0s',
	// 	});
	// });

	// $('.future02').hover(function () {
	// 	$('.littleCircle').css({
	// 		'display': 'block'
	// 	});
	// 	$('.littleCircle2').css({
	// 		'display': 'none'
	// 	});
	// 	$('.littleCircle3').css({
	// 		'display': 'none'
	// 	});
	// 	$('.littleCircle4').css({
	// 		'display': 'none'
	// 	});
	// 	$('.circle2').css({
	// 		'background-image': 'url(images/web2-3/circle.svg)',
	// 		'position': 'absolute',
	// 		'top': '-45px',
	// 		'left': '-35px',
	// 		'transform': 'rotate(72deg)',
	// 	});
	// 	$('.circle3').css({
	// 		'background-image': 'url(images/web2-3/circle2.svg)',
	// 		'position': 'absolute',
	// 		'top': '-99px',
	// 		'left': '140px',
	// 		'transform': 'rotate(18deg)',
	// 	});
	// 	$('.circle4').css({
	// 		'background-image': 'url(images/web2-3/circle2.svg)',
	// 		'position': 'absolute',
	// 		'top': '-183px',
	// 		'left': '-130px',
	// 		'transform': 'rotate(196deg)',
	// 	});

	// 	$('.circle1').css({
	// 		'background-image': 'url(images/web2-3/circle2.svg)',
	// 		'position': 'absolute',
	// 		'top': '-10px',
	// 		'left': '69px',
	// 		'transform': 'rotate(76deg)',
	// 	});

	// 	$('.future02').css({
	// 		'border': '10px solid var(--color-5)',
	// 	});
	// 	$('.future01').css({
	// 		'border': '0px solid var(--color-5)',
	// 	});
	// 	$('.future03').css({
	// 		'border': '0px solid var(--color-5)',
	// 	});
	// 	$('.future04').css({
	// 		'border': '0px solid var(--color-5)',
	// 	});
	// 	$('.img02').css({
	// 		'background-color': 'var(--color-5)',
	// 		'border': '5px solid var(--color-3)',
	// 		'transition': '0.2s'
	// 	});
	// 	$('.img01').css({
	// 		'background-color': '#fff',
	// 		'border': '5px solid #fff',
	// 		'transition': '0s',
	// 	});
	// 	$('.img03').css({
	// 		'background-color': '#fff',
	// 		'border': '5px solid #fff',
	// 		'transition': '0s',
	// 	});
	// 	$('.img04').css({
	// 		'background-color': '#fff',
	// 		'border': '5px solid #fff',
	// 		'transition': '0s',
	// 	});
	// });

	// $('.future04').hover(function () {
	// 	$('.littleCircle').css({
	// 		'display': 'none'
	// 	});
	// 	$('.littleCircle2').css({
	// 		'display': 'none'
	// 	});
	// 	$('.littleCircle3').css({
	// 		'display': 'none'
	// 	});
	// 	$('.littleCircle4').css({
	// 		'display': 'block'
	// 	});
	// 	$('.circle3').css({
	// 		'background-image': 'url(images/web2-3/circle.svg)',
	// 		'position': 'absolute',
	// 		'top': '-120px',
	// 		'left': '120px',
	// 		'width': '70%',
	// 		'height': '70%',
	// 		'transform': 'rotate(305deg)',
	// 	});
	// 	$('.circle4').css({
	// 		'background-image': 'url(images/web2-3/circle2.svg)',
	// 		'position': 'absolute',
	// 		'top': '-183px',
	// 		'left': '-130px',
	// 		'transform': 'rotate(196deg)',
	// 	});
	// 	$('.circle2').css({
	// 		'background-image': 'url(images/web2-3/circle2.svg)',
	// 		'position': 'absolute',
	// 		'top': '-25px',
	// 		'left': '-47px',
	// 		'transform': 'rotate(135deg)',
	// 	});
	// 	$('.circle1').css({
	// 		'background-image': 'url(images/web2-3/circle2.svg)',
	// 		'position': 'absolute',
	// 		'top': '-10px',
	// 		'left': '69px',
	// 		'transform': 'rotate(76deg)',
	// 	});
	// 	$('.future04').css({
	// 		'border': '10px solid var(--color-5)',
	// 	});
	// 	$('.future01').css({
	// 		'border': '0px solid var(--color-5)',
	// 	});
	// 	$('.future02').css({
	// 		'border': '0px solid var(--color-5)',
	// 	});
	// 	$('.future03').css({
	// 		'border': '0px solid var(--color-5)',
	// 	});
	// 	$('.img04').css({
	// 		'background-color': 'var(--color-5)',
	// 		'border': '5px solid var(--color-3)',
	// 		'transition': '0.2s'
	// 	});
	// 	$('.img01').css({
	// 		'background-color': '#fff',
	// 		'border': '5px solid #fff',
	// 		'transition': '0s',
	// 	});
	// 	$('.img02').css({
	// 		'background-color': '#fff',
	// 		'border': '5px solid #fff',
	// 		'transition': '0s',
	// 	});
	// 	$('.img03').css({
	// 		'background-color': '#fff',
	// 		'border': '5px solid #fff',
	// 		'transition': '0s',
	// 	});
	// });

	// $('.future01').hover(function () {
	// 	$('.littleCircle').css({
	// 		'display': 'none'
	// 	});
	// 	$('.littleCircle2').css({
	// 		'display': 'none'
	// 	});
	// 	$('.littleCircle3').css({
	// 		'display': 'block'
	// 	});
	// 	$('.littleCircle4').css({
	// 		'display': 'none'
	// 	});
	// 	$('.circle4').css({
	// 		'background-image': 'url(images/web2-3/circle.svg)',
	// 		'position': 'absolute',
	// 		'top': '-135px',
	// 		'left': '-125px',
	// 		'transform': 'rotate(126deg)',
	// 	});
	// 	$('.circle3').css({
	// 		'background-image': 'url(images/web2-3/circle2.svg)',
	// 		'position': 'absolute',
	// 		'top': '-99px',
	// 		'left': '140px',
	// 		'transform': 'rotate(18deg)',
	// 	});
	// 	$('.circle2').css({
	// 		'background-image': 'url(images/web2-3/circle2.svg)',
	// 		'position': 'absolute',
	// 		'top': '-25px',
	// 		'left': '-47px',
	// 		'transform': 'rotate(135deg)',
	// 	});
	// 	$('.circle1').css({
	// 		'background-image': 'url(images/web2-3/circle2.svg)',
	// 		'position': 'absolute',
	// 		'top': '-10px',
	// 		'left': '69px',
	// 		'transform': 'rotate(76deg)',
	// 		'transition': '0s',
	// 	});
	// 	$('.future04').css({
	// 		'border': '0px solid var(--color-5)',
	// 	});
	// 	$('.future01').css({
	// 		'border': '10px solid var(--color-5)',
	// 	});
	// 	$('.future02').css({
	// 		'border': '0px solid var(--color-5)',
	// 	});
	// 	$('.future03').css({
	// 		'border': '0px solid var(--color-5)',
	// 	});
	// 	$('.img01').css({
	// 		'background-color': 'var(--color-5)',
	// 		'border': '5px solid var(--color-3)',
	// 		'transition': '0.2s'
	// 	});
	// 	$('.img02').css({
	// 		'background-color': '#fff',
	// 		'border': '5px solid #fff',
	// 		'transition': '0s',
	// 	});
	// 	$('.img03').css({
	// 		'background-color': '#fff',
	// 		'border': '5px solid #fff',
	// 		'transition': '0s',
	// 	});
	// 	$('.img04').css({
	// 		'background-color': '#fff',
	// 		'border': '5px solid #fff',
	// 		'transition': '0s',
	// 	});
	// });
	////////////////////////future按鈕////////////
	$(function () {
		$(".anchor").click(function () {
			jQuery("html,body").animate({
				scrollTop: 0
			}, 1000);
		});
		$(window).scroll(function () {
			if ($(this).scrollTop() > 300) {
				$('.anchor').fadeIn("fast");
			} else {
				$('.anchor').stop().fadeOut("fast");
			}
		});
	});
	// 公部門///////////////////////////////////
	$('.publicButton').click(function () {
		$('.public').css({
			'display': 'block'
		});
		$('.folk').css({
			'display': 'none'
		});
		$('.publicButton').css({
			'background-color': 'var(--color-3)'
		});
		$('.folkButton').css({
			'background-color': '#FFF'
		});
	});
	$('.folkButton').click(function () {
		$('.public').css({
			'display': 'none'
		});
		$('.folk').css({
			'display': 'block'
		});
		$('.folkButton').css({
			'background-color': 'var(--color-3)'
		});
		$('.publicButton').css({
			'background-color': '#FFF'
		});
	});


	////////////////特定區域操作////////////////////////
	$(document).ready(function () {
		$(".process-circle2").click(function () {
			$(".process-processImgA").css({
				'background-image': 'url(./images/web2-2/controlafternoon.svg)',
			});

		});









		//中午
		// $(".afternoon").click(function () {
		// 	$(".processImg").addClass("processImg2");
		// 	$(".processImg").removeClass("processImg3");
		// 	$(".processImg").removeClass("processImg");


		// 	$(".afternoon .bigClose").addClass("bigOpen");
		// 	$(".afternoon .littleClose").addClass("littleOpen");
		// 	$(".afternoon .bigClose").removeClass("bigClose");
		// 	$(".afternoon .littleClose").removeClass("littleClose");

		// 	$(".allLogo").removeClass("nightDraw");
		// 	$(".allLogo").removeClass("morningDraw");
		// 	$(".allLogo").addClass("afternoonDraw");

		// 	$(".morning .bigOpen").addClass("bigClose");
		// 	$(".morning .littleOpen").addClass("littleClose");
		// 	$(".morning .bigOpen").removeClass("bigOpen");

		// 	$(".night .bigOpen").addClass("bigClose");
		// 	$(".night .littleOpen").addClass("littleClose");
		// 	$(".night .bigOpen").removeClass("bigOpen");
		// });
		//晚上
		// $(".night").click(function () {
		// 	$(".processImg").addClass("processImg3");


		// 	$(".night .bigClose").addClass("bigOpen");
		// 	$(".night .littleClose").addClass("littleOpen");
		// 	$(".night .bigClose").removeClass("bigClose");
		// 	$(".night .littleClose").removeClass("littleClose");

		// 	$(".allLogo").addClass("nightDraw");
		// 	$(".allLogo").removeClass("morningDraw");
		// 	$(".allLogo").removeClass("afternoonDraw");

		// 	$(".morning .bigOpen").addClass("bigClose");
		// 	$(".morning .littleOpen").addClass("littleClose");
		// 	$(".morning .bigOpen").removeClass("bigOpen");

		// 	$(".afternoon .bigOpen").addClass("bigClose");
		// 	$(".afternoon .littleOpen").addClass("littleClose");
		// 	$(".afternoon .bigOpen").removeClass("bigOpen");
		// });
		//早上
		// $(".morning").click(function () {
		// 	$(".processImg").addClass("processImg");
		// 	$(".morning .bigClose").addClass("bigOpen");
		// 	$(".morning .littleClose").addClass("littleOpen");
		// 	$(".morning .bigClose").removeClass("bigClose");
		// 	$(".morning .littleClose").removeClass("littleClose");

		// 	$(".allLogo").addClass("morningDraw");
		// 	$(".allLogo").removeClass("nightDraw");
		// 	$(".allLogo").removeClass("afternoonDraw");

		// 	$(".afternoon .bigOpen").addClass("bigClose");
		// 	$(".afternoon .littleOpen").addClass("littleClose");
		// 	$(".afternoon .bigOpen").removeClass("bigOpen");

		// 	$(".night .bigOpen").addClass("bigClose");
		// 	$(".night .littleOpen").addClass("littleClose");
		// 	$(".night .bigOpen").removeClass("bigOpen");
		// });
	});

});