import './style.css'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from 'react';

const Input = ({ shouldHide }) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return(
        <label className='lable-form'>
            {shouldHide ? <input className='input' placeholder='Password' type={showPassword ? "text" : "password"} /> : <input className='input' placeholder='User name' type="text" />}
            {shouldHide ? (showPassword ? <AiFillEyeInvisible className='eye' onClick={toggleShowPassword} /> : <AiFillEye className='eye' onClick={toggleShowPassword} />) : null}
        </label>
    );
}

export default Input;