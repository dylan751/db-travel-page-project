import CartBill from './CartBill';
import classes from './CartContent.module.css';
import CartList from './CartList';

const CartContent = () => {
  return (
    <div className={classes['cart-content']}>
      <div className={classes['cart-content__list']}>
        <CartList />
      </div>
      <div className={classes['cart-content__bill']}>
        <CartBill />
      </div>
    </div>
  );
};

export default CartContent;
