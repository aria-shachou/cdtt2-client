import Link from "next/link";
import React from "react";
import { useState } from "react";
const ProductsList = ({ products }) => {
  if (products.length <= 0) {
    return (
      <div className="w-full text-center" style={{ height: 600 }}>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          No Products Found!
        </h2>
      </div>
    );
  }
  return (
    <div className="bg-cyan">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          All Products
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Link href={`/products/${product.id}`}>
                  <img
                    src={
                      product.attributes.image.data.attributes.formats.small.url
                    }
                    alt={product.attributes.image.data.attributes.name}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </Link>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg text-indigo-900">
                    <Link href={`/products/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.attributes.name}
                    </Link>
                  </h3>
                </div>
                <p className="text-lg font-medium text-gray-900">
                  {product.attributes.price}$
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
