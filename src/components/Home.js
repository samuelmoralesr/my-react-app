import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Carusel from "./Carusel";

const Home = () => {
  const [products, setProducts] = useState([]);

  // Obtener productos desde el servidor
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost/backend/get_products.php");
      setProducts(response.data);
    } catch (error) {
      console.error("Error al cargar los productos:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Carusel />
      <div className="bg-gray-100 min-h-screen">
        <section id="products" className="p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Productos Destacados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.length > 0 ? (
              products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))
            ) : (
              <p className="text-center col-span-full">No hay productos disponibles</p>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
