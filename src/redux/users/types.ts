import type { IUser } from '../../types/users';

export interface IInitialState {
  users: IUser[];
  usersEntities: Record<string, IUser>;
  UI: IUsersUI;
}

export interface IUsersUI {
  fetched: boolean;
}
