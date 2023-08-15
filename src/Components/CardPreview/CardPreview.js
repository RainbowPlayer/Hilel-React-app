import './CardPreview.css';
import lenovo from '../../assets/Lenovo.png'
import { BsCart4 } from 'react-icons/bs'

const CardPreview = () => {
    return(
        <div className='card-preview'>
            <div className='card-content'>
                <img src={lenovo} className="productImg" alt="Lenovo" />
                <span className='product-text'>
                    Ноутбук Lenovo Y50-70 Aluminum Black
                </span>
                <div className='price-count'>
                    <span className='price'>
                        25000
                    </span>
                    <span className='count'>
                        Кількість: 5
                    </span>
                </div>
                <div className='product-status'>
                    <div className='icon-status-product'>
                        <BsCart4 />
                    </div>
                    <span className='status-text'>
                        Готовий до відправки
                    </span>
                </div>
            </div>
        </div>
    )
}


export default CardPreview;