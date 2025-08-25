import type { IUser } from '../../../types/users.ts';
import { IUsersItem } from '../types';
import { DEFAULT_USERS_RESULTS } from './constants.ts';

export const getItem = (_data: IUser[], index: number): IUsersItem => {
  return {
    email: _data[index].email,
    phone: _data[index].phone,
    id: _data[index].login.uuid,
    img: _data[index].picture.thumbnail,
    name: `${_data[index].name.first} ${_data[index].name.last}`,
  };
};

export const getItemCount = (_data: IUser[]) => DEFAULT_USERS_RESULTS;

export const makeEntities = (_data: IUser[]) => {
  return _data.reduce((acc, item) => {
    acc[item.email] = item;
    return acc;
  }, {} as Record<string, IUser>);
};
