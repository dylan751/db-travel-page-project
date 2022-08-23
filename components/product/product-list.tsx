import { useRef, useState } from 'react';
import { useRouter } from 'next/router';

import ProductItem from './product-item';
import classes from './product-list.module.css';
import Pagination from '../pagination';
import { Product } from '../../models/Product';

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  const productFilterRef = useRef<HTMLSelectElement>();
  const router = useRouter();

  // ----------- PAGINATION PART --------------
  const [pageSize] = useState<number>(6);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;

  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  const selectCurrentPage = (page: number) => {
    setCurrentPage(page);
  };

  // ------------------------------------------
  const sortHandler = () => {
    router.push(`/shopping/${productFilterRef.current.value}`);
  };

  return (
    <div className={classes['product-list']}>
      <div className={classes['product-filter']}>
        <select
          className={classes['product-filter-select']}
          ref={productFilterRef}
        >
          <option value="0">Sắp Xếp Sản Phẩm</option>
          <option value="high-to-low">Theo Giá Giảm Dần</option>
          <option value="low-to-high">Theo Giá Tăng Dần</option>
        </select>
        <button onClick={sortHandler}>Sắp xếp</button>
      </div>
      <ul className={classes['product-list-item']}>
        {currentProducts.map((product) => (
          <ProductItem
            key={product.productId}
            productId={product.productId}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
            description={product.description}
            image={product.image}
            product={product}
          />
        ))}
      </ul>
      <Pagination
        pageSize={pageSize}
        setCurrentPage={selectCurrentPage}
        currentPage={currentPage}
        total={products.length}
      />
    </div>
  );
};

export default ProductList;