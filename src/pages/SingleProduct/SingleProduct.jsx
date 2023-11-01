import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const SingleProduct = () => {

  const navigate = useNavigate();
  //get id of the product
  const {id} = useParams();

  //store product data comming in object
const [product, setProduct] = useState({});

// fetch single product
  const fetchSingleProduct = async ()=>{
    const response = await axios.get("https://652fbacf6c756603295d8ee6.mockapi.io/products/" + id)
    setProduct(response.data);
  }

  //delete product
  const deleteProduct = async () =>{
    //api hit to delete
    const response = await axios.delete("https://652fbacf6c756603295d8ee6.mockapi.io/products/" + id);
    if(response.status == 200){
      navigate("/");
    } else{
      alert("Something is wrong");
    }
  }


  useEffect(()=>{
fetchSingleProduct();
  },[])

  
  return (
    <div key={product.id} className="card">
      <img src={product.productImage} alt="Product Image" />
      <div className="product-name">{product.productName}</div>
      <div className="product-description">{product.productDescription}</div>
      <mark className="product-description">{product.productMaterial}</mark><br />
      <button onClick={deleteProduct}>Delete</button>
      <button onClick={()=>navigate(`/update-product/${product.id}`)}>Update</button>
    </div>
  ) 
}

export default SingleProduct