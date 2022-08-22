import classes from './cart-item.module.css';
import Image from 'next/image';

import ShoppingCartContext from '../../store/shopping-cart-context';
import { useContext } from 'react';

interface CartItemProps {
  productId: number;
  name: string;
  price: number;
  count: number;
  image: string;
}

const CartItem = ({ productId, name, price, count, image }: CartItemProps) => {
  const ShoppingCartCtx = useContext(ShoppingCartContext);

  const reduce = () => {
    ShoppingCartCtx.reduceQuantity(productId);
  };

  const increase = () => {
    ShoppingCartCtx.increaseQuantity(productId);
  };

  const remove = () => {
    ShoppingCartCtx.removeProduct(productId);
  };

  return (
    <li className={classes['cart-item']}>
      <div className={classes['item-name']}>
        <Image src={image} alt={name} width={50} height={60} />
        <h2>{name}</h2>
      </div>
      <p className={classes['item-price']}>
        <i className="fas fa-dollar-sign"></i>
        {price}
      </p>
      <div className={classes['count-item']}>
        <button className={classes['btn']} onClick={reduce}>
          -
        </button>
        <button className={classes['count']}>{count}</button>
        <button className={classes['btn']} onClick={increase}>
          +
        </button>
      </div>
      <div className={classes['item-price']}>
        <i className="fas fa-dollar-sign"></i>
        {price * count}
      </div>
      <button className={classes['delete-item']} onClick={remove}>
        X
      </button>
    </li>
  );
};

export default CartItem;
