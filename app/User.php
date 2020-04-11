<?php

namespace App;


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
        'photo',
        'permissions_id',
        'status',
        'permissions',
        'connect_email',
        'connect_password',
        'provider_id',
        'provider',
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
    // public function consultant()
    //  {
    //      return $this->hasOne('App\Consultant');
    //  }
    //  public function client(){
    //      return $this->hasOne('App\Client');
    //  }

     public function client()
    {
        // return $this->hasMany('App\Client', 'client_id', 'id')->select( array('*') );
        return $this->hasManyThrough('App\Client', 'App\User', 'id', 'client_id', 'id', 'id')->select( array('*') );
    }

    public function consultant()
    {
        // return $this->hasOne('App\Consultant', 'consultant_id', 'id');
        return $this->hasManyThrough('App\Consultant', 'App\User', 'id', 'consultant_id', 'id', 'id')->select( array('*') );
    }
}
 
