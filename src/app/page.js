export const dynamic = "force-dynamic"; // SSR enabled (optional hint)

import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products?limit=6", {
    cache: "no-store", // disables caching = SSR
  });
  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <Header />
      <main style={{ padding: "20px" }}>
        <h2 style={{ textAlign: "center" }}>Products</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {products.map((item) => (
            <ProductCard
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
