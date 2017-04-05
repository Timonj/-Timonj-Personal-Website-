// JavaScript Document
$(document).ready(function (){
	$(".li1").click(function (){
		$(".article2").slideUp(1500,function (){
			$(".article3").slideUp(1500,function (){
				$(".article4").slideUp(1500,function (){
					$(".article1").slideDown(1500);
				});
			});
		});		
	});
	
	
	$(".li2").click(function (){
		$(".article1").slideUp(1500,function (){
			$(".article3").slideUp(1500,function (){
				$(".article4").slideUp(1500,function (){
						$(".article2").slideDown(1500);
				});
			});
		});
	});
	
	$(".li3").click(function (){
		$(".article1").slideUp(1500,function (){
			$(".article2").slideUp(1500,function (){
				$(".article4").slideUp(1500,function (){
						$(".article3").slideDown(1500);
				});
			});
		});
	});
	
	$(".li4").click(function (){
		$(".article1").slideUp(1500,function (){
			$(".article2").slideUp(1500,function (){
				$(".article3").slideUp(1500,function (){
						$(".article4").slideDown(1500);
				});
			});
		});
	});
});
	

