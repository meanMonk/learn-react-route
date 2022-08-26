import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BridgePage from './routes/Bridge';
import NftPage from './routes/NFT';
import DaoPage from './routes/Dao';
import InvoicesPage from './routes/InvoicesPage';
import InvoicePage from './routes/Invoice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="/Bridge" element={<BridgePage />} />
          <Route path="/DAO" element={<DaoPage />} />
          <Route path="/NFT" element={<NftPage />} />
          <Route path="/Invoices" element={<InvoicesPage />} >
            
            <Route index element={<main style={{padding: '1rem'}}> <h5>Please select an invoice!</h5></main>} />
            <Route path=":invoiceId" element={<InvoicePage />} />
          </Route>
          <Route path="*" element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
