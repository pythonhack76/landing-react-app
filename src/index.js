import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./pages/About";
import Services from './Services.module.css';
import Contact from './pages/Contact';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      
        <Route index element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

