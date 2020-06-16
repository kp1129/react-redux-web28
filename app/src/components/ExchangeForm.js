import React, { useState } from "react";
import { connect } from "react-redux";
import { exchangeRateLoading } from "../actions/exchangeActions";
import axios from 'axios';

const ExchangeForm = (props) => {
  //const [option, setOption] = useState("");
  const [convertTo, setConvertTo] = useState("");
  const [convertFrom, setConvertFrom] = useState("USD");

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = { convertTo, convertFrom }
    props.exchangeRateLoading(values);
    // axios.get(`https://api.exchangeratesapi.io/latest?base=${convertFrom}&symbols=${convertTo}`)
    // .then(res => console.log('data from api', res))
    // .catch(err => console.log('error', err))
  };

  return (
    <form onSubmit={handleSubmit}>
      <select
        onChange={(e) => setConvertTo(e.target.value)}
        id="currencies"
        name="currencies"
      >
        <option value="Select currency" selected disabled>
          Select currency
        </option>
        <option value="CAD">CAD</option>
        <option value="HKD">HKD</option>
        <option value="ISK">ISK</option>
        <option value="PHP">PHP</option>
        <option value="DKK">DKK</option>
        <option value="HUF">HUF</option>
        <option value="CZK">CZK</option>
        <option value="GBP">GBP</option>
        <option value="RON">RON</option>
        <option value="SEK">SEK</option>
        <option value="IDR">IDR</option>
        <option value="INR">INR</option>
        <option value="BRL">BRL</option>
        <option value="RUB">RUB</option>
        <option value="HRK">HRK</option>
        <option value="JPY">JPY</option>
        <option value="THB">THB</option>
        <option value="CHF">CHF</option>
        <option value="EUR">EUR</option>
        <option value="MYR">MYR</option>
        <option value="BGN">BGN</option>
        <option value="TRY">TRY</option>
        <option value="CNY">CNY</option>
        <option value="NOK">NOK</option>
        <option value="NZD">NZD</option>
        <option value="ZAR">ZAR</option>
        <option value="USD">USD</option>
        <option value="MXN">MXN</option>
        <option value="SGD">SGD</option>
        <option value="AUD">AUD</option>
        <option value="ILS">ILS</option>
        <option value="KRW">KRW</option>
        <option value="PLN">PLN</option>
      </select>
      <button type="submit">Get Exchange Rate</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    display: state.display,
    currency: state.currency,
  };
};

export default connect(mapStateToProps, { exchangeRateLoading })(ExchangeForm);
