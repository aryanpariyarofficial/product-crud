import React, { useEffect, useState } from 'react'
import "./Home.css";
import ricecooker from '../../assets/ricecooker.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Home = () => {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const fetchProduct = async () => {
        const response = await axios.get("https://652fbacf6c756603295d8ee6.mockapi.io/products");
        setProducts(response.data)
    }
    useEffect(() => {
        fetchProduct();
    }, []);
    return (
        <div className="flex">
            {
                products.map((product) => {
                    return (
                        
                            <div key={product.id} className="card">
                                <img src={product.productImage} alt="Product Image" />
                                <div className="product-name">{product.productName}</div>
                                <div className="product-description">
                                {product.productDescription}
                                </div>
                                <div className="product-description">
                                {product.productMaterial}
                                </div>
                                <a onClick={()=>navigate(`/single-product/${product.id}`)}>See More</a>
                                
                            </div>
                       
                    )
                })
            }
             </div>


    )
}

export default Home