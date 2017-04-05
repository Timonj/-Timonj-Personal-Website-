// JavaScript Document
$(document).ready(function (){
	    $(".header_menu h1").fadeIn(2000);
		$(".header_menu p").fadeIn(2000);
		$(".img1").slideDown(400);
		$(".img2").slideDown(600);
		$(".img3").slideDown(800);
		$(".img4").slideDown(1000,function (){
			$(".left").fadeIn(1000);
			$(".right").fadeIn(1000);
			});
	
		$(".img4").click(function (){
			$("#wechat").slideDown();
		});
	
		$("button").click(function (){
			$("#wechat").slideUp();
		});
	
	});
