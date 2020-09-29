<div class="main-content">
<script src="js/mycart.js"></script>
@foreach($user->carts as $cart)
    
    <div class="products" >
        <img src="storage/product_images/{{$cart->product->image}}" class="img-rounded" alt="img">
        <p class="product-text">
            <span class="brand">{{$cart->product->brand}}</span><br/>
            <span class="name">{{$cart->product->name}}</span><br/>
            
            <b>&#8377 {{$cart->product->price}}</b>
            <span class="mark_price">
                   <strike>{{$cart->product->marked_price}}</strike>
            </span>
               
            <span class="discount">
                {{$cart->product->discount}}% off
            </span>
        </p>
        <p>
            <button class="btn remove_item" style="width:46%"><b>Buy Now</b></button>
            <button class="btn remove_item" style="width:46%" value ="{{$cart->id}}"><b>Remove</b></button>
        </p>
    </div>

@endforeach
</div>