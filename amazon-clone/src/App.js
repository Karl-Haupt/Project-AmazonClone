import React from "react";
import './App.css';
import Header from './Header.js'

function App() {
  return (
    //BEM convection
    <div className="App">
      <h1>Hello Clever programmers </h1>

        {/*****Header****/}
        <Header />


        {/*****Home/Body****/}
    </div>
  );
}

export default App;
