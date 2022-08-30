import { GetServerSideProps } from 'next';
import ShoppingContent from '../../components/Shopping/ShoppingContent';
import ShoppingHeader from '../../components/Shopping/ShoppingHeader';
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
