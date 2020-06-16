import React from "react";
// import components
import ExchangeForm from "./components/ExchangeForm";
import ExchangeRate from "./components/ExchangeRate";
import Header from './components/Header';
// import css
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="App">
        <ExchangeForm />
        <ExchangeRate />
      </div>
    </div>
  );
}

export default App;
