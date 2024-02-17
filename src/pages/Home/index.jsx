import { Layout } from "../../components/Layout";
import { Card } from "../../components/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import { ProductDetail } from "../../components/ProductDetail";


export function Home() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log(response.data);
      setItems(response.data);
    });
  }, []);
  return (
    <Layout>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
      <ProductDetail/>
    </Layout>
  );
}
