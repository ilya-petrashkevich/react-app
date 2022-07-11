import { usersReducer } from './usersReducer';
import  {combineReducers} from 'redux';

export const rootReducer = combineReducers({
  users: usersReducer,
})
export  type RootState = ReturnType<typeof rootReducer>