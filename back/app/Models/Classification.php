<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Classification extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'video' ,
        'image',
    ];

    protected $casts = [
        'title' => 'array' ,
        'description' => 'array'
    ];
    
    public function categories()
    {
        return $this->hasMany(Category::class);
    }

}
