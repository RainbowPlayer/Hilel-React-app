import Button from '../../Components/Button';
import Table from '../../Components/Table/table';
import './TableTable.css';
import logoWhite from '../../Assets/rozetka-logo-white.svg'
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";


const TableTable = (props) => {
    return(
        <div className='container'>
            <img src={logoWhite} className="rozetka-logo-white" alt="logo-white" />
            <div className='table-block'>
                <Button content={<div className='content-button-table'><IoPersonOutline /> <span>Add product</span></div>} buttonClass='table-button'/>
                <Table />
                <Button content={<div className='content-button-table'><AiOutlinePlus /> <span>Add product</span></div>} buttonClass='table-button'/>
            </div>
        </div>
    );
}

export default TableTable;