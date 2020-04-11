
$(document).ready(function(){
    $("#dropdown").on('change',function(){
     
        var consultant_id = $(this).val();
        if(consultant_id=="NULL"){
            $("#consultant-detail").slideUp('slow');
            $("#payment_history tbody").empty();

        }else{
            load_consultant_data(consultant_id);
            load_consultant_history(consultant_id);

        }
        
    });
    $("#editConsultant").on('click',function(){
        $("#mainContent").slideUp('slow');
        $("#updateConsultant").slideDown('slow');
    });
    $("#back").click(function(){
        $("#updateConsultant").slideUp('slow');
        $("#mainContent").slideDown('slow');
    });

    $("#updateConsultantbtn").click(function(event){
        event.preventDefault();
        var consultant_id = $(this).val();
        update_consultant(consultant_id);

    });

    $("#deleteConsultant").click(function(){
        var consultantId = $(this).val();
        if(confirm("Delete consultant ?"))
        {
            $.ajax({
                type:'post',
                url:'deleteConsultant/'+consultantId,
                data:{_token:$('meta[name="csrf-token"]').attr('content')},
                success:function(data){
                    alert("Consultant is deleted successfully");
                },
                error:function(xhr,thrownError){
                    alert(xhr);
                }
    
            });
            
        }else{
            alert("Consultant is not deleted");
        }
        
        
        
    });
});


function load_consultant_data(consultant_id){
    $.ajax({
        type:'post',
        url:'/ajaxCall/'+consultant_id,
        
        data: { _token: $('meta[name="csrf-token"]').attr('content')},
       
        success:function(data){
            $("#consultant_name").html(data.name);
            // for consultant edit******
            $("#name").attr('value',data.name);
            $("#consultantEmail").attr('value',data.email);
            $("#roleDropdown").val(data.role).change();
            $("#paymentDropdown").val(data.tier).change();
            $("#updateConsultantbtn").val(consultant_id);
            $("#deleteConsultant").val(consultant_id);
            
            // ***********
            $("#email").html(data.email);
            $("#payment_preference").html(data.payment_preference);
            $("#payment_details").html(data.payment_details);
            $("#role").html(data.role);
            $("#payment_tier").html(data.tier);
            $("#consultant-detail").slideDown('slow');
            }
        });
}

function load_consultant_history(consultant_id){
    $.ajax({
        type:'post',
        url:'/getConsultantsHistory/'+consultant_id,
        dataType:'json',
        data: {_token:$('meta[name="csrf-token"]').attr('content')},
        success:function(data){
            $("#payment_history tbody").empty();
            $.each(data.results,function(index,result){
                index++;
                var html = "<tr>"+
                            "<td>"+index+"</td>"+
                            "<td>"+result[0]+"</td>"+
                            "<td>"+result[1]+"</td>"+
                            "<td>"+result[2]+"</td>"+
                            "<td>"+result[3]+"</td>"+
                            "<td>"+result[4]+"</td>"+
                            "<td>"+result[5]+"</td>"+
                            "<td>"+result[6]+"</td>"+
                            "<td>"+result[7]+"</td>"+
                "</tr>";
                $("#payment_history tbody").append(html);


            });

        }
    });
}

function update_consultant(consultant_id){
    $.ajax({
        type:'post',
        url:'/updateConsultant/'+consultant_id,
        data:{
            _token:$('meta[name="csrf-token"]').attr('content'),
            name:$("#name").val(),
            role:$("#roleDropdown").val(),
            payment_tier:$("#paymentDropdown").val()
        },
        success:function(data){
           alert("success");
           $("#back").trigger('click');
           $("#dropdown").trigger('change');

        },
        error:function(xhr,ajaxOptions,thrownError){
            
            alert(thrownError);

        }
    });
}


