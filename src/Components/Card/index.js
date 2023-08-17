import { useState } from 'react';
import './style.css'
import Input from '../Input';
import Button from '../Button';

const Card = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (event) => {
        if(event.target.name === 'Login') {
            setLogin(event.target.value);
        }

        if(event.target.name === 'Password'){
            setPassword(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        console.log(login, password);
        event.preventDefault();
    }

    return(
        <form className='card-block' onSubmit={handleSubmit}>
                <Input label="Login" onChange={handleChange} value={login}/>
                <Input label="Password" shouldHide onChange={handleChange} value={password}/>
                <Button content="Login" buttonClass='login-button'/>
        </form>
    );
}

export default Card;