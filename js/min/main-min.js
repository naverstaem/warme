$(document).ready(function(){var o=function(){function o(){a=new ymaps.Map("map",{center:[55.7163911,37.4314895],zoom:17,controls:[]}),n=new ymaps.Placemark([55.7163911,37.4314895],{hintContent:"Москва, ул. Западная, д. 6, стр. 19",balloonContent:"Москва, ул. Западная, д. 6, стр. 19"}),a.geoObjects.add(n),a.behaviors.disable("scrollZoom")}ymaps.ready(o);var a,n};$(".fancybox").fancybox(),$(".menu a, .logo").click(function(){return $("html, body").animate({scrollTop:$($(this).attr("href")).offset().top-100+"px"},{duration:500}),!1}),navigationScroll=function(){var o=705,a=$(document).scrollTop();80>a?$("header .top").toggleClass("show"):a>=o-100?$("header .top").toggleClass("show"):o-62>a&&$("header .top").toggleClass("show")},navigationScroll(),o()});