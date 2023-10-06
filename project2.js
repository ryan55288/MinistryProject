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

	////////////////遠傳電信操作////////////////////////

	// var teleImages = [
	// 	'./images/web2-2/morning.png',
	// 	'./images/web2-2/afternoon.png',
	// 	'./images/web2-2/night.png',
	// ];
	// var currentIndex = 0;
	// var intervalDuration = 2000; // 2秒

	// function changeBackground() {
	// 	$(".processImgA").css({
	// 		'background-image': 'url(' + teleImages[currentIndex] + ')',
	// 		'transition': '0.5s',
	// 	});
	// 	currentIndex = (currentIndex + 1) % teleImages.length;
	// 	if (currentIndex === 0) {
	// 		$(".process-circle").css({
	// 			'background-color': '#ECECE7',
	// 		});
	// 		$(".process-circle2").css({
	// 			'background-color': '#ECECE7',
	// 		});
	// 		$(".process-circle3").css({
	// 			'background-color': 'var(--color-3)',
	// 			'transition': '0.5s ease-in-out',
	// 		});
	// 	} else if (currentIndex === 1) {
	// 		$(".process-circle").css({
	// 			'background-color': 'var(--color-3)',
	// 			'transition': '0.5s ease-in-out',
	// 		});
	// 		$(".process-circle2").css({
	// 			'background-color': '#ECECE7',
	// 		});
	// 		$(".process-circle3").css({
	// 			'background-color': '#ECECE7',
	// 		});
	// 	} else if (currentIndex === 2) {
	// 		$(".process-circle").css({
	// 			'background-color': '#ECECE7',
	// 		});
	// 		$(".process-circle2").css({
	// 			'background-color': 'var(--color-3)',
	// 			'transition': '0.5s ease-in-out',
	// 		});
	// 		$(".process-circle3").css({
	// 			'background-color': '#ECECE7',
	// 		});
	// 	}
	// }
	// 初始设置背景
	// teletChangeBackground();

	// 每隔2秒切换背景
	// var intervalId = setInterval(teletChangeBackground, intervalDuration);

	// 停止轮播：
	// clearInterval(intervalId);


	////////////////特定區域操作////////////////////////
	$(document).ready(function () {
		$(".process-circle2").click(function () {
			$(".process-circle").css({
				'background-color': '#ECECE7',
			});
			$(".process-circle2").css({
				'background-color': 'var(--color-3)',
			});
			$(".process-circle3").css({
				'background-color': '#ECECE7',
			});
			$(".processImgA").css({
				'background-image': 'url(./images/web2-2/afternoon.png)',
			});
		});
		$(".process-circle3").click(function () {
			$(".process-circle").css({
				'background-color': '#ECECE7',
			});
			$(".process-circle2").css({
				'background-color': '#ECECE7',
			});
			$(".process-circle3").css({
				'background-color': 'var(--color-3)'
			});
			$(".processImgA").css({
				'background-image': 'url(./images/web2-2/night.png)',
			});
		});
		$(".process-circle").click(function () {
			$(".process-circle").css({
				'background-color': 'var(--color-3)',
			});
			$(".process-circle2").css({
				'background-color': '#ECECE7',
			});
			$(".process-circle3").css({
				'background-color': '#ECECE7',
			});
			$(".processImgA").css({
				'background-image': 'url(./images/web2-2/morning.png)',
			});
		});
	});

	var images = [
		'./images/web2-2/morning.png',
		'./images/web2-2/afternoon.png',
		'./images/web2-2/night.png',
	];
	var currentIndex = 0;
	var intervalDuration = 2000; // 2秒

	function changeBackground() {
		$(".processImgA").css({
			'background-image': 'url(' + images[currentIndex] + ')',
			'transition': '0.5s',
		});
		currentIndex = (currentIndex + 1) % images.length;
		if (currentIndex === 0) {
			$(".process-circle").css({
				'background-color': '#ECECE7',
			});
			$(".process-circle2").css({
				'background-color': '#ECECE7',
			});
			$(".process-circle3").css({
				'background-color': 'var(--color-3)',
				'transition': '0.5s ease-in-out',
			});
		} else if (currentIndex === 1) {
			$(".process-circle").css({
				'background-color': 'var(--color-3)',
				'transition': '0.5s ease-in-out',
			});
			$(".process-circle2").css({
				'background-color': '#ECECE7',
			});
			$(".process-circle3").css({
				'background-color': '#ECECE7',
			});
		} else if (currentIndex === 2) {
			$(".process-circle").css({
				'background-color': '#ECECE7',
			});
			$(".process-circle2").css({
				'background-color': 'var(--color-3)',
				'transition': '0.5s ease-in-out',
			});
			$(".process-circle3").css({
				'background-color': '#ECECE7',
			});
		}
	}
	// 初始设置背景
	changeBackground();

	// 每隔2秒切换背景
	var intervalId = setInterval(changeBackground, intervalDuration);
	// 停止轮播：
	// clearInterval(intervalId);

	// const imgs = document.getElementById('imgs')
	// const oneBtn = document.getElementById('.btn1')
	// const twoBtn = document.getElementById('.btn2')
	// const threeBtn = document.getElementById('.btn3')
	// const img = document.querySelectorAll('#imgs img')
	// let idx = 0

	// // 每兩秒執行函式run一次
	// let interval = setInterval(run, 2000)

	// // idx+1，然後執行changeImage函式
	// function run() {
	// 	idx++
	// 	changeImage()
	// }

	// // 比對idx和img陣列的長度，然後判斷要輸出什麼值來套用translateX屬性
	// function changeImage() {
	// 	// 由於array.length是從1開始計算，跟index的起始數字不同，因此img.length要 - 1
	// 	if (idx > img.length - 1) {
	// 		idx = 0
	// 		// 避免prev按鈕行為讓idx小於零
	// 	} else if (idx < 0) {
	// 		idx = img.length - 1
	// 	}
	// 	// 從這行translateX可以判斷，idx最初必須為零，然後要顯示最後一張圖片，idx不能大於img.length
	// 	imgs.style.transform = `translateX(${-idx * 810}px)`
	// }

	// // next按鈕行為，先改變圖片位置，兩秒後再重啟計時器。
	// oneBtn.addEventListener('click', () => {
	// 	idx++
	// 	changeImage()
	// 	resetInterval()
	// })

	// // prev按鈕行為
	// twoBtn.addEventListener('click', () => {
	// 	idx++
	// 	changeImage()
	// 	resetInterval()
	// })
	// threeBtn.addEventListener('click', () => {
	// 	idx--
	// 	changeImage()
	// 	resetInterval()
	// })

	// // 重設計時器
	// function resetInterval() {
	// 	clearInterval(interval)
	// 	interval = setInterval(run, 2000)
	// }
});

///// PJ4&PJ6登入遮罩
$(".openMask").click(function () {
	$(".mask").css({
		'display': 'block',
		'display': 'flex',
		'transition': '0.5s',
	});
});

$(".openMask").click(function () {
	$("body").css({
		'overflow': 'hidden',
	});
});
$(".delete").click(function () {
	$("body").css({
		'overflow': 'auto',
	});
	$(".mask").css({
		'display': 'none',
	});
});

