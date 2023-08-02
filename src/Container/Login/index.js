import './style.css'
import Card from '../../Components/Card'
import logo from '../../Assets/rozetka-logo.svg'

const Login = () => {
    return(
        <div className='main'>
            <img src={logo} className="rozetka-logo" alt="logo" />
            <Card />
        </div>
    );
}

export default Login;