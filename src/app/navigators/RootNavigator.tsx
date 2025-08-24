import { NavigationContainer } from '@react-navigation/native';
import AppStack from './stacks';

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default RootNavigation;
