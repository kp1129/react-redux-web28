import React from "react";
import ExchangeForm from "./components/ExchangeForm";
import ExchangeRate from "./components/ExchangeRate";
import Title from "./components/Title";
import Toggle from './components/Toggle';
import "./App.css";

function App() {

  
  return (
    <div className="wrapper">
      <Toggle />
    <div className="App">
      <Title />      
      <ExchangeForm />
      <ExchangeRate />
    </div>
    </div>
  );
}

export default App;
