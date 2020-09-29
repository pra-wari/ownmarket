$(document).ready(function(){
    $(document).on('click',"#mycart",function(){
        $("#overlay").show();
		var product_id = $(this).val();
		
        $.ajax({
            type:"POST",
			url:"api/add-product-cart",
			data:{
				"id":product_id
			},
			headers:{
				'X-CSRF-TOKEN':$('meta[name="csrf-token"]').attr('content')
			},
			success:function(response){

				$("#overlay").hide();
				$(".alert").show();
				setTimeout(function(){$(".alert").hide('slow');},2000);
				
			}

        });
	});
});
	




