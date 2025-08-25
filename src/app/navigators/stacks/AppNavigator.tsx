import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UsersStack from './UsersNavigator.tsx';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="UsersScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="UsersScreen" component={UsersStack} />
    </Stack.Navigator>
  );
};

export default AppStack;
