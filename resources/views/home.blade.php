@extends('layouts.app')

@section('content')
{{-- <div class="container"> --}}
@if (Auth::check())
<app-base></app-base>
@else
<welcome-base></welcome-base>
@endif
{{-- </div> --}}
@endsection