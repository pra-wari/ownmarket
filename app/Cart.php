<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    protected $fillable = [
        'user_id',
        'product_id',
        'status'
    ];

    public function product(){
        return $this->belongsTo('App\Product');
    }
}
