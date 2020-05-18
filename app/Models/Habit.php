<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Habit extends Model
{
    //プロパティ
    private $base_exp = 100;

    //リレーション
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    // データ操作
    public function getMyHabit($id)
    {
        $my_habits = self::where('user_id', $id)->get();

        foreach ($my_habits as $habit) {
            if (!$habit->checkLastDate()) {
                $habit->todays_count = 0;
                $habit->save();
            }
        }
        return $my_habits;
    }

    public function finishHabit()
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
        $this->habit_count += 1;

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
        if ($this->checkLastDate()) {
            return $this->base_exp / 2;
        } else {
            return $this->base_exp;
        }
    }
}
