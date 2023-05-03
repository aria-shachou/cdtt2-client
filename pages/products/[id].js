import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { fetcher } from "../../lib/api";
import { useEffect, useState } from "react";
import ProductDetails from "../../components/ProductDetails";
import Loading from "../../components/Loading";
import { useFetchUser } from "../../lib/authContext";
const Product = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const { user, loading } = useFetchUser();
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      if (!id) {
        return;
      }
      try {
        const res = await fetcher(
          `${process.env.NEXT_PUBLIC_URL}/products/${id}?populate=*`
        );
        setProduct(res);
        setIsLoading(false);
      } catch (err) {
        throw new Error("Error api call");
      }
    };

    fetchData();
  }, [id]);
  if (isLoading) {
    return (
      <div className="text-center">
        <Loading />
      </div>
    );
  }
  return (
    <Layout user={user} loading={loading}>
      <ProductDetails product={product} />
    </Layout>
  );
};

export default Product;
