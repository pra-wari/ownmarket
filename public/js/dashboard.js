$(document).ready(function(){
    $("#updateCapacity").click(function(){
        var consultant_id = $(this).val();
        $.ajax({
            type:'post',
            url:'updateConsultantCapacity/'+consultant_id,
            data:{
                _token:$("meta[name='csrf-token']").attr('content'),
                capacity: $("#consultantCapacity").val()
            },
            success:function(data){
                alert("success");
                $("#capacity").text($("#consultantCapacity").val());                

            },
            error:function(thrownError){
                alert(thrownError);
            }
        });
    });
    $(".download_file").click(function(){
        var fileId = $(this).val();
        
        $.ajax({
            type:'post',
            url:'fileDownload/'+fileId,
            data:{_token:$("meta[name='csrf-token']").attr('content')},
            success:function(data){
                
               // window.location.href = data.url;
            //    $('a').attr('href',data.url);
            //    $('a').attr('download',data.displayName);
               window.open(data.url,'_blank');
            },
            error:function(thrownError){
                alert(thrownError);
            }
        });
    });
});