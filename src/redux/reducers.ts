import { combineReducers } from '@reduxjs/toolkit';
import usersSlice from './users/slice';

const reducer = combineReducers({
  Users: usersSlice,
});

export default reducer;
