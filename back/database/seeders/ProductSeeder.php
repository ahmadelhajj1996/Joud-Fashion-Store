<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Helpers\ProductHelper;

class ProductSeeder extends Seeder
{
    // https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AJ5374s.jpg?im=Resize,width=750
    public function run(): void
    {   
        $sizes = ['S', 'M', 'L', 'XL', 'XXL'];
        $products = [
            [
                'categoryId' => 1,
                'title' => [
                    'en' => ' Tulip Sleeve Ruched Midi Bodycon Dress',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['black' ,  'red', 'blue' ],
                'images' => [
                    'black' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AJ5374s.jpg',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AJ5374s2.jpg',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AJ5374s3.jpg',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AJ5374s4.jpg',
                    ],                   
                    'red' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AE0165s.jpg',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AE0165s2.jpg',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AE0165s3.jpg',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AE0165s4.jpg',
                    ],
                    'blue' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AE0181s.jpg',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AE0181s2.jpg',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AE0181s3.jpg',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AE0181s4.jpg',
                    ],
                ],
                'price' => [
                    '$' => 69,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],
            [
                'categoryId' => 1,
                'title' => [
                    'en' => ' Embellished Halter Fit And Flare Chiffon Midi Dress',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['black'  ],
                'images' => [
                    'black' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AJ5856s.jpg',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AJ5856s2.jpg',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AJ5856s3.jpg',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AJ5856s4.jpg',
                    ],                   
                ],
                'price' => [
                    '$' => 75,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],
            [
                'categoryId' => 1,
                'title' => [
                    'en' => 'Midi Long Sleeve Button Through Shirt Dress',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['black' ,  'green' ],
                'images' => [
                    'black' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AY2911s.jpg?im=Resize,width=750',  
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AY2911s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AY2911s3.jpg?im=Resize,width=640',
                    ],         
                              
                    'green' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AY4725s.jpg?im=Resize,width=750',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AY4725s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AY4725s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AY4725s4.jpg?im=Resize,width=640',
                    ],
                ],
                'price' => [
                    '$' => 59,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],         
            [
                'categoryId' => 1,
                'title' => [
                    'en' => 'Crew Neck Short Sleeve T-Shirt Dress',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['black' ,'green' ],
                'images' => [
                    'black' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/851915s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/851915s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/851915s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/851915s4.jpg?im=Resize,width=640',
                    ],                   
                    'green' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/N64676s.jpg?im=Resize,width=750',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/N64676s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/N64676s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/N64676s4.jpg?im=Resize,width=640',
                    ],
                 
                ],
                'price' => [
                    '$' => 12,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],
            [
                    'categoryId' => 1,
                    'title' => [
                        'en' => 'Sosandar  Crochet Midi Dress',
                        'ar' => '',
                        'tr' => '',
                    ],
                    'sizes' => $sizes,
                    'colorVariations' => ['white'  ],
                    'images' => [
                        'white' => [
                            'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/166864s.jpg?im=Resize,width=750',
                            'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/166864s2.jpg?im=Resize,width=640',
                            'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/166864s3.jpg?im=Resize,width=640',
                            'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/166864s4.jpg?im=Resize,width=640',
                        ],                   
                    
                    
                    ],
                    'price' => [
                        '$' => 71,
                        'tl' => 1,
                        'sp' => 1,
                    ],
            ],          
            [
                    'categoryId' => 1,
                    'title' => [
                        'en' => 'PixieGirl Petite Collar Midi Dress',
                        'ar' => '',
                        'tr' => '',
                    ],
                    'sizes' => $sizes,
                    'colorVariations' => ['black' ,'green' ],
                    'images' => [
                        'black' => [
                            'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AK6319s.jpg?im=Resize,width=750',
                            'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AK6319s2.jpg?im=Resize,width=640',
                            'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AK6319s3.jpg?im=Resize,width=640',
                            'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AK6319s4.jpg?im=Resize,width=640',
                        ],                   
                        'green' => [
                            'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AK6346s.jpg?im=Resize,width=750',
                            'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AK6346s2.jpg?im=Resize,width=640',
                            'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AK6346s3.jpg?im=Resize,width=640',
                            'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AK6346s4.jpg?im=Resize,width=640',
                        ],
                    
                    ],
                    'price' => [
                        '$' => 34,
                        'tl' => 1,
                        'sp' => 1,
                    ],
            ],

            // The Category 2 
            [
                'categoryId' => 2,
                'title' => [
                    'en' => 'Sheer Layer Cap Sleeve Top',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['black' ,'red' , 'blue'],
                'images' => [
                    'black' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/479028s.jpg?im=Resize,width=750',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/479028s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/479028s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/479028s4.jpg?im=Resize,width=640',
                    ],                   
                    'red' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AU5487s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AU5487s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AU5487s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AU5487s4.jpg?im=Resize,width=640',
                    ],
                    'blue' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/F31736s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/F31736s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/F31736s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/F31736s5.jpg?im=Resize,width=640',
                    ],
                
                ],
                'price' => [
                    '$' => 36,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],
            
            [
                'categoryId' => 2,
                'title' => [
                    'en' => 'Short Sleeve Textured Shirt With Linen',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['black' ,'pink' ],
                'images' => [
                    'black' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E60992s.jpg?im=Resize,width=750',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E60992s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E60992s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E60992s4.jpg?im=Resize,width=640',
                    ],                   
                    'pink' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E60986s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E60986s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E60986s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E60986s4.jpg?im=Resize,width=640',
                    ],
                    'green' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AB5885s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AB5885s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AB5885s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AB5885s4.jpg?im=Resize,width=640'
                    ]
                
                ],
                'price' => [
                    '$' => 28,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],
            [
                'categoryId' => 2,
                'title' => [
                    'en' => 'Love & Roses  Scallop Neck Jersey Long Sleeve Top',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['black' ,'green' ],
                'images' => [
                    'black' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AW3124s.jpg?im=Resize,width=750',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AW3124s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AW3124s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AW3124s4.jpg?im=Resize,width=640',
                    ],                   
                    'green' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AW3127s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AW3127s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AW3127s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AW3127s4.jpg?im=Resize,width=640',
                    ],
                
                ],
                'price' => [
                    '$' => 16,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],
            [
                'categoryId' => 2,
                'title' => [
                    'en' => 'Relaxed Fit Long Sleeve Overhead V-Neck Blouse',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['black' ,'green' , 'red' ],
                'images' => [
                    'black' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E47818s.jpg?im=Resize,width=750',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E47818s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E47818s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E47818s4.jpg?im=Resize,width=640',
                    ],                   
                    'green' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E47839s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E47839s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E47839s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E47839s4.jpg?im=Resize,width=640',
                    ],
                    'red' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AB6922s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AB6922s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AB6922s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AB6922s4.jpg?im=Resize,width=640',
                    ]
                
                ],
                'price' => [
                    '$' => 25,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],
            [
                'categoryId' => 2,
                'title' => [
                    'en' => 'Fitted Collared Essential Long Sleeve Shirt',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['black' ,'white' ],
                'images' => [
                    'black' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E47321s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E47321s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E47321s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E47321s4.jpg?im=Resize,width=640',
                    ],                   
                    'white' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E47320s.jpg?im=Resize,width=750',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E47320s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E47320s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E47320s4.jpg?im=Resize,width=640',
                    ],
                
                ],
                'price' => [
                    '$' => 18.5,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],
            [
                'categoryId' => 2,
                'title' => [
                    'en' => 'Love & Roses V-Neck Lace Long Sleeve Dobby Blouse',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['black' ,'blue' , 'green' ],
                'images' => [
                    'black' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AU8419s.jpg?im=Resize,width=750',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AU8419s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AU8419s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AU8419s4.jpg?im=Resize,width=640',
                    ],                   
                    'blue' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AU8426s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AU8426s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AU8426s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AU8426s4.jpg?im=Resize,width=640',
                    ],
                    'green' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AN7292s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AN7292s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AN7292s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AN7292s4.jpg?im=Resize,width=640',
                    ]
                
                ],
                'price' => [
                    '$' => 35,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],
            [
                'categoryId' => 2,
                'title' => [
                    'en' => 'Short Sleeve Textured Shirt With Linen',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['neutral'],
                'images' => [
                    'neutral' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E60993s.jpg?im=Resize,width=750',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E60993s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E60993s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E60993s4.jpg?im=Resize,width=640',
                    ],                   

                
                ],
                'price' => [
                    '$' => 28,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],
            [
                'categoryId' => 2,
                'title' => [
                    'en' => 'ong Sleeve Trim Cuff Detail Top',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['black' ,'white' ],
                'images' => [
                    'black' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AU8090s.jpg?im=Resize,width=750',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AU8090s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AU8090s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AU8090s4.jpg?im=Resize,width=640',
                    ],                   
                    'white' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AV0208s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AV0208s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AV0208s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AV0208s4.jpg?im=Resize,width=640',
                    ],
                
                ],
                'price' => [
                    '$' => 30,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],
            [
                'categoryId' => 2,
                'title' => [
                    'en' => 'V-Neck Hardware Long Sleeve Blouse',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['pink' ,'green' , 'blue' ],
                'images' => [
                    'pink' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AT0797s.jpg?im=Resize,width=750',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AT0797s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AT0797s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AT0797s4.jpg?im=Resize,width=640',
                    ],                   
                    'green' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AL2834s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AL2834s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AL2834s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AL2834s4.jpg?im=Resize,width=640',
                    ],
                    'blue' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AT0807s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AT0807s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AT0807s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AT0807s4.jpg?im=Resize,width=640',
                        
                    ]
                
                ],
                'price' => [
                    '$' => 39,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],
            [
                'categoryId' => 2,
                'title' => [
                    'en' => 'Fuller Bust Seam Detail Fitted Denim Western Shirt',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['blue'],
                'images' => [
                    'blue' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/B24827s.jpg?im=Resize,width=750',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/B24827s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/B24827s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/B24827s4.jpg?im=Resize,width=640',
                    ],                   
                
                ],
                'price' => [
                    '$' => 36,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],
            [
                'categoryId' => 2,
                'title' => [
                    'en' => 'V-Neck 3/4 Sleeve Collared Blouse',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['white' ,'teal' , 'purple' ],
                'images' => [
                    'white' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AD7872s.jpg?im=Resize,width=750',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AD7872s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AD7872s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AD7872s4.jpg?im=Resize,width=640',
                    ],                   
                    'teal' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AL2893s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AL2893s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AL2893s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AL2893s4.jpg?im=Resize,width=640',
                    ],
                    'purple' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AL5480s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AL5480s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AL5480s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AL5480s4.jpg?im=Resize,width=640',
                    ]
                
                ],
                'price' => [
                    '$' => 32,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],
            [
                'categoryId' => 2,
                'title' => [
                    'en' => 'Relaxed Fit Long Sleeve Overhead V-Neck Blouse',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['black' ,'green' ],
                'images' => [
                    'black' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E91619s.jpg?im=Resize,width=750',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E91619s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E91619s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E91619s4.jpg?im=Resize,width=640',
                    ],                   
                    'green' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E47839s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E47839s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E47839s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E47839s4.jpg?im=Resize,width=640',
                    ],
                
                ],
                'price' => [
                    '$' => 12,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],
            [
                'categoryId' => 2,
                'title' => [
                    'en' => ' Beach Shirt Cover-Up',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['white' ,'green'  ],
                'images' => [
                    'white' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/Q82341s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/Q82341s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/Q82341s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/Q82341s4.jpg?im=Resize,width=640',
                    ],                   
                    'green' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E81995s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E81995s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E81995s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E81995s4.jpg?im=Resize,width=640',
                    ],
                
                ],
                'price' => [
                    '$' => 35,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],
            [
                'categoryId' => 2,
                'title' => [
                    'en' => '',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['black' ,'white' ],
                'images' => [
                    'black' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AG6024s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AG6024s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AG6024s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AG6024s4.jpg?im=Resize,width=640',
                    ],                   
                    'white' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AJ0866s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AJ0866s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AJ0866s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AJ0866s4.jpg?im=Resize,width=640',
                    ],
                
                ],
                'price' => [
                    '$' => 30,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],

            // the third category
            [
                'categoryId' => 3,
                'title' => [
                    'en' => 'Boucle Button Up Shacket',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['black' ,'pink' ],
                'images' => [
                    'black' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E68984s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E68984s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E68984s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E68984s4.jpg?im=Resize,width=640',
                    ],                   
                    'pink' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AH5488s.jpg?im=Resize,width=750',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AH5488s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AH5488s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AH5488s4.jpg?im=Resize,width=640',
                    ],
                
                ],
                'price' => [
                    '$' => 45,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],
            [
                'categoryId' => 3,
                'title' => [
                    'en' => ' Relaxed Ruched Sleeve Blazer',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['blue' ,'black' , 'blue' , 'green' ],
                'images' => [
                    'blue' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E54751s.jpg?im=Resize,width=750',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E54751s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E54751s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E54751s4.jpg?im=Resize,width=640',
                    ],                   
                    'black' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/T60002s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/T60002s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/T60002s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/T60002s4.jpg?im=Resize,width=640',
                    ],
                    'blue' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E94277s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E94277s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E94277s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E94277s4.jpg?im=Resize,width=640',
                    ],
                    'green' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/183346s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/183346s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/183346s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/183346s4.jpg?im=Resize,width=640',

                    ]
                
                ],
                'price' => [
                    '$' => 44,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],
            [
                'categoryId' => 3,
                'title' => [
                    'en' => 'Friends Like These  Twill Tailored Single Button Coat',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['black' ,'green'  , 'neutral' ],
                'images' => [
                    'black' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AH4081s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AH4081s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AH4081s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AH4081s4.jpg?im=Resize,width=640',
                    ],                   
                    'green' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AH4082s.jpg?im=Resize,width=750',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AH4082s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AH4082s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AH4082s4.jpg?im=Resize,width=640',
                    ],
                    'neutral' =>[
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AH4411s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AH4411s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AH4411s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AH4411s4.jpg?im=Resize,width=640',
                    ]
                
                ],
                'price' => [
                    '$' => 67,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],
            [
                'categoryId' => 3,
                'title' => [
                    'en' => 'tailored Single Breasted Blazer',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['pink'  ],
                'images' => [
                    'pink' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E57509s.jpg?im=Resize,width=750',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E57509s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E57509s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E57509s4.jpg?im=Resize,width=640',
                    ],    
                ],
                'price' => [
                    '$' => 52,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],
            [
                'categoryId' => 3,
                'title' => [
                    'en' => 'Adjustable Back Tailored Blazer',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['black' ,'red' ],
                'images' => [
                    'black' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AA9405s.jpg?im=Resize,width=750',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AA9405s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AA9405s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AA9405s4.jpg?im=Resize,width=640',
                    ],                   
                    'red' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E94280s.jpg?im=Resize,width=750',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E94280s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E94280s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E94280s4.jpg?im=Resize,width=640',
                    ],
                
                ],
                'price' => [
                    '$' => 66,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],
            [
                'categoryId' => 3,
                'title' => [
                    'en' => 'Joules Albury  Cotton Blazer',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['pink' ,'blue' ],
                'images' => [
                    'pink' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/B00060s.jpg?im=Resize,width=750',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/B00060s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/B00060s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/B00060s4.jpg?im=Resize,width=640',
                    ],                   
                    'blue' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/B40132s.jpg?im=Resize,width=750',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/B40132s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/B40132s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/B40132s4.jpg?im=Resize,width=640',
                    ],
                
                ],
                'price' => [
                    '$' => 129,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],
            [
                'categoryId' => 3,
                'title' => [
                    'en' => 'Shower Resistant Padded Puffer Hooded Mid Length Coat',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['black' ,'green' ],
                'images' => [
                    'black' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/103280s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/103280s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/103280s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/103280s7.jpg?im=Resize,width=640',
                    ],                   
                    'green' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/462046s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/462046s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/462046s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/462046s4.jpg?im=Resize,width=640',
                    ],
                
                ],
                'price' => [
                    '$' => 64,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],
            [
                'categoryId' => 3,
                'title' => [
                    'en' => 'Lipsy Belted Contrast Piping Trench Coat',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['brown'  ],
                'images' => [
                    'brown' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AR2951s.jpg?im=Resize,width=750',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AR2951s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AR2951s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AR2951s4.jpg?im=Resize,width=640',
                    ],                                  
                ],
                'price' => [
                    '$' => 94,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],
            [
                'categoryId' => 3,
                'title' => [
                    'en' => 'Shower Resistant Padded Hooded Coat',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['white' ,'black' , 'green' , 'blue' ],
                'images' => [
                    'white' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/B38125s.jpg?im=Resize,width=750',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/B38125s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/B38125s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/B38125s4.jpg?im=Resize,width=640',
                    ],                   
                    'black' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/B52320s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/B52320s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/B52320s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/B52320s4.jpg?im=Resize,width=640',
                    ],
                    'green' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E13708s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E13708s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E13708s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E13708s4.jpg?im=Resize,width=640',
                    ],
                    'blue' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E39966s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E39966s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E39966s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E39966s4.jpg?im=Resize,width=640',
                    ],
                
                ],
                'price' => [
                    '$' => 82,  
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],
            [
                'categoryId' => 3,
                'title' => [
                    'en' => 'Lipsy  Cropped Collarless Blazer',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['Stone' ,'purple' , 'gray' ],
                'images' => [
                    'Stone' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AD8065s.jpg?im=Resize,width=750',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AD8065s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AD8065s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AD8065s4.jpg?im=Resize,width=640',
                    ],                   
                    'purple' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AJ6995s4.jpg?im=Resize,width=640',
                   
                    ],
                    'gray' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/F08981s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/F08981s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/F08981s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/F08981s4.jpg?im=Resize,width=640',
                    ],
                
                ],
                'price' => [
                    '$' => 39,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],
            [
                'categoryId' => 3,
                'title' => [
                    'en' => 'Joules Portwell Waterproof Raincoat With Hood',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['neutral' ,'blue' ],
                'images' => [
                    'neutral' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/N17262s.jpg?im=Resize,width=750',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/N17262s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/N17262s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/N17262s4.jpg?im=Resize,width=640',
                    ],                   
                    'blue' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/D82418s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/D82418s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/D82418s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/D82418s4.jpg?im=Resize,width=640',
                    ],
                
                ],
                'price' => [
                    '$' => 89,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],
            [
                'categoryId' => 3,
                'title' => [
                    'en' => 'Lipsy  Double Breasted Long Line Belted Coat',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['black' ,'gray' ],
                'images' => [
                    'black' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AE6590s.jpg?im=Resize,width=750',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AE6590s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AE6590s3.jpg?im=Resize,width=640',
                    ],                   
                    'gray' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AE6591s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AE6591s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AE6591s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AE6591s4.jpg?im=Resize,width=640',
                    ],
                
                ],
                'price' => [
                    '$' => 12,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],
            [
                'categoryId' => 3,
                'title' => [
                    'en' => 'Khaki  N.Premium Funnel Coat',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['green' ],
                'images' => [               
                    'green' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AM1734s.jpg?im=Resize,width=750',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AM1734s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AM1734s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AM1734s4.jpg?im=Resize,width=640',
                    ],
                
                ],
                'price' => [
                    '$' => 148,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],
       
            // the fourth 
            [
                'categoryId' => 4,
                'title' => [
                    'en' => 'Rinse Blue Super Soft Skinny Jeans',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['blue' ,'black' ],
                'images' => [
                    'blue' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/D94452s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/D94452s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/D94452s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/D94452s4.jpg?im=Resize,width=640',
                    ],                   
                    'black' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/D78842s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/D78842s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/D78842s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/D78842s4.jpg?im=Resize,width=640',
                    ],
                
                ],
                'price' => [
                    '$' => 27,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],
            [
                'categoryId' => 4,
                'title' => [
                    'en' => ' Slim Supersoft Jeans',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['black' ,'blue' ],
                'images' => [
                    'black' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/D78830s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/D78830s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/D78830s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/D78830s4.jpg?im=Resize,width=640',
                    ],                   
                    'blue' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/362268s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/362268s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/362268s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/362268s4.jpg?im=Resize,width=640',
                    ],
                
                ],
                'price' => [
                    '$' => 26,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],
            [
                'categoryId' => 4,
                'title' => [
                    'en' => 'Wash Slim Lift And Shape Bootcut Jeans',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['blue' ,'black' ],
                'images' => [
                    'blue' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/N44504s.jpg?im=Resize,width=750',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/N44504s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/N44504s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/N44504s4.jpg?im=Resize,width=640',
                    ],                   
                    'black' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/D76463s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/D76463s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/D76463s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/D76463s4.jpg?im=Resize,width=640',
                    ],
                 
                ],
                'price' => [
                    '$' => 48,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],
            [
                'categoryId' => 4,
                'title' => [
                    'en' => 'Authentic Denim Jeans',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['blue'],
                'images' => [
                    'blue' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E96861s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E96861s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E96861s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E96861s4.jpg?im=Resize,width=640',
                    ],                         
                ],
                'price' => [
                    '$' => 39,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],
            [
                'categoryId' => 4,
                'title' => [
                    'en' => 'Lipsy Washed  Petite Mid Rise Wide Leg Jeans',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['black' ,'blue' , 'neutral' ],
                'images' => [
                    'black' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AP5024s.jpg?im=Resize,width=750',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AP5024s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AP5024s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AP5024s4.jpg?im=Resize,width=640',
                    ],                   
                    'blue' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AG8961s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AG8961s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AG8961s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AG8961s4.jpg?im=Resize,width=640',
                    ],
                    'neutral' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AL8825s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AL8825s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AL8825s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AL8825s4.jpg?im=Resize,width=640',
                    ]
                ],
                'price' => [
                    '$' => 50,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],
            // [
            //     'categoryId' => 4,
            //     'title' => [
            //         'en' => 'Dart Detail Barrel 100% Cotton Jeans',
            //         'ar' => '',
            //         'tr' => '',
            //     ],
            //     'sizes' => $sizes,
            //     'colorVariations' => ['black'  ],
            //     'images' => [
            //         'black' => [
            //             'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/B80036s.jpg?im=Resize,width=750',
            //             'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/B80036s2.jpg?im=Resize,width=640',
            //             'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/B80036s3.jpg?im=Resize,width=640',
            //             'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/B80036s4.jpg?im=Resize,width=640',
            //         ],                   
               
                 
            //     ],
            //     'price' => [
            //         '$' => 45,
            //         'tl' => 1,
            //         'sp' => 1,
            //     ],
            // ],
            [
                'categoryId' => 4,
                'title' => [
                    'en' => ' Slim Straight Jeans',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['black' ,'blue' , 'gray' ],
                'images' => [
                    'black' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/362425s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/362425s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/362425s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/362425s4.jpg?im=Resize,width=640',
                    ],                   
                    'blue' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/362394s.jpg?im=Resize,width=750',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/362394s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/362394s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/362394s4.jpg?im=Resize,width=640',
                    ],
                    'gray' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/N79995s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/N79995s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/N79995s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/N79995s4.jpg?im=Resize,width=640',
                    ],  
                 
                ],
                'price' => [
                    '$' => 12,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],
            [
                'categoryId' => 4,
                'title' => [
                    'en' => 'Mid Rise Wide Leg Jeans',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['blue' ],
                'images' => [
                    'blue' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AG8826s.jpg?im=Resize,width=750',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AG8826s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AG8826s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AG8826s4.jpg?im=Resize,width=640',
                    ],               
                ],
                'price' => [
                    '$' => 28   ,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],
            [
                'categoryId' => 4,
                'title' => [
                    'en' => 'Relaxed Straight Leg Jeans',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['black' ,'gray' ],
                'images' => [
                    'black' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AC6018s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AC6018s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AC6018s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AC6018s4.jpg?im=Resize,width=640',
                    ],                   
                    'gray' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AE6113s.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AE6113s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AE6113s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AE6113s4.jpg?im=Resize,width=640',
                    ],                 
                ],
                'price' => [
                    '$' => 46,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],
            [
                'categoryId' => 4,
                'title' => [
                    'en' => 'Slim High Waist Flare Jeans',
                    'ar' => '',
                    'tr' => '',
                ],
                'sizes' => $sizes,
                'colorVariations' => ['black'],
                'images' => [
                    'black' => [
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AG5624s.jpg?im=Resize,width=750',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AG5624s2.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AG5624s3.jpg?im=Resize,width=640',
                        'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AG5624s4.jpg?im=Resize,width=640',
                    ],                   
                ],
                'price' => [
                    '$' => 50,
                    'tl' => 1,
                    'sp' => 1,
                ],
            ],


            // the fivth category
            // [
            //     'categoryId' => 5,
            //     'title' => [
            //         'en' => '',
            //         'ar' => '',
            //         'tr' => '',
            //     ],
            //     'sizes' => $sizes,
            //     'colorVariations' => ['black' ,'green' ],
            //     'images' => [
            //         'black' => [
            //             '',
            //             '',
            //             '',
            //             '',
            //         ],                   
            //         'green' => [
            //             '',
            //             '',
            //             '',
            //             '',
            //         ],
                 
            //     ],
            //     'price' => [
            //         '$' => 12,
            //         'tl' => 1,
            //         'sp' => 1,
            //     ],
            // ],
            // [
            //     'categoryId' => 5,
            //     'title' => [
            //         'en' => '',
            //         'ar' => '',
            //         'tr' => '',
            //     ],
            //     'sizes' => $sizes,
            //     'colorVariations' => ['black' ,'green' ],
            //     'images' => [
            //         'black' => [
            //             '',
            //             '',
            //             '',
            //             '',
            //         ],                   
            //         'green' => [
            //             '',
            //             '',
            //             '',
            //             '',
            //         ],
                 
            //     ],
            //     'price' => [
            //         '$' => 12,
            //         'tl' => 1,
            //         'sp' => 1,
            //     ],
            // ],
            // [
            //     'categoryId' => 5,
            //     'title' => [
            //         'en' => '',
            //         'ar' => '',
            //         'tr' => '',
            //     ],
            //     'sizes' => $sizes,
            //     'colorVariations' => ['black' ,'green' ],
            //     'images' => [
            //         'black' => [
            //             '',
            //             '',
            //             '',
            //             '',
            //         ],                   
            //         'green' => [
            //             '',
            //             '',
            //             '',
            //             '',
            //         ],
                 
            //     ],
            //     'price' => [
            //         '$' => 12,
            //         'tl' => 1,
            //         'sp' => 1,
            //     ],
            // ],
            // [
            //     'categoryId' => 5,
            //     'title' => [
            //         'en' => '',
            //         'ar' => '',
            //         'tr' => '',
            //     ],
            //     'sizes' => $sizes,
            //     'colorVariations' => ['black' ,'green' ],
            //     'images' => [
            //         'black' => [
            //             '',
            //             '',
            //             '',
            //             '',
            //         ],                   
            //         'green' => [
            //             '',
            //             '',
            //             '',
            //             '',
            //         ],
                 
            //     ],
            //     'price' => [
            //         '$' => 12,
            //         'tl' => 1,
            //         'sp' => 1,
            //     ],
            // ],
            // [
            //     'categoryId' => 4,
            //     'title' => [
            //         'en' => '',
            //         'ar' => '',
            //         'tr' => '',
            //     ],
            //     'sizes' => $sizes,
            //     'colorVariations' => ['black' ,'green' ],
            //     'images' => [
            //         'black' => [
            //             '',
            //             '',
            //             '',
            //             '',
            //         ],                   
            //         'green' => [
            //             '',
            //             '',
            //             '',
            //             '',
            //         ],
                 
            //     ],
            //     'price' => [
            //         '$' => 12,
            //         'tl' => 1,
            //         'sp' => 1,
            //     ],
            // ],

            
        ];

        foreach ($products as $product) {
            ProductHelper::createProductWithVariations(
                categoryId: $product['categoryId'],
                title: $product['title'],
                sizes: $product['sizes'],
                colorVariations: $product['colorVariations'],
                images: $product['images'],
                price: $product['price']
            );
        }
    }
}

// [
//     'categoryId' => 4,
//     'title' => [
//         'en' => '',
//         'ar' => '',
//         'tr' => '',
//     ],
//     'sizes' => $sizes,
//     'colorVariations' => ['black' ,'green' ],
//     'images' => [
//         'black' => [
//             '',
//             '',
//             '',
//             '',
//         ],                   
//         'green' => [
//             '',
//             '',
//             '',
//             '',
//         ],
     
//     ],
//     'price' => [
//         '$' => 12,
//         'tl' => 1,
//         'sp' => 1,
//     ],
// ],