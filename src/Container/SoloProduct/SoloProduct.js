import './SoloProduct.css';
import { useParams } from 'react-router-dom';

const SoloProduct = (product) => {
    return(
        <div>
            {product.id}
        </div>
    )
};

export default SoloProduct;