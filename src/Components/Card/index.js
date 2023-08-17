import { useState } from 'react';
import './style.css'
import Input from '../Input';
import Button from '../Button';

const Card = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginEmpty, setIsLoginEmpty] = useState(false);
    const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);   

    const handleChange = (event) => {
        if(event.target.name === 'Login') {
            setLogin(event.target.value);
            setIsLoginEmpty(false);
        }

        if(event.target.name === 'Password'){
            setPassword(event.target.value);
            setIsPasswordEmpty(false);
        }
    }

    const handleSubmit = async (event) => {
        console.log(login, password);
        event.preventDefault();

        if(!login) {
            setIsLoginEmpty(true);
        }

        if(!password) {
            setIsPasswordEmpty(true);
        }

        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('http://localhost:3007/users/authenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ login, password })
            });
    
            const data = await response.json();
    
            if (response.status === 200) {
                localStorage.setItem('token', data.token);
            } else {
                setError(data.message || "An error occurred");
            }
        } catch (err) {
            setError("Network error");
        } finally {
            setIsLoading(false);
        }

    }


    return(
        <form className='card-block' onSubmit={handleSubmit}>
            <div>
                <Input label="Login" onChange={handleChange} value={login}/>
                <span className={isLoginEmpty ? 'active' : 'non-active'}>Please enter the login</span>
            </div>
            <div>
                <Input label="Password" shouldHide onChange={handleChange} value={password}/>
                <span className={isPasswordEmpty ? 'active' : 'non-active'}>Please enter the password</span>
            </div>
                <Button content={isLoading ? "Loading..." : "Login"} buttonClass='login-button' disabled={isLoading}/>
        </form>
    );
}

export default Card;