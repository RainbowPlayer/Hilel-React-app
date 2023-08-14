import './style.css'
import Input from '../Input';
import Button from '../Button';

const Card = (props) => {
    return(
        <div className='card-block'>
            {props.profile}
                <Input shouldHide={false} />
                <Input shouldHide={true} />
                <Button content="Login" buttonClass='login-button'/>
        </div>
    );
}

export default Card;