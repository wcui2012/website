$(document).ready(function() {
  $('#chilunVideo').click(playChilunVideo);
  $('.video-play').click(playChilunVideo);
  $('.index-play').click(openVideoModel);
  $('.video-close').click(closeVideo);
  $('.index-video-model').click(closeVideo);
  $('.index-play-ph').click(openVideoModel);
  $(window).scroll(function(event) {
    switchshadow();
   });
  $(window).resize(function(event) {
    switchshadow();
    setVideoSize();
   });
  switchshadow();
  setVideoSize();
  $('.carousel').carousel({
    interval: 5000
  });
  $('.my-server-steps').slick({
    dots: true
  });
 });

var switchshadow = function() {
  var w = $(window).width();
  var y = $(window).scrollTop();
  if (w <= 767 || y > 1) {
    $('header').addClass('with-shadow');
  } else {
    $('header').removeClass('with-shadow');
  }
 };

var displaybywindow = function() {
  var w = $(window).width();
  var y = $(window).scrollTop();
  if (w <= 767 || y > 1) {
    $('header').addClass('site-header');
  } else {
    $('header').removeClass('site-header');
  }
 };

$('.main-screen').on('mouseenter', '.index-play', function() {
  $('.index-watch').animate({
    opacity: 1
  }, 200);
});
$('.main-screen').on('mouseleave', '.index-play', function() {
  $('.index-watch').animate({
    opacity: 0
  }, 200);
});

var chilunVideo = document.getElementById('chilunVideo');
var openVideoModel = function(e) {
  var videoSrc = "../img/zhiqu.mp4"; 
  e.preventDefault();
  chilunVideo.setAttribute('src', videoSrc);
  chilunVideo.play();
  $('.index-video-model').fadeIn();
  $('.video-play').fadeOut();
  $('body').css({'overflow': 'hidden'});
};

var closeVideo = function(e){
  e.stopPropagation();
  chilunVideo.pause();
  $('.index-video-model').fadeOut();
  $('.video-play').fadeOut();
  $('body').css({'overflow': 'visible'});
};

var playChilunVideo = function(e) {
  e.stopPropagation();
  if (chilunVideo.paused) {
    chilunVideo.play();
    $('.video-play').fadeOut();
  }else {
    chilunVideo.pause();
    $('.video-play').fadeIn();
  }
};

var setVideoSize = function() {
  var chilunVideo = document.getElementById('chilunVideo');
  var windowWidth = window.innerWidth;
 
  if (windowWidth <= 1199 && windowWidth >= 376) {
    chilunVideo.width = 640;
    chilunVideo.height = 360;
  }
 
  if (windowWidth <= 375 && windowWidth >= 320) {
    chilunVideo.width = 480;
    chilunVideo.height = 270;
  }
};
