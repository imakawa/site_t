var headerHeight = 50;    

//headerClick
$("#headerHome").click(function(){$('html,body').animate({scrollTop: "0px"}, 800);});  
$("#headerProduct").click(function(){$('html,body').animate({scrollTop: $('#product').offset().top-headerHeight}, 800);});  
$("#headerAbout").click(function(){$('html,body').animate({scrollTop: $('#about').offset().top-headerHeight}, 1000);});  

//scrollEvent  
$(document).scroll(function(){
var X = $('#header').offset().top;
var Y = $('#product').offset().top;
if(X >= Y-headerHeight){
	$('#header').removeClass("headerOpacity5");
	$('#header').removeClass("navbar-default");
	$('#header').addClass("navbar-inverse");
	$('#header').addClass("headerOpacity8");
}else{
	$('#header').addClass("headerOpacity5");
	$('#header').addClass("navbar-default");
	$('#header').removeClass("navbar-inverse");
	$('#header').removeClass("headerOpacity8");
}

});