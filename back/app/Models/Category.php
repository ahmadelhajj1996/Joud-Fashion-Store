<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'classification_id' , 
        'title',
        'description',
        'image',
    ];

    protected $casts = [
        'title' => 'array' ,
        'description' => 'array'
    ];

    public function classification()
    {
        return $this->belongsTo(Classification::class);
    }
    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
