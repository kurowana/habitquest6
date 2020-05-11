<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PomodoroTask;

class PomodoroTaskController extends Controller
{
    //

    public function insertPomodoro(Request $request)
    {
        $pomodoro = new PomodoroTask;
        $pomodoro->pomodoro_name = $request->name;
        $pomodoro->work_time = $request->work_time;
        $pomodoro->break_tiem = $request->break_time;
        $pomodoro->save();

        return response('ok');
    }
}
