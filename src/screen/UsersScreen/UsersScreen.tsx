import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectUsers } from '../../redux/users/selectors.ts';

const UsersScreen = () => {
    const users = useSelector(selectUsers);
    
  return (
    <View>
      <Text>{users[0]?.name}</Text>
    </View>
  );
};

export default UsersScreen;
