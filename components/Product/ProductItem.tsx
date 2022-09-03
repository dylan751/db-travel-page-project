import Image from 'next/image';
import classes from './ProductItem.module.css';
import ShoppingCartContext from '../../store/ShoppingCartContext';
import { useContext } from 'react';

import { CurrencyDollarIcon } from '@heroicons/react/solid';
import { Product } from '../../models/Product';

interface ProductItemProps {
  product: Product;
  productId: number;
  name: string;
  price: number;
  quantity: number;
  description: string;
  image: string;
}

const ProductItem = ({
  product,
  productId,
  name,
  price,
  quantity,
  description,
  image,
}: ProductItemProps) => {
  const ShoppingCartCtx = useContext(ShoppingCartContext);

  const onSubmitHandler = () => {
    ShoppingCartCtx.addToCart(product);
  };

  return (
    <li className={classes['product-item']}>
      <div className={classes['image']}>
        <Image src={image} alt={name} width={300} height={400} />
      </div>
      <h2>{name}</h2>
      <div className={classes['product-price']}>
        <p>
          <CurrencyDollarIcon className="inline-block w-5 h-5 text-clr_jaffa" />
          {price}
        </p>
        <p>Hiện còn: {quantity}</p>
      </div>
      <p className={classes['product-description']}>{description}</p>
      <button onClick={onSubmitHandler}>Add to cart</button>
    </li>
  );
};

export default ProductItem;
