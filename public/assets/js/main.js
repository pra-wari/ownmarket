$.noConflict();

jQuery(document).ready(function($) {

	"use strict";

	[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {
		new SelectFx(el);
	});

	jQuery('.selectpicker').selectpicker;


	

	$('.search-trigger').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$('.search-trigger').parent('.header-left').addClass('open');
	});

	$('.search-close').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$('.search-trigger').parent('.header-left').removeClass('open');
	});

	$('.equal-height').matchHeight({
		property: 'max-height'
	});

	// var chartsheight = $('.flotRealtime2').height();
	// $('.traffic-chart').css('height', chartsheight-122);


	// Counter Number
	$('.count').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 3000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});


	 
	 
	// Menu Trigger
	$('#menuToggle').on('click', function(event) {
		var windowWidth = $(window).width();   		 
		if (windowWidth<1010) { 
			$('body').removeClass('open'); 
			if (windowWidth<760){ 
				$('#left-panel').slideToggle(); 
			} else {
				$('#left-panel').toggleClass('open-menu');  
			} 
		} else {
			$('body').toggleClass('open');
			$('#left-panel').removeClass('open-menu');  
		} 
			 
	}); 

	 
	$(".menu-item-has-children.dropdown").each(function() {
		$(this).on('click', function() {
			var $temp_text = $(this).children('.dropdown-toggle').html();
			$(this).children('.sub-menu').prepend('<li class="subtitle">' + $temp_text + '</li>'); 
		});
	});


	// Load Resize 
	$(window).on("load resize", function(event) { 
		var windowWidth = $(window).width();  		 
		if (windowWidth<1010) {
			$('body').addClass('small-device'); 
		} else {
			$('body').removeClass('small-device');  
		} 
		
	});

	//load content
	$(".left-menu-item").click(function(){
		$("#overlay").show();
		$(".left-menu-item").removeClass('active');
		$(this).addClass('active');
		var div_id = $(this).data('right-panel');
		
		$.ajax({
			url:'/api/main-dashboard',
			type:'POST',
			async:false,
			data:{
				"div_id":div_id
			},
			headers:{
				'X-CSRF-TOKEN':$('meta[name="csrf-token"]').attr('content')
			},
			success:function(response){
				$("#overlay").hide();
				response = JSON.parse(response);
				$(".main-content").replaceWith(response.html);
			
			}
		});
	});

	// on click event of product on dashboard

	$(".products").click(function(){
		$("#overlay").show();
		var product_id = $(this).attr('id');
		$.ajax({
			type:"POST",
			url:"api/product",
			data:{
				"id":product_id
			},
			headers:{
				'X-CSRF-TOKEN':$('meta[name="csrf-token"]').attr('content')
			},
			success:function(response){
				$("#overlay").hide();
				response = JSON.parse(response);
				$(".main-content").replaceWith(response.html);
			}
		});
	});
  
 
});