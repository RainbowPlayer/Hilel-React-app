import Table from '../../components/Table/table';
import Button from '../../components/Button';
import './TableTable.css';
import logoWhite from '../../assets/rozetka-logo-white.svg'
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


const TableTable = () => {
    const navigate = useNavigate();

    const previewClick = () => {
        navigate(`/product-preview`)
    }

    return(
        <div className='container'>
            <img src={logoWhite} className="rozetka-logo-white" alt="logo-white" />
            <div className='table-block'>
                <Button onClick={previewClick} content={<div className='content-button-table'><IoPersonOutline /> <span>Preview</span></div>} buttonClass='table-button'/>
                <Table />
                <Button content={<div className='content-button-table'><AiOutlinePlus /> <span>Add product</span></div>} buttonClass='table-button'/>
            </div>
        </div>
    );
}

export default TableTable;