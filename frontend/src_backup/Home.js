import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList.js';
import laptopImage from './assets/laptop.jpg';
import smartphoneImage from './assets/smartphone.jpg';
import tshirtImage from './assets/t-shirt.jpg';
import jeansImage from './assets/jeans.jpg';
import fictionBookImage from './assets/frictionbook.png';
import nonFictionBookImage from './assets/nonfrictionbook.jpg';
import microwaveImage from './assets/microwave.jpg';
import refrigeratorImage from './assets/refrigerator.jpg';




const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = ['Electronics', 'Clothing', 'Books', 'HomeAppliances'];

  const products = {
    Electronics: [
      { id: 1, image: laptopImage, name: 'Laptop', description: 'A powerful laptop', price: '$999' },
      { id: 2, image: smartphoneImage, name: 'Smartphone', description: 'A latest smartphone', price: '$799' },
    ],
    Clothing: [
      { id: 3, image: tshirtImage, name: 'T-Shirt', description: 'A comfortable t-shirt', price: '$19' },
      { id: 4, image: jeansImage, name: 'Jeans', description: 'Stylish jeans', price: '$49' },
    ],
    Books: [
      { id: 5, image: fictionBookImage, name: 'Fiction Book', description: 'An interesting fiction book', price: '$14' },
      { id: 6, image: nonFictionBookImage, name: 'Non-Fiction Book', description: 'An informative non-fiction book', price: '$20' },
    ],
    HomeAppliances: [
      { id: 7, image: microwaveImage, name: 'Microwave', description: 'A high-quality microwave', price: '$199' },
      { id: 8, image: refrigeratorImage, name: 'Refrigerator', description: 'A spacious refrigerator', price: '$499' },
    ],
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="App">
      <h1>Product Categories</h1>
      <select onChange={handleCategoryChange} value={selectedCategory}>
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      {selectedCategory && (
        <ProductList products={products[selectedCategory]} />
      )}
    </div>
  );
};

export default App;
