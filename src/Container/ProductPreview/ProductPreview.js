import CardPreview from '../../components/CardPreview/CardPreview';
import './ProductPreview.css';
import logoWhite from '../../assets/rozetka-logo-white.svg'

const ProductPreview = () => {
    return(
        <div className='container'>
            <img src={logoWhite} className="rozetka-logo-white" alt="logo-white" />
            <div className='product-container'>
                <CardPreview />
                <CardPreview />
                <CardPreview />
                <CardPreview />
                <CardPreview />
                <CardPreview />
            </div>
        </div>
        
        
    )
}

export default ProductPreview;
