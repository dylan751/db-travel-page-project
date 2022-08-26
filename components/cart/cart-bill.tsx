import classes from './cart-bill.module.css';
import Link from 'next/link';

import ShoppingCartContext from '../../store/shopping-cart-context';
import NotificationContext from '../../store/notification-context';
import { ReactNode, useContext } from 'react';
import { useRouter } from 'next/router';

const CartBill = () => {
  const ShoppingCartCtx = useContext(ShoppingCartContext);
  const NotificationCtx = useContext(NotificationContext);

  const totalPrice: any = ShoppingCartCtx.totalPrice();
  const { cart } = ShoppingCartCtx;

  const router = useRouter();

  const orderSubmitHandler = (event) => {
    event.preventDefault();

    NotificationCtx.showNotification({
      title: 'Đặt hàng thành công!',
      message: 'Đã hoàn thành đặt hàng.',
      status: 'success',
    });

    router.push('/shopping');
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
        <button className={classes['check-out']} onClick={orderSubmitHandler}>Process to payment</button>
      </Link>
    </div>
  );
};

export default CartBill;
