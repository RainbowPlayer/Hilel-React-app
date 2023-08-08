import './table.css'
import { BsFillPencilFill } from 'react-icons/bs';
import { BsArchiveFill } from 'react-icons/bs';

const Table = () => {
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
                    <tr>
                        <td>0</td>
                        <td>PC</td>
                        <td>Lenovo Y50-70</td>
                        <td>5</td>
                        <td>25,000.00</td>
                        <td className='icons'><BsFillPencilFill /><BsArchiveFill /></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Clothes</td>
                        <td>Nike M Nk Df Acd21</td>
                        <td>22</td>
                        <td>4,000.00</td>
                        <td className='icons'><BsFillPencilFill /><BsArchiveFill /></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Plumbing</td>
                        <td>CERSANIT MITO 17</td>
                        <td>1337</td>
                        <td>5,000.00</td>
                        <td className='icons'><BsFillPencilFill /><BsArchiveFill /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Table;