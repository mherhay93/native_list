import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { View, VirtualizedList } from 'react-native';
import { useSelector } from 'react-redux';
import { selectIsFetched, selectUsers } from '../../redux/users/selectors';
import { UIButton, UIText } from '../ui';
import { getItem, getItemCount } from './helpers';
import { INITIAL_NUMBER_TO_RENDER } from './helpers/constants';
import { useUsersQuery } from './hooks/useUsersQuery';
import { styles } from './Users.style';
import UsersItem from './UsersItem/UsersItem';

const Users = () => {
  const navigation = useNavigation<{
    navigate: (routeName: 'CreateUser') => void;
  }>();
  const users = useSelector(selectUsers);
  const isFetched = useSelector(selectIsFetched);
  const { fetchData, loading } = useUsersQuery();

  const handleNavigate = () => {
    navigation.navigate('CreateUser');
  };

  useEffect(() => {
    if (!isFetched) {
      fetchData();
    }
  }, []);

  if (loading && !isFetched) {
    return <UIText>Loading...</UIText>;
  }

  if (!users[0]) {
    return <UIText>No Data</UIText>;
  }

  return (
    <View style={styles.container}>
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
      <UIButton
        name={'Create User'}
        onPress={handleNavigate}
        customStyles={styles.button}
      />
    </View>
  );
};

export default Users;
