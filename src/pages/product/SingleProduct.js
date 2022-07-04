import './singleproduct.css'
import Announcement from '../../components/announcement/Announcement';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Newsletter from '../../components/newsletter/Newsletter';
import styled from 'styled-components';
import { Add, Remove } from '@material-ui/icons';
import { useState } from 'react';

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props)=>props.color};
  margin-right: 1px;
  cursor: pointer;
`

const SingleProduct = () => {
  const [amount, setAmount] = useState(0);
  return (
  <div className="sp-container">
    <Navbar />
    <Announcement />
    <div className="sp-wrapper">
      <div className="sp-img-container">
        <img className="sp-img" src="https://static.cdn.printful.com/blog/wp-content/uploads/2021/11/Adidas-hat.jpg" />
      </div>
      <div className="sp-info">
        <h1 className="sp-title">White Sweater</h1>
        <p className="sp-desc">Buy now and get the best deals on men's White sweaters at macys.com! Act now to take advantage of free shipping and curbside pickup!</p>
        <span className="sp-price">$ 50</span>
        <div className="sp-filter-container">
          <div className="sp-filter">
            <h1 className="sp-filter-title">Color</h1>
            <FilterColor color="black" />
            <FilterColor color="blue" />
            <FilterColor color="gray" />
          </div>
          <div className="sp-filter">
            <h1 className="sp-filter-title">Size</h1>
            <select name="" className="sp-filtersize">
              <option value="XS" className="sp-filtersizeoption">XS</option>
              <option value="S" className="sp-filtersizeoption">S</option>
              <option value="M" className="sp-filtersizeoption">M</option>
              <option value="L" className="sp-filtersizeoption">L</option>
              <option value="XL" className="sp-filtersizeoption">XL</option>
            </select>
          </div>
        </div>
        <div className="sp-add-container">
          <div className="sp-amount-container">
            <Remove className="sp-amount-remove" onClick={()=>setAmount(amount<1?amount:amount-1)}/>
            <div className="sp-amount">{amount}</div>
            <Add className="sp-amount-add" onClick={()=>setAmount(amount+1)}/>
          </div>
          <button className="add-to-cart">ADD TO CART</button>
        </div>
      </div>
    </div>
    <Newsletter />
    <Footer />
  </div>
  );
};

export default SingleProduct;
