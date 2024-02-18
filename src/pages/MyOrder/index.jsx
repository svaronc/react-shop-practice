import { useContext } from "react";
import { Layout } from "../../components/Layout";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../../components/OrderCard";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if (index === 'last') index = context.order?.length - 1

  return (
    <Layout>
      <div className="flex w-80 items-center justify-center relative mb-3">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col w-80">
        {context.order?.[index]?.products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
          />
        ))}
        <div className="px-6 mb-6">
          <p className="flex justify-between items-center mb-2">
            <span className="font-medium text-xl">Total:</span>
            <span className="font-medium text-xl">
              ${context.order?.slice(-1)[0].totalPrice}
            </span>
          </p>
        </div>
      </div>
    </Layout>
  );
}
