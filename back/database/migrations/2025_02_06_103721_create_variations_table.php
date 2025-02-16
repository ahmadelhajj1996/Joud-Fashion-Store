<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('variations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained();
            $table->json('attributes')->nullable(); 
            $table->json('images')->nullable();  
            $table->json('price')->nullable();  
            $table->integer('stock')->default(100);
            $table->timestamps();       
        });
    }
    public function down(): void
    {
        Schema::dropIfExists('variations');
    }
};
