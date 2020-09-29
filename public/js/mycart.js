$(document).ready(function(){
    $(".remove_item").on('click',function(){
        
        var item = $(this).val();
        $(this).parent().parent().hide();
        $.ajax({
            type:"post",
            url:"/api/remove_item",
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
              },
            data:{item_id:item},
           
      
            success:function(response){
                
            }

        });
    });
});