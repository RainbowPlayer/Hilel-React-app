import './style.css'

const Button = ({ content, buttonClass }) => {
    return(
        <lable>
            <button className={buttonClass}>
                {content}
            </button>
        </lable>
    )
}

export default Button;