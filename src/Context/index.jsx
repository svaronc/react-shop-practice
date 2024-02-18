import axios from "axios";
import { PropTypes } from "prop-types";
import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // *Shopping cart counter
  const [count, setCount] = useState(0);
  //*Product detail stat /functions to open and close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);

  const closeProductDetail = () => setIsProductDetailOpen(false);

  //*product detail show product on the side
  const [productToShow, setProductToShow] = useState({});
  //* Shopping cart state - add products to cart
  const [cartProducts, setCartProducts] = useState([]);
  //* checkoutSideMenu state /functions to open and close
  const [isCheckoutSideMenu, setIsCheckoutSideMenu] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenu(true);

  const closeCheckoutSideMenu = () => setIsCheckoutSideMenu(false);

  //* Shopping cart order
  const [order, setOrder] = useState([]);
  //* state for products and get request to the API

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setItems(response.data);
    });
  }, []);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenu,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
        items,
        setItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

ShoppingCartProvider.propTypes = {
  children: PropTypes.any,
};
