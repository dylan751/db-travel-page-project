import CartItem from './CartItem';
import classes from './CartList.module.css';

import ShoppingCartContext from '../../store/ShoppingCartContext';
import { useContext } from 'react';

const CartList = () => {
  const ShoppingCartCtx = useContext(ShoppingCartContext);
  const cartItems = ShoppingCartCtx.cart;

  if (cartItems.length === 0) {
    return (
      <>
        <ul className={classes['cart-list']}>
          <li className={classes['cart-list-header']}>
            <p className={classes['cart-list-header__product']}>Products</p>
            <p>Unit Price</p>
            <p>Quantity</p>
            <p>Total amount</p>
            <p>Remove</p>
          </li>
          <h2 className={classes['empty-cart-information']}>
            You don't have any products in the cart yet!
          </h2>
        </ul>
      </>
    );
  }

  return (
    <>
      <ul className={classes['cart-list']}>
        <li className={classes['cart-list-header']}>
          <p className={classes['cart-list-header__product']}>Sản Phẩm</p>
          <p>Đơn giá</p>
          <p>Số lượng</p>
          <p>Tổng tiền</p>
          <p>Xóa</p>
        </li>
        {cartItems.map((cart) => (
          <CartItem
            key={cart.productId}
            name={cart.name}
            price={cart.price}
            count={cart.count}
            productId={cart.productId}
            image={cart.image}
          />
        ))}
      </ul>
    </>
  );
};

export default CartList;
