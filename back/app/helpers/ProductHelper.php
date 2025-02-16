<?php

namespace App\Helpers;

use App\Models\Product;
use App\Models\Variation;

class ProductHelper
{
    public static function createProductWithVariations($categoryId, $title, $sizes, $colorVariations, $images, $price)
    {
        // Create product
        $product = Product::create([
            'category_id' => $categoryId,
            'title' => json_encode($title),
        ]);

        // Create variations for each size and color
        foreach ($sizes as $size) {
            $variations = [];
            foreach ($colorVariations as $color) {
                $variations[] = [
                    'product_id' => $product->id,
                    'attributes' => json_encode([
                        'size' => $size,
                        'color' => $color,
                    ]),
                    'images' => json_encode($images[$color] ?? []),
                    'price' => json_encode($price),
                ];
            }
            $product->variations()->createMany($variations);
        }

        return $product;
    }
}
