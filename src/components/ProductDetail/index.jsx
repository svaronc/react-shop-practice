import { IoMdCloseCircle } from "react-icons/io";
import "./styles.css";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

export const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } product-detail flex flex-col fixed right-0 border border-black rounded bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <IoMdCloseCircle size={20} onClick={context.closeProductDetail} cursor={'pointer'}/>
      </div>
      <figure className="px-6">
        <img className="w-full h-full rounded-lg" src={context.productToShow.image} alt={context.productToShow.title} />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">${context.productToShow.price}</span>
        <span className="font-medium text-md mb-2">{context.productToShow.title}</span>
        <span className="font-light text-sm">{context.productToShow.description}</span>
      </p>
    </aside>
  );
};
