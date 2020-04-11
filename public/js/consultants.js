$(document).ready(function(){
    $(".viewClient").click(function(){
        $(".client,.clientHistory").slideUp('slow');
       
        var consultantId = $(this).val();
        $("."+consultantId).slideDown('slow');
    });
    $(".client").click(function(){
        $(".clientHistory").slideUp('slow');
        var clientId = $(this).attr('id');
        $("."+clientId).toggle('slow'); 
    });
    $(".viewAdmits").click(function(e){
        e.preventDefault();
        var consultantId = $(this).val();
        $.ajax({
            type:'post',
            url:'/getconsultantadmits/'+consultantId,
            data:{
                _token:$('meta[name="csrf-token"]').attr('content')
            },
            success:function(data){
               $("#admitDetail").children().last().children().first().children().first().next().text(data["total_admit_round_1"]);
               $("#admitDetail").children().last().children().first().children().first().next().next().text(data["total_admit_round_2"]);
               $("#admitDetail").children().last().children().first().children().first().next().next().next().text(data["total_admit_round_3"]);
               $("#admitDetail").children().last().children().first().children().last().text(data["total_admit_round_4"]);

               $("#admitDetail").children().last().children().first().next().children().first().next().text(data["total_reject_round_1"]);
               $("#admitDetail").children().last().children().first().next().children().first().next().next().text(data["total_reject_round_2"]);
               $("#admitDetail").children().last().children().first().next().children().first().next().next().next().text(data["total_reject_round_3"]);
               $("#admitDetail").children().last().children().first().next().children().last().text(data["total_reject_round_4"]);

               $("#admitDetail").children().last().children().first().next().next().children().first().next().text(data["total_inprogress_round_1"]);
               $("#admitDetail").children().last().children().first().next().next().children().first().next().next().text(data["total_inprogress_round_2"]);
               $("#admitDetail").children().last().children().first().next().next().children().first().next().next().next().text(data["total_inprogress_round_3"]);
               $("#admitDetail").children().last().children().first().next().next().children().last().text(data["total_inprogress_round_4"]);

               $("#admitDetail").children().last().children().last().children().first().next().text(data["total_discontinued_round_1"]);
               $("#admitDetail").children().last().children().last().children().first().next().next().text(data["total_discontinued_round_2"]);
               $("#admitDetail").children().last().children().last().children().first().next().next().next().text(data["total_discontinued_round_3"]);
               $("#admitDetail").children().last().children().last().children().last().text(data["total_discontinued_round_4"]);

               $("#consultantContent").slideUp();
               $("#admitDetailDiv").slideDown();
               
            },
            error:function(thrownError){
                alert("Process Failed"+thrownError);
            }
        });
    });
    $("#goback").click(function(){
        $("#admitDetailDiv").slideUp();
        $("#consultantContent").slideDown();
               
    });
});