<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePomodoroTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pomodoro_tasks', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('pomodoro_name');
            $table->integer('work_time');
            $table->integer('break_time');
            $table->bigInteger('pomodoro_count')->default(0);
            $table->bigInteger('todays_count')->default(0);
            $table->dateTime('last_date')->nullable();
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
        Schema::dropIfExists('pomodoro_tasks');
    }
}
