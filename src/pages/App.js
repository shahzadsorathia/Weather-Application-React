import React from 'react';
import { Link, Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import "../App.css";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Switch, Route } from 'react-router-dom';
import Weather from './Weather';

/* 
  =========================================
                REACT ROUTER
  =========================================

  • LEARNING OBJECTIVES •
  -----------------------
  1.) Use React Router to define client-side <Route> Components
  2.) Render "page" components using React Router
  3.) Create hyperlinks using <Link>
  4.) Access URL Parameters
  5.) Make our application feel more like a website

     • DOCUMENTATION •
  -----------------------
  Link: https://reactrouter.com/web/guides/quick-start

         • SETUP •
  -----------------------
  1.) npx create-react-app react-router
  2.) cd react-router
  3.) npm start
  4.) npm install react-router-dom

*/
function App() {
  return (
    <div id="app">
      <NavBar />
      <Switch>
        
        <Route path="/Contact">
          <Contact />
        </Route>
       
        <Route path="/Weather"> 
          <Weather />
        </Route>
        
        <Route path="/Home">
          <Home />
        </Route>
      
      </Switch>
      <Footer />
    </div>
  );
}

export default App;