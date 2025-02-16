<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{

    public function run(): void
    {
        Category::create([
            'title' =>  json_encode(['ar' => 'Dolce and Gabbana',
                                     'en' => 'dresses',
                                     'tr' => 'Dolce and Gabbana'
                                     ]) ,
            'description' =>  json_encode(['ar' => 'Dolce and Gabbana description',
                                     'en' => 'Dolce and Gabbana description',
                                     'tr' => 'Dolce and Gabbana description'
                                     ]) ,

            'image' => asset('images/categories/women/dresses.jpg'),
            'classification_id' => 1
        ]);   

        Category::create([
            'title' =>  json_encode(['ar' => 'Dolce and Gabbana',
                                     'en' => 'blouses',
                                     'tr' => 'Dolce and Gabbana'
                                     ]) ,
            'description' =>  json_encode(['ar' => 'Dolce and Gabbana description',
                                     'en' => 'Dolce and Gabbana description',
                                     'tr' => 'Dolce and Gabbana description'
                                     ]) ,

            'image' => asset('images/categories/women/blouses.jpg'),
            'classification_id' => 1
        ]);  
         
        Category::create([
            'title' =>  json_encode(['ar' => 'Dolce and Gabbana',
                                     'en' => 'jacket&coats',
                                     'tr' => 'Dolce and Gabbana'
                                     ]) ,
            'description' =>  json_encode(['ar' => 'Dolce and Gabbana description',
                                     'en' => 'Dolce and Gabbana description',
                                     'tr' => 'Dolce and Gabbana description'
                                     ]) ,

            'image' => asset('images/categories/women/jackets&coats.jpg'),
            'classification_id' => 1
        ]);
   
        Category::create([
            'title' =>  json_encode(['ar' => 'Dolce and Gabbana',
                                     'en' => 'jeans',
                                     'tr' => 'Dolce and Gabbana'
                                     ]) ,
            'description' =>  json_encode(['ar' => 'Dolce and Gabbana description',
                                     'en' => 'Dolce and Gabbana description',
                                     'tr' => 'Dolce and Gabbana description'
                                     ]) ,

            'image' => asset('images/categories/women/jeans.jpg'),
            'classification_id' => 1
        ]);   
        Category::create([
            'title' =>  json_encode(['ar' => 'Dolce and Gabbana',
                                     'en' => 'knitwear',
                                     'tr' => 'Dolce and Gabbana'
                                     ]) ,
            'description' =>  json_encode(['ar' => 'Dolce and Gabbana description',
                                     'en' => 'Dolce and Gabbana description',
                                     'tr' => 'Dolce and Gabbana description'
                                     ]) ,

            'image' => asset('images/categories/women/knitwear.jpg'),
            'classification_id' => 1
        ]);   
        Category::create([
            'title' =>  json_encode(['ar' => 'Dolce and Gabbana',
                                     'en' => 'lingerie',
                                     'tr' => 'Dolce and Gabbana'
                                     ]) ,
            'description' =>  json_encode(['ar' => 'Dolce and Gabbana description',
                                     'en' => 'Dolce and Gabbana description',
                                     'tr' => 'Dolce and Gabbana description'
                                     ]) ,

            'image' => asset('images/categories/women/lingerie.jpg'),
            'classification_id' => 1
        ]);   
        Category::create([
            'title' =>  json_encode(['ar' => 'Dolce and Gabbana',
                                     'en' => 'skirts',
                                     'tr' => 'Dolce and Gabbana'
                                     ]) ,
            'description' =>  json_encode(['ar' => 'Dolce and Gabbana description',
                                     'en' => 'Dolce and Gabbana description',
                                     'tr' => 'Dolce and Gabbana description'
                                     ]) ,

            'image' => asset('images/categories/women/skirts.jpg'),
            'classification_id' => 1
        ]);   
        Category::create([
            'title' =>  json_encode(['ar' => 'Dolce and Gabbana',
                                     'en' => 'T-shirt',
                                     'tr' => 'Dolce and Gabbana'
                                     ]) ,
            'description' =>  json_encode(['ar' => 'Dolce and Gabbana description',
                                     'en' => 'Dolce and Gabbana description',
                                     'tr' => 'Dolce and Gabbana description'
                                     ]) ,

            'image' => asset('images/categories/women/T-shirt.jpg'),
            'classification_id' => 1
        ]);   
        Category::create([
            'title' =>  json_encode(['ar' => 'Dolce and Gabbana',
                                     'en' => 'trousers',
                                     'tr' => 'Dolce and Gabbana'
                                     ]) ,
            'description' =>  json_encode(['ar' => 'Dolce and Gabbana description',
                                     'en' => 'Dolce and Gabbana description',
                                     'tr' => 'Dolce and Gabbana description'
                                     ]) ,

            'image' => asset('images/categories/women/trousers.jpg'),
            'classification_id' => 1
        ]);   
        Category::create([
            'title' =>  json_encode(['ar' => 'Dolce and Gabbana',
                                     'en' => 'footwear',
                                     'tr' => 'Dolce and Gabbana'
                                     ]) ,
            'description' =>  json_encode(['ar' => 'Dolce and Gabbana description',
                                     'en' => 'Dolce and Gabbana description',
                                     'tr' => 'Dolce and Gabbana description'
                                     ]) ,

            'image' => asset('images/categories/women/footwear.jpg'),
            'classification_id' => 1
        ]);
        // Category::create([
        //     'title' =>  json_encode(['ar' => 'Dolce and Gabbana',
        //                              'en' => 'beauty',
        //                              'tr' => 'Dolce and Gabbana'
        //                              ]) ,
        //     'description' =>  json_encode(['ar' => 'Dolce and Gabbana description',
        //                              'en' => 'Dolce and Gabbana description',
        //                              'tr' => 'Dolce and Gabbana description'
        //                              ]) ,

        //     'image' => asset('images/categories/women/beauty.jpg'),
        //     'classification_id' => 1
        // ]);   
    }
}
