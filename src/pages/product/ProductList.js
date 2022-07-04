import React from 'react';
import './productlist.css'
import Announcement from '../../components/announcement/Announcement';
import Navbar from '../../components/navbar/Navbar';
import Newsletter from '../../components/newsletter/Newsletter';
import Products from '../../components/product/Products';
import Footer from '../../components/footer/Footer';

const ProductList = () => {
  return (
  <div classNameName="product-page">
    <Navbar />
    <Announcement />
    <h1 className="pp-title">Dresses</h1>
    <div className="filter-container">
      <div className="filter">
        <span className="filter-text">Filter Products:</span>
        <select className="p-select">
          <option value="color" disabled selected>Color</option>
          <option value="white">White</option>
          <option value="black">Black</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
        </select>
        <select className="p-select">
          <option value="size" disabled selected>Size</option>
          <option value="xs">XS</option>
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
          <option value="xl">XL</option>
        </select>
      </div>
      <div className="filter">
        <span className="filter-text">Sort Products:</span>
        <select className="p-select">
          <option selected>Newest</option>
          <option>Price (asc)</option>
          <option>Price (desc)</option>
        </select>
      </div>
    </div>
    <Products />
    <Newsletter />
    <Footer />
  </div>
  );
};

export default ProductList;
