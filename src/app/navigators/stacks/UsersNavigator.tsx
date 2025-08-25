import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserDetailsScreen from '../../../screen/UserDetailsScreen';
import UsersScreen from '../../../screen/UsersScreen';

const Stack = createNativeStackNavigator();

const UsersStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Users"
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name="Users" component={UsersScreen} />
      <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
    </Stack.Navigator>
  );
};

export default UsersStack;
