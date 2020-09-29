<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Product;


class welcomeController extends Controller
{
    public function show(){
        $products = Product::ALL();
        return view('backEnd.welcome',compact('products'));
    }
}
