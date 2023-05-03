import React from "react";
import Link from "next/link";
import { setToken, unsetToken } from "../lib/auth";
import { useUser } from "../lib/authContext";
import { useRecoilState } from "recoil";
import { cartState } from "../atoms/cartState";
function Nav() {
  const { user, loading } = useUser();
  const [cartItem] = useRecoilState(cartState);
  const logout = () => {
    unsetToken();
  };
  return (
    <nav
      className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
        "
    >
      <div>
        <Link legacyBehavior href="/" passHref>
          <a>
            {/* eslint-disable @next/next/no-img-element */}
            <img
              className="m-3"
              src="https://res.cloudinary.com/dybbfgxm8/image/upload/v1677161937/nazi_s05kvb.gif"
              width={30}
              height={50}
              alt="heil"
            />
          </a>
        </Link>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="menu-button"
        className="h-6 w-6 cursor-pointer md:hidden block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <div
        className="hidden w-full md:flex md:items-center md:w-auto"
        id="menu"
      >
        <ul
          className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0 space-x-2"
        >
          <li>
            <Link legacyBehavior href="/">
              <a className="md:p-2 py-2 block hover:text-purple-400">Home</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/products">
              <a className="md:p-2 py-2 block hover:text-purple-400" href="#">
                Products
              </a>
            </Link>
          </li>
          {!loading &&
            (user ? (
              <li>
                <Link href="/profile" legacyBehavior>
                  <a className="md:p-2 py-2 block hover:text-purple-400">
                    Profile
                  </a>
                </Link>
              </li>
            ) : (
              ""
            ))}
        </ul>
      </div>
      <ul
        className="pt-4
              text-base text-gray-700
              md:flex
              md:justify-center 
              md:pt-0 space-x-2"
      >
        {!loading &&
          (user ? (
            <li>
              <a
                className="md:p-2 py-2 block hover:text-purple-400"
                onClick={logout}
                style={{ cursor: "pointer" }}
              >
                Logout
              </a>
            </li>
          ) : (
            ""
          ))}
        {!loading && !user ? (
          <>
            <li>
              <Link legacyBehavior href="/login">
                <a className="md:p-2 py-2 block hover:text-purple-400" href="#">
                  Login
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/register">
                <a className="md:p-2 py-2 block hover:text-purple-400" href="#">
                  Register
                </a>
              </Link>
            </li>
          </>
        ) : (
          ""
        )}
        <li className="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-center text-black hover:text-gray-700">
          <Link legacyBehavior href="/cart">
            <a role="button" className="relative flex">
              <svg className="flex-1 w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
              </svg>
              <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                {cartItem.length}
              </span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
