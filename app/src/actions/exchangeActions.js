import axios from 'axios';
//action types as strings
export const EXCHANGE_RATE_LOADING = "EXCHANGE_RATE_LOADING";
export const EXCHANGE_RATE_SUCCESS = "EXCHANGE_RATE_SUCCESS";
export const EXCHANGE_RATE_ERROR = "EXCHANGE_RATE_ERROR";

// action creators
export const exchangeRateLoading = (value) => (dispatch) => {

    dispatch({type: EXCHANGE_RATE_LOADING, payload: value});
    axios.get(`https://api.exchangeratesapi.io/latest?base=USD&symbols=${value}`)
    .then(res => dispatch({type: EXCHANGE_RATE_SUCCESS, payload: res.data.rates[value]}))
    .catch(err => dispatch({type: EXCHANGE_RATE_ERROR}))
}
