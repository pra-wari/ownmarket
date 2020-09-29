$(document).ready(function(){
    $(document).on('change','input[type="file"]',function(){
        // $("#photo").attr("src","images/logo.png");

        let reader = new FileReader();
        reader.onload = (e)=>{
            $("#photo").attr("src",e.target.result);
        }

        reader.readAsDataURL(this.files[0]);
       
    });

    $(document).on('click','#edit',function(e){
        e.preventDefault();
        
        if($(".edit-details").is(":hidden")){
            $(".user-detail").slideUp('slow');
            $(".edit-details").slideDown('slow');
        }
    });

    $(document).on('click','#change',function(e){
        e.preventDefault();
        if($(".updatePassword").is(":hidden")){
            $(".user-detail").slideUp('slow');
            $(".updatePassword").slideDown('slow');
        }
    });
    
    $(document).on('click',".close",function(){
        $(".alert").hide();
    });

    $(document).on('click','.updateBtn',function(){
        $("#overlay").show();
        var data = new FormData();
        var token = $('meta[name="csrf-token"]').attr('content');
        var name = $('input[name="name"]').val();
        var contact = $('input[name="number"]').val();
        var currentPassword = $('input[name="current"]').val();
        var newPassword = $('input[name="new"]').val();
        var confirmPassword = $('input[name="confirm"]').val();
        var file = $('input[name="profileImage"]').prop('files')[0];
        data.append("token",token);
        data.append('name',name);
        data.append('contact',contact);
        data.append('current',currentPassword);
        data.append('new',newPassword);
        data.append('confirm',confirmPassword);
        data.append('file',file);
        $.ajax({
            type:"post",
            url:"/api/update_user_detail",
            cache:false,
            contentType:false,
            processData:false,
            data:data,
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
              },
            success:function(response){
                $("#overlay").hide();
                $(".alert").empty();
                $(".alert").append('<div class="close">&times;</div>');
                if(response.success){
                    $(".alert-success").append("<p>"+response.message+"</p>");
                    $(".alert-success").show();
                    setTimeout(function(){
                        $(".alert").slideUp('slow');
                    },3000);

                }else{
                    $(".alert-warning").append("<p>Something went dfgg wrong!</p>");
                    $(".alert-warning").show();
                    setTimeout(function(){
                        $(".alert").slideUp('slow');
                    },3000);

                }
            },
            error:function(){
                $(".alert").empty();
                $(".alert").append('<div class="close">&times;</div>');
                $(".alert-warning").append("<p>Something went wrong!</p>");
                $(".alert-warning").show();
                setTimeout(function(){
                    $(".alert").slideUp('slow');
                },3000);
                
            }
        });


    });




    // $(".updateBtn").click(function(){
    //     $("#overlay").show();
    //     var data = new FormData();
    //     var token = $('meta[name="csrf-token"]').attr('content');
    //     var name = $('input[name="name"]').val();
    //     var contact = $('input[name="number"]').val();
    //     var currentPassword = $('input[name="current"]').val();
    //     var newPassword = $('input[name="new"]').val();
    //     var confirmPassword = $('input[name="confirm"]').val();
    //     var file = $('input[name="profileImage"]').prop('files')[0];
    //     data.append("token",token);
    //     data.append('name',name);
    //     data.append('contact',contact);
    //     data.append('current',currentPassword);
    //     data.append('new',newPassword);
    //     data.append('confirm',confirmPassword);
    //     data.append('file',file);
    //     $.ajax({
    //         type:"post",
    //         url:"/api/update_user_detail",
    //         cache:false,
    //         contentType:false,
    //         processData:false,
    //         data:data,
    //         headers: {
    //             'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    //           },
    //         success:function(response){
    //             $("#overlay").hide();
    //             $(".alert").empty();
    //             $(".alert").append('<div class="close">&times;</div>');
    //             if(response.success){
    //                 $(".alert-success").append("<p>"+response.message+"</p>");
    //                 $(".alert-success").show();
    //                 setTimeout(function(){
    //                     $(".alert").slideUp('slow');
    //                 },3000);

    //             }else{
    //                 $(".alert-warning").append("<p>Something went dfgg wrong!</p>");
    //                 $(".alert-warning").show();
    //                 setTimeout(function(){
    //                     $(".alert").slideUp('slow');
    //                 },3000);

    //             }
    //         },
    //         error:function(){
    //             $(".alert").empty();
    //             $(".alert").append('<div class="close">&times;</div>');
    //             $(".alert-warning").append("<p>Something went wrong!</p>");
    //             $(".alert-warning").show();
    //             setTimeout(function(){
    //                 $(".alert").slideUp('slow');
    //             },3000);
                
    //         }
    //     });


    // });
});