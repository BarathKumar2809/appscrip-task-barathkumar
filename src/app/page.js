
'use client';
import Head from 'next/head'; 
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
        <Head>
          <title>Appscrip Assignment - Product Store</title>
          <meta name="description" content="Browse amazing products from the Fake Store API. Built using Next.js." />
        </Head>

      <Header />
      <main className="container">
        <h1>All Products</h1>
        <div className='grid'>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

const styles = {
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};
