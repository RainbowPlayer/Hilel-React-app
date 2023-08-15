import './CardPreview.css';
import { BsCart4 } from 'react-icons/bs'

const CardPreview = ({ imgSrc, name, price, count, status }) => {
    return(
        <div className='card-preview'>
            <div className='card-content'>
                <img src={imgSrc} className="productImg" alt="Lenovo" />
                <span className='product-text'>
                    {name}
                </span>
                <div className='price-count'>
                    <span className='price'>
                        {price}
                    </span>
                    <span className='count'>
                        Кількість: {count}
                    </span>
                </div>
                <div className='product-status'>
                    <div className='icon-status-product'>
                        <BsCart4 />
                    </div>
                    <span className='status-text'>
                        {status}
                    </span>
                </div>
            </div>
        </div>
    )
}


export default CardPreview;