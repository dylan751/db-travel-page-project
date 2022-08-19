import Image from "next/image";
import classes from "./product-item.module.css";
import ShoppingCartContext from "../../store/shopping-cart-context";
import { useContext } from "react";

import {CurrencyDollarIcon} from '@heroicons/react/solid';

function ProductItem(props) {
  const { product, productId, name, price, quantity, description, image } = props;
  
  const ShoppingCartCtx = useContext(ShoppingCartContext);

  function onSubmitHandler() {
    ShoppingCartCtx.addToCart(product);
  }

  return (
    <li className={classes["product-item"]}>
      <div className={classes["image"]}>
        <Image src={image} alt={name} width={300} height={400} />
      </div>
      <h2>{name}</h2>
      <div className={classes["product-price"]}>
        <p><CurrencyDollarIcon className="inline-block w-5 h-5 text-clr_jaffa" />{price}</p>
        <p>Hiện còn: {quantity}</p>
      </div>
      <p className={classes["product-description"]}>{description}</p>
      <button onClick={onSubmitHandler}>Cho vào giỏ hàng</button>
    </li>
  );
}

export default ProductItem;
