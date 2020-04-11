<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('consultant_id');
            $table->integer('client_id');
            $table->integer('total_payment');
            $table->enum('payment_status',['yes','no']);
            $table->integer('payment_done');
            $table->integer('payment_due');
            $table->date('payment_date');

            $table->foreign('cosultant_id')->references('consultant_id')->on('cosultants');
            $table->foreign('client_id')->references('client_id')->on('clients');
          
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payments');
    }
}
