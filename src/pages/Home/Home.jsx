import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import { useNavigate } from 'react-router-dom'; // ✅ Fixed Import

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 my-10">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((product) => (
          <div
            key={product.id}
            // onClick={() => navigate(`/${product.id}`)}  // ✅ Fixed Syntax
            className="cursor-pointer transform hover:scale-105 transition duration-300"
          >
            <Card product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
