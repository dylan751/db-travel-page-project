import { useContext } from "react";
import CartContent from "../components/Cart/CartContent";

import CartHeader from "../components/Cart/CartHeader";
import ShoppingCartContext from "../store/ShoppingCartContext";

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
