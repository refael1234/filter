import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    console.clear()
    console.log(product.title + ': ' + product.description)
  return (
    <div className="product-card">
      <h2>{product.title}</h2>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductCard;
