import './SoloProduct.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logoWhite from '../../assets/rozetka-logo-white.svg';
import { AiOutlineArrowLeft } from "react-icons/ai"

const SoloProduct = () => {
    let { productId } = useParams();
    const [selectedProduct, setSelectedProduct] = useState([]);
    const navigate = useNavigate();
    
    const soloProductFetch = async () => {
        try {
            const response = await fetch(`https://64db692d593f57e435b0ec94.mockapi.io/ProductsPreview/${productId}`);
            const data = await response.json();
            setSelectedProduct(data);
        } catch (error) {
            console.error('Error productFetch', error);
        }
    };

    useEffect(() => {
        soloProductFetch();
    }, [productId]);

    const handleClick = () => {
        navigate(-1)
    }

    return(
        <div className='solo-product-block'>
            <div className='solo-rozetka-block'>
                <img src={logoWhite} className="rozetka-logo-white-solo" alt="logo-white" />
            </div>
            <div className='solo-container'>
                <div className='solo-header-product'>
                    <AiOutlineArrowLeft className='arrow-solo' onClick={handleClick}/>
                    <span className='solo-product-name'>
                        {selectedProduct.name}
                    </span>
                </div>
                <div className='solo-body-block'>
                    <img src={selectedProduct.imgSrc} className="productImg-solo" alt={productId} />
                    <div className='solo-status-block'>
                        <span className='solo-status-order'>Є в наявності</span>
                        <span className='solo-price'>{selectedProduct.price}</span>
                        <span className='solo-count'>Кількість: {selectedProduct.count}</span>
                    </div>
                </div>
                <div className='solo-footer-block'>
                    <span className='solo-disription-name'>Опис {selectedProduct.name}</span>
                    <div className='solo-body-descriprion'>
                        <span>
                        {selectedProduct.discription}
                        </span>
                        <span>
                        {selectedProduct.discription}
                        </span>
                        <span>
                        {selectedProduct.discription}
                        </span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
};

export default SoloProduct;