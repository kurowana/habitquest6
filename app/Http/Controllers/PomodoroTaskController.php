<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

use App\Models\PomodoroTask;
use App\Models\Status;

class PomodoroTaskController extends Controller
{
    //

    public function getMyPomodoro()
    {
        $user_id = Auth::id();
        // $my_pomodoro = PomodoroTask::where('user_id', $user_id)->get();

        try {
            $pomodoro = new PomodoroTask;
            $my_pomodoros = $pomodoro->getMyPomodoro($user_id);

            DB::commit();
        } catch (\Exception $e) {
            Log::debug($e);
            DB::rollback();
        }

        return response($my_pomodoros);
    }

    public function insertPomodoro(Request $request)
    {
        $user_id = Auth::id();
        $pomodoro = new PomodoroTask;

        DB::beginTransaction();

        try {
            $pomodoro->pomodoro_name = $request->name;
            $pomodoro->work_time = $request->work_time;
            $pomodoro->break_time = $request->break_time;
            $pomodoro->user_id = $user_id;
            $pomodoro->save();

            DB::commit();
        } catch (\Exception $e) {
            Log::debug($e);
            DB::rollBack();
        }

        return response($pomodoro);
    }

    public function deletePomodoro(Request $request)
    {
        DB::beginTransaction();

        try {
            $pomodoro = PomodoroTask::find($request->id);
            $pomodoro->delete();

            DB::commit();
        } catch (\Exception $e) {
            Log::debug($e);
            DB::rollBack();
        }

        return response('OK');
    }

    public function finishPomodoro(Request $request)
    {
        $user_id = Auth::id();
        DB::beginTransaction();

        try {
            $pomodoro = PomodoroTask::find($request->id);
            $exp = $pomodoro->finishPomodoro();

            $status = Status::where('user_id', $user_id)->first();
            $status->increaseExp($exp);

            DB::commit();
        } catch (\Exception $e) {
            Log::debug($e);
            DB::rollBack();
        }

        return response($pomodoro);
    }
}
