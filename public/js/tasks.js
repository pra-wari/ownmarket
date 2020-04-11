var current_client = null;
var current_task = null;
$(document).ready(function(){
    // add client
    $("#selectClient").on('change',function(){
        var clientId = $(this).val();
        $.ajax({
            type:'post',
            url:'getClientData/'+clientId,
            data:{_token:$("meta[name='csrf-token']").attr('content')},
            success:function(data){
                $("#firstName").val(data.name);
                $("#clientEmail").val(data.email);
            },
            error:function(thrownError){
                alert(thrownError);
            }
        });
    });

    // show add client form
    $("#addClient").click(function(){
        $("#client-info,#dashboard,#updateClient").slideUp('slow');
        $("#addClientForm").slideToggle();
    });

    //information updated in database for a new added client
    $("#addClientForm").on('submit',function(event){
        event.preventDefault();
        $.ajax({
            type:'post',
            url:'/addclient',
            data:{
                _token:$('meta[name="csrf-token"]').attr('content'),
                email:$("#clientEmail").val(),
                assignedTo:$("#assignedConsultant").val()
            },
            success:function(){
                alert("Client added successfully");
                $("#addClientForm").slideUp();
            },
            error:function(){
                alert("Process Failed!");
            }
        });
    });

    // close add client form
    $('.close_form').on('click',function(){
        $('#addClientForm').slideUp(500);
    });

    //get client data
    $(".clientBtn").on('click',function(){
        $('#overlay').show();
        var clientId = $(this).val();
        current_client = clientId;
        $.ajax({
            type:"post",
            url:'getClientData/'+clientId,
            data:{_token:$("meta[name='csrf-token']").attr('content')},
            success:function(data){
                $("#clientName").text(data.name);
                $("#clientStartDate").text(data.startDate);
                $("#clientComment").text(data.comments);
                $("#clientPack").text(data.pack);
                $("#clientSchools").text(data.nos);
                $("#email").text(data.email);
                $("#editClient").attr('value',clientId);
                $("#addClientForm,#updateClient").slideUp('slow');
                $("#client-info,#dashboard").slideDown('slow');

                $("#updateClientName").val(data.name);
                $("#updateClientEmail").val(data.email);
                $("#updatenos").val(data.nos);
                $("#updateStartDate").val(data.startDate);
                $("#clientComments").val(data.comments);
                $("#clientConsultant").val(data.assignedTo).change();
                $("#updatepackBought").val(data.pack);

                $("#ClientAddedName").text(data.name);
                $("#ClientMentor").text(data.assignedName);
                
                $("#tasksList").empty();
                $(".about_tasks").empty();
                $.each(data.results,function(index,result){
                    index++;
                    var task = "<input type='checkbox' value="+result['taskId']+">"+
                    result['schoolName']+"<br/>";
                    if(result['schoolName']){
                        var html = "<button id='task_"+result['taskId']+"' class='btn school-btn' onclick='load_task(this,"+clientId+","+result['taskId']+")' value="+result['schoolId']+"> "+result['schoolName']+"</button>";

                        
                    }else{
                        var html = "<button id='task_"+result['taskId']+"' class='btn school-btn' onclick='load_task(this,"+clientId+","+result['taskId']+")' value="+result['schoolId']+">School "+index+"</button>";

                    }
                    
                    $(".about_tasks").append(html);
                    $("#tasksList").append(task);
                    $(".about_tasks").children().first().trigger('click');
                    //$(".school-btn").first().click();
                   

                    
                    //application status
                    if(data.brainstormingStatus=="Done"){
                        $("#brainstorming_call_status").prop("checked",true);
                        $("#brainstorming_call_date").val(data.brainstormingDate);
                        $("#brainstorming_call_status").attr('disabled',true);
                        $("#brainstorming_call_date").show();
                    }else{
                        $("#brainstorming_call_status").prop("checked",false);
                        $("#brainstorming_call_status").attr('disabled',false);
                        $("#brainstorming_call_date").hide();
                    }

                    
                });

                

                $('#overlay').hide();
            },
            error:function(xhr,thrownError){
                alert(xhr);
            }
        });
    });

    //Edit Client form show
    $("#editClient").click(function(){
        $("#client-info,#dashboard").slideUp('slow');
        $("#updateClient").slideDown('slow');
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
                 name:$("#updateClientName").val(),
                 email:$("#updateClientEmail").val(),
                 nos:$("#updatenos").val(),
                 startDate:$("#updateStartDate").val(),
                 comments:$("#clientComments").val(),
                 assignedTo:$("#clientConsultant").val(),
                 pack: $("#updatepackBought").val()
                 

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

    //add school show
    $("#addSchool").click(function(event){
        event.preventDefault();
        $("#updateClient").slideUp('slow');
        $("#addnumberofschools").slideDown('slow');

    });
    
    //delete school show
    $("#deleteSchool").click(function(event){
        event.preventDefault();
        $("#updateClient").slideUp('slow');
        $("#deletenumberofschools").slideDown('slow');
       

    });

    //close btn (X)
    $("#addclientclose,#deleteclientclose").click(function(){
        $("#addnumberofschools").slideUp('slow');
        $("#deletenumberofschools").slideUp('slow');
        $("#updateClient").slideDown('slow');
    });

    //add schools
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
                $("#addnumberofschools").hide();
                var totalSchools = parseInt($("#updatenos").val())+parseInt($("#numberOfTasks").val());
                $("#updatenos").val(totalSchools);
                $("#editClient").trigger('click');    
           },
           error:function(){
               alert("Oops unable to update!");
           }
        });
        
    });

    //delete schools
    $("#del").on('click',function(){
        var clientId=$("#editClient").val();
        var schoolId = [];
        
        $('#tasksList>:checkbox:checked').each(function(i){
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
                var totalSchools = parseInt($("#updatenos").val())-parseInt(schoolId.length);
                $("#updatenos").val(totalSchools);
                $("#deletenumberofschools").hide();
                $("#editClient").trigger('click');
            }
        });
        
        
    });

    //save schools
    $("#saveChanges").on('click',function(){
        var collgeId = $("#college").val();
        var taskId = $(this).val();
       $.ajax({
           type:'post',
           url:'/saveChanges',
           data:{
               _token:$('meta[name="csrf-token"]').attr('content'),
               taskId:taskId,
               collegeId:collgeId
        
            },
            success:function(data){
                alert("Changes saved successfully");
               $("#task_"+taskId).text(data.schoolName);
            },
            error:function(xhr,thrownError){
                alert(xhr);
            }
       });

        
    });

    
        
     //brainstorming slider   
    if(!$("#brainstorming_call_status").prop('checked')){
        $("#brainstorming_call_status").on('change',function(){
            var date = new Date();
            var dd = date.getDate();
            var mm = date.getMonth()+1;
            var yyyy = date.getFullYear();
            if(dd<10)
            dd = '0'+dd;
            if(mm<10)
            mm='0'+mm;
            var dateIs = yyyy+"-"+mm+"-"+dd;
            $("#brainstorming_call_date").val(dateIs);
            $("#brainstorming_call_date").show();
            $("#brainstorming_call_status").attr('disabled',true);
        });
    }

    // essay call slider
    if(!$("#essay_call_status").prop('checked')){
        $("#essay_call_status").on('change',function(){
            var date = new Date();
            var dd = date.getDate();
            var mm = date.getMonth()+1;
            var yyyy = date.getFullYear();
            if(dd<10)
            dd = '0'+dd;
            if(mm<10)
            mm='0'+mm;
            var dateIs = yyyy+"-"+mm+"-"+dd;
            $("#essay_analysis_call_date").val(dateIs);
            $("#essay_analysis_call_date").show();
            $("#essay_call_status").attr('disabled',true);
        });

    }

    //file upload
    $(document).on('change','.resume_attach',function(){
        upload_files("resume");
    });
    
    $(document).on('change','.essay_attach',function(){
        upload_files("essay");
    });
    

    $(document).on('change','.lor_attach',function(){
        upload_files("lor");
    });

   


    //save changes2
    $(document).on('click','#savechanges2',function(){
        
        var brainstorming=null;
        var essay=null;
        var brainstorming_call_date=null;
        var essay_call_date=null;
        var resume_complete_it_checkbox = $("#resume_complete_it").find(".complete_it_checkbox").html();
        var essay_complete_it_checkbox = $("#essay_complete_it").find(".complete_it_checkbox").html();
        var lor_complete_it_checkbox = $("#lor_complete_it").find(".complete_it_checkbox").html();
        if($("#brainstorming_call_status").prop('checked')){
            brainstorming = 1;
            brainstorming_call_date = $("#brainstorming_call_date").val();
            
        }
        if($("#essay_call_status").prop('checked')){
            essay = 1;
            essay_call_date = $("#essay_analysis_call_date").val();
             
        }

        var admit_status = $("#admitStatus").val();
        var applying_round = $("#applyingRound").val();
        
        
            $.ajax({
                type:'post',
                url:'/saveChanges2',
                data:{
                    _token:$('meta[name="csrf-token"]').attr('content'),
                    brainstorming_status:brainstorming,
                    essay_status:essay,
                    clientId:current_client,
                    taskId : current_task,
                    essayDate:essay_call_date,
                    brainstormingDate:brainstorming_call_date,
                    applyingRound:applying_round,
                    admitStatus:admit_status,
                    finalResume:resume_complete_it_checkbox,
                    finalEssay:essay_complete_it_checkbox,
                    finalLor:lor_complete_it_checkbox
                    
             
                 },
                 success:function(data){
                     alert("Changes saved successfully");
                     if(resume_complete_it_checkbox)
                     $("#resume_complete_it").find(".complete_it_checkbox").attr('disable',true);
                     if(essay_complete_it_checkbox)
                     $("#essay_complete_it").find(".complete_it_checkbox").attr('disable',true);
                     if(lor_complete_it_checkbox)
                     $("#lor_complete_it").find(".complete_it_checkbox").attr('disable',true);
                   
                 },
                 error:function(xhr,thrownError){
                     alert(xhr);
                 }
            });
        
      

        
       
    });

    //add mock
    $(document).on('click',"#addMockBtn",function(){
        $("#addMockDate").show();
    });
    
   //final draft status
   $(document).on('click','.status_complete_it',function(){
    
       var update_arrow = $(this).attr('id');
       if(update_arrow=="resume_complete_it"){
        var complete_it_checkbox = $("#resume_complete_it").find(".complete_it_checkbox");
        (complete_it_checkbox.html() == "") ? (complete_it_checkbox.html("&#10003;")) : (complete_it_checkbox.html(""));
            $("#resume_arrow_status a").each(function(index,item){
                if($(item).hasClass('as-active')){

                }else{
                    
                    $(item).toggleClass('as-skipped');
                    $("#resume_arrow_status a").last().removeClass('as-skipped');
                }

                
               
            
            });
            $("#resume_arrow_status a").last().toggleClass('as-completed');
       }

       if(update_arrow=="essay_complete_it"){
        var complete_it_checkbox = $("#essay_complete_it").find(".complete_it_checkbox");
        (complete_it_checkbox.html() == "") ? (complete_it_checkbox.html("&#10003;")) : (complete_it_checkbox.html(""));
            $("#essay_arrow_status a").each(function(index,item){
                if($(item).hasClass('as-active')){

                }else{
                    
                    $(item).toggleClass('as-skipped');
                    $("#essay_arrow_status a").last().removeClass('as-skipped');
                }

                
            
            
            });
            $("#essay_arrow_status a").last().toggleClass('as-completed');
        }

        if(update_arrow=="lor_complete_it"){
            var complete_it_checkbox = $("#lor_complete_it").find(".complete_it_checkbox");
            (complete_it_checkbox.html() == "") ? (complete_it_checkbox.html("&#10003;")) : (complete_it_checkbox.html(""));
            $("#lor_arrow_status a").each(function(index,item){
                if($(item).hasClass('as-active')){

                }else{
                    
                    $(item).toggleClass('as-skipped');
                    $("#lor_arrow_status a").last().removeClass('as-skipped');
                }

                
            
            
            });
            $("#lor_arrow_status a").last().toggleClass('as-completed');
        }
       
       
   });

  
   

//main dashboard dropdown
$(document).on('change','#main_dashboard_dropdown',function(){
    var task_files = $("#main_dashboard_dropdown").val();

    $.ajax({
        type:'post',
        url:'/api/load_main_dashboard',
        data:{
            _token:$('meta[name="csrf-token"]').attr('content'),
            task_file:task_files,
            task_id:current_task,
            client:current_client
            
        },
        success:function(data){
            alert("success");
            $("#task_files").replaceWith(data);
            
            
        },
        error:function(){
            alert("Process Failed!");
        }
    });

    
});
   
    
    
    
   
     
    
    
    
});

//function trigger on click of task or schools
function load_task(e,clientId,taskId){
    
    $(".school-btn").removeClass("btn-active");
    $(e).addClass("btn-active");
    $("#saveChanges").val(taskId);
    $(".school-btn").css('border','2px solid #5D5D5F');
    $(e).css('border','2px solid #32CD32');
    var collegeId = $(e).val();
    current_task = taskId;
    
    

    $.ajax({
        type:'post',
        url:'getTasks',
        data:{
            _token:$('meta[name="csrf-token"]').attr('content'),
            task_id:taskId,
            client_id:clientId
        },
        success:function(data){
            
            $("#admitStatus").val(data['task_data']['admit_status']).change();
            $("#applyingRound").val(data['task_data']['applying_round']).change();
           
            $("#task_files").replaceWith(data['render_div']);
            color_status_arrows(JSON.stringify(data['client_data']));
            $("#college").val(collegeId).change();
            if(data['task_data']['essay_bulletpoint_call']==1)
            {
                $("#essay_call_status").prop('checked',true);
                $("#essay_call_status").attr('disabled',true);
                $("#essay_analysis_call_date").val(data['task_data']['essay_bulletpoint_call_date']);
                $("#essay_analysis_call_date").show();
            }else{
                $("#essay_call_status").prop('checked',false);
                $("#essay_call_status").attr('disabled',false);
                $("#essay_analysis_call_date").hide();
            }

            if(data['client_data']['cv_completed']==1){
                $("#resume_complete_it").find(".complete_it_checkbox").html("&#10003;");

                $("#resume_arrow_status a").each(function(index,item){
                    if(!$(item).hasClass('as-active')){
                        $(item).addClass('as-skipped');
                        $("#resume_arrow_status a").last().removeClass('as-skipped');
    
                    }
                });
                $("#resume_arrow_status a").last().addClass('as-completed');
            }
            if(data['task_data']['essay_completed']==1){
                $("#essay_complete_it").find(".complete_it_checkbox").html("&#10003;");
                $("#essay_arrow_status a").each(function(index,item){
                    if(!$(item).hasClass('as-active')){
                        $(item).addClass('as-skipped');
                        $("#resume_arrow_status a").last().removeClass('as-skipped');
    
                    }
                });
                $("#essay_arrow_status a").last().addClass('as-completed');
            }
            if(data['task_data']['lor_completed']==1){
                $("#lor_complete_it").find(".complete_it_checkbox").html("&#10003;");
                $("#lor_arrow_status a").each(function(index,item){
                    if(!$(item).hasClass('as-active')){
                        $(item).addClass('as-skipped');
                        $("#lor_arrow_status a").last().removeClass('as-skipped');
    
                    }
                });
                $("#lor_arrow_status a").last().addClass('as-completed');


            }


        },
        error:function(xhr){
            alert(xhr);
        }

    });
    
}

//uploads file to server
function upload_files(attachment_type) {

    if (attachment_type == "resume") {
        $("#resume_edits_available").css("display", "none");
        $("#resume_upload_text").css("display", "inline-block");
    } else if (attachment_type == "essay") {
        $("#essay_edits_available").css("display", "none");
        $("#essay_upload_text").css("display", "inline-block");
    } else if (attachment_type == "lor") {
        $("#lor_edits_available").css("display", "none");
        $("#lor_upload_text").css("display", "inline-block");
    }
    
    var file_data = $("#" + attachment_type + "_file_attach").prop('files');
    console.log(file_data);
    
     var task_id = $('.btn-active').prop('id');
     task_id = task_id.substr(5);
    
    //create form for ajax request
    var form_data = new FormData();
    var token = $("meta[name='csrf-token']").attr('content');
    form_data.append('_token',token);
    
    for (var i = 0; i < file_data.length; i++) {

        form_data.append('file[]', file_data[i]);
    }
    form_data.append('task_id', task_id);
    form_data.append('attachment_type', attachment_type);
    form_data.append('client_id', current_client);
   
    $.ajax({
        type:'post',
        url:'/upload_file',
        cache: false,
        contentType: false,
        processData: false,
        data:form_data,
        
        success: function(data) {
            //alert("lsdkfh");
            if (attachment_type == "resume") {
                $("#resume_upload_text").css("display", "none");
            } else if (attachment_type == "essay") {
                $("#essay_upload_text").css("display", "none");
            } else if (attachment_type == "lor") {
                $("#lor_upload_text").css("display", "none");
            }

            $(".about_tasks").children(".btn-active").click();
            // window.location.href = window.location.origin + window.location.pathname + '?client_id=' + current_client + '&task_id=' + task_id;

        },
        error:function(xhr,thrownError){
            alert(thrownError);
        }
    });
}

//color arrows 
function color_status_arrows( docs_status ) {
    docs_status = JSON.parse( docs_status );
  
    var addClass = 'as-active';
    $("#resume_arrow_status a").each(function( index , item ){
      $(item).addClass( addClass );
  
      if ( $(item).data('status').toLowerCase() == 'sixth_edit' ) {
        if ( $(item).hasClass('as-active') ) {
          $(item).parent().show();
        }
      }
      
      if ( $(item).data("status").toLowerCase() == docs_status.cv ) {
        if ( docs_status.cv_completed == 1 ) {
          addClass = 'as-skipped';
        }
        else {
          return false;
        }
      }    
    });
  
    if ( docs_status.cv_completed == 1 ) {
      $("#resume_arrow_status a").last().toggleClass( addClass + ' as-completed' );
    }
  
    addClass = 'as-active';
    $("#essay_arrow_status a").each(function( index , item ){
      $(item).addClass( addClass );
  
      if ( $(item).data('status').toLowerCase() == 'sixth_edit' ) {
        if ( $(item).hasClass('as-active') ) {
          $(item).parent().show();
        }
      }
      
      if ( $(item).data("status").toLowerCase() == docs_status.essay_status ) {
        if ( docs_status.essay_completed == 1 ) {
          addClass = 'as-skipped';
        }
        else {
          return false;
        }
      }    
    });
  
    if ( docs_status.essay_completed == 1 ) {
      $("#essay_arrow_status a").last().toggleClass( addClass + ' as-completed' );
    }
  
    addClass = 'as-active';
    $("#lor_arrow_status a").each(function( index , item ){
      $(item).addClass( addClass );
  
      if ( $(item).data('status').toLowerCase() == 'sixth_edit' ) {
        if ( $(item).hasClass('as-active') ) {
          $(item).parent().show();
        }
      }
      
      if ( $(item).data("status").toLowerCase() == docs_status.lor_status ) {
        if ( docs_status.lor_completed == 1 ) {
          addClass = 'as-skipped';
        }
        else {
          return false;
        }
      }    
    });
  
    if ( docs_status.lor_completed == 1 ) {
      $("#lor_arrow_status a").last().toggleClass( addClass + ' as-completed' );
    }
  }

//deleted uploaded files
function delete_uploaded_file( file_id ) {

    var isConfirmed = confirm("Do You really want to delete this file ?");
    
    if ( isConfirmed ) {
      $.ajax({
        url: '/task-file/' + file_id,
        type: "POST",
        data: {
          "_method": "DELETE",
        },
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
    
        success: function ( response ) {
          response = JSON.parse(response);
          
          if ( ! response ) {
            alert("File Deleted Successfully!");
            $('.school-btn.btn-active').click();
          }
          else {
            alert( response.message );
          }
        }
      });
    }
  }

 
