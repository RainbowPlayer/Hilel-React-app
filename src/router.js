import Login from './container/Login';
import TableTable from './container/TableTable/TableTable';
import ProductPreview from './container/ProductPreview/ProductPreview';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import PrivateRoute from './privateRouter';
import SoloProduct from './container/SoloProduct/SoloProduct';

const AppRouter = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />

                <Route element={<PrivateRoute/>}>
                    <Route path="/product-table" element={<TableTable />} />
                    <Route path="/product-preview" element={<ProductPreview />} />
                    <Route path="/product-preview:Id"/>
                </Route>

                <Route path="*" element={<div>404 | Page not found</div>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;