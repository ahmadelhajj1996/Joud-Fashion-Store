<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Variation extends Model
{
    use HasFactory;    
    protected $fillable = [
        'product_id',
        'attributes', 
        'images',
        'price' ,
        'stock'
    ];
    
    protected $casts = [
        'attributes' => 'array',
        'images' => 'array',
        'price' => 'array', 
    ];
    
    protected $attributes = [
        'attributes' => '{"size": ["S", "M", "L", "XL", "XXL"]}', // Default JSON format
    ];
    
    // Ensure attributes always contain default values
    public function setAttributesAttribute($value)
    {
        $default = ['size' => ['S', 'M', 'L', 'XL', 'XXL']];
    
        if (is_string($value)) {
            $value = json_decode($value, true);
        }
    
        $mergedAttributes = is_array($value) ? array_merge($default, $value) : $default;
    
        $this->attributes['attributes'] = json_encode($mergedAttributes);
    }


    
    
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}