import './App.css';
import React from 'react';
import Navbar from './component/pages/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './component/pages/Home/Home';
import Tutorial from './component/pages/Tutorial/Tutorial';
import DashBoard from './component/pages/Dashboard/Dashboard';
import Plot from './component/pages/Plot/Plot';
import Contact from './component/pages/Contact/Contact';


const App = () => {
  return (
    <>
    <Router>
      <Navbar />
        <Switch>
          <Route path='/' Component={Home} exact> <Home /> </Route>
          <Route path='/tutorial' Component={Tutorial} exact> <Tutorial /> </Route>
          <Route path='/dashboard' Component={DashBoard} exact> <DashBoard /> </Route>
          <Route path='/plot' Component={Plot} exact> <Plot /> </Route>
          <Route path='/contact' Component={Contact} exact> <Contact /> </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;
