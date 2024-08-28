import { useParams } from "react-router-dom";

const ProductPage = () => {
  const params = useParams();
  const { slug } = params;
  return <h1>{slug}</h1>;
};

export default ProductPage;
