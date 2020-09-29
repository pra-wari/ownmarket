$(document).ready(function(){
    $(".remove_item").on('click',function(){
        
        var item = $(this).val();
        alert(item);
        $.ajax({
            type:"post",
            url:"/api/remove_item",
            cache:false,
            contentType:false,
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
              },
            data:{item_id:item,},
      
            success:function(response){
                alert("hello");
            }

        });
    });
});