import type { Draft, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { IUser } from '../../types/users';
import { IInitialState, IUsersUI } from './types';

const initialState: IInitialState = {
  users: [],
  usersEntities: {},
  UI: {
    fetched: false,
  },
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
    addNewUser(state: Draft<IInitialState>, action: PayloadAction<IUser>) {
      const newUser = action.payload;
      state.users.unshift(newUser);
      state.usersEntities[newUser.email] = newUser;
    },
    setUI(state: Draft<IInitialState>, action: PayloadAction<IUsersUI>) {
      state.UI = action.payload;
    },
  },
});

export const usersReducers = {
  ...usersSlice.actions,
};

export default usersSlice.reducer;
