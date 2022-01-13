import { createContext, useState, useEffect } from "react";

const ShoppingCartContext = createContext({
  products: [],
  cart: [], // [{ProductID, TenSanPham, Gia, SoLuong, MoTa, PhanLoai, Anh}, ...]
  addToCart: function () {},
  reduceQuantity: function () {},
  increaseQuantity: function () {},
  removeProduct: function () {},
  totalPrice: function () {},
});

export function ShoppingCartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCartHandler(product) {
    // Nếu tất cả sản phẩm đều khác Id của sản phẩm mới => Push vào (nếu không nghĩa là trùng sản phẩm)
    const check = cart.every((item) => item.ProductID !== product.ProductID);

    if (check) {
      setCart([...cart, { ...product }]);
    } else {
      alert("Sản phẩm đã được thêm vào giỏ hàng!");
    }
  }

  function reduceQuantity(id) {
    cart.map((item) => {
      if (item.ProductID === id) {
        item.Count === 1 ? (item.Count = 1) : (item.Count -= 1);
      }
    });
    setCart([...cart]); // mutation
  }

  function increaseQuantity(id) {
    cart.map((item) => {
      if (item.ProductID === id) {
        item.Count += 1;
      }
    });
    setCart([...cart]);
  }

  function removeProduct(id) {
    if (window.confirm("Bạn muốn xóa sản phẩm này?")) {
      cart.forEach((item, index) => {
        if (item.ProductID === id) {
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
    }
  }

  function totalPrice() {
    const res = cart.reduce((prev, item) => {
      return prev + item.Gia * item.Count;
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
