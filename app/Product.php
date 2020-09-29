<?php

namespace App;
use App\User;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
   protected $fillable = ['name','image','description','category','quantity','price','brand','marked_price','discount'];

   public function user(){
       return $this->belongsTo('App\User');
   }

   public function carts(){
       return $this->hasMany('App\Cart','product_id','id');
   }

   public function comments(){
       return $this->hasMany('App\Comment','product_id','id');
   }
}
