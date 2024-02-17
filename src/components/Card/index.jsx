import PropTypes from "prop-types";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { FaCirclePlus } from "react-icons/fa6";
import { CheckIcon} from "@heroicons/react/24/solid";

export const Card = ({ data }) => {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
    context.closeCheckoutSideMenu()
  };

  const addProductsToCart = (event,productData) => {
    event.stopPropagation()
    context.setCount((prev) => prev + 1);
    context.setCartProducts([ ...context.cartProducts, productData ]);
    context.openCheckoutSideMenu()
    context.closeProductDetail()
  };


  const renderIcon = (id) => {
    const isInCart = context.cartProducts.filter((product) => product.id === id).length > 0

    if (isInCart) {

      return (
        <div
            className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2"
          >
            
            <CheckIcon className="h-6 w-6 text-white" />
          </div>
      )
    } else {
      return (
        <div
            className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2"
            onClick={(event) => addProductsToCart(event,data)}
          >
            <FaCirclePlus className="h-6 w-6" />
          </div>
      )
    }
    
  }
  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct(data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg shadow-xl"
          src={data.image}
          alt={data.title}
        />
        {renderIcon(data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.title}</span>
        <span className="text-sm font-medium"> ${data.price}</span>
      </p>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired,
};
