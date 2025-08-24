import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { IInitialState, IUsers } from './types.ts';

const initialState: IInitialState = {
  users: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(
      state: Draft<IInitialState>,
      action: PayloadAction<IUsers[]>,
    ) {
      state.users = action.payload;
    },
  },
});

export const usersReducers = {
  ...usersSlice.actions,
};

export default usersSlice.reducer;
