<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Classification;

class ClassificationController extends Controller
{
    public function getClassifications(){
        // $classifications = Classification::with('products')->get();
        $classifications = Classification::get();

        foreach ($classifications as $classification) {
            $classification->title = json_decode($classification->title, true);
            $classification->description = json_decode($classification->description, true);
        }
        return response()->json($classifications);
    }

}
