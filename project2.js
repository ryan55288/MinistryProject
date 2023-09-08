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

	$('.circle1').click(function () {
		$('.littleCircle').css({ 'display': 'none' });
		$('.littleCircle2').css({ 'display': 'block' });
		$('.littleCircle3').css({ 'display': 'none' });
		$('.littleCircle4').css({ 'display': 'none' });
		$('.future03').css({
			'border': '5px solid var(--color-5)',
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
			'background-color': 'var(--color-2)',
		});
		$('.img01').css({
			'background-color': '#fff',
		});
		$('.img02').css({
			'background-color': '#fff',
		});
		$('.img04').css({
			'background-color': '#fff',
		});
	});
	$('.circle2').click(function () {
		$('.littleCircle').css({ 'display': 'block' });
		$('.littleCircle2').css({ 'display': 'none' });
		$('.littleCircle3').css({ 'display': 'none' });
		$('.littleCircle4').css({ 'display': 'none' });
		$('.future02').css({
			'border': '5px solid var(--color-5)',
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
			'background-color': 'var(--color-2)',
		});
		$('.img01').css({
			'background-color': '#fff',
		});
		$('.img03').css({
			'background-color': '#fff',
		});
		$('.img04').css({
			'background-color': '#fff',
		});
	});
	$('.circle3').click(function () {
		$('.littleCircle').css({ 'display': 'none' });
		$('.littleCircle2').css({ 'display': 'none	' });
		$('.littleCircle3').css({ 'display': 'none' });
		$('.littleCircle4').css({ 'display': 'block' });
		$('.future04').css({
			'border': '5px solid var(--color-5)',
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
			'background-color': 'var(--color-2)',
		});
		$('.img01').css({
			'background-color': '#fff',
		});
		$('.img02').css({
			'background-color': '#fff',
		});
		$('.img03').css({
			'background-color': '#fff',
		});
	});
	$('.circle4').click(function () {
		$('.littleCircle').css({ 'display': 'none' });
		$('.littleCircle2').css({ 'display': 'none' });
		$('.littleCircle3').css({ 'display': 'block' });
		$('.littleCircle4').css({ 'display': 'none' });
		$('.future04').css({
			'border': '0px solid var(--color-5)',
		});
		$('.future01').css({
			'border': '5px solid var(--color-5)',
		});
		$('.future02').css({
			'border': '0px solid var(--color-5)',
		});
		$('.future03').css({
			'border': '0px solid var(--color-5)',
		});
		$('.img01').css({
			'background-color': 'var(--color-2)',
		});
		$('.img02').css({
			'background-color': '#fff',
		});
		$('.img03').css({
			'background-color': '#fff',
		});
		$('.img04').css({
			'background-color': '#fff',
		});
	});
});	