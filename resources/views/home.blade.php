@extends('layouts.app')

@section('content')

@if (Auth::check())
<app-base user-info="{{Auth::user()}}">
</app-base>
@else
<welcome-base></welcome-base>
@endif

@endsection