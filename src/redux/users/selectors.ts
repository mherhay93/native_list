import { RootState } from '../store';

export const selectUsers = (state: RootState) => state.Users.users;
export const selectUserByEmail = (email: string) => (state: RootState) => {
    return state.Users.usersEntities[email];
};
