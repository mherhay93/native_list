import type { Draft, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { IUser } from '../../types/users.ts';
import type { IInitialState } from './types.ts';

const initialState: IInitialState = {
  users: [],
  usersEntities: {},
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state: Draft<IInitialState>, action: PayloadAction<IUser[]>) {
      state.users = action.payload;
    },
    setUsersEntities(
      state: Draft<IInitialState>,
      action: PayloadAction<Record<string, IUser>>,
    ) {
      state.usersEntities = action.payload;
    },
    setUserInUsers(state: Draft<IInitialState>, action: PayloadAction<IUser>) {
      const targetUser = action.payload;
      const index = state.users.findIndex(
        userInState => userInState.email === targetUser.email,
      );
      if (index > -1) {
        state.users[index] = targetUser;
        state.usersEntities[targetUser.email] = targetUser;
      }
    },
  },
});

export const usersReducers = {
  ...usersSlice.actions,
};

export default usersSlice.reducer;
