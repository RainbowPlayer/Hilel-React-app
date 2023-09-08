import './table.css'
import { BsFillPencilFill } from 'react-icons/bs';
import { BsArchiveFill } from 'react-icons/bs';
import React, { useState, useEffect } from 'react';
import { MOCK_API } from '../../constants/mockapi';


const Table = ({ handleOpenDel, isLoaded, setIsLoaded, handleOpenEdit }) => {
    const [products, setProducts] = useState([]);
    
    const productFetch = async () => {
        try {
            const response = await fetch(`${MOCK_API.productsTable}`);
            const data = await response.json();
            setProducts(data);
            
        } catch (error) {
            console.error('Error productFetch', error)
        }
    };

    useEffect(() => {
        if(!isLoaded) {
            productFetch()
            setIsLoaded(true);
        }
    }, [isLoaded]);
  
    return(
        <div className='container-table'>
            <span className='table-text'>
                Products
            </span>
            <table>
                <tbody>
                    <tr className='table-head'>
                        <th>ID</th>
                        <th>Category</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price (₴)</th>
                        <th></th>
                    </tr>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.category}</td>
                            <td>{product.name}</td>
                            <td>{product.quantity}</td>
                            <td>{product.price}</td>
                            <td className='icons'>
                                <BsFillPencilFill onClick={() => handleOpenEdit(product)} />
                                <BsArchiveFill onClick={() => handleOpenDel(product.id)} />
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;