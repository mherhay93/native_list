import { RootState } from '../store';

export const selectUsers = (state: RootState) => state.Users.users;
export const selectIsFetched = (state: RootState) => state.Users.UI.fetched;
export const selectUserByEmail = (email: string) => (state: RootState) => {
    return state.Users.usersEntities[email];
};
