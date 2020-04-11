<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateConsultantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $this->down();

        Schema::create('consultants', function (Blueprint $table) {
            $table->increments('consultant_id');
            $table->mediumText('introduction');
            $table->tinyInteger('payment_tier');
            $table->string('payment_preference');
            $table->mediumText('payment_details');
            $table->tinyInteger('capacity');
            $table->string('countries_expert');
            $table->timestamps();

            $table->foreign('consultant_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('consultants');
    }
}
