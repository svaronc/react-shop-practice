import { Layout } from "../../components/Layout";
import { Card } from "../../components/Card";
import { ProductDetail } from "../../components/ProductDetail";
import { ShoppingCartContext } from "../../Context";
import { useContext } from "react";


export function Home() {
 const context = useContext(ShoppingCartContext)
  return (
    <Layout>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {context.items?.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
      <ProductDetail/>
    </Layout>
  );
}
