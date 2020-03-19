import {
  EXCHANGE_RATE_LOADING,
  EXCHANGE_RATE_SUCCESS,
  EXCHANGE_RATE_ERROR
} from "../actions/exchangeActions";
// initial state
export const initialState = {
  display: "",
  currency: null
};

//reducer function
export const exchangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case EXCHANGE_RATE_LOADING:
      return {
        ...state,
        display: "Loading...",
        currency: action.payload
      };
    case EXCHANGE_RATE_SUCCESS:
      return {
        ...state,
        display: `${action.payload.toFixed(2)} ${state.currency} to 1 USD`
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
