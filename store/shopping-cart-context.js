import { createContext, useState, useEffect } from 'react';

const ShoppingCartContext = createContext({
  products: [],
  cart: [], // [{productId, name, price, quantity, description, category, image}, ...]
  addToCart: function (product) {},
  reduceQuantity: function (productId) {},
  increaseQuantity: function (productId) {},
  removeProduct: function (productId) {},
  totalPrice: function () {},
});

export function ShoppingCartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCartHandler(product) {
    // Nếu tất cả sản phẩm đều khác Id của sản phẩm mới => Push vào (nếu không nghĩa là trùng sản phẩm)
    const check = cart.every((item) => item.productId !== product.productId);

    if (check) {
      setCart([...cart, { ...product }]);
    } else {
      alert('The product has been added to the cart!');
    }
  }

  function reduceQuantity(id) {
    cart.map((item) => {
      if (item.productId === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setCart([...cart]); // mutation
  }

  function increaseQuantity(id) {
    cart.map((item) => {
      if (item.productId === id) {
        item.count += 1;
      }
    });
    setCart([...cart]);
  }

  function removeProduct(id) {
    if (window.confirm('Do you want to delete this product?')) {
      cart.forEach((item, index) => {
        if (item.productId === id) {
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
    }
  }

  function totalPrice() {
    const res = cart.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
    return res;
  }

  const context = {
    // products: allProducts,
    cart: cart,
    addToCart: addToCartHandler,
    reduceQuantity: reduceQuantity,
    increaseQuantity: increaseQuantity,
    removeProduct: removeProduct,
    totalPrice: totalPrice,
  };

  return (
    <ShoppingCartContext.Provider value={context}>
      {props.children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartContext;
