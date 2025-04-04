<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = [
            (object) ['name' => 'Produit 1', 'description' => 'Description du produit 1', 'price' => 29.99, 'image' => 'https://via.placeholder.com/150'],
            (object) ['name' => 'Produit 2', 'description' => 'Description du produit 2', 'price' => 39.99, 'image' => 'https://via.placeholder.com/150'],
            (object) ['name' => 'Produit 3', 'description' => 'Description du produit 3', 'price' => 49.99, 'image' => 'https://via.placeholder.com/150'],
        ];

        return view('products', compact('products'));
    }
}
