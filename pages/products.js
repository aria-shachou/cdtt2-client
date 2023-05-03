import Layout from "../components/Layout";
import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import ProductsList from "../components/ProductsList";
import { fetcher } from "../lib/api";
import Footer from "../components/Footer";
import { useFetchUser } from "../lib/authContext";
const Products = () => {
  const { user, loading } = useFetchUser();
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const [meta, setMeta] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (searchTerm !== "") {
      const filteredProducts = await fetcher(
        `${process.env.NEXT_PUBLIC_URL}/products?filters[name][$containsi]=${searchTerm}&populate=*`
      );

      setMeta(filteredProducts.meta);
      setProducts(filteredProducts.data);
    } else if (searchTerm === "") {
      const res = await fetcher(
        `${process.env.NEXT_PUBLIC_URL}/products?pagination[page]=${pageIndex}&pagination[pageSize]=${pageSize}&populate=*`
      );
      setMeta(res.meta);
      setProducts(res.data);
      setPageIndex(1);
      setIsLoading(false);
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetcher(
        `${process.env.NEXT_PUBLIC_URL}/products?pagination[page]=${pageIndex}&pagination[pageSize]=${pageSize}&populate=*`
      );
      setMeta(res.meta);
      setProducts(res.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [pageIndex]);
  if (isLoading) {
    return (
      <div className="text-center">
        <Loading />
      </div>
    );
  }
  return (
    <>
      <Layout user={user} loading={loading}>
        <div
          className="w-full align-center justify-center flex"
          // style={products.length <= 0 ? { height: 600 } : null}
        >
          <form onSubmit={handleSubmit} className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleChange}
              className="bg-gray-100 text-gray-700 border-2 border-gray-100 py-2 px-4 pr-8 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200"
            >
              Search
            </button>
          </form>
        </div>
        <ProductsList products={products} />
        <div className="flex justify-center" style={{ marginBottom: 30 }}>
          {products.length > 0 ? (
            <>
              <button
                onClick={() => setPageIndex(pageIndex - 1)}
                disabled={pageIndex === 1}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Previous
              </button>
              <button
                onClick={() => setPageIndex(pageIndex + 1)}
                disabled={
                  pageIndex === (products && meta?.pagination?.pageCount)
                }
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Next
              </button>
            </>
          ) : (
            ""
          )}

          {products.length > 0 ? (
            <div className="flex justify-center items-center ml-5 text-lg">
              <span className="text-blue-700">
                Showing{" "}
                <span className="text-blue-700">{meta?.pagination?.page}</span>{" "}
                to{" "}
                <span className="text-blue-700">
                  {meta?.pagination?.pageCount}
                </span>{" "}
                of{" "}
                <span className="text-blue-700">{meta?.pagination?.total}</span>{" "}
                Entries
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
      </Layout>
    </>
  );
};

export default Products;

// export async function getServerSideProps() {}
