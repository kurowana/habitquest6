@extends('layouts.app')

@section('content')

@if (Auth::check())
<app-base user-id="{{Auth::user()['id']}}" is-setup="{{Auth::user()['is_setup']}}"></app-base>
@else
<welcome-base></welcome-base>
@endif

@endsection