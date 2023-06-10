import React from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './Navbar.jsx';
import App from './App.jsx';
import Footer from './Footer.jsx'; 
import './index.css';
import Reading from './Reading.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Reading />
    <Footer />
  </React.StrictMode>
);
