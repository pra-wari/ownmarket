<?php



namespace App\Http\Controllers\Auth;



use App\User;
use App\Role;
use Illuminate\Support\Str;

use App\Http\Controllers\Controller;

use Socialite;

use Exception;

use Auth;



class SocialLoginController extends Controller

{



    /**

     * Create a new controller instance.

     *

     * @return void

     */

    public function redirectToProvider($social)

    {

        return Socialite::driver($social)->redirect();

    }



    /**

     * Create a new controller instance.

     *

     * @return void

     */

    public function handleSocialCallback($social)

    {
        

        try {
            $user = Socialite::driver($social)->user();
        } catch (\Exception $e) {
            return redirect('/login');
        }
        // only allow people with @company.com to login
        if(explode("@", $user->email)[1] !== 'gmail.com'){
            return redirect()->to('/login');
        }
        // check if they're an existing user
        $existingUser = User::where('email', $user->email)->first();
        if($existingUser){
            // log them in
            auth()->login($existingUser, true);
            return redirect()->to('/home');
            
        } else {
           
           
            // create a new user
            $newUser                  = new User;
            $newUser->name            = $user->name;
            $newUser->email           = $user->email;
            $newUser->google_id       = $user->id;
            $newUser->google_picture_link = $user->avatar;
            
            $newUser->password = str::random();
            $newUser->access = 1;
            $newUser->save();
            $role = Role::find(1);
            $newUser->roles()->save($role);
            auth()->login($newUser, true);
            return redirect()->to('/home');
        }
        return redirect()->to('/login');
    }
}