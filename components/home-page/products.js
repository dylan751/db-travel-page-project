import ProductItem from "../product/product-item";
import classes from "./products.module.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-elastic-carousel";
import Button from "../ui/button";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Products(props) {
  const { products } = props;

  return (
    <section className={classes["product-section"]}>
      <div className={classes["product-section-header"]}>
        <div>
          <span>Shopping Center</span>
          <h2>Must-have Tools</h2>
        </div>
        <div>
          <Button link="/shopping">Cửa Hàng</Button>
        </div>
      </div>
      <Carousel breakPoints={breakPoints}>
        {products.map((product) => (
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
      </Carousel>
    </section>
  );
}

export default Products;
