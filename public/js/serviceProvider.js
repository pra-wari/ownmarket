$(document).ready(function(){
    $(document).on('change','input[type="file"]',function(){
        // $("#photo").attr("src","images/logo.png");

        let reader = new FileReader();
        reader.onload = (e)=>{
            $("#photo").attr("src",e.target.result);
        }

        reader.readAsDataURL(this.files[0]);
        $("#photo").css("opacity","1");
       
      
    });

    $(document).on('submit','#uploadProductDetails',function(e){
        $("#overlay").show();
        e.preventDefault();
        var formData = new FormData(this);
        $.ajax({
            type:"post",
            url:'/api/upload_product_details',
            data: formData,
            cache:false,
            contentType:false,
            processData:false,
            success:function(response){
               $(".alert").empty("");
               $(".alert").append('<div class="close">&times;</div>');
                if(response.success){
                    $('li[data-right-panel="add_products"]').click();
                    $(".alert").append('<div class="close">&times;</div>');
                    $(".alert-success").show();
                    $(".alert-success").append("<p>"+response.message+"</p>");
                    setTimeout(function(){
                        $(".alert").hide('slow');
                    },3000);
                }else{
                   
                    $(".alert-warning").show();
                    $.each(response.errors,function(key,value){
                        $(".alert-warning").append("<p>"+value+"</p>");
                    });

                }
               $("#overlay").hide();
                
            },
            error:function(xhr){
                alert(xhr);
            }

            
        });
    });

    $(document).on('click','.close',function(){
        $(".alert").hide();
    });
   
});