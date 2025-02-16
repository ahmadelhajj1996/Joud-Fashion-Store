<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Product extends Model
{
    use HasFactory;    
    protected $fillable = [
        'category_id' , 
        'sku_code' ,
        'title',
        'description',  
    ];

    protected $casts = [
        'title' => 'array' ,
        'description' => 'array' ,
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    public function variations() 
    {
        return $this->hasMany(Variation::class);
    }

    protected static function boot()
{
    parent::boot();

    static::creating(function ($product) {
        $lastProduct = Product::latest('sku_code')->first();

        if ($lastProduct && is_numeric($lastProduct->sku_code)) {
            $sku = str_pad($lastProduct->sku_code + 1, 6, '0', STR_PAD_LEFT);
        } else {
            $sku = str_pad(1, 6, '0', STR_PAD_LEFT); 
        }

        $product->sku_code = $sku;
    });
}

    

}
