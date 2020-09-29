<!Doctype html>
<html>
  <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">

      <!-- CSRF Token -->
      <meta name="csrf-token" content="{{ csrf_token() }}">

      <title>Ownmarket</title>
      <link rel="shortcut icon" href="images/logo.png" type="images/png">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
      <!-- jQuery library -->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <!-- Latest compiled JavaScript -->
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      
      <link href="{{asset('css/welcome.css')}}" rel="stylesheet">
      <script src="{{asset('js/welcome.js')}}"></script>
      
  </head>
  <body>
    <div class="container-fluid">
      <nav class="navbar navbar-default navbar-static-top">
          <div class="container">
              <div class="top-left">
                  <div class="navbar-header">
                      <a class="navbar-brand">
                          <img src="images/logo.png" alt="logo">
                      </a>
                  </div>
              </div>
              <div class="navbar-right">
                  <ul>
                      <li><a href="/login"><span class="glyphicon glyphicon-log-in"></span>&nbsp; Login</a></li>
                      <li><a href="/register"><span class="glyphicon glyphicon-user"></span>Register</a></li>
                  </ul>
              </div>
              <!-- <ul>
                  <li>Login</li>
                  <li>Register</li>
              </ul> -->
          </div>
      </nav>
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner">
          <div class="item active">
            <img src="images/banner1.jpg" alt="Los Angeles">
          </div>

          <div class="item">
            <img src="images/banner2.jpg" alt="Chicago">
          </div>

          <div class="item">
            <img src="images/banner3.jpg" alt="New York">
          </div>
        </div>

        <!-- Left and right controls -->
        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      @foreach($products as $product)
    
      <div class="products" id="{{$product->id}}">
            <img src="storage/product_images/{{$product->image}}" class="img-rounded" alt="img">
            <p class="product-text">
                <span class="brand">
                    <b>{{$product->brand}}</b>
                </span></br>
                <span class="name">
                    {{$product->name}}
                </span>
                </br>
               
                <b>&#8377 {{$product->price}}</b>
                <span class="mark_price">
                   <strike>&#8377 {{$product->marked_price}}</strike>
                </span>
               
                <span class="discount">
                   {{$product->discount}}% off
                </span>
            </p>
        </div>
      
      @endforeach 

      <div class="col-md-12 foot">
        <div class="col-md-4 footer-text">
          About Us
          <hr class="foot-underline">
          <ul>
            <li><a href="#">About OwnMarket</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
        <div class="col-md-4 footer-text">
          Contact Us
          <hr class="foot-underline">
          <ul>
            <li><span class="glyphicon glyphicon-earphone"></span>&nbsp; +91 9761268848</li>
            <li>
              <ul>
               <li><a href="#"><i class="fa fa-facebook-square" style="color:#3b5998;"></i></a></li>
               <li><a href="#"><i class="fa fa-linkedin-square" style="color:#0e76a8;"></i></a></li>
               <li><a href="#"><i class="fa fa-twitter-square" style="color:#00acee;"></i></a></li>
               <li><a href="#"><i class="fa fa-google-plus-square" style="color:#B23121;"></i></a></li>
              </ul>
            </li>
           
          </ul>
        </div>
        <div class="col-md-4 footer-text">
          Legal
          <hr class="foot-underline">
          <ul>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Refund & Cancellation</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div id="footer">2020 OwnMarket All Right Reserved</div>
  </body>
</html>