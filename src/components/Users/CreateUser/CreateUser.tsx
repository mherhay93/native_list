import { View } from 'react-native';
import CreateUserForm from '../CreateUserForm/CreateUserForm';
import { styles } from './CreateUser.style';

const CreateUser = () => {
  return (
    <View style={styles.container}>
      <CreateUserForm />
    </View>
  );
};

export default CreateUser;
