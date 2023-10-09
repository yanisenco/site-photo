import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './pages/aboutUs';
import Contact from './pages/contact';
import Homepage from './pages/homepage';
import OurWork from './pages/ourWork';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
        <Fragment>
        <Homepage />
        <OurWork />
        <AboutUs />
        {/* <Contact /> */}
        </Fragment>
        } />
      </Routes>
    </BrowserRouter>

  );
};

export default App;