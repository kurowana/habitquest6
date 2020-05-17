<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Carbon;

use App\Models\Habit;
use App\Models\Status;

class HabitController extends Controller
{
    //
    public function getMyHabit(Request $request)
    {
        $user_id = Auth::id();
        $my_habit = Habit::where('user_id', $user_id)->get();

        return response($my_habit);
    }

    public function insertHabit(Request $request)
    {
        $user_id = Auth::id();
        $habit = new Habit;

        DB::beginTransaction();

        try {
            $habit->habit_name = $request->name;
            $habit->user_id = $user_id;
            $habit->save();

            DB::commit();
        } catch (\Exception $e) {
            Log::debug($e);
            DB::rollback();
        }

        return response($habit);
    }

    public function deleteHabit(Request $request)
    {
        DB::beginTransaction();

        try {
            $habit = Habit::find($request->id);
            $habit->delete();

            DB::commit();
        } catch (\Exception $e) {
            Log::debug($e);
            DB::rollback();
        }
        return response('OK');
    }

    public function finishHabit(Request $request)
    {
        $user_id = Auth::id();
        DB::beginTransaction();

        try {
            $habit = Habit::find($request->id);
            $exp = $habit->finishHabit();

            $status = Status::where('user_id', $user_id)->first();
            $status->increaseExp($exp);

            DB::commit();
        } catch (\Exception $e) {
            Log::debug($e);
            DB::rollback();
        }
        return response($habit);
    }
}
