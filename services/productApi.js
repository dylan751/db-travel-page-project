import authAxios from "./authAxios";

class productApi {
  getListProducts = async () => {
    return await authAxios(`${process.env.NEXT_PUBLIC_API_DOMAIN}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  getListSortedProducts = async (sortMethod) => {
    const res = await authAxios(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/products`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const allProducts = res.data.data.edges;

    let sortedProducts = allProducts;

    if (sortMethod === "0") sortedProducts = allProducts;
    if (sortMethod === "high-to-low")
      sortedProducts = allProducts.sort((a, b) =>
        a.price <= b.price ? 1 : -1
      );
    if (sortMethod === "low-to-high")
      sortedProducts = allProducts.sort((a, b) => (a.price > b.price ? 1 : -1));

    return sortedProducts;
  };

  getProduct = async (productId) => {
    return await authAxios(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/products/${productId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  addProduct = async (productData) => {
    return await authAxios(`${process.env.NEXT_PUBLIC_API_DOMAIN}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: productData,
    });
  };

  updateProduct = async (productId, productData) => {
    return await authAxios(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/products/${productId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: productData,
      }
    );
  };

  deleteIvr = async (productId) => {
    return await authAxios(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/v1/ivr/${productId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
}

export default new productApi();
