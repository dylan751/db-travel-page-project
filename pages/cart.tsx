import { useContext } from "react";
import CartContent from "../components/cart/cart-content";

import CartHeader from "../components/cart/cart-header";
import ShoppingCartContext from "../store/shopping-cart-context";

function CartPage() {
  const ShoppingCartCtx = useContext(ShoppingCartContext);
  const cartItems = ShoppingCartCtx.cart;

  return (
    <div>
      <CartHeader />
      <CartContent />
    </div>
  );
}

export default CartPage;
