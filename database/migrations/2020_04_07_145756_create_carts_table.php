<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carts', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('product_id')->unsigned();
            $table->integer('client_id')->unsigned();
            $table->string('product_name');
            $table->text('product_description')->nullable();
            $table->string('category');
            $table->string('quantity');
            $table->integer('price');
            $table->string('status')->nullable();
            $table->timestamps();
            $table->foreign('product_id','cart_to_product_fk')->references('product_id')->on('products');
            $table->foreign('client_id','cart_to_user_fk')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('carts');
    }
}
