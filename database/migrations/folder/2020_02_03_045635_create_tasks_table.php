<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $this->down();
        Schema::create('tasks', function (Blueprint $table) {
            $table->increments('task_id');
            $table->integer('client_id')->unsigned();
            $table->string('school_name');
            $table->tinyInteger('essay_bulletpoint_call')->default(0);
            $table->date('essay_bulletpoint_call_date')->nullable();
            $table->string('essay_1_status' , 20)->default('awaiting');
            $table->string('essay_2_status' , 20)->default('awaiting');
            $table->string('essay_3_status' , 20)->default('awaiting');
            $table->tinyInteger('essay_completed')->default(0);
            $table->string('lor_status' , 20)->default('awaiting');
            $table->tinyInteger('lor_completed')->default(0);
            $table->integer('mocks')->unsigned()->default(1);
            $table->string('admit_status' , 50)->default('inprogress');
            $table->date('admit_date')->nullable();
            $table->string('currency_type' , 60)->default('USD');
            $table->integer('scholarship')->unsigned()->default(0);
            $table->string('applying_round' , 10)->default('round_1');
            $table->integer('payment_amount')->unsigned()->default(0);
            $table->integer('payment_release')->unsigned()->default(0);
            $table->timestamps();

            $table->foreign('client_id','client\'s_fk')->references('client_id')->on('clients');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tasks');
    }
}
