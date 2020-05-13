<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    protected $fillable = [
        'lv', 'exp', 'str', 'agi', 'vit', 'int', 'dex', 'luc',
        'stage', 'point', 'char_img'
    ];

    //リレーション　
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}
