import { GetServerSideProps } from 'next';
import ShoppingContent from '../../components/shopping/shopping-content';
import ShoppingHeader from '../../components/shopping/shopping-header';
import { Product } from '../../models/Product';
import productApi from '../../services/productApi';

interface ShoppingPageProps {
  products: Product[];
}

function ShoppingPage({ products }: ShoppingPageProps) {
  return (
    <div>
      <ShoppingHeader />
      <ShoppingContent products={products} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await productApi.getListProducts();
  const products = res.data.data.edges;

  return {
    props: {
      products: products,
    },
  };
};

export default ShoppingPage;
