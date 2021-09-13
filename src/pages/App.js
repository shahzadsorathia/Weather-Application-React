import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import "../App.css";
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import Weather from './Weather';
import Calculator from './Calculator';

function App() {
  return (
    <div id="app">

      <NavBar />

      <Switch>
        <Route path="/Calculator">
          <Calculator />
        </Route>

        <Route path="/Weather">
          <Weather />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;