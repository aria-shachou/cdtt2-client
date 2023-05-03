import Footer from "../components/Footer";
import Layout from "../components/Layout";
import { useFetchUser } from "../lib/authContext";
import Link from "next/link";
export default function Home() {
  const { user, loading } = useFetchUser();
  return (
    <>
      <Layout user={user} loading={loading}>
        <section className="bg-cyan-200 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">
              Find Your Perfect Furniture
            </h1>
            <p className="mb-8">
              At Furniture Shop, we believe that every home deserves beautiful,
              comfortable, and functional furniture. That`s why we offer a wide
              selection of high-quality pieces at affordable prices. From cozy
              sofas and armchairs to elegant dining tables and chairs, we have
              everything you need to make your home look and feel amazing. Our
              team of experienced designers and sales representatives are always
              here to help you find the perfect pieces for your space and
              budget. So why wait? Start browsing our collection today and
              discover the furniture of your dreams.
            </p>
          </div>
        </section>
        <div className="relative bg-gray-900">
          <img
            src="https://nhaxinh.com/wp-content/uploads/2023/02/cua-hang-360-do-nha-xinh.jpg"
            alt="Hero Image"
            className="w-full h-auto object-cover object-center"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-white text-center mb-4">
              Discover Your Perfect Piece
            </h1>
            <p className="text-lg text-white text-center mb-8 max-w-xl px-4">
              At Furniture Shop, we believe that every home deserves beautiful,
              comfortable, and functional furniture. That`s why we offer a wide
              selection of high-quality pieces at affordable prices.
            </p>
            <Link
              href="/products"
              className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
