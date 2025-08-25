import type { RouteProp } from '@react-navigation/native';
import type { TNavigationStacksParamList } from '../../../types/navigationStacks.ts';

export interface IUsersItemProps {
  img: string;
  name: string;
  phone: string;
  email: string;
}

export interface IUsersItem extends IUsersItemProps {
  id: string;
}

export type UserDetailsNavigationProps = RouteProp<
  TNavigationStacksParamList,
  'UserDetails'
>;

export interface IUserDetailsProps {
  route?: UserDetailsNavigationProps;
}
