import CardPreview from '../../components/CardPreview/CardPreview';
import './ProductPreview.css';
import logoWhite from '../../assets/rozetka-logo-white.svg';
import { useNavigate } from "react-router-dom";
import lenovo from '../../assets/Lenovo.png';


const ProductPreview = () => {
    const navigate = useNavigate();

    const products = [
        {
            id: 1,
            category: 'PC',
            name: 'Ноутбук Lenovo Y50-70 Aluminum Black',
            imgSrc: lenovo,
            price: 25000,
            count: 5,
            status: 'Готовий до відправки'
        },
        {
            id: 2,
            category: 'PC',
            name: 'Ноутбук Lenovo Y50-70 Aluminum Black',
            imgSrc: lenovo,
            price: 25000,
            count: 5,
            status: 'Готовий до відправки'
        },
        {
            id: 3,
            category: 'PC',
            name: 'Ноутбук Lenovo Y50-70 Aluminum Black',
            imgSrc: lenovo,
            price: 25000,
            count: 5,
            status: 'Готовий до відправки'
        },
    ];

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
