<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ClassificationController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;


Route::get('/classifications',[ClassificationController::class,'getClassifications']);
Route::get('/categories',[CategoryController::class,'getCategories']);
Route::get('/products',[ProductController::class,'getProducts']);

Route::get('/products1/{id}',[ProductController::class,'getProductsWithPagination']);

Route::get('/variations',[ProductController::class,'getVariations']);



Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::middleware('auth:api')->group(function () {
    Route::get('me', [AuthController::class, 'me']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
});

