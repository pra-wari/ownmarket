<?php

namespace App\Http\Controllers;

use App\Product;
use App\Cart;
use Storage;
use Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = Auth::User();
        $validator = validator::make($request->all(),[
            'product_name'=>'required',
            'product_brand'=>'required',
            'quantity'=>'required',
            'price'=>'required',
            'category'=>'required|not_in:"NULL"',
            'productImage'=>'required|image|mimes:jpeg,png,jpg,gif,svg|max:6000',
        ]);
        if($validator->fails()){
            return response()->json(['errors'=>$validator->errors()->all(),'success'=>false]);
        }

        $name = $request->product_name;
        $brand = $request->product_brand;
        $quantity = $request->quantity;
        $price = $request->price;
        $category = $request->category;
        $description = $request->description;
        $file = $request->file('productImage');
        $filename = $file->getClientOriginalName();
        $a = "";
        $a = rand(1,6);
        $a .= rand(1,9);
        $discount = (int)$a;
        $mark_price = $price*(100/(100-$discount));
        $product = new Product([
            'name' => $name,
            'description' => $description,
            'category' => $category,
            'quantity' => $quantity,
            'price' => $price,
            'discount'=>$discount,
            'marked_price'=> $mark_price,
            'image' => $filename,
            'brand' => $brand

        ]);
        $user->products()->save($product);

        $file->storeAs('public/product_images',$filename);
        
       return response()->json(['success'=>true,'message'=>'Congrats! your product is added successfully']);
    }


        public function upload_image(Request $request){

        }
    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $user = Auth::User();
        $product = Product::find($request->id);
        $html = view('backEnd/product',compact('user','product'))->render();
        $response = array(
            'success'=>true,
            'html'=>$html
        );

        return json_encode($response);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    public function addProductToCart(Request $request){
        $id = $request->id;
        $user = Auth::User();
   
         $cart = new Cart([
             'status' => 'added to cart',
             'product_id'=> $id
         ]); 
         $user->products()->save($cart);
         return 1;

    }

    public function removeProduct(Request $request){
        $id = $request->input('item_id');
        $item = Cart::find($id)->first();
        $item->delete();
        return 1;
        
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
}
