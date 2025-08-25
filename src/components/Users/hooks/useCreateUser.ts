import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { usersReducers } from '../../../redux/users/slice';
import type { IUsersNavigationConfigs } from '../../../types/navigationStacks.ts';
import { defaultUser } from '../../../utils';
import type { IUserCreateForm } from '../types';

const { addNewUser } = usersReducers;

export const useCreateUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigation<{
    navigate: (
      routeName: 'Users',
      { hideRequest }: IUsersNavigationConfigs,
    ) => void;
  }>();

  return async (createUserData: IUserCreateForm) => {
    const newUser = {
      ...defaultUser,
      email: createUserData.email,
      phone: createUserData.phone.toString(),
      name: { ...defaultUser.name, first: createUserData.name },
    };

    dispatch(addNewUser(newUser));
    navigate.navigate('Users', { hideRequest: true });
  };
};
