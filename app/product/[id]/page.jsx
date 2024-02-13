import ProductList from "./ProductList";
import { getDatas } from "@/app/hooks/getData";

async function SingleProduct({ params }) {
  const { get } = getDatas();
  const singlePro = await get(params.id);
  return singlePro && <ProductList singlePro={singlePro} />;
}

export default SingleProduct;
