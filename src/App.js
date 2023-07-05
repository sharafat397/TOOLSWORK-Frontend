import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';


import './App.css';
import AddService from './compnents/AddService/AddService';
import Bannar from './compnents/Bannar/Bannar';
import Contact from './compnents/Contact/Contact';
import HomePage from './compnents/HomePage/HomePage';

import Navigation from './compnents/Navigation/Navigation';
import Services from './compnents/Services/Services';
import UpdateService from './compnents/UpdateService/UpdateService';


function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Routes>
      <Route path="/" element = {<HomePage/>}/>
      <Route path="/bannar" element = {<Bannar/>}/>
      <Route path="/contact" element = {<Contact/>}/>
      <Route path="/services" element = {<Services/>}/>
      <Route path="/addService" element = {<AddService/>}/>
      <Route path="/updateservice/:serviceId" element = {<UpdateService/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
