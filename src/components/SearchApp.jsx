import React, { useState, useEffect, useRef } from 'react';
import './SearchApp.css';
import ProductCard from './ProductCard';

const SearchApp = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searchInputRef = useRef(null);  // יצירת הפניה לשדה הקלט

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setProducts(data.products));
  }, []);

  useEffect(() => {
    // הגדרת פוקוס על אלמנט ה-select כאשר הקומפוננטה נטענת
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);  // ריצה פעם אחת בלבד כשהקומפוננטה נטענת

  const handleSearchChange = () => {
    setSearchTerm(searchInputRef.current.value);
    if (filteredProducts == null){
      alert ('stop')
    }
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Homework</h1>
      <input
        ref={searchInputRef}  // הצמדת ההפניה לשדה הקלט
        type="text"
        placeholder="All"
        value={searchTerm} onChange={handleSearchChange}/>
      <div className="product-grid">
        {filteredProducts.map(product => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default SearchApp;
