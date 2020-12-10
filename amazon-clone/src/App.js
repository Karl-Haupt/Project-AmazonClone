import React from "react";
import './App.css';
import Header from './Header.js'
import Home from "./Home";

function App() {
  return (
    //BEM convection
    <div className="App">
        {/*****Header****/}
        <Header />

        {/*****Home/Body****/}
        <Home />
    </div>
  );
}

export default App;
