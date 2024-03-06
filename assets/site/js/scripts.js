$(document).ready(function(){
	
	$price_id_prev=1;
	$prices=3;
	$(".scroll_js").animate({
	scrollLeft: $("#pr_1").offset().left -60
		}, 0);
	$(".next_js").click(function(event) {
		event.preventDefault();
		$price_id=($price_id_prev+1)%$prices;
		$price_id_prev=$price_id;
		if($price_id == -1) $price_id=2;
		console.log($price_id);
		console.log($("#pr_"+$price_id).offset().left);
		$(".scroll_js").animate({
			scrollLeft: 0
		}, 0);
		$(".scroll_js").animate({
			scrollLeft: $("#pr_"+$price_id).offset().left-60
		}, 500);
		
	});
	$(".prev_js").click(function(event) {
	    $price_id=($price_id_prev-1)%$prices;
		if($price_id == -1) 
		{$price_id=2;}
		$price_id_prev=$price_id;
		event.preventDefault();
		console.log($price_id);
		console.log($("#pr_"+$price_id).offset().left);
		$(".scroll_js").animate({
			scrollLeft: 0
		}, 0);
		$(".scroll_js").animate({
			scrollLeft: $("#pr_"+$price_id).offset().left -60
		}, 500);
	});
	
	
	
	$(".dis_js").click(function(event){
		event.preventDefault();
	});
	
	
	
	
	
	
});


