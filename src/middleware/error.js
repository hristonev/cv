// Handle API error responses.
// Dispatch new action creator.
import { API_ERROR } from '../actions/types';

const errorMiddleware = store => next => action => {
  if (action && action.payload instanceof Error) {
    store.dispatch({
      type: API_ERROR,
      payload: action.payload.response
    })
  } else {
    next(action);
  }
};

export default errorMiddleware;
