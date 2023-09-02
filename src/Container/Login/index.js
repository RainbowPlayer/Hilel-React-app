import './style.css'
import Card from '../../components/Card'
import logo from '../../assets/rozetka-logo.svg'

const Login = () => {
    return(
        <div className='main'>
            <img src={logo} className="rozetka-logo" alt="logo" />
            <Card />
        </div>
    );
}

export default Login;