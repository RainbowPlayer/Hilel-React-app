import Table from '../../components/Table/table';
import Button from '../../components/Button';
import './TableTable.css';
import logoWhite from '../../assets/rozetka-logo-white.svg'
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import PopupDel from '../../components/PopupDel/PopupDel';
import React, { useState } from 'react';



const TableTable = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);

    const handleOpenDel = (productId) => {
        setSelectedProductId(productId);
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const previewClick = () => {
        navigate(`/product-preview`)
    }

    

    return(
        <div className='container'>
            <PopupDel open={open} handleClose={handleClose} productId={selectedProductId}/>
            <img src={logoWhite} className="rozetka-logo-white" alt="logo-white" />
            <div className='table-block'>
                <Button onClick={previewClick} content={<div className='content-button-table'><IoPersonOutline /> <span>Preview</span></div>} buttonClass='table-button'/>
                <Table handleOpenDel={handleOpenDel} />
                <Button content={<div className='content-button-table'><AiOutlinePlus /> <span>Add product</span></div>} buttonClass='table-button'/>
            </div>
        </div>
    );
}

export default TableTable;