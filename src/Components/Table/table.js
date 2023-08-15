import './table.css'
import { BsFillPencilFill } from 'react-icons/bs';
import { BsArchiveFill } from 'react-icons/bs';
import React, { useState, useEffect } from 'react';

const Table = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => { 
        const productFetch = async () => {
            try {
                const response = await fetch('https://64db692d593f57e435b0ec94.mockapi.io/Products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error productFetch', error)
            }
        };

        productFetch();
    }, []);

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
                            <td className='icons'><BsFillPencilFill /><BsArchiveFill /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;