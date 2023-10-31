import React, { useState } from 'react'
import './addProduct.css';

const AddProduct = () => {
    // First Approach
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productImage, setProductImage] = useState("");
    const [productMaterial, setProductMaterial] = useState("");
    const submitHandler = (e) =>{
        e.preventDefault();
        
    }

console.log(productName)
  return (
    <div className="container">
        <h2>Product Information</h2>
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="product-name">Product Name</label>
                <input type="text" id="product-name" name="productName" onChange={(e)=>setProductName(e.target.value)} required />
            </div>

            <div className="form-group">
                <label htmlFor="product-description">Product Description</label>
                <textarea id="product-description" name="productDescription" rows="4" onChange={(e)=>setProductDescription(e.target.value)}required></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="product-image">Product Image</label>
                <input type="text" id="product-image" onChange={(e)=>setProductImage(e.target.value)} name="productImage" rows={'4'} required />
            </div>
            <div className="form-group">
                <label htmlFor="product-description">Product Material</label>
                <textarea id="product-material" name="productMaterial" onChange={(e)=>setProductMaterial(e.target.value)} rows="4" required></textarea>
            </div>

            <div className="form-group">
                <button type="submit" className="submit-button">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default AddProduct;