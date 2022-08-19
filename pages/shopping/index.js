import ShoppingContent from "../../components/shopping/shopping-content";
import ShoppingHeader from "../../components/shopping/shopping-header";
import productApi from "../../services/productApi";

function ShoppingPage(props) {
  const { products } = props;

  return (
    <div>
      <ShoppingHeader />
      <ShoppingContent products={products} />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await productApi.getListProducts();
  const products = res.data.data.edges;

  return {
    props: {
      products: products,
    },
  };
}

export default ShoppingPage;
