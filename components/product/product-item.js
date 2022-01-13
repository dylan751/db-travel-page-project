import Image from "next/image";
import classes from "./product-item.module.css";
import ShoppingCartContext from "../../store/shopping-cart-context";
import { useContext } from "react";

import {CurrencyDollarIcon} from '@heroicons/react/solid';

function ProductItem(props) {
  const { product, ProductID, TenSanPham, Gia, SoLuong, MoTa, Anh } = props;
  
  const ShoppingCartCtx = useContext(ShoppingCartContext);

  function onSubmitHandler() {
    ShoppingCartCtx.addToCart(product);
  }

  return (
    <li className={classes["product-item"]}>
      <div className={classes["image"]}>
        <Image src={Anh} alt={TenSanPham} width={300} height={400} />
      </div>
      <h2>{TenSanPham}</h2>
      <div className={classes["product-price"]}>
        <p><CurrencyDollarIcon className="inline-block w-5 h-5 text-clr_jaffa" />{Gia}</p>
        <p>Hiện còn: {SoLuong}</p>
      </div>
      <p className={classes["product-description"]}>{MoTa}</p>
      <button onClick={onSubmitHandler}>Cho vào giỏ hàng</button>
    </li>
  );
}

export default ProductItem;
