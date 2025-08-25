import type { Draft, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { IUser } from '../../types/users.ts';
import type { IInitialState } from './types.ts';

const initialState: IInitialState = {
  users: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state: Draft<IInitialState>, action: PayloadAction<IUser[]>) {
      state.users = action.payload;
    },
  },
});

export const usersReducers = {
  ...usersSlice.actions,
};

export default usersSlice.reducer;
