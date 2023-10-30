import React, { useEffect, useState } from 'react'
import "./Home.css";
import ricecooker from '../../assets/ricecooker.jpg';
import axios from 'axios';
const Home = () => {
    const [products, setProducts] = useState([]);
    const fetchProduct = async () => {
        const response = await axios.get("https://652fbacf6c756603295d8ee6.mockapi.io/products");
        console.log(response);
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
                        
                            <div key={product.key} className="card">
                                <img src={product.productImage} alt="Product Image" />
                                <div className="product-name">{product.productName}</div>
                                <div className="product-description">
                                {product.productDescription}
                                </div>
                            </div>
                       
                    )
                })
            }
             </div>


    )
}

export default Home