import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Container/Login';
import reportWebVitals from './reportWebVitals';
import TableTable from './Container/TableTable/TableTable';
import ProductPreview from './Container/ProductPreview/ProductPreview';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/*<Login />*/}
  {/*<TableTable />*/}
  <ProductPreview />
  </React.StrictMode>
);
