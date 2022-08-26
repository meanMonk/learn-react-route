import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { deleteInvoiceById, getInvoiceById } from '../services/invoice';

const InvoicePage = () => {
  
  let navigate = useNavigate();
  let location = useLocation();
  const params = useParams();
  
  const invDetails = getInvoiceById(parseInt(params.invoiceId, 10));
  
  
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    gap: '5px',
    background: 'tomato',
    borderRadius: '10px',
    padding: '10px',
    boxShadow: '1 1 0 rgba(0,0,0, 0.5)'
  }}>
    <h2># {invDetails.number}</h2>
    <h4>{invDetails.name}</h4>
    <h3>{invDetails.amount} | {invDetails.due}</h3>
    
    <button onClick={() => {
      deleteInvoiceById(invDetails.number)
      navigate("/invoices"+location.search)
    }}>Remove</button>
  </div>
}

export default InvoicePage;
