import http from '../../http';
import { UserActionType, UsersAction } from '../types/users';
import { Dispatch } from 'redux';

export  const  getUsers = () => {
  return async (dispatch: Dispatch<UsersAction>) => {
    const response = await http.get('users');
    dispatch({type: UserActionType.GET_USERS, payload: response.data})
  }
}