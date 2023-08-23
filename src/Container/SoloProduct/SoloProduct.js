import './SoloProduct.css';
import { useParams } from 'react-router-dom';

const SoloProduct = () => {
    let { productId } = useParams();

    return(
        <div>
            <span>
                Hello {productId}
            </span>
        </div>
    )
};

export default SoloProduct;