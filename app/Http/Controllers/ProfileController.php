<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Auth;
use DB;
use App\User;
use App\Consultant;


class ProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $user = Auth::user();
       $consultant = $user->consultant[0];
       
       return view('backEnd/profile',compact('user','consultant'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if($_POST['action']=="editprofile"){
            $user = Auth::User();
            $consultant = Consultant::where('consultant_id',$id);
            
            
            $user->update(['name'=>$_POST['name'],'contact'=>$_POST['phone']]);
            $consultant->update(['payment_preference'=>$_POST['payment_mode'],'payment_details'=>$_POST['paymentDetails']]);
            return response()->json();

        }
        if($_POST['action']=="changePassword"){
            
            $row = User::where('id',$id);
            $user = User::where('id',$id)->first();
            $current = $_POST['current'];
            $new = $_POST['new'];
            $confirm = $_POST['confirm'];
            if($current==$user->password){
               if($new==$confirm){
                    $row->update(['old_password_2'=>$user->old_password_1]);
                   $row->update(['old_password_1'=>$user->password]);
                    $row->update(['password'=>$new]);
                   
                    return response()->json(array('status'=>"Your password is updated successfully",'key'=>1));

                }else{
                    return response()->json(array('status'=>"New password and confirm password mismatched",'key'=>0));
                }
            }else{
                
                return response()->json(array('status'=>"You entered Invalid password",'key'=>0));
            }
            

        }
        if($_POST['action']=="updateProfilePicture"){
            $row = User::where('id',$id);
            $user = User::where('id',$id)->first();
            $request->validate([
                'photo'=>'required|mimes:jpg,jpeg,png|max:4096'
            ]);
            $file = $request->file('photo');
            if($file->isValid()){
                
                $name = $file->getClientOriginalName();
                $file->move('images/profile',$name);
               $row->update(['pic_url'=>$name]);
               return back()->with('success',"Picture uploaded successfully.");
    
            }

        }
        
        
       
        
        


        //  if($request->currentPassword){
        //      if($request->currentPassword==$user->password){
        //          if($request->newPassword){
        //             if($request->newPassword==$request->confirmPassword){
                            
        //                    $row->update(['old_password_2'=>$user->old_password_1]);
        //                     $row->update(['old_password_1'=>$user->password]);
                        
        //                     $row->update(['password'=>$request->newPassword]);
        //                     return redirect()->back()->with('success','Profile updated successfully');
          
                        
                         
        //              }else{
                         
        //                  return back()->with('warning','New Password and confirm password mismatched');
        //              }

        //          }else{
        //              return back()->with('warning','Password can not be Null');
        //          }
                 

        //      }else{
                 
        //           return back()->with('warning','Incorrect Current Password');
        //      }
        // }else{
             
        //          if($request->name){
        //             $row->update(['name'=>$request->name,'contact'=>$request->phone]);
        //             return redirect()->back()->with('success','Profile updated successfully');
        //          }
        //     }

        //     return back();
         

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
