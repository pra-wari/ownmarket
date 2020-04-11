$(document).ready(function(){
    $("#clientBtn").click();
   

    $(document).on('click','.client_tab',function(){
        var client = $(this).attr('id');
        //alert(client);
        if($('#'+client+'_datatable').css('display') != 'block'){
            $('.client-data').slideUp(500);
            $('#'+client+'_datatable').slideDown(500);
          } else {
            $('.client-data').slideUp(500);
          }
    });

    $(document).on('click','.consultant_tab',function(){
        var consultant = $(this).attr('id');
        // $('.consultant_data').slideUp();
        // $('#'+consultant+'_datatable').slideDown();
        if($('#'+consultant+'_datatable').css('display') != 'block'){
            $('.consultant_data').slideUp(500);
            $('#'+consultant+'_datatable').slideDown(500);
          } else {
            $('.consultant_data').slideUp(500);
          }
    });
    
});



function load_inactive_users( user ) {
  
    $('#overlay').show();
    
  
    $.ajax({
        type:'post',
        url:'/get_inactive_users',
        data:{
            _token: $('meta[name="csrf-token"]').attr('content'),
            user:user
        },
        success:function(data){
            $('#overlay').hide();
            var appendData = '<div class="row well text-center"><h3>In-active ' + user + '</h3></div>';
            
         
            if ( user == "clients" ) {
                // $("#right-section").empty();
             

                $.each(data, function(key, client) {
                    
                 
                    
                   appendData += '' +
                    '<div class="row client_tab" id="client_' + key + '" style="border: 1px solid; cursor:pointer; border-radius:5px; padding:5px; margin:4px"><b>' + client[0].name + '</b></div>' +
                        '<div class="container-fluid client-data" id="client_' + client[0].client_id + '_datatable">' +
                            '<table class="table" >' +
                                '<thead>' +
                                    '<th>School Name</th>' +
                                    '<th>Document Type</th>' +
                                    '<th>Admit Status</th>' +
                                    '<th>Updated</th>' +
                                '</thead>' +
                                
                                '<tbody id="client_' + client[0].client_id + '_data">';
                                
                   $.each(client, function(id, task) {
                       appendData += '<tr class="task-hours" ';
                            if(task.updated_at >= 48){
                                appendData += 'style="background-color:#c53e46 !important; color:white;"'
                            }
                            else if(task.updated_at >= 36){
                                appendData += 'style="background-color:#fbaf19 !important; color:black;"'
                            }
                                appendData += '>' +
                                        '<td>' + task.school_name + '</td>' +
                                        '<td>' + task.type + '</td>' +
                                        '<td>' + task.admit_status + '</td>' +
                                         '<td>' +task.updated_at + ' Hrs ago</td>' +
                                    '</tr>';
                    });

                    
                    appendData += '</tbody>' +
                            '</table>'+
                        '</div>';
                });
            }
            else if ( user == "consultants" ) {
                $("#right-section").empty();

                var consultant_name = '';
                var consultant_id = 0;
                

                $.each(data, function(key, consultant) {
                     console.log( consultant );

                     tempData = '';

                    $.each(consultant, function(key, client) {
                         consultant_id = client[0].consultant_id;
                         consultant_name = client[0].consultant_name;

                        tempData += '' +
                         '<div class="row client_tab" id="client_' + key + '" style="border: 1px solid; cursor:pointer; border-radius:5px; padding:5px; margin:4px"><b>' + client[0].client_name + '</b></div>' +
                         '<div class="container-fluid client-data" id="client_' + client[0].client_id + '_datatable">' +
                             '<table class="table " >' +
                                 '<thead>' +
                                     '<th>School Name</th>' +
                                     '<th>Document Type</th>' +
                                     '<th>Admit Status</th>' +
                                     '<th>Updated</th>' +
                                 '</thead>' +
                                
                                 '<tbody id="client_' + client[0].client_id + '_data">';
    
                            $.each(client, function(id, task) {
                                tempData += '<tr class="task-hours" ';
                                    if(task.updated_at >= 48){
                                        tempData += 'style="background-color:#c53e46 !important; color:white;"'
                                    }
                                    else if(task.updated_at >= 36){
                                        tempData += 'style="background-color:#fbaf19 !important; color:black;"'
                                    }
                                    tempData += '>' +
                                                '<td>' + task.school_name + '</td>' +
                                                '<td>' + task.type + '</td>' +
                                                '<td>' + task.admit_status + '</td>' +
                                                '<td>' + task.updated_at + ' Hrs ago</td>' +
                                            '</tr>';
                            });
    
                        
                        tempData += '' +
                                '</tbody>' +
                            '</table>'+
                        '</div>';
                    });

                    appendData += '' +
                    '<div class="row consultant_tab" id="consultant_' + consultant_id + '" style="border: 1px solid; cursor:pointer; border-radius:5px; padding:5px; margin:12px 4px"><b>' + consultant_name + '</b></div>' +
                    '<div class="container-fluid consultant_data" id="consultant_' + consultant_id + '_datatable">' +
                        tempData +
                    '</div>';
                });
            }
            $("#right-section").html(appendData);
           
        },
        error:function(xhr,thrownError){

        }
    });






         


    // $.ajax({
    //     method: "POST", 
    //     url: "../api/get_inactive_users.php", 
    //     data: {
    //         "user" : user,
    //     }
    // }).done(function( response ) {
    //     if ( response != null && response != '' ) {
    //         var appendData = '<div class="row well text-center"><h3>In-active ' + user + '</h3></div>';
    //         var response = JSON.parse( response );

    //         if ( user == "clients" ) {
    //             $("#right-section").empty();

    //             $.each(response, function(key, client) {
    //                 appendData += '' +
    //                 '<div class="row client_tab" id="client_' + key + '" style="border: 1px solid; cursor:pointer; border-radius:5px; padding:5px; margin:4px"><b>' + client[0]["name"] + '</b></div>' +
    //                     '<div class="container-fluid client-data" id="client_' + client[0]["client_id"] + '_datatable">' +
    //                         '<table class="table table-striped" >' +
    //                             '<thead>' +
    //                                 '<th>School Name</th>' +
    //                                 '<th>Document Type</th>' +
    //                                 '<th>Admit Status</th>' +
    //                                 '<th>Updated</th>' +
    //                             '</thead>' +
                                
    //                             '<tbody id="client_' + client[0]["client_id"] + '_data">';

    //                 $.each(client, function(id, task) {
    //                     appendData += '<tr class="task-hours" ';
    //                         if(task["hours_ago"] >= 48){
    //                             appendData += 'style="background-color:#c53e46 !important; color:white;"'
    //                         }
    //                         else if(task["hours_ago"] >= 36){
    //                             appendData += 'style="background-color:#fbaf19 !important; color:black;"'
    //                         }
    //                             appendData += '>' +
    //                                     '<td>' + task["school_name"] + '</td>' +
    //                                     '<td>' + task["type"] + '</td>' +
    //                                     '<td>' + task["admit_status"] + '</td>' +
    //                                     '<td>' + parseInt(task["hours_ago"]) + ' Hrs ago</td>' +
    //                                 '</tr>';
    //                 });

                    
    //                 appendData += '</tbody>' +
    //                         '</table>'+
    //                     '</div>';
    //             });
    //         }
    //         else if ( user == "consultants" ) {
    //             $("#right-section").empty();

    //             var consultant_name = '';
    //             var consultant_id = 0;

    //             $.each(response, function(key, consultant) {
    //                 console.log( consultant );

    //                 tempData = '';

    //                 $.each(consultant, function(key, client) {
    //                     consultant_id = client[0]["consultant_id"];
    //                     consultant_name = client[0]["consultant"];

    //                     tempData += '' +
    //                     '<div class="row client_tab" id="client_' + key + '" style="border: 1px solid; cursor:pointer; border-radius:5px; padding:5px; margin:4px"><b>' + client[0]["name"] + '</b></div>' +
    //                     '<div class="container-fluid client-data" id="client_' + client[0]["client_id"] + '_datatable">' +
    //                         '<table class="table table-striped" >' +
    //                             '<thead>' +
    //                                 '<th>School Name</th>' +
    //                                 '<th>Document Type</th>' +
    //                                 '<th>Admit Status</th>' +
    //                                 '<th>Updated</th>' +
    //                             '</thead>' +
                                
    //                             '<tbody id="client_' + client[0]["client_id"] + '_data">';
    
    //                     $.each(client, function(id, task) {
    //                         tempData += '<tr class="task-hours" ';
    //                         if(task["hours_ago"] >= 48){
    //                             tempData += 'style="background-color:#c53e46 !important; color:white;"'
    //                         }
    //                         else if(task["hours_ago"] >= 36){
    //                             tempData += 'style="background-color:yellow !important;"'
    //                         }
    //                             tempData += '>' +
    //                                         '<td>' + task["school_name"] + '</td>' +
    //                                         '<td>' + task["type"] + '</td>' +
    //                                         '<td>' + task["admit_status"] + '</td>' +
    //                                         '<td>' + parseInt(task["hours_ago"]) + ' Hrs ago</td>' +
    //                                       '</tr>';
    //                     });
    
                        
    //                     tempData += '' +
    //                             '</tbody>' +
    //                         '</table>'+
    //                     '</div>';
    //                 });

    //                 appendData += '' +
    //                 '<div class="row consultant_tab" id="consultant_' + consultant_id + '" style="border: 1px solid; cursor:pointer; border-radius:5px; padding:5px; margin:12px 4px"><b>' + consultant_name + '</b></div>' +
    //                 '<div class="container-fluid consultant_data" id="consultant_' + consultant_id + '_datatable">' +
    //                     tempData +
    //                 '</div>';
    //             });
    //         }
    //     }
    //     else {
    //         appendData = '<div class="container-fluid well text-center"><h2>No Inactive ' + user + '</h2></div>'
    //     }

    //     $("#right-section").html( appendData );

    //     $('.client_tab').on('click',function(){
    //         var client = $(this).attr('id');
    //         if($('#'+client+'_datatable').css('display') != 'block'){
    //             $('.client-data').slideUp(500);
    //             $('#'+client+'_datatable').slideDown(500);
    //           } else {
    //             $('.client-data').slideUp(500);
    //           }
    //     })

    //     $('.consultant_tab').on('click',function(){
    //         var consultant = $(this).attr('id');
    //         // $('.consultant_data').slideUp();
    //         // $('#'+consultant+'_datatable').slideDown();
    //         if($('#'+consultant+'_datatable').css('display') != 'block'){
    //             $('.consultant_data').slideUp(500);
    //             $('#'+consultant+'_datatable').slideDown(500);
    //           } else {
    //             $('.consultant_data').slideUp(500);
    //           }
    //     })

    //     $('#overlay').hide();
    // });
}