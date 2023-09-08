// JavaScript Document

$(function () {
	$('.project2-box-2-button').click(function () {
		$('.project2-box-2-button').css({ 'background-color': '#fff' });
		$('.project2-box-2-button span').css({ 'color': 'var(--color-3)' });
		$('.project2-box-2-button').css({ 'box-shadow': '0px 0px var(--color-1)' });
		$('.project2-box-2-button').css({ '-webkit-box-shadow': '0px 0px var(--color-1)' });
	});

	$('.project2-box-2-buttonA').click(function () {
		$('.project2-box-2-buttonA').css({ 'background-color': 'var(--color-3)' });
		$('.project2-box-2-buttonA span').css({ 'color': '#fff' });
		$('.project2-box-2-buttonA').css({ 'box-shadow': '0px 5px var(--color-1)' });
		$('.project2-box-2-buttonA').css({ '-webkit-box-shadow': '0px 5px var(--color-1)' });
		$('.imageA').css({ 'display': 'block' });
		$('.imageC').css({ 'display': 'none' });
		$('.imageB').css({ 'display': 'none' });
	});
	$('.project2-box-2-buttonB').click(function () {
		$('.project2-box-2-buttonB').css({ 'background-color': 'var(--color-3)' });
		$('.project2-box-2-buttonB span').css({ 'color': '#fff' });
		$('.project2-box-2-buttonB').css({ 'box-shadow': '0px 5px var(--color-1)' });
		$('.project2-box-2-buttonB').css({ '-webkit-box-shadow': '0px 5px var(--color-1)' });
		$('.imageA').css({ 'display': 'none' });
		$('.imageC').css({ 'display': 'none' });
		$('.imageB').css({ 'display': 'block' });
	});
	$('.project2-box-2-buttonC').click(function () {
		$('.project2-box-2-buttonC').css({ 'background-color': 'var(--color-3)' });
		$('.project2-box-2-buttonC span').css({ 'color': '#fff' });
		$('.project2-box-2-buttonC').css({ 'box-shadow': '0px 5px var(--color-1)' });
		$('.project2-box-2-buttonC').css({ '-webkit-box-shadow': '0px 5px var(--color-1)' });
		$('.imageA').css({ 'display': 'none' });
		$('.imageC').css({ 'display': 'block' });
		$('.imageB').css({ 'display': 'none' });
	});
	////////////////////////pj3按鈕///////
	$('.future03').hover(function () {
		$('.littleCircle').css({ 'display': 'none' });
		$('.littleCircle2').css({ 'display': 'block' });
		$('.littleCircle3').css({ 'display': 'none' });
		$('.littleCircle4').css({ 'display': 'none' });
		$('.circle1').addClass("hover")
		$('.circle1').css({
			'background-image': 'url(images/web2-3/circle.svg)',
			'position': 'absolute',
			'top': '-41px',
			'left': '79px',
			'transform': 'rotate(362deg)',
		});
		$('.circle2').css({
			'background-image': 'url(images/web2-3/circle2.svg)',
			'position': 'absolute',
			'top': '-25px',
			'left': '-47px',
			'transform': 'rotate(135deg)',
		});
		$('.circle3').css({
			'background-image': 'url(images/web2-3/circle2.svg)',
			'position': 'absolute',
			'top': '-99px',
			'left': '140px',
			'transform': 'rotate(18deg)',
		});
		$('.circle4').css({
			'background-image': 'url(images/web2-3/circle2.svg)',
			'position': 'absolute',
			'top': '-183px',
			'left': '-130px',
			'transform': 'rotate(196deg)',
		});
		$('.future03').css({
			'border': '10px solid var(--color-5)',
		});
		$('.future01').css({
			'border': '0px solid var(--color-5)',
		});
		$('.future02').css({
			'border': '0px solid var(--color-5)',
		});
		$('.future04').css({
			'border': '0px solid var(--color-5)',
		});
		$('.img03').css({
			'background-color': 'var(--color-5)',
			'border': '5px solid var(--color-3)',
			'transition': '0.2s'
		});
		$('.img01').css({
			'background-color': '#fff',
			'border': '5px solid #fff',
			'transition': '0s',
			'transition': '0s'
		});
		$('.img02').css({
			'background-color': '#fff',
			'border': '5px solid #fff',
			'transition': '0s',
			'transition': '0s'
		});
		$('.img04').css({
			'background-color': '#fff',
			'border': '5px solid #fff',
			'transition': '0s',
			'transition': '0s'
		});
	});
	$('.future02').hover(function () {
		$('.littleCircle').css({ 'display': 'block' });
		$('.littleCircle2').css({ 'display': 'none' });
		$('.littleCircle3').css({ 'display': 'none' });
		$('.littleCircle4').css({ 'display': 'none' });
		$('.circle2').css({
			'background-image': 'url(images/web2-3/circle.svg)',
			'position': 'absolute',
			'top': '-45px',
			'left': '-35px',
			'transform': 'rotate(72deg)',
		});
		$('.circle3').css({
			'background-image': 'url(images/web2-3/circle2.svg)',
			'position': 'absolute',
			'top': '-99px',
			'left': '140px',
			'transform': 'rotate(18deg)',
		});
		$('.circle4').css({
			'background-image': 'url(images/web2-3/circle2.svg)',
			'position': 'absolute',
			'top': '-183px',
			'left': '-130px',
			'transform': 'rotate(196deg)',
		});
		$('.circle1').css({
			'background-image': 'url(images/web2-3/circle2.svg)',
			'position': 'absolute',
			'top': '-10px',
			'left': '69px',
			'transform': 'rotate(76deg)',
		});
		$('.future02').css({
			'border': '10px solid var(--color-5)',
		});
		$('.future01').css({
			'border': '0px solid var(--color-5)',
		});
		$('.future03').css({
			'border': '0px solid var(--color-5)',
		});
		$('.future04').css({
			'border': '0px solid var(--color-5)',
		});
		$('.img02').css({
			'background-color': 'var(--color-5)',
			'border': '5px solid var(--color-3)',
			'transition': '0.2s'
		});
		$('.img01').css({
			'background-color': '#fff',
			'border': '5px solid #fff',
			'transition': '0s',
			'transition': '0s'
		});
		$('.img03').css({
			'background-color': '#fff',
			'border': '5px solid #fff',
			'transition': '0s',
			'transition': '0s'
		});
		$('.img04').css({
			'background-color': '#fff',
			'border': '5px solid #fff',
			'transition': '0s',
			'transition': '0s'
		});
	});
	$('.future04').hover(function () {
		$('.littleCircle').css({ 'display': 'none' });
		$('.littleCircle2').css({ 'display': 'none	' });
		$('.littleCircle3').css({ 'display': 'none' });
		$('.littleCircle4').css({ 'display': 'block' });
		$('.circle3').css({
			'background-image': 'url(images/web2-3/circle.svg)',
			'position': 'absolute',
			'top': '-120px',
			'left': '120px',
			'width': '70%',
			'height': '70%',
			'transform': 'rotate(305deg)',
		});
		$('.circle4').css({
			'background-image': 'url(images/web2-3/circle2.svg)',
			'position': 'absolute',
			'top': '-183px',
			'left': '-130px',
			'transform': 'rotate(196deg)',
		});
		$('.circle2').css({
			'background-image': 'url(images/web2-3/circle2.svg)',
			'position': 'absolute',
			'top': '-25px',
			'left': '-47px',
			'transform': 'rotate(135deg)',
		});
		$('.circle1').css({
			'background-image': 'url(images/web2-3/circle2.svg)',
			'position': 'absolute',
			'top': '-10px',
			'left': '69px',
			'transform': 'rotate(76deg)',
		});
		$('.future04').css({
			'border': '10px solid var(--color-5)',
		});
		$('.future01').css({
			'border': '0px solid var(--color-5)',
		});
		$('.future02').css({
			'border': '0px solid var(--color-5)',
		});
		$('.future03').css({
			'border': '0px solid var(--color-5)',
		});
		$('.img04').css({
			'background-color': 'var(--color-5)',
			'border': '5px solid var(--color-3)',
			'transition': '0.2s'
		});
		$('.img01').css({
			'background-color': '#fff',
			'border': '5px solid #fff',
			'transition': '0s',
		});
		$('.img02').css({
			'background-color': '#fff',
			'border': '5px solid #fff',
			'transition': '0s',
		});
		$('.img03').css({
			'background-color': '#fff',
			'border': '5px solid #fff',
			'transition': '0s',
		});
	});
	$('.future01').hover(function () {
		$('.littleCircle').css({ 'display': 'none' });
		$('.littleCircle2').css({ 'display': 'none' });
		$('.littleCircle3').css({ 'display': 'block' });
		$('.littleCircle4').css({ 'display': 'none' });
		$('.circle4').css({
			'background-image': 'url(images/web2-3/circle.svg)',
			'position': 'absolute',
			'top': '-135px',
			'left': '-125px',
			'transform': 'rotate(126deg)',
		});
		$('.circle3').css({
			'background-image': 'url(images/web2-3/circle2.svg)',
			'position': 'absolute',
			'top': '-99px',
			'left': '140px',
			'transform': 'rotate(18deg)',
		});
		$('.circle2').css({
			'background-image': 'url(images/web2-3/circle2.svg)',
			'position': 'absolute',
			'top': '-25px',
			'left': '-47px',
			'transform': 'rotate(135deg)',
		});
		$('.circle1').css({
			'background-image': 'url(images/web2-3/circle2.svg)',
			'position': 'absolute',
			'top': '-10px',
			'left': '69px',
			'transform': 'rotate(76deg)',
			'transition': '0s',
		});
		$('.future04').css({
			'border': '0px solid var(--color-5)',
		});
		$('.future01').css({
			'border': '10px solid var(--color-5)',
		});
		$('.future02').css({
			'border': '0px solid var(--color-5)',
		});
		$('.future03').css({
			'border': '0px solid var(--color-5)',
		});
		$('.img01').css({
			'background-color': 'var(--color-5)',
			'border': '5px solid var(--color-3)',
			'transition': '0.2s'
		});
		$('.img02').css({
			'background-color': '#fff',
			'border': '5px solid #fff',
			'transition': '0s',
		});
		$('.img03').css({
			'background-color': '#fff',
			'border': '5px solid #fff',
			'transition': '0s',
		});
		$('.img04').css({
			'background-color': '#fff',
			'border': '5px solid #fff',
			'transition': '0s',
		});
	});
	////////////////////////future按鈕///////

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

});	