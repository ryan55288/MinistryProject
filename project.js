// JavaScript Document
$(document).ready(function () {
  $(".angels-1").click(function () {
    $('.angels-0').css({ 'transform': 'scale(1)' });
    $('.angels-1').css({ 'transform': 'scale(1.2)' });
    $(".angels-1-box").fadeIn(1200);
    $(".angels-2-box").hide();
    $(".angels-3-box").hide();
    $(".angels-4-box").hide();
    $(".angels-5-box").hide();
    $(".angels-6-box").hide();
  });
  $(".angels-2").click(function () {
    $('.angels-0').css({ 'transform': 'scale(1)' });
    $('.angels-2').css({ 'transform': 'scale(1.2)' });
    $(".angels-1-box").hide();
    $(".angels-2-box").fadeIn(1200);
    $(".angels-3-box").hide();
    $(".angels-4-box").hide();
    $(".angels-5-box").hide();
    $(".angels-6-box").hide();
  });
  $(".angels-3").click(function () {
    $('.angels-0').css({ 'transform': 'scale(1)' });
    $('.angels-3').css({ 'transform': 'scale(1.2)' });
    $(".angels-1-box").hide();
    $(".angels-2-box").hide();
    $(".angels-3-box").fadeIn(1200);
    $(".angels-4-box").hide();
    $(".angels-5-box").hide();
    $(".angels-6-box").hide();
  });
  $(".angels-4").click(function () {
    $('.angels-0').css({ 'transform': 'scale(1)' });
    $('.angels-4').css({ 'transform': 'scale(1.2)' });
    $(".angels-1-box").hide();
    $(".angels-2-box").hide();
    $(".angels-3-box").hide();
    $(".angels-4-box").fadeIn(1200);
    $(".angels-5-box").hide();
    $(".angels-6-box").hide();
  });
  $(".angels-5").click(function () {
    $('.angels-0').css({ 'transform': 'scale(1)' });
    $('.angels-5').css({ 'transform': 'scale(1.2)' });
    $(".angels-1-box").hide();
    $(".angels-2-box").hide();
    $(".angels-3-box").hide();
    $(".angels-4-box").hide();
    $(".angels-5-box").fadeIn(1200);
    $(".angels-6-box").hide();
  });
  $(".angels-6").click(function () {
    $('.angels-0').css({ 'transform': 'scale(1)' });
    $('.angels-6').css({ 'transform': 'scale(1.2)' });
    $(".angels-1-box").hide();
    $(".angels-2-box").hide();
    $(".angels-3-box").hide();
    $(".angels-4-box").hide();
    $(".angels-5-box").hide();
    $(".angels-6-box").fadeIn(1200);
  });
});

$(function () {
  $('.word-after').click(function () {
    $('.word-after').css({ 'opacity': '1' });
    $('.word-before').css({ 'opacity': '0.5' });
    $('.switch-after').css({ 'display': 'block' });
    $('.switch-before').css({ 'display': 'none' });
    $('.compare-box-after').css({ 'display': 'block' });
    $('.compare-box-before').css({ 'display': 'none' });
  });
  $('.word-before').click(function () {
    $('.word-after').css({ 'opacity': '0.5' });
    $('.word-before').css({ 'opacity': '1' });
    $('.switch-before').css({ 'display': 'block' });
    $('.switch-after').css({ 'display': 'none' });
    $('.compare-box-after').css({ 'display': 'none' });
    $('.compare-box-before').css({ 'display': 'block' });
  });
  $('.switch-before').click(function () {
    $('.word-after').css({ 'opacity': '1' });
    $('.word-before').css({ 'opacity': '0.5' });
    $('.switch-after').css({ 'display': 'block' });
    $('.switch-before').css({ 'display': 'none' });
    $('.compare-box-after').css({ 'display': 'block' });
    $('.compare-box-before').css({ 'display': 'none' });
  });
  $('.switch-after').click(function () {
    $('.word-after').css({ 'opacity': '0.5' });
    $('.word-before').css({ 'opacity': '1' });
    $('.switch-before').css({ 'display': 'block' });
    $('.switch-after').css({ 'display': 'none' });
    $('.compare-box-after').css({ 'display': 'none' });
    $('.compare-box-before').css({ 'display': 'block' });
  });
});
$(window).resize(function () {
  location.reload()
});

const circle = document.querySelector(".circle");
const colorAngleInput = document.getElementById("colorAngle");

colorAngleInput.addEventListener("input", () => {
  const angle = colorAngleInput.value + "deg";
  document.documentElement.style.setProperty("--rotation", angle);
});



