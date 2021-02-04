import { API_ERROR } from '../actions/types';

const ErrorReducer = (state = [], action) => {
  switch (action.type){
    case API_ERROR:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default ErrorReducer;
