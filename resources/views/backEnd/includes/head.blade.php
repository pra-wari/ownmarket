<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>MiM Essay CRM</title>
    <meta name="description" content="MiM Essay CRM">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    


    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.0/normalize.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pixeden-stroke-7-icon@1.2.3/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.2.0/css/flag-icon.min.css">
    <link rel="stylesheet" href="{{ url('assets/css/cs-skin-elastic.css') }}">
    <link rel="stylesheet" href="{{ url('assets/css/style.css') }}">
    <!-- <script type="text/javascript" src="https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js"></script> -->
    <link href="https://cdn.jsdelivr.net/npm/chartist@0.11.0/dist/chartist.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/jqvmap@1.5.1/dist/jqvmap.min.css" rel="stylesheet">

    <link href="https://cdn.jsdelivr.net/npm/weathericons@2.1.0/css/weather-icons.css" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/fullcalendar@3.9.0/dist/fullcalendar.min.css" rel="stylesheet" />
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"> 

    <!-- ***************** -->
    
    

    <!-- *********** -->
   <style>
    #weatherWidget .currentDesc {
        color: #ffffff!important;
    }
        .traffic-chart {
            min-height: 335px;
        }
        #flotPie1  {
            height: 150px;
        }
        #flotPie1 td {
            padding:3px;
        }
        #flotPie1 table {
            top: 20px!important;
            right: -10px!important;
        }
        .chart-container {
            display: table;
            min-width: 270px ;
            text-align: left;
            padding-top: 10px;
            padding-bottom: 10px;
        }
        #flotLine5  {
             height: 105px;
        }

        #flotBarChart {
            height: 150px;
        }
        #cellPaiChart{
            height: 160px;
        }
        .pagination-center{
            width:100% !important;
            text-align:center;
        }
        .pagination > .active > span{
            background-color:#fdaf1a;
            border-color:#fdaf1a;
            box-shadow: 1px 3px 6px 0px gray;
        }

    /* ***********for master School List********* */
    .sticky_head{
        background-color: #ffe0a5; position:sticky; top:0;border-bottom: 2px solid darkgrey; height:40px; line-height:40px
    }
    .table_head{
        width:18%;
        font-size: 16px;
        margin-left: 9px;
        display:inline-block;
        font-weight: 700;
    }
    /* ***********for master School List********* */
    /* *****for interview questions***** */
    .download-btn {
  margin:10px 0;
  padding: 0;
  position: relative;
  left:50%;
  transform: translateX(-50%);
}

.download-btn-text {
  background-color: #FFF;
  padding: 11px;
  height: auto;
  -webkit-box-shadow: inset 0px 0px 0px 10px #f00;
  -moz-box-shadow: inset 0px 0px 0px 5px #FDAF1A;
  box-shadow: inset 0px 0px 0px 2px #FDAF1A;
}

.download-btn-text a{
  font-size:16px;
  color:black;
  text-decoration: none;
}

.download-btn-text:hover{
   background-color:#FDAF1A;
}

.download-icon-container {
  padding: 14px;
  height: auto;
  background-color: #FDAF1A;
}

.download-icon-container a{
  color:black;
  font-size:16px;
 }

.download-icon-container a:hover {
  color:white
 }


            label {
                font-weight: 400;
                font-size: 16px;
            }
     
            
   span.check-item {
    margin-left: 20px;
    align-items: center;
    
   }
    /* ************ */

    /* ****for consultant profile**** */
    .image-upload > input{
        display:none;
    }
    .image-upload img{
        padding:10%;
        cursor:pointer;
        height:200px;
        width:200px;
        border-radius:50%;

    }
    .profile-left{
        padding:5%;
    }
    .profile-right{
        padding:5%;
    }
    .profile{
        padding:10%;
    }
    .btn{
        width:100%;
        margin-top:2%;
    }


    /* ****for consultant profile**** */

    </style>
</head>

<body>
   