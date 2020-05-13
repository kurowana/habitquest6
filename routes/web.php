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
Route::post('/register_char', 'CharacterController@insertStatus');

// ポモドーロ関連
Route::post('get_my_pomodoro', 'PomodoroTaskController@getMyPomodoro');
Route::post('/register_pomodoro', 'PomodoroTaskController@insertPomodoro');



//該当しないアドレスへのアクセスはホームへ移動
Route::get("/{any}", function () {
    return view('home');
})->where('any', '.+');
