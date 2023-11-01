import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const navigate = useNavigate();
 const {id} = useParams();

const [product, setProduct] = useState({});


 const fetchProduct = async ()=>{
    const response = await axios.get("https://652fbacf6c756603295d8ee6.mockapi.io/products/" + id)
    setProduct(response.data);
    
  }
const handleChange = (e) =>{
    const {name, value} = e.target
    setProduct({
        ...product,
        [name] : value
    })
}

const submitHandler = async (e) =>{
    e.preventDefault();
    const response = await axios.put("https://652fbacf6c756603295d8ee6.mockapi.io/products/" + id, product)
    navigate('/');
    console.log(response)
}

  useEffect(()=>{
    fetchProduct();
      },[])
  return (
    <div className="container">
    <h2>Product Information</h2>
 <form onSubmit={submitHandler}>
        <div className="form-group">
            <label htmlFor="product-name">Product Name</label>
            <input type="text" value={product.productName} onChange={handleChange} id="product-name" name="productName"  required />
        </div>

        <div className="form-group">
            <label htmlFor="product-description">Product Description</label>
            <textarea id="product-description" onChange={handleChange} name="productDescription" value={product.productDescription} rows="4" required></textarea>
        </div>

        <div className="form-group">
            <label htmlFor="product-image">Product Image</label>
            <input type="text" id="product-image" onChange={handleChange} name="productImage" value={product.productImage}  rows={'4'} required />
        </div>
        <div className="form-group">
            <label htmlFor="product-material">Product Material</label>
            <textarea id="product-material" name="productMaterial" onChange={handleChange} rows="4" value={product.productMaterial} required></textarea>
        </div>
        <div className="form-group">
            <button type="submit" className="submit-button">Submit</button>
        </div>
    </form>
</div>
  )
}

export default UpdateProduct;