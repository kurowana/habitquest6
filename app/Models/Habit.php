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
    public function finishHabit()
    {
        $this->increaseCount();
        $exp = $this->calculateExp();

        return $exp;
    }

    private function increaseCount()
    {
        $this->count += 1;
        $this->save();
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

    private function calculateExp()
    {
        if ($this->checkLastDate()) {
            return $this->base_exp / 2;
        } else {
            return $this->base_exp;
        }
    }
}
