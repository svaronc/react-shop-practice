import { PropTypes } from "prop-types";
import { createContext, useState } from "react";

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
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

ShoppingCartProvider.propTypes = {
  children: PropTypes.any
};
