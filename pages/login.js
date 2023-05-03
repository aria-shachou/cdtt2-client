import React, { useState } from "react";
import { fetcher } from "../lib/api";
import { setToken } from "../lib/auth";
import Layout from "../components/Layout";
import { useFetchUser } from "../lib/authContext";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, loading } = useFetchUser();
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await fetcher(`${process.env.NEXT_PUBLIC_URL}/auth/local`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: email,
          password,
        }),
      });
      setToken(data);
    } catch (error) {
      alert("Invalid credentials!");
    }
  };

  return (
    <Layout user={user} loading={loading}>
      {user ? (
        <h2> You have login</h2>
      ) : (
        <div className="min-h-screen bg-cyan-400 flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            style={{ width: "400px" }}
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2 text-center">Sign in</h2>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                required
                autoComplete="username"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                required
                autoComplete="current-password"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      )}
    </Layout>
  );
};

export default Login;
