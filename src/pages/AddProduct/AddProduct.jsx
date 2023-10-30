import React from 'react'
import './addProduct.css';

const AddProduct = () => {
  return (
    <div className="container">
        <h2>Product Information</h2>
        <form>
            <div className="form-group">
                <label htmlFor="product-name">Product Name</label>
                <input type="text" id="product-name" name="product-name" required />
            </div>

            <div className="form-group">
                <label htmlFor="product-description">Product Description</label>
                <textarea id="product-description" name="product-description" rows="4" required></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="product-image">Product Image</label>
                <input type="file" id="product-image" name="product-image" accept="image/*" required />
            </div>

            <div className="form-group">
                <button type="submit" className="submit-button">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default AddProduct;