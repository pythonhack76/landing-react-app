import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./pages/About";
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      
        <Route index element={<App />} />
        <Route path="about" element={<About />} />
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

