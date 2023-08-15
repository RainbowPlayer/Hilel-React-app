import CardPreview from '../../components/CardPreview/CardPreview';
import './ProductPreview.css';
import logoWhite from '../../assets/rozetka-logo-white.svg'
import lenovo from '../../assets/Lenovo.png'

const ProductPreview = () => {
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
            id: 1,
            category: 'PC',
            name: 'Ноутбук Lenovo Y50-70 Aluminum Black',
            imgSrc: lenovo,
            price: 25000,
            count: 5,
            status: 'Готовий до відправки'
        },
        {
            id: 1,
            category: 'PC',
            name: 'Ноутбук Lenovo Y50-70 Aluminum Black',
            imgSrc: lenovo,
            price: 25000,
            count: 5,
            status: 'Готовий до відправки'
        },
    ];

    return(
        <div className='container'>
            <img src={logoWhite} className="rozetka-logo-white" alt="logo-white" />
            <div className='product-container'>
                {products.map(product => (
                    <CardPreview
                        key={product.id} 
                        imgSrc={product.imgSrc} 
                        name={product.name}
                        price={product.price}
                        count={product.count}
                        status={product.status}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductPreview;
