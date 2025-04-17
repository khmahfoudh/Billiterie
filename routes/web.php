<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/login', function () {
    return view('react');
});

Route::get('/events', function () {
    return view('events');
});

Route::get('/register', function () {
    return view('register');
});

Route::get('/ticket', function () {
    return view('ticket');
});
