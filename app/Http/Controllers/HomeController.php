<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Gate;
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
        return view('backEnd/home',compact('user'));
        
        
    }
    public function downloadFile($fileId=NULL){

        if(DB::table('task_files')->where('id', $fileId)->exists()){
            $feeds_file = DB::table('task_files')->where('id', $fileId)->first();
            $path ='/uploads/activityfeeds/'.$feeds_file->file_name;
           
            // return response()->download($path, $feeds_file
            //       ->display_name, ['Content-Type' => $feeds_file->type]);
            return response()->json([
                'url'=>$path,
                'displayName'=>$feeds_file->display_name
            ]);
            
        }else{
            return response()->json();
        }
        
        
        
        // $path = public_path(). '/uploads/activityfeeds'. $feeds_file->filename;
        // return response()->download($path, $feeds_file
        //          ->original_filename, ['Content-Type' => $feeds_file->mime]);
     }

     public function updateCapacity($id){
         $consultant = Consultant::where('consultant_id',$id);
         $consultant->update(['capacity'=>$_POST['capacity']]);
         return response()->json();

     }
}
