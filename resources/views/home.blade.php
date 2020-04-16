@extends('layouts.app')

@section('content')

@if (Auth::check())
<app-base></app-base>
@else
<welcome-base></welcome-base>
@endif

@endsection