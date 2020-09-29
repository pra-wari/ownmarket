<div class="main-content">
    <link href="css/product.css" rel="stylesheet">
    <script src="js/product.js" type="text/javascript"></script>
   
    <div class="alert alert-success" style="display:none;">
        <p>Product is added to your cart successfully</p>
    </div> 
    <div class="row">
        <div class="col-sm-6">
            <div class="left-div">
                <img src="storage/product_images/{{$product->image}}" class="img-rounded" alt="img">
                <button class="btn-lg" id="mycart" value="{{$product->id}}"><b><i class="menu-icon fa fa-shopping-cart"></i>&nbsp;Add to Cart</b></button>
                <button class="btn-lg"><b>Buy Now  </b></button>
            
            </div>
        </div>
        <div class="col-sm-6">
            <p class="product-detail">
                <span class="brand">{{$product->brand}}</span></br></br>
                <span class="name">{{$product->name}}</span></br></br>
                <span class="price">&#8377 {{$product->price}}</span>
                <span class="mark_price"><strike>&#8377 {{$product->marked_price}}</strike></span>
                <span class="discount">{{$product->discount}}%OFF</span>
            </p>
            <div class="description">
                {{$product->description}}
            </div>
            <h2 style="font-size: 24px; font-weight: 600;margin-top: 79px;">
                Reviews & Ratings
            </h2>
            <div class="reviews">
                 @foreach($product->comments as $p)
                   <div class="comment">
                       <span class="reviewer">{{$p->user->name}}</span></br>
                       <span class="comment-user">{{$p->comment}}</span>
                   </div>
                @endforeach
                
            </div>
        </div>
    </div>
</div>
    
  

    
    




