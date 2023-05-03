import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import { useFetchUser } from "../lib/authContext";
import { useRecoilState } from "recoil";
import { cartState } from "../atoms/cartState";
import Footer from "../components/Footer";
import { fetcher } from "../lib/api";
import axios from "axios";
const Cart = () => {
  const { user, loading } = useFetchUser();
  const [cartItem, setCartItem] = useRecoilState(cartState);
  // const handleQuantityChange = (id, value) => {
  //   const updatedCartItems = cartItem.map((item) => {
  //     if (item.id === id) {
  //       return {
  //         ...item,
  //         quantity: value,
  //       };
  //     }
  //     return item;
  //   });
  //   setCartItem(updatedCartItems);
  // };

  const handleIncrease = (id) => {
    let newCart = cartItem.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          amount: item.amount + 1,
        };
      }
      return item;
    });
    setCartItem(newCart);
  };

  const handleDecrease = (id) => {
    let newCart = cartItem.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          amount: item.amount - 1 === 0 ? 1 : item.amount - 1,
        };
      }
      return item;
    });
    setCartItem(newCart);
  };
  const handleRemoveItem = (id) => {
    const updatedCartItems = cartItem.filter((item) => item.id !== id);
    setCartItem(updatedCartItems);
  };

  const calculateTotal = () => {
    const total = cartItem.reduce(
      (accumulator, item) => accumulator + item.price * item.amount,
      0
    );
    return total.toFixed(2);
  };

  // const createCheckoutSession = async () => {
  //   try {
  //     const data = await fetcher("api/checkout_sessions", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ cartItem }),
  //     });
  //     console.log(data);
  //     window.location = data.sessionURL;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const createCheckoutSession = async () => {
    axios
      .post("api/checkout_sessions", { cartItem })
      .then((res) => {
        console.log(res);
        window.location = res.data.sessionURL;
      })
      .catch((err) => console.log(err));
  };
  return (
    <Layout user={user} loading={loading}>
      {cartItem.length <= 0 ? (
        <div className="w-full text-center" style={{ height: 600 }}>
          <h2 className="text-center text-2xl mb-8">Your cart is empty</h2>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link href="/products" legacyBehavior>
              Continue Shopping
            </Link>
          </button>
        </div>
      ) : (
        <div
          className="container mx-auto mt-10"
          style={{ height: cartItem.length < 3 ? 600 : "auto" }}
        >
          <div className="flex shadow-md my-10">
            <div className="w-3/4 bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                <h2 className="font-semibold text-2xl">
                  {cartItem.length} Items
                </h2>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Product Details
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                  Quantity
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                  Price
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                  Total
                </h3>
              </div>
              {cartItem.map((item, id) => {
                return (
                  <div
                    className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                    key={id}
                  >
                    <div className="flex w-2/5">
                      <div className="w-20">
                        <img className="h-24" src={item.img} alt="" />
                      </div>
                      <div className="flex flex-col justify-between ml-4 flex-grow">
                        <span className="font-bold text-sm">{item.name}</span>
                        <span className="text-red-500 text-xs">
                          {item.category}
                        </span>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="font-semibold hover:text-red-500 text-gray-500 text-xs items-start flex"
                        >
                          <span className="">Remove</span>
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-center w-1/5">
                      <button onClick={() => handleDecrease(item.id)}>
                        <svg
                          className="fill-current text-gray-600 w-3"
                          viewBox="0 0 448 512"
                        >
                          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                        </svg>
                      </button>
                      <span className="mx-4 font-medium">{item.amount}</span>
                      <button onClick={() => handleIncrease(item.id)}>
                        <svg
                          className="fill-current text-gray-600 w-3"
                          viewBox="0 0 448 512"
                        >
                          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                        </svg>
                      </button>
                    </div>
                    <span className="text-center w-1/5 font-semibold text-sm">
                      ${item.price}
                    </span>
                    <span className="text-center w-1/5 font-semibold text-sm">
                      ${item.amount * item.price}
                    </span>
                  </div>
                );
              })}
              <Link
                href="/products"
                className="flex font-semibold text-indigo-600 text-sm mt-10"
              >
                <svg
                  className="fill-current mr-2 text-indigo-600 w-4"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </Link>
            </div>

            <div id="summary" className="w-1/4 px-8 py-10">
              <h1 className="font-semibold text-2xl border-b pb-8">
                Order Summary
              </h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  Items {cartItem.length}
                </span>
              </div>
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>${calculateTotal()}</span>
                </div>
                {user ? (
                  <button
                    className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
                    onClick={createCheckoutSession}
                  >
                    Checkout
                  </button>
                ) : (
                  <h2>You have to login before checkout!</h2>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};
export default Cart;
