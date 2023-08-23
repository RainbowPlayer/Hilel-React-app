import './style.css'

const Button = ({ content, buttonClass, onClick }) => {
    return(
        <lable>
            <button onClick={onClick} className={buttonClass}>
                {content}
            </button>
        </lable>
    )
}

export default Button;