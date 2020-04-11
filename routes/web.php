<?php

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

Route::get('/', function () {
    return view('welcome');
});


//Auth routes

Auth::routes();

Route::get('auth/{social}', 'Auth\SocialLoginController@redirectToProvider')->where( 'social', 'google' );
Route::get('oauth/{social}/callback', 'Auth\SocialLoginController@handleSocialCallback')->where( 'social', 'google' );

Route::get('session/get','SessionController@accessSessionData');
Route::get('session/set','SessionController@storeSessionData');
Route::get('session/remove','SessionController@deleteSessionData');


Route::get('/home', 'HomeController@index')->name('adminHome');

$this->post('logout', 'Auth\LoginController@logout')->name('logout');










