<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Log;

class PomodoroTask extends Model
{
    //リレーション
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }


    // データ操作
    public function increaseCount()
    {
        $this->pomodoro_count += 1;
        if ($this->checkLastDate($this)) {
            $this->todays_count += 1;
        } else {
            $this->todays_count = 1;
        }
        $this->last_date = Carbon::now();
        $this->save();
    }

    private function checkLastDate(PomodoroTask $pomodoro)
    {
        if (!is_null($pomodoro->last_date)) {
            $last_date = new Carbon($pomodoro->last_date);
            return $last_date->isToday();
        } else {
            return false;
        }
    }
}
