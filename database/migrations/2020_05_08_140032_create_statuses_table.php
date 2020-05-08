<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStatusesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('statuses', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('lv')->default(1);
            $table->bigInteger('exp')->default(0);
            $table->bigInteger('str')->default(10);
            $table->bigInteger('agi')->default(10);
            $table->bigInteger('vit')->default(10);
            $table->bigInteger('int')->default(10);
            $table->bigInteger('dex')->default(10);
            $table->bigInteger('luc')->default(10);
            $table->bigInteger('stage')->default(1);
            $table->bigInteger('point')->default(1);
            $table->string('char_img')->default('char1');
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
        Schema::dropIfExists('statuses');
    }
}
