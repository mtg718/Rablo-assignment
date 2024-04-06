"use client";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const HomePage = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [items, setitems] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      setitems(data);
    } catch (error) {
      console.log("Error ");
      setitems([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop:'3rem'
          }}
        >
          <Spinner />
        </div>
      ) :  (
        <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {items.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </div>
      ) }
    </div>
  );
};

export default HomePage;
