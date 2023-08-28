import Login from './container/Login/index';
import TableTable from './container/TableTable/TableTable';
import ProductPreview from './container/ProductPreview/ProductPreview';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './privateRouter';
import SoloProduct from './container/SoloProduct/SoloProduct';
import { ROUTING } from './constants/routes';



const AppRouter = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path={ROUTING.login} element={<Login />} />

                <Route element={<PrivateRoute/>}>
                    <Route path={ROUTING.productTable} element={<TableTable />} />
                    <Route path={ROUTING.productPreview} element={<ProductPreview />} />
                    <Route path={ROUTING.soloProduct} element={<SoloProduct />}/>
                </Route>

                <Route path="*" element={<div>404 | Page not found</div>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;