import ProductList from "../product/product-list";
import classes from "./shopping-content.module.css";

function ShoppingContent(props) {
  const { products } = props;
  return (
    <section className={classes["shopping-content"]}>
      <div className={classes["product-section"]}>
        <ProductList products={products} />
      </div>
    </section>
  );
}

export default ShoppingContent;
