<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    private $b_required_exp = 10;

    protected $fillable = [
        'lv', 'exp', 'str', 'agi', 'vit', 'int', 'dex', 'luc',
        'stage', 'point', 'char_img'
    ];

    //リレーション　
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    // データ操作
    public function increaseExp($exp)
    {
        $this->exp += $exp;
        $this->save();

        while (true) {
            $isContinue =  $this->checkLvUp();
            if ($isContinue === false) {
                break;
            }
        }
    }

    private function checkLvUp()
    {
        $required_exp = ceil(
            $this->b_required_exp * $this->lv * (1 + ($this->lv * 0.1))
        );

        if ($this->exp > $required_exp) {
            $this->lv += 1;
            $this->point += 3;
            $this->save();
            return true;
        } else {
            return false;
        }
    }
}
