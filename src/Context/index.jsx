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

  //* state for search bar
  const [searchByTitle, setSearchByTitle] = useState(null);

  //* state for products and get request to the API
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get("https://api.escuelajs.co/api/v1/products").then((response) => {
      setItems(response.data);
    });
  }, []);

  //* filtered item
  const [filteredItems, setFilteredItems] = useState(null);
  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };
  
  useEffect(() => {
    if (searchByTitle)
      setFilteredItems(filteredItemsByTitle(items, searchByTitle));
  }, [items, searchByTitle])

  const [category, setCategory] = useState(null);

  const filteredItemsByCategory = (items, category) => {
    return items?.filter((item) =>
      item.category.name.toLowerCase().includes(category.toLowerCase())
    );
  };

  const filterBy = (searchType, items, searchByTitle, category) => {
    if (searchType === "BY_TITLE") {
      return filteredItemsByTitle(items, searchByTitle);
    }

    if (searchType === "BY_CATEGORY") {
      return filteredItemsByCategory(items, category);
    }

    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredItemsByCategory(items, category).filter((item) =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }

    if (!searchType) {
      return items;
    }
  };

  useEffect(() => {
    if (searchByTitle && category)
      setFilteredItems(
        filterBy("BY_TITLE_AND_CATEGORY", items, searchByTitle, category)
      );
    if (searchByTitle && !category)
      setFilteredItems(filterBy("BY_TITLE", items, searchByTitle, category));
    if (!searchByTitle && category)
      setFilteredItems(filterBy("BY_CATEGORY", items, searchByTitle, category));
    if (!searchByTitle && !category)
      setFilteredItems(filterBy(null, items, searchByTitle, category));
  }, [items, searchByTitle, category]);

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
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        setFilteredItems,
        category,
        setCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

ShoppingCartProvider.propTypes = {
  children: PropTypes.any,
};
