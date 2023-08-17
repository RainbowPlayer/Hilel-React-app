import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './container/Login';
import reportWebVitals from './reportWebVitals';
import TableTable from './container/TableTable/TableTable';
import ProductPreview from './container/ProductPreview/ProductPreview';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Login />
  {/*<TableTable />*/}
  {/*<ProductPreview />*/}
  </React.StrictMode>
);
