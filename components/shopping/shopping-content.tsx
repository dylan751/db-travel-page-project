import { Product } from '../../models/Product';
import ProductList from '../product/product-list';
import classes from './shopping-content.module.css';

interface ShoppingContentProps {
  products: Product[];
}

const ShoppingContent = ({ products }: ShoppingContentProps) => {
  return (
    <section className={classes['shopping-content']}>
      <div className={classes['product-section']}>
        <ProductList products={products} />
      </div>
    </section>
  );
};

export default ShoppingContent;
