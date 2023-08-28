import CardPreview from '../../components/CardPreview/CardPreview';
import './ProductPreview.css';
import logoWhite from '../../assets/rozetka-logo-white.svg';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';


const ProductPreview = () => {
    const navigate = useNavigate();
    const [products, setProduct] = useState([]);

    useEffect(() => { 
        const productFetch = async () => {
            try {
                const response = await fetch('https://64db692d593f57e435b0ec94.mockapi.io/ProductsPreview');
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error productFetch', error)
            }
        };

        productFetch();
    }, []);


    const handleClick = (product) => {
        navigate(`/product-preview/${product.id}`)
    }

    return(
        <div className='container'>
            <img src={logoWhite} className="rozetka-logo-white" alt="logo-white" />
            <div className='product-container'>
                {products.map(product => (
                    <CardPreview onClick={() => handleClick(product)} key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default ProductPreview;
