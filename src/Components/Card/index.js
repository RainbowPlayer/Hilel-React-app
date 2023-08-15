import './style.css'
import Input from '../Input';
import Button from '../Button';

const Card = (props) => {
    return(
        <div className='card-block'>
            {props.profile}
                <Input />
                <Input shouldHide />
                <Button content="Login" buttonClass='login-button'/>
        </div>
    );
}

export default Card;