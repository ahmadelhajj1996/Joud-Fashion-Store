<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Classification;

class ClassificationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        Classification::create([
            'title' =>  json_encode(['ar' => 'Dolce and Gabbana',
                                     'en' => 'women',
                                     'tr' => 'Dolce and Gabbana'
                                     ]) ,
            'description' =>  json_encode(['ar' => 'Dolce and Gabbana description',
                                     'en' => 'Dolce and Gabbana description',
                                     'tr' => 'Dolce and Gabbana description'
                                     ]) ,

            'image' => asset('images/classifications/women.jpg'),
            'video' => '' ,

        ]);
        Classification::create([
            'title' =>  json_encode(['ar' => 'Dolce and Gabbana',
                                     'en' => 'men',
                                     'tr' => 'Dolce and Gabbana'
                                     ]) ,
            'description' =>  json_encode(['ar' => 'Dolce and Gabbana description',
                                     'en' => 'Dolce and Gabbana description',
                                     'tr' => 'Dolce and Gabbana description'
                                     ]) ,

            'image' => asset('images/classifications/women.jpg'),
            'video' => '' ,

        ]);
        Classification::create([
            'title' =>  json_encode(['ar' => 'Dolce and Gabbana',
                                     'en' => 'boys',
                                     'tr' => 'Dolce and Gabbana'
                                     ]) ,
            'description' =>  json_encode(['ar' => 'Dolce and Gabbana description',
                                     'en' => 'Dolce and Gabbana description',
                                     'tr' => 'Dolce and Gabbana description'
                                     ]) ,

            'image' => asset('images/classifications/women.jpg'),
            'video' => '' ,

        ]);
        Classification::create([
            'title' =>  json_encode(['ar' => 'Dolce and Gabbana',
                                     'en' => 'girls',
                                     'tr' => 'Dolce and Gabbana'
                                     ]) ,
            'description' =>  json_encode(['ar' => 'Dolce and Gabbana description',
                                     'en' => 'Dolce and Gabbana description',
                                     'tr' => 'Dolce and Gabbana description'
                                     ]) ,

            'image' => asset('images/classifications/women.jpg'),
            'video' => '' ,

        ]);
        Classification::create([
            'title' =>  json_encode(['ar' => 'Dolce and Gabbana',
                                     'en' => 'baby',
                                     'tr' => 'Dolce and Gabbana'
                                     ]) ,
            'description' =>  json_encode(['ar' => 'Dolce and Gabbana description',
                                     'en' => 'Dolce and Gabbana description',
                                     'tr' => 'Dolce and Gabbana description'
                                     ]) ,

            'image' => asset('images/classifications/women.jpg'),
            'video' => '' ,

        ]);
        Classification::create([
            'title' =>  json_encode(['ar' => 'Dolce and Gabbana',
                                     'en' => 'beauty',
                                     'tr' => 'Dolce and Gabbana'
                                     ]) ,
            'description' =>  json_encode(['ar' => 'Dolce and Gabbana description',
                                     'en' => 'Dolce and Gabbana description',
                                     'tr' => 'Dolce and Gabbana description'
                                     ]) ,

            'image' => asset('images/classifications/women.jpg'),
            'video' => '' ,

        ]);

        Classification::create([
            'title' =>  json_encode(['ar' => 'Dolce and Gabbana',
                                     'en' => 'gifts',
                                     'tr' => 'Dolce and Gabbana'
                                     ]) ,
            'description' =>  json_encode(['ar' => 'Dolce and Gabbana description',
                                     'en' => 'Dolce and Gabbana description',
                                     'tr' => 'Dolce and Gabbana description'
                                     ]) ,

            'image' => asset('images/classifications/women.jpg'),
            'video' => '' ,

        ]);
        
    }
}
