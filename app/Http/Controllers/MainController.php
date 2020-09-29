<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Product;

class MainController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
    }

    public function get_content(Request $request){
        $user  = Auth::User();
        $products = $user->products;
        $html = view("backEnd.$request->div_id",compact('user'))->render();
        $response = array(
            "success"=>true,
            "html"=>$html
        );

        return json_encode($response);
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
    public function update(Request $request)
    {  
        $user = Auth::User();
        $name=$request->name;
        $number = $request->contact;
       
        if($request->current){
            $current = bcrypt($request->current);
            $new = bcrypt($request->new);
            $confirm = bcrypt($request->confirm);
            
            if($user->password==$current){
                if($new==$confirm){
                    $user->update([
                        'name'=>$name,
                        'contact'=>$number,
                        'password'=>$confirm
                    ]);
                    $success=true;
                    $msg="Your profile is updated successfully";

                }else{
                    $success=false;
                    $msg="Confirm password mismatched";
                }
            }else{
                $success=false;
                $msg="Current password mismatched";
            }

            $response = array(
                'success'=>$success,
                'message'=>$msg
               );
        
                return $response;
            
        }else{
            $user->update([
                'name'=>$name,
                'contact'=>$number,
                
            ]);
            $success=true;
            $msg="Your profile is updated successfully";

        }
        
        $file = $request->file;
        if($file!="undefined"){
           $fileName = $file->getClientOriginalName();
           $file->storeAs('public/profile',$fileName);
           $picUrl = "storage/profile/$fileName";
           $user->update(['google_picture_link'=>$picUrl]);
           $success=true;
            $msg="Your profile is updated successfully";
           
        }
       $response = array(
        'success'=>$success,
        'message'=>$msg
       );

        return $response;
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
