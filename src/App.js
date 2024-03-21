import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './component/pages/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './component/pages/Home/home';
import Tutorial from './component/pages/Tutorial/Tutorial';
import DashBoard from './component/pages/Dashboard/Dashboard';


const App = () => {
  return (
    <>
    <Router>
      <Navbar />
        <Switch>
          <Route path='/' Component={Home} exact> <Home /> </Route>
          <Route path='/tutorial' Component={Tutorial} exact> <Tutorial /> </Route>
          <Route path='/dashboard' Component={DashBoard} exact> <DashBoard /> </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;
