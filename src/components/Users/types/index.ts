import type { RouteProp } from '@react-navigation/native';

export interface IUsersItemProps {
  img: string;
  name: string;
  phone: string;
  email: string;
}

export interface IUsersItem extends IUsersItemProps {
  id: string;
}

type TUsersStackParamList = {
  UserDetails: { email: string };
};

export type TUserDetailsRouteProp = RouteProp<
  TUsersStackParamList,
  'UserDetails'
>;

export interface IUserCreateForm {
  name: string;
  phone: number;
  email: string;
}
