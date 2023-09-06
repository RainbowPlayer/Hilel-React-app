import Table from '../../components/Table/table';
import Button from '../../components/Button';
import './TableTable.css';
import logoWhite from '../../assets/rozetka-logo-white.svg'
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import PopupDel from '../../components/PopupDel/PopupDel';
import React, { useState } from 'react';
import { MOCK_API } from '../../constants/mockapi';
import PopupEdit from '../../components/PopupEdit/popupEdit';


const TableTable = () => {
    const navigate = useNavigate();
    const [openDel, setOpenDel] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [modalTitle, setModalTitle] = useState('');

    const deleteProductFetch = async (productId) => {
        try {
          const response = await fetch(`${MOCK_API.productsTable}/${productId}`, {
            method: 'DELETE',
          });
          if (response.status === 200) {
            console.log('Product deleted successfully');
            setIsLoaded(false);
          } else {
            console.log('Failed to delete product');
          }
        } catch (error) {
          console.error('Erorr deleteProductFetch', error);
        }
    };

    const handleAddProduct = () => {
      setSelectedProduct(null);
      setModalTitle('Add product');
      setOpenEdit(true);
    };

    const handleOpenEdit = (product) => {
      setSelectedProduct(product);
      setModalTitle('Edit product');
      setOpenEdit(true);
    };

    const handleCloseEdit = () => {
      setSelectedProduct(null);
      setOpenEdit(false);
    };

    const handleOpenDel = (productId) => {
        setSelectedProductId(productId);
        setOpenDel(true);
    };
    
    const handleCloseDel = () => {
        setOpenDel(false);
    };

    const previewClick = () => {
        navigate(`/product-preview`)
    }

    return(
        <div className='container'>
            <PopupEdit handleCloseEdit={handleCloseEdit} openEdit={openEdit} product={selectedProduct} modalTitle={modalTitle} />
            <PopupDel openDel={openDel} handleCloseDel={handleCloseDel} productId={selectedProductId} deleteProductFetch={deleteProductFetch}/>
            <img src={logoWhite} className="rozetka-logo-white" alt="logo-white" />
            <div className='table-block'>
                <Button onClick={previewClick} content={<div className='content-button-table'><IoPersonOutline /> <span>Preview</span></div>} buttonClass='table-button'/>
                <Table handleOpenDel={handleOpenDel} isLoaded={isLoaded} setIsLoaded={setIsLoaded} handleOpenEdit={handleOpenEdit} />
                <Button onClick={handleAddProduct}  content={<div className='content-button-table'><AiOutlinePlus /> <span>Add product</span></div>} buttonClass='table-button'/>
            </div>
        </div>
    );
}

export default TableTable;