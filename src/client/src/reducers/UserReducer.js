import _ from 'lodash';
import {CREATE_USER, FETCH_USERS} from '../actions/types';

const UserReducer = (state = {}, action) => {
  switch (action.type){
    case FETCH_USERS:
      return {..._.mapKeys(action.payload, 'id')};
    // case FETCH_DOMAIN:
    //   return {...state, [action.payload.id]: action.payload};
    case CREATE_USER:
      return {...state, [action.payload.id]: action.payload};
    // case DELETE_DOMAIN:
    //   return _.omit(state, action.payload);
    default:
      return state;
  }
}

export default UserReducer;
