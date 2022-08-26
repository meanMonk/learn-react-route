import './App.css';
import { Link, Outlet } from 'react-router-dom';
import React from 'react'


function App() {

  return (
    <div className="App">
      <h1>Route Testing APP</h1>
      <nav>
        <Link to="/Bridge">Bridge</Link> {' | '}
        <Link to="/NFT">NFT</Link> {' | '}
        <Link to="/DAO">DAO</Link> {' | '}
        <Link to="/Invoices">Invoices</Link> {' | '}
      </nav>
      <div style={{
        padding: '1rem',
        margin: 'auto',
      }}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
