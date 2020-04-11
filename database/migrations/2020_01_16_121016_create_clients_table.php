<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $this->down();

        Schema::create('clients', function (Blueprint $table) {
            $table->increments('client_id');
            $table->tinyInteger('number_of_schools')->default(0);
            $table->integer('assigned_to')->unsigned()->default(0);
            $table->string('pack');
            $table->date('start_date');
            $table->tinyInteger('brainstorming');
            $table->date('brainstorming_date')->nullable();
            $table->string('cv');
            $table->tinyInteger('cv_completed');
            $table->mediumText('comments')->nullable();
            $table->tinyInteger('inactivity_reminder');
            $table->tinyInteger('status');
            $table->tinyInteger('received_email');
            $table->timestamps();

            $table->index('assigned_to');

            $table->foreign('client_id','client_fk')->references('id')->on('users');
            $table->foreign('assigned_to','consultant_fk')->references('consultant_id')->on('consultants');
        });

        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clients');
    }
}
