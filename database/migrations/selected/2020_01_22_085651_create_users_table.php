<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('google_id')->nullable();
            $table->string('name');
            $table->string('email');
            $table->string('google_link');
            $table->string('google_picture_link');
            $table->enum('role',['consultant','client','admin','superadmin']);
            $table->string('payment_tier');
            $table->string('payment_preference');
            $table->string('skype_id');
            $table->string('phone_number');
            $table->string('capacity');
            $table->string('access');
            $table->string('countries_expert');
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
