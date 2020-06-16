import {
  EXCHANGE_RATE_LOADING,
  EXCHANGE_RATE_SUCCESS,
  EXCHANGE_RATE_ERROR
} from "../actions/exchangeActions";
// initial state
export const initialState = {
  display: "",
  currency: null,
  currencyFrom: null
};

//reducer function
export const exchangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case EXCHANGE_RATE_LOADING:
      return {
        ...state,
        display: "Loading...",
        currencyFrom: action.payload.convertFrom,
        currency: action.payload.convertTo
      };
    case EXCHANGE_RATE_SUCCESS:
      console.log('from the reducer', action.payload)
      return {
        ...state,
        display: `${action.payload.toFixed(2)} ${state.currency} to 1 ${state.currencyFrom}`
      };
    case EXCHANGE_RATE_ERROR:
        return {
            ...state,
            display: "Oops, something went wrong!"
        }
    default:
      return state;
  }
};
