<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});

Auth::routes();

// ユーザーキャラクター関連
Route::post('/get_my_status', 'CharacterController@getMyStatus');
Route::post('/insert_my_status', 'CharacterController@insertMyStatus');
Route::post('/update_my_status', 'CharacterController@updateMyStatus');

// habit関連
Route::post('get_my_habit', 'HabitController@getMyHabit');
Route::post('register_habit', 'HabitController@insertHabit');
Route::post('delete_habit', 'HabitController@deleteHabit');
Route::post('finish_habit', 'HabitController@finishHabit');

// ポモドーロ関連
Route::post('get_my_pomodoro', 'PomodoroTaskController@getMyPomodoro');
Route::post('/register_pomodoro', 'PomodoroTaskController@insertPomodoro');
Route::post('/delete_pomodoro', 'PomodoroTaskController@deletePomodoro');
Route::post('/finish_pomodoro', 'PomodoroTaskController@finishPomodoro');



//該当しないアドレスへのアクセスはホームへ移動
Route::get("/{any}", function () {
    return view('home');
})->where('any', '.+');
