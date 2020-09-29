<div class="main-content">
@foreach($user->products as $product)
    
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
                   <strike>{{$product->marked_price}}</strike>
                </span>
               
                <span class="discount">
                   {{$product->discount}}% off
                </span>
            </p>
        </div>
@endforeach 
 </div>