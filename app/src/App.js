import React from "react";
import ExchangeForm from "./components/ExchangeForm";
import ExchangeRate from "./components/ExchangeRate";
import Title from "./components/Title";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Title />
      <ExchangeRate />
      <ExchangeForm />
    </div>
  );
}

export default App;
