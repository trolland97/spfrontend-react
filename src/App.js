import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Slideshow from './components/Slideshow';
import Company from './components/Company';
import Fixedimg from './components/Fixedimg';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Navbar />
        <Slideshow />
        <Company />
        <Fixedimg />
        <Switch>
          <Route path='/' exact />
        </Switch>
      </Router>
    </>

  );
}

export default App;
