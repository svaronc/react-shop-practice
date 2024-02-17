import { useContext } from "react";
import { Layout } from "../../components/Layout";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../../components/OrderCard";

export function MyOrder() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <h2>My Order</h2>
      <div className="flex flex-col w-80">
        {context.order?.slice(-1)[0].products.map((product) => (
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
