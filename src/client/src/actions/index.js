import * as types from './types';
import history from '../history';

export const fetchUsers = () => async (dispatch, getState, {defaultAPI}) => {
  const response = await defaultAPI.get(`/users`);

  dispatch({
    type: types.FETCH_USERS,
    payload: response.data
  });
}

export const createUser = data => async (dispatch , getState, {defaultAPI}) => {
  const response = await defaultAPI.post(`/users`, data);

  dispatch({
    type: types.CREATE_USER,
    payload: response.data
  });
  history.push('/');
}