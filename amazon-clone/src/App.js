import React, { useEffect, useState } from "react";

// Importing files
import './App.css';
import Header from './Header.js';
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login.js";
import { useStateValue } from "./StateProvider";

//Importing React Router 
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
//Importing Firebase
import {auth} from './firebase'


function App() {
  const [{}, dispatch] = useStateValue();
  
  useEffect(() => {
    //Will only run once when the App componets loads

    auth.onAuthStateChanged(authUser => {
      console.log(`The user is >>> ${authUser}`)

      if (authUser) {
        //The user just logged in/ the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })//end dispatch
      } else {
        //The user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })//end dispatch
      }//endif
      
    })//end UseEffect


  }, [])//Put const in [] like email, basket to update everytime those fields change 
  
  return (
      //BEM convection
    <Router>
      <div className="App">

            <Switch>
            <Route path="/Login">
                  {/*****Login Page****/}
                  <Login />
                </Route>
              <Route path="/checkout">
                 {/*****Header****/}
                  <Header />       
                {/*****Checkout****/}
                  <Checkout />
                </Route>

                <Route path="/">
                  {/*****Header****/}
                    <Header />
                  
                  {/*****Home/Body****/}
                    <Home />
                </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
