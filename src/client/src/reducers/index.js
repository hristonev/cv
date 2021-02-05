import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ErrorReducer from './ErrorReducer';
import UserReducer from './UserReducer';

export default combineReducers({
  errors: ErrorReducer,
  form: formReducer,
  users: UserReducer,
});