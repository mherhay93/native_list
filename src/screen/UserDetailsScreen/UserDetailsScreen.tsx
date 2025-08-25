import type { IUserDetailsProps } from '../../components/Users/types';
import UserDetails from '../../components/Users/UserDetails/UserDetails.tsx';

const UserDetailsScreen = ({ route }: IUserDetailsProps) => (
  <UserDetails route={route} />
);

export default UserDetailsScreen;
