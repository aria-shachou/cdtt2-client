import React, { useEffect, useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/solid";

import Link from "next/link";
import { useRecoilState } from "recoil";
import { cartState } from "../atoms/cartState";
import { toast } from "react-hot-toast";
const ProductDetails = ({ product }) => {
  const [amount, setAmount] = useState(1);
  const [cartItem, setCartItem] = useRecoilState(cartState);
  const addItemToCart = (id, name, category, amount, price, img) => {
    if (cartItem.findIndex((item) => item.id === id) === -1) {
      setCartItem((previousState) => [
        ...previousState,
        { id, name, category, amount, price, img },
      ]);
    } else {
      setCartItem((prevState) => {
        return prevState.map((item) => {
          return item.id === id ? { ...item, amount: item.amount + 1 } : item;
        });
      });
    }
    toast(`${name} was added to cart!`);
  };
  function handleIncrease() {
    setAmount(amount + 1);
  }

  function handleDecrease() {
    setAmount(amount - 1);
  }
  return (
    // <ul>
    //   <li>{product?.data?.attributes.name}</li>
    //   <li>{product?.data?.attributes.price}$</li>
    // </ul>
    <>
      <section className="text-gray-700 body-font overflow-hidden bg-green-100">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={`${product?.data?.attributes?.image?.data?.attributes?.formats?.small?.url}`}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {product?.data?.attributes?.company}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product?.data?.attributes?.name}
              </h1>
              <h2 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product?.data?.attributes?.category}
              </h2>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>

              <h2 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product?.data?.attributes?.description}
              </h2>

              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex ml-6 items-center">
                  <div className="relative">
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${product?.data?.attributes?.price}
                </span>
                <div className="ml-10">
                  <button
                    className="bg-red-500  text-white font-bold py-2 px-4 rounded"
                    onClick={handleDecrease}
                    disabled={amount === 1}
                  >
                    <MinusIcon className="w-5 h-5 inline-block" />
                  </button>
                  <span className="mx-4 font-medium">{amount}</span>
                  <button
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                    onClick={handleIncrease}
                  >
                    <PlusIcon className="w-5 h-5 inline-block" />
                  </button>
                </div>
                <button
                  onClick={() =>
                    addItemToCart(
                      product.data.id,
                      product.data.attributes.name,
                      product.data.attributes.category,
                      amount,
                      product.data.attributes.price,
                      product.data.attributes.image.data.attributes.formats
                        .small.url
                    )
                  }
                  className="flex ml-auto text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none rounded"
                >
                  {/* <Link href="/cart" legacyBehavior>
                    Add to cart
                  </Link> */}
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
