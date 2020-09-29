<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Gate;
use App\Product;
use App\User;


use DB;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $user = Auth::User();
        $products = Product::all();
        return view('backEnd/home',compact('user','products'));
        
        
    }
    
}
