import { useEffect } from 'react';
import { View, VirtualizedList } from 'react-native';
import { useSelector } from 'react-redux';
import { selectUsers } from '../../redux/users/selectors.ts';
import { UIText } from '../ui';
import { getItem, getItemCount } from './helpers';
import { INITIAL_NUMBER_TO_RENDER } from './helpers/constants.ts';
import { useUsersQuery } from './hooks/useUsersQuery.ts';
import UsersItem from './UsersItem/UsersItem.tsx';

const Users = () => {
  const users = useSelector(selectUsers);
  const { fetchData, loading } = useUsersQuery();

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <UIText>Loading...</UIText>;
  }

  if (!users[0]) {
    return <UIText>No Data</UIText>;
  }

  return (
    <View>
      <VirtualizedList
        data={users}
        getItem={getItem}
        getItemCount={getItemCount}
        keyExtractor={item => item.id}
        initialNumToRender={INITIAL_NUMBER_TO_RENDER}
        renderItem={({ item }) => (
          <UsersItem
            img={item.img}
            name={item.name}
            email={item.email}
            phone={item.phone}
          />
        )}
      />
    </View>
  );
};

export default Users;
