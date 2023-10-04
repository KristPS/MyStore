import React, { useState, useEffect } from 'react';

const API_BASE_URL = 'https://fakestoreapi.com/products';

const ProductById = () => {
  const [product, setProduct] = useState({});

  // Function to fetch data from the API
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  // Fetch a specific product based on id
  const getProductById = async (id) => {
    const data = await fetchData(`${API_BASE_URL}/${id}`);
    setProduct(data);
  };

  useEffect(() => {
    // Example usage of functions
    getProductById(1);
  }, []);

  return (
    <div className="productById">
      <h2>Product Details</h2>
      <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
        <p>Product ID: {product.id}</p>
        <p>Title: {product.title}</p>
        <p>Price: ${product.price?.toFixed(2)}</p>
        <p>Category: {product.category}</p>
        <p>Description: {product.description}</p>
        <p>Image: <img src={product.image} alt={product.title} style={{ maxWidth: '100px' }} /></p>
      </div>
    </div>
  );
};

export default ProductById;
