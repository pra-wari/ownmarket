$(document).ready(function(){
    $("#editBtn").click(function(){
        $(".profile").slideUp('slow');
        $("#editProfile").slideDown('slow');
    });
    $("#changeBtn").click(function(){
        $(".profile").slideUp('slow');
        $("#changePassword").slideDown('slow');
    });
    $("#contactBtn").click(function(){
        $(".profile").slideUp('slow');
        $("#mimessay").slideDown('slow');
    });
    
    $("#photo").change(function(){
            
        $("#upload").slideDown('slow');
    });
    $("#upload").click(function(){
        $(this).hide(200);
   });

   $("#dropdown").on('change',function(){
        var payment_method = $(this).val();
        if(payment_method=="Bank Transfer"){
            $("#paypal_details").slideUp('slow');
            $("#bank_details").slideToggle('slow');
            

        }
        if(payment_method=="Paypal"){
            $("#bank_details").slideUp('slow');
            $("#paypal_details").slideToggle('slow');

        }
   });
   

// ****edit profile****
   $(".editForm").on('submit',function(event){
        event.preventDefault();

       var userId = $("#userId").val();
       var payment_method=$("#dropdown").val();
       var payment_details;
       if(payment_method=="Bank Transfer"){
            payment_details = $("#bank_details").val();
       }
       if(payment_method=="Paypal"){
           payment_details = $("#paypal_details").val();
       }
     
       
        $.ajax({
            type:"post",
            url:'/updateProfile/'+userId,
           
            data: { _token: $('meta[name="csrf-token"]').attr('content'),
                    name:$("#name").val(),
                    phone:$("#phone").val(),
                    payment_mode:payment_method,
                    paymentDetails:payment_details,
                    action:"editprofile",
                },
            success:function(data){
                $("#editProfile").slideUp('slow');
                $("#showProfile table").children().children().first().children().last().text($("#name").val());
                $("#showProfile table").children().children().last().prev().children().last().text($("#phone").val());
                $("#showProfile table").children().children().last().children().last().text(payment_method);
                $("#showProfile").slideDown('slow');
                //alert("Your profile updated successfully");

            },
            error:function(){
                alert("Unable to update your profile");
            }
        });
    }); 
    //*********change password****** */
    $(".passwordForm").on('submit',function(event){
        event.preventDefault();
        var userId = $("#userId").val();
        $.ajax({
            type:"post",
            url:"/updateProfile/"+userId,
            data:{
                _token:$('meta[name="csrf-token"]').attr('content'),
                current:$("#current").val(),
                new:$("#new").val(),
                confirm:$("#confirm").val(),
                action:"changePassword"
            },
            success:function(data){
                alert(data.status);
                $("#current").val("");;
                $("#new").val("");
                $("#confirm").val("");
                if(data.key==1){
                    $("#changePassword").slideUp();
                    $("#showProfile").slideDown();

                }
                
               

            }
        });
    });
    
    
});
