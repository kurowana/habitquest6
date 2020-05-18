<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Log;


class PomodoroTask extends Model
{
    //プロパティ
    private $base_exp = 100;

    //リレーション
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }


    // データ操作
    public function getMyPomodoro($id)
    {
        $my_pomodoros = self::where('user_id', $id)->get();

        foreach ($my_pomodoros as $pomodoro) {
            if (!$pomodoro->checkLastDate()) {
                $pomodoro->todays_count = 0;
                $pomodoro->save();
            }
        }
        return $my_pomodoros;
    }

    public function finishPomodoro()
    {
        $this->increaseCount();
        $exp = $this->calculateExp();

        return $exp;
    }

    private function checkLastDate()
    {
        if (!is_null($this->last_date)) {
            $last_date = new Carbon($this->last_date);
            return $last_date->isToday();
        } else {
            return false;
        }
    }

    private function increaseCount()
    {
        $this->pomodoro_count += 1;

        if ($this->checkLastDate()) {
            $this->todays_count += 1;
        } else {
            $this->todays_count = 1;
        }
        $this->last_date = Carbon::now();
        $this->save();
    }

    private function calculateExp()
    {
        $todays_count = $this->todays_count;
        $total_count = $this->pomodoro_count;
        $exp = ceil($this->base_exp * ($todays_count + ($total_count * 0.1)));

        return $exp;
    }
}
