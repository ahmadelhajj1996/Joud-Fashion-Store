<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;
use App\Models\Variation;


class ProductController extends Controller
{
    public function getProducts(){
        $products = Product::with('variations')->get();
        foreach ($products as $product) {
            $product->title = json_decode($product->title, true);
            $product->description = json_decode($product->description, true);
            foreach ($product->variations  as $variation) {
                $variation->price = json_decode($variation->price, true);
            }
        }
        return response()->json($products);
    }


    public function getProductsWithPagination(Request $request)
    {
        $limit = (int) $request->query('_limit', 8);  
        $page = (int) $request->query('_page', 1);    

        $category = Category::select( [ 'id' ,  'title']  )
        ->get()
        ->firstWhere(function ($category) use ($request) {
            $title = json_decode($category->title, true); 
            return isset($title['en']) && $title['en'] == $request->id; 
        });
        $products = Product::with('variations')
                            ->where('category_id', $category->id )
                            ->paginate($limit, ['*'], 'page', $page);

        foreach ($products as $product) {
            $product->title = is_string($product->title) ? json_decode($product->title, true) : $product->title;
            $product->description = is_string($product->description) ? json_decode($product->description, true) : $product->description;
            foreach ($product->variations as $variation) {
                $variation->price = is_string($variation->price) ? json_decode($variation->price, true) : $variation->price;
            }
        }

        return response()->json([
            'data' => $products->items(),
            'current_page' => $products->currentPage(),
            'per_page' => $products->perPage(),
            'total' => $products->total(),
            'total_pages' => $products->lastPage()
        ]);

    }


    public function getVariations(){
        $variations = Variation::all();
        foreach ($variations as $variation) {
            $variation->attributes = json_decode($variation->attributes, true);
            $variation->images = json_decode($variation->images, true);           
        }
        return response()->json($variations);
    }

}
