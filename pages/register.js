import { useState } from "react";
import Layout from "../components/Layout";
import { useFetchUser } from "../lib/authContext";
import { fetcher } from "../lib/api";
import { setToken } from "../lib/auth";
import Router from "next/router";

function Register() {
  const { user, loading } = useFetchUser();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetcher(
        `${process.env.NEXT_PUBLIC_URL}/auth/local/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password,
            username: name,
          }),
        }
      );
      Router.push("/login");
    } catch (error) {
      alert("Email or user name has been already used!");
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
              <h2 className="text-2xl font-bold mb-2 text-center">Register</h2>
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                User name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                autoComplete="name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                autoComplete="email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                autoComplete="password"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      )}
    </Layout>
  );
}

export default Register;
