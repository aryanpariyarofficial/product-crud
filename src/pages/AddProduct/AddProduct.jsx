import React, { useState } from 'react'
import './addProduct.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const navigate = useNavigate();
    // First Approach
    // const [productName, setProductName] = useState("");
    // const [productDescription, setProductDescription] = useState("");
    // const [productImage, setProductImage] = useState("");
    // const [productMaterial, setProductMaterial] = useState("");
    // const submitHandler = async (e) =>{
    //     e.preventDefault();
    //    await axios.post("https://652fbacf6c756603295d8ee6.mockapi.io/products", {
    //         productName : productName,
    //         productDescription : productDescription,
    //         productImage : productImage,
    //         productMaterial : productMaterial,
    //     });
    //     navigate('/');
    //   }
    

    // SECOND APPROACH
    // const submitHandler = async (e) =>{
    //     e.preventDefault();
    //     const formData = new FormData(e.currentTarget);
    //     const data = Object.fromEntries(formData);
    //     const response = await axios.post("https://652fbacf6c756603295d8ee6.mockapi.io/products", data)
    //     console.log(response);
    //         navigate('/');
    // }

    // THIRD APPROACH

    const [data, setData] = useState({
        productName: "",
        productImage: "",
        productDescription: "",
        productMaterial: "",

    });
    const handleChange = (e) =>{
        const {name, value} = e.target;
        // console.log(e.target.name, e.target.value);
        setData({
            ...data,
            [name]: value
        })
    }
    const submitHandler = async (e) =>{
        e.preventDefault();
        const response = await axios.post("https://652fbacf6c756603295d8ee6.mockapi.io/products", data)
        console.log(response);
        navigate('/');
    }
  return (
    <div className="container">
        <h2>Product Information</h2>
     <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="product-name">Product Name</label>
                <input type="text" id="product-name" name="productName" onChange={handleChange} required />
            </div>

            <div className="form-group">
                <label htmlFor="product-description">Product Description</label>
                <textarea id="product-description" name="productDescription" onChange={handleChange} rows="4" required></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="product-image">Product Image</label>
                <input type="text" id="product-image" name="productImage" onChange={handleChange}  rows={'4'} required />
            </div>
            <div className="form-group">
                <label htmlFor="product-material">Product Material</label>
                <textarea id="product-material" name="productMaterial" rows="4" onChange={handleChange} required></textarea>
            </div>
            {/* second approach code */}

            {/* <div className="form-group">
                <label htmlFor="product-name">Product Name</label>
                <input type="text" id="product-name" name="productName" required />
            </div>

            <div className="form-group">
                <label htmlFor="product-description">Product Description</label>
                <textarea id="product-description" name="productDescription" rows="4" required></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="product-image">Product Image</label>
                <input type="text" id="product-image" name="productImage" rows={'4'} required />
            </div>
            <div className="form-group">
                <label htmlFor="product-material">Product Material</label>
                <textarea id="product-material" name="productMaterial" rows="4" required></textarea>
            </div> */}

            {/* first approach */}

            {/* <div className="form-group">
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
                <label htmlFor="product-material">Product Material</label>
                <textarea id="product-material" name="productMaterial" onChange={(e)=>setProductMaterial(e.target.value)} rows="4" required></textarea>
            </div> */}

            <div className="form-group">
                <button type="submit" className="submit-button">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default AddProduct;