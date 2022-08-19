import ShoppingHeader from "../../components/shopping/shopping-header";
import ShoppingContent from "../../components/shopping/shopping-content";
import productApi from "../../services/productApi";

function SortedShoppingPage(props) {
  const { products } = props;

  return (
    <div>
      <ShoppingHeader />
      <ShoppingContent products={products} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const sortMethod = params.slug;

  const sortedProducts = await productApi.getListSortedProducts(sortMethod);

  return {
    props: {
      products: sortedProducts,
    },
  };
}

export default SortedShoppingPage;
