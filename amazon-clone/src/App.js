import React from "react";

// Importing files
import './App.css';
import Header from './Header.js';
import Home from "./Home";
import Checkout from "./Checkout";

//Importing React Router 
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
      //BEM convection
    <Router>
      <div className="App">
          {/*****Header****/}
            <Header />

            <Switch>
              <Route path="/checkout">
                {/*****Checkout****/}
                  <Checkout />
                </Route>

                <Route path="/">
                  {/*****Home/Body****/}
                  <Home />
                </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
