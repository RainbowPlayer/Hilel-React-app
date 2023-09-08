import CardPreview from '../../components/CardPreview/CardPreview';
import './ProductPreview.css';
import logoWhite from '../../assets/rozetka-logo-white.svg';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { MOCK_API } from '../../constants/mockapi';
import { ROUTING } from '../../constants/routes';


const ProductPreview = () => {
    const navigate = useNavigate();
    const [products, setProduct] = useState([]);

    const productFetch = async () => {
        try {
            const response = await fetch(`${MOCK_API}`);
            const data = await response.json();
            setProduct(data);
        } catch (error) {
            console.error('Error productFetch', error)
        }
    };

    useEffect(() => { 
        productFetch();
    }, []);


    const handleClick = (product) => {
        navigate(`${ROUTING.productPreview}/${product.id}`)
    };

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
