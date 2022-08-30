import classes from './cart-bill.module.css';
import Link from 'next/link';

import ShoppingCartContext from '../../store/shopping-cart-context';
import NotificationContext from '../../store/notification-context';
import { useContext } from 'react';
import { checkout } from '../../services/checkout';

const CartBill = () => {
  const ShoppingCartCtx = useContext(ShoppingCartContext);
  const NotificationCtx = useContext(NotificationContext);

  const totalPrice: any = ShoppingCartCtx.totalPrice();
  const { cart } = ShoppingCartCtx;

  const orderSubmitHandler = (event) => {
    event.preventDefault();

    const lineItems = [];
    cart.map((item) =>
      lineItems.push({ price: item.stripeId, quantity: item.count }),
    );

    // Redirect to Stripe
    checkout({
      lineItems,
    });
  };

  return (
    <div className={classes['cart-bill']}>
      <div className={classes['cart-bill-header']}>Bills</div>
      <div className={classes['cart-bill-content']}>
        <div className={classes['cart-bill-item-container']}>
          {cart.map((item) => (
            <div className={classes['cart-bill-item']} key={item.productId}>
              <h3>{item.name}</h3>
              <p>
                <i className="fas fa-dollar-sign"></i>
                {item.price * item.count}
              </p>
            </div>
          ))}
        </div>
        <div className={classes['total-price']}>
          <p>Total amount</p>
          <p>
            <i className="fas fa-dollar-sign"></i>
            {totalPrice}
          </p>
        </div>
      </div>
      <Link href="/check-out">
        <button className={classes['check-out']} onClick={orderSubmitHandler}>
          Process to payment
        </button>
      </Link>
    </div>
  );
};

export default CartBill;
