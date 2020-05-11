<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    //リレーション　
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}
