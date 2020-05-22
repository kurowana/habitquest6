<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

use App\Models\User;
use App\Models\Status;

class CharacterController extends Controller
{
    //
    public function getMyStatus()
    {
        $user_id = Auth::id();
        $status = Status::where('user_id', $user_id)->first();

        return response($status);
    }

    public function insertMyStatus(Request $request)
    {

        $char_status = null;

        $user_id = Auth::id();
        $user = User::find($user_id);

        DB::beginTransaction();

        try {
            $user->is_setup = true;
            $user->save();

            $status = $user->status()->firstOrCreate(
                ['user_id' => $user_id],
                [
                    'str' => $request->status_obj['STR'],
                    'agi' => $request->status_obj['AGI'],
                    'vit' => $request->status_obj['VIT'],
                    'int' => $request->status_obj['INT'],
                    'dex' => $request->status_obj['DEX'],
                    'luc' => $request->status_obj['LUC'],
                    'char_img' => $request->char_img
                ]
            );

            DB::commit();
        } catch (\Exception $e) {
            Log::debug($e);
            DB::rollBack();
        }

        return response($status);
    }

    public function updateMyStatus(Request $request)
    {
        $user_id = Auth::id();
        $status = Status::where('user_id', $user_id)->first();

        DB::beginTransaction();
        try {
            foreach ($request->status as $key => $value) {
                $status[$key] = $value;
            }
            $status->save();

            DB::commit();
        } catch (\Exception $e) {
            Log::debug($e);
            DB::rollBack();
        }

        return response($status);
    }
}
