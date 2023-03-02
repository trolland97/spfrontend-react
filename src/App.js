import React from "react";
import { useState, useEffect } from 'react';
import './App.css';
import './css/Header.css';
import './css/Navbar.css';
import './css/Slideshow.css';
import './css/Company.css';
import './css/Fixedimg.css';
import './css/Distribution.css';
import './css/About.css';
import './css/Brands.css';
import './css/Footer.css';
import './css/CardSlider.css';
import './css/Popup.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Slideshow from './components/Slideshow';
import Company from './components/Company';
import Fixedimg from './components/Fixedimg';
import Distribution from './components/Distribution';
import About from './components/About';
import Brands from './components/Brands';
import Footer from './components/Footer';
import CardSlider from './components/CardSlider';
import Popup from './components/Popup';

import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';

function App() {

  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 1000);
  }, []);

  return (
    <>
      <Router>
        <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
          <span className="welcome">ÜDVÖZLÜNK / DOBRODOŠLI / WELCOME</span>
        </Popup>
        <Header />
        <Navbar />
        <Slideshow />
        <Company />
        <Fixedimg />
        <Distribution />
        <About />
        <CardSlider />
        <Brands />
        <Footer />
        <Switch>
          <Route path='/' exact />
        </Switch>
      </Router>
    </>

  );
}

export default App;
