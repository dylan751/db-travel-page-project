import { useRef, useState } from "react";
import { useRouter } from "next/router";

import ProductItem from "./product-item";
import classes from "./product-list.module.css";
import Pagination from "../pagination";

function ProductList(props) {
  const productFilterRef = useRef();
  const router = useRouter();

  const { products } = props;

  // ----------- PAGINATION PART --------------
  const [pageSize] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;

  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  function selectCurrentPage(page) {
    setCurrentPage(page);
  }

  // ------------------------------------------
  function sortHandler() {
    router.push(`/shopping/${productFilterRef.current.value}`);
  }

  return (
    <div className={classes["product-list"]}>
      <div className={classes["product-filter"]}>
        <select
          className={classes["product-filter-select"]}
          ref={productFilterRef}
        >
          <option value="0">Sắp Xếp Sản Phẩm</option>
          <option value="high-to-low">Theo Giá Giảm Dần</option>
          <option value="low-to-high">Theo Giá Tăng Dần</option>
        </select>
        <button onClick={sortHandler}>Sắp xếp</button>
      </div>
      <ul className={classes["product-list-item"]}>
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
}

export default ProductList;
