$(document).ready(function(){
	console.log("Hello from jQuery");


	$('#btn-open-form').click(function(e){
		e.preventDefault();
		console.log('Click');

		$(this).hide();
		$('.form-wrapper').slideDown(1000);

	});



	$(".phone-mask").mask("+7 (999) 999-99-99");

});