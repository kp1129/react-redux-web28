import axios from 'axios';
//action types as strings
export const EXCHANGE_RATE_LOADING = "EXCHANGE_RATE_LOADING";
export const EXCHANGE_RATE_SUCCESS = "EXCHANGE_RATE_SUCCESS";
export const EXCHANGE_RATE_ERROR = "EXCHANGE_RATE_ERROR";

// action creators
export const exchangeRateLoading = (values) => (dispatch) => {

    dispatch({type: EXCHANGE_RATE_LOADING, payload: values });
    axios.get(`https://api.exchangeratesapi.io/latest?base=${values.convertFrom}&symbols=${values.convertTo}`)
    .then(res => dispatch({type: EXCHANGE_RATE_SUCCESS, payload: res.data.rates[values.convertTo]}))
    .catch(err => dispatch({type: EXCHANGE_RATE_ERROR}))
}
