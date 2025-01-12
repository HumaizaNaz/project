'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductCard from '@/app/components/landingPage/Card'; // Ensure correct path
// Ensure correct path
import { Montserrat } from 'next/font/google';
import { useEffect, useState } from 'react';

import { client } from '@/sanity/lib/client';


// Product interface for TypeScript
interface Product {
  id: string;
  name: string;
  description: string;
  oldPrice: string;
  price: string;
  image: string;
}

// Data fetching from Sanity
async function getData(): Promise<Product[]> {
  try {
    const fetchData = await client.fetch(`
      *[_type == "product"]{
        _id,
        name,
        description,
        category,
        price,
        oldPrice,
        availability,
        "image" : image.asset->url,
        "images": images[]{asset->{url}},
        colors,
        sizeAvailability,
        rating,
        material
      }
    `);

    // Map the _id field to id
    return fetchData.map((product: any) => ({
      id: product._id,
      name: product.name,
      description: product.description,
      oldPrice: product.oldPrice,
      price: product.price,
      image: product.image || "", // Ensure image URL is passed properly
      images: product.images || [],// Ensure image URL is fetched properly
      colors: product.colors || [], // Colors available
      sizeAvailability: product.sizeAvailability || [], // Available sizes
      rating: product.rating || 0, // Product rating
      material: product.material || "" // Material
    })) || [];
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}
// Importing Montserrat font
const monterrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export default function Home() {
  const [productItems, setProductItems] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await getData();
      setProductItems(products);
    };

    fetchData();
  }, []);
  return (
    <div className={`${monterrat.className} min-h-screen bg-white`}>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="flex flex-col items-center space-y-4 text-center">
          <h4 className="text-xl sm:text-2xl text-gray-500">Featured Products</h4>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">BESTSELLER PRODUCTS</h1>
          <p className="text-sm sm:text-base text-gray-500">
            Problems trying to resolve the conflict between...
          </p>
        </div>

        {/* Product Grid */}
        
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {productItems.length > 0 ? (
              productItems.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div>Loading...</div>
            )}
          </div>
         
      </main>
    </div>
  );
}
