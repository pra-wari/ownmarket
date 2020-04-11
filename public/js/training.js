$(document).ready(function(){
    
	$(".list-group-item").click(function(e){
	    $(".trainingContent").hide();
	    e.preventDefault();
	    var id = $(this).attr('href');
	    $(id+"_c").show();
	}); 
	$(".list-group-item-success").click(function(){
	    $(".list-group-item-success").removeClass("active");
	    $(this).addClass("active");
	});
    $('.first').trigger('click'); 
    
    $(".link").click(function(){

        $("#alert").slideDown();
        $("#alert").slideUp(3000);
   });
});