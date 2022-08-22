import ShoppingHeader from '../../components/shopping/shopping-header';
import ShoppingContent from '../../components/shopping/shopping-content';
import productApi from '../../services/productApi';
import { GetServerSideProps } from 'next';
import { Product } from '../../models/Product';

interface SortedShoppingPageProps {
  products: Product[];
}

function SortedShoppingPage({ products }: SortedShoppingPageProps) {
  return (
    <div>
      <ShoppingHeader />
      <ShoppingContent products={products} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const sortMethod = params.slug;

  const sortedProducts = await productApi.getListSortedProducts(sortMethod);

  return {
    props: {
      products: sortedProducts,
    },
  };
};

export default SortedShoppingPage;
