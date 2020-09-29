<?php

namespace App;
use App\Product;



use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{


    // relation with Permissions
    public function permissionsGroup()
    {

        return $this->belongsTo('App\Permissions', 'permissions_id');
    }

    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'google_id',
        'password',
        'google_picture_link',
        'contact',
        'role',
        'access',
        'access_token'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
    public function addNew($input)

    {

        $check = static::where('google_id',$input['google_id'])->first();



        if(is_null($check)){

            return static::create($input);

        }



        return $check;

    }
    

    public function roles(){
        return $this->belongsToMany('App\Role');
    }
     

    public function products(){
        return $this->hasMany('App\Product','user_id','id');
    }
   
    public function carts(){
        return $this->hasMany('App\Cart','user_id','id');
    }

    public function comments(){
        return $this->hasMany('App\Comment','user_id','id');
    }
}
 
