import React from 'react'
import "./Home.css";
import ricecooker from '../../assets/ricecooker.jpg';
const Home = () => {
  return (
    <>
    <div className="flex">
    <div className="card">
        <img src={ricecooker} alt="Product Image" />
        <div className="product-name">Product Name</div>
        <div className="product-description">
            This is a sample product description. You can replace this with your own description.
        </div>
    </div>
    <div className="card">
        <img src={ricecooker} alt="Product Image" />
        <div className="product-name">Product Name</div>
        <div className="product-description">
            This is a sample product description. You can replace this with your own description.
        </div>
    </div>
    <div className="card">
        <img src={ricecooker} alt="Product Image" />
        <div className="product-name">Product Name</div>
        <div className="product-description">
            This is a sample product description. You can replace this with your own description.
        </div>
    </div>
    </div>
    </>
  )
}

export default Home