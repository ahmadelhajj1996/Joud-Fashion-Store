<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    public function getCategories(){
        // $Categorys = Category::with('products')->get();
        $categories = Category::get();

        foreach ($categories as $category) {
            $category->title = json_decode($category->title, true);
            $category->description = json_decode($category->description, true);
        }
        return response()->json($categories);
    }
}
