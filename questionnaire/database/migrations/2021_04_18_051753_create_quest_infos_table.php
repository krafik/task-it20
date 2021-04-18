<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuestInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quest_infos', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('quest_id')->unsigned();
            $table->string('FIO');
            $table->string('tel');
            $table->string('email');
            $table->string('equip');
            $table->boolean('callback');
            $table->text('comment');
            $table->timestamps();

            $table->foreign('quest_id')->references('id')->on('questionaries');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('quest_infos');
    }
}
