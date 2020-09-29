<?php
use App\User;
use App\Product;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/test', function () {
   return view('backEnd.test');
});

Route::get('/product', function () {
    $product = Product::find(5);
    return view('backEnd.product',compact('product'));
 });

Route::get('/','welcomeController@show' );



//Auth routes

Auth::routes();

Route::get('auth/{social}', 'Auth\SocialLoginController@redirectToProvider')->where( 'social', 'google' );
Route::get('oauth/{social}/callback', 'Auth\SocialLoginController@handleSocialCallback')->where( 'social', 'google' );

Route::get('session/get','SessionController@accessSessionData');
Route::get('session/set','SessionController@storeSessionData');
Route::get('session/remove','SessionController@deleteSessionData');


Route::get('/home', 'HomeController@index')->name('adminHome');

$this->post('logout', 'Auth\LoginController@logout')->name('logout');

Route::post('/api/main-dashboard','MainController@get_content');
Route::post('/api/upload_product_details','ProductController@store');
Route::post('/api/update_user_detail','MainController@update');

Route::post("/api/product","ProductController@show");
Route::post('/api/add-product-cart',"ProductController@addProductToCart");
Route::post('/api/remove_item',"ProductController@removeProduct");










