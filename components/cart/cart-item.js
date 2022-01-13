import classes from "./cart-item.module.css";
import Image from "next/image";

import ShoppingCartContext from "../../store/shopping-cart-context";
import { useContext } from "react";
import {XIcon} from '@heroicons/react/solid';

function CartItem(props) {
  const { ProductID, TenSanPham, Gia, Count, Anh } = props;

  const ShoppingCartCtx = useContext(ShoppingCartContext);

  function reduce() {
    ShoppingCartCtx.reduceQuantity(ProductID);
  }

  function increase() {
    ShoppingCartCtx.increaseQuantity(ProductID);
    console.log(ShoppingCartCtx.cart);
  }

  function remove() {
    ShoppingCartCtx.removeProduct(ProductID);
  }

  return (
    <li className={classes["cart-item"]}>
      <div className={classes["item-name"]}>
        <Image src={Anh} alt={TenSanPham} width={50} height={60} />
        <h2>{TenSanPham}</h2>
      </div>
      <p className={classes["item-price"]}>
        <i className="fas fa-dollar-sign"></i>
        {Gia}
      </p>
      <div className={classes["count-item"]}>
        <button className={classes["btn"]} onClick={reduce}>
          -
        </button>
        <button className={classes["count"]}>{Count}</button>
        <button className={classes["btn"]} onClick={increase}>
          +
        </button>
      </div>
      <div className={classes["item-price"]}>
        <i className="fas fa-dollar-sign"></i>
        {Gia * Count}
      </div>
      <button className={classes["delete-item"]} onClick={remove}>
        X
      </button>
    </li>
  );
}

export default CartItem;
