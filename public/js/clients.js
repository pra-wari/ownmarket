$(document).ready(function(){
    //get client data
    $("#dropdown").on('change',function(){
        var client_id = $(this).val();
        $("#editClient").attr('value',client_id);
        $("#closeClient").attr('value',client_id);
        $.ajax({
            type:'post',
            url:'/getClientData/'+client_id,
            
            data: { _token: $('meta[name="csrf-token"]').attr('content')},
           
            success:function(data){
                $("#client_name").html(data.name);
                $("#email").html(data.email);
                $("#NOS").html(data.nos);
                $("#assignedTo").html(data.assignedName)
                $("#pack").html(data.pack);
                $("#start_date").html(data.startDate);
                $("#brainstorming_status").html(data.brainstormingStatus);
                $("#brainstorming_date").html(data.brainstormingDate);
                $("#cv_status").html(data.cv);
                $("#comments").html(data.comments);
                
                $("#client-detail").slideDown('slow');
                $("#client_history tbody").empty();
                $.each(data.results,function(index,result){
                    var row = "<tr>"+
                    
                    "<td>"+result['taskId']+"</td>"+
                    "<td>"+result['schoolName']+"</td>"+
                    "<td>"+result['essayCall']+"</td>"+
                    "<td>"+result['essayCallDate']+"</td>"+
                    "<td>"+result['essayStatus']+"</td>"+
                    "<td>"+result['lorStatus']+"</td>"+
                    "<td>"+result['mocks']+"</td>"+
                    "<td>"+result['admitStatus']+"</td>"+
                    "<td>"+result['applyingRound']+"</td>"+
                "</tr>";
                    $("#client_history tbody").append(row);
                });
                }
            });
    });
    //show client edit form
    $("#editClient").on('click',function(){
        var client_id = $(this).val();
        $("#AddSchoolFinal").attr('value',client_id);

        $.ajax({
            type:'post',
            url:'/getClientData/'+client_id,
            
            data: { _token: $('meta[name="csrf-token"]').attr('content')},
           
            success:function(data){
                $("#clientName").val(data.name);
                // ******for add schools********
                $("#ClientAddedName").text(data.name);
                $("#ClientMentor").text(data.assignedName);
                //******* */
                $("#ClientMentor").text();
                $("#clientEmail").val(data.email);
                $("#nos").val(data.nos);
                $("#startDate").val(data.startDate);
                $("#clientComments").val(data.comments);
                $("#assignedConsultant").val(data.assignedTo).change();
                $("#packBought").val(data.pack).change();
                $("#clientUpdateBtn").val(client_id);
                $("#clientHead").slideUp('slow');
                $("#client_history").slideUp('slow');
                $("#clientEditForm").show('slow');
              
                }
        });
    });
    //close edit form
    $("#close").click(function(){
        $("#clientEditForm").slideUp('slow');
        $("#clientHead").slideDown('slow');
        $("#addnumberofschools").slideUp('slow');
        $("#client_history").slideDown('slow');
        
        

    });
    //update client data
    $("#updateClient").on('submit',function(event){
        event.preventDefault();
        var clientId = $("#editClient").val();
        $.ajax({
            type:'post',
            url:'/updateClient/'+clientId,
            
            data: {
                 _token: $('meta[name="csrf-token"]').attr('content'),
                 name:$("#clientName").val(),
                 email:$("#clientEmail").val(),
                 nos:$("#nos").val(),
                 startDate:$("#startDate").val(),
                 comments:$("#clientComments").val(),
                 assignedTo:$("#assignedConsultant").val(),
                 pack: $("#packBought").val()
                 

                },
           
            success:function(data){
                alert("Updated successfully");
                $("#close").trigger('click');
                $("#dropdown").trigger('change');
            },
            error:function(request,xhr,ajaxOptions,thrownError){
               alert(thrownError);
               
            }
        });

    });

    //add school
    $("#addSchool").click(function(e){
        e.preventDefault();
       
        $("#clientEditForm").hide('slow');
        $("#addnumberofschools").show();
    });

    $("#AddSchoolFinal").click(function(){
        var clientId = $("#editClient").val();
        $.ajax({
            type:'post',
            url:'/addschool/'+clientId,

            data: {
                _token: $('meta[name="csrf-token"]').attr('content'),
                tasks:$("#numberOfTasks").val()
            },
          
           success:function(data){
                alert("success");    
           },
           error:function(){
               alert("Oops unable to update!");
           }
        });
        $("#addnumberofschools").hide();
        $("#editClient").trigger('click');
    });
    //delete school
    $("#deleteSchool").click(function(e){
        e.preventDefault();
        $("#clientEditForm").hide('slow');
        $("#tasksList").empty();
        client_id = $("#editClient").val();
        $.ajax({
            type:'post',
            url:'/getClientData/'+client_id,
            
            data: { _token: $('meta[name="csrf-token"]').attr('content')},
        
            success:function(data){
                $.each(data.results,function(index,result){
                    var task = "<input type='checkbox' value="+result['taskId']+">"+
                    result['schoolName']+"<br/>";
                    $("#tasksList").append(task)
                });
                $("#deletenumberofschools").show();
            }
        });

    });
    $("#del").on('click',function(){
        var clientId=$("#editClient").val();
        var schoolId = [];
        
        $(':checkbox:checked').each(function(i){
            schoolId[i] = $(this).val();
        });
        $.ajax({
            type:'post',
            url:'/deletetask/'+clientId,
            data:{
                _token: $('meta[name="csrf-token"]').attr('content'),
                schools:schoolId
            },
            success:function(data){
                alert("success");
            }
        });
        $("#deletenumberofschools").hide();
        $("#editClient").trigger('click');
        
    });

    //close client
    $("#closeClient").on('click',function(){
        var clientId = $(this).val();
        if(confirm("Do you really want to close this client")){
            $.ajax({
                type:'post',
                url:'/closeclient/'+clientId,
                data:{
                    _token: $('meta[name="csrf-token"]').attr('content'),
                    
                },
                success:function(data){
                    alert("success");
                }
            });
            location.reload();
        }
        

        

    });

    //go back
    $("#addclientclose").click(function(){
        $("#addnumberofschools").hide();
        $("#clientEditForm").show('slow');

    });
    $("#deleteclientclose").click(function(){
        $("#deletenumberofschools").hide();
        $("#clientEditForm").show('slow');

    });

});