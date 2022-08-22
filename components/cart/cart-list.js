import CartItem from "./cart-item";
import classes from "./cart-list.module.css";

import ShoppingCartContext from "../../store/shopping-cart-context";
import { useContext } from "react";

function CartList() {
  const ShoppingCartCtx = useContext(ShoppingCartContext);
  const cartItems = ShoppingCartCtx.cart;

  if (cartItems.length === 0) {
    return (
      <>
        <ul className={classes["cart-list"]}>
          <li className={classes["cart-list-header"]}>
            <p className={classes["cart-list-header__product"]}>Sản Phẩm</p>
            <p>Đơn giá</p>
            <p>Số lượng</p>
            <p>Tổng tiền</p>
            <p>Xóa</p>
          </li>
          <h2 className={classes["empty-cart-information"]}>Chưa có sản phẩm trong giỏ hàng</h2>
        </ul>
      </>
    );
  }

  return (
    <>
      {/* <ul className={classes["cart-list-header"]}></ul> */}
      <ul className={classes["cart-list"]}>
        <li className={classes["cart-list-header"]}>
          <p className={classes["cart-list-header__product"]}>Sản Phẩm</p>
          <p>Đơn giá</p>
          <p>Số lượng</p>
          <p>Tổng tiền</p>
          <p>Xóa</p>
        </li>
        {cartItems.map((cart) => (
          <CartItem
            key={cart.ProductID}
            TenSanPham={cart.TenSanPham}
            Gia={cart.Gia}
            Count={cart.Count}
            ProductID={cart.ProductID}
            Anh={cart.Anh}
          />
        ))}
      </ul>
    </>
  );
}

export default CartList;
