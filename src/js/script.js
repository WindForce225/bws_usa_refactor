@@include('webp.js')

$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:true,
		inifnite: true,
		autoplay:true,
		autoplaySpeed:30000,
	});
});