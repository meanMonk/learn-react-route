import React from 'react'
import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from "../services/invoice";

const InvoicesPage = () => {
  let invoices = getInvoices();
  const [ searchParams, setSearchParams ] = useSearchParams()
  
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <input
          value={searchParams.get('filter') || ''}
          onChange={(e) => {
            let filter = e.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({})
            }
          }}
          
          type="text" />
        {invoices
          .filter((invoice) => {
            let f = searchParams.get('filter');
            if (!f) return true;
            let name = invoice.name.toLowerCase();
            return name.startsWith(f.toLowerCase());
          })
          .map((invoice) => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? 'red' : 'blue'
              }
            }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}

export default InvoicesPage
