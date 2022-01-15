import ShoppingContent from "../../components/shopping/shopping-content";
import ShoppingHeader from "../../components/shopping/shopping-header";
import { getAllProducts } from "../../lib/api-utils";

function ShoppingPage(props) {
  const { products } = props;

  return (
    <div>
      <ShoppingHeader />
      <ShoppingContent products={products} />
    </div>
  );
}

export async function getStaticProps() {
  const products = await getAllProducts();

  return {
    props: {
      products: products,
    },
    revalidate: 1800,
  };
}

export default ShoppingPage;
